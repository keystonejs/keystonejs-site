/* */ 
'use strict';
var utils = require('./utils');
var characterParser = require('character-parser');
var Lexer = module.exports = function Lexer(str, filename) {
  this.input = str.replace(/\r\n|\r/g, '\n');
  this.filename = filename;
  this.deferredTokens = [];
  this.lastIndents = 0;
  this.lineno = 1;
  this.stash = [];
  this.indentStack = [];
  this.indentRe = null;
  this.pipeless = false;
};
function assertExpression(exp) {
  Function('', 'return (' + exp + ')');
}
function assertNestingCorrect(exp) {
  var res = characterParser(exp);
  if (res.isNesting()) {
    throw new Error('Nesting must match on expression `' + exp + '`');
  }
}
Lexer.prototype = {
  tok: function(type, val) {
    return {
      type: type,
      line: this.lineno,
      val: val
    };
  },
  consume: function(len) {
    this.input = this.input.substr(len);
  },
  scan: function(regexp, type) {
    var captures;
    if (captures = regexp.exec(this.input)) {
      this.consume(captures[0].length);
      return this.tok(type, captures[1]);
    }
  },
  defer: function(tok) {
    this.deferredTokens.push(tok);
  },
  lookahead: function(n) {
    var fetch = n - this.stash.length;
    while (fetch-- > 0)
      this.stash.push(this.next());
    return this.stash[--n];
  },
  bracketExpression: function(skip) {
    skip = skip || 0;
    var start = this.input[skip];
    if (start != '(' && start != '{' && start != '[')
      throw new Error('unrecognized start character');
    var end = ({
      '(': ')',
      '{': '}',
      '[': ']'
    })[start];
    var range = characterParser.parseMax(this.input, {start: skip + 1});
    if (this.input[range.end] !== end)
      throw new Error('start character ' + start + ' does not match end character ' + this.input[range.end]);
    return range;
  },
  stashed: function() {
    return this.stash.length && this.stash.shift();
  },
  deferred: function() {
    return this.deferredTokens.length && this.deferredTokens.shift();
  },
  eos: function() {
    if (this.input.length)
      return;
    if (this.indentStack.length) {
      this.indentStack.shift();
      return this.tok('outdent');
    } else {
      return this.tok('eos');
    }
  },
  blank: function() {
    var captures;
    if (captures = /^\n *\n/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      ++this.lineno;
      if (this.pipeless)
        return this.tok('text', '');
      return this.next();
    }
  },
  comment: function() {
    var captures;
    if (captures = /^\/\/(-)?([^\n]*)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('comment', captures[2]);
      tok.buffer = '-' != captures[1];
      this.pipeless = true;
      return tok;
    }
  },
  interpolation: function() {
    if (/^#\{/.test(this.input)) {
      var match = this.bracketExpression(1);
      this.consume(match.end + 1);
      return this.tok('interpolation', match.src);
    }
  },
  tag: function() {
    var captures;
    if (captures = /^(\w[-:\w]*)(\/?)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok,
          name = captures[1];
      if (':' == name[name.length - 1]) {
        name = name.slice(0, -1);
        tok = this.tok('tag', name);
        this.defer(this.tok(':'));
        if (this.input[0] !== ' ') {
          console.warn('Warning: space required after `:` on line ' + this.lineno + ' of jade file "' + this.filename + '"');
        }
        while (' ' == this.input[0])
          this.input = this.input.substr(1);
      } else {
        tok = this.tok('tag', name);
      }
      tok.selfClosing = !!captures[2];
      return tok;
    }
  },
  filter: function() {
    var tok = this.scan(/^:([\w\-]+)/, 'filter');
    if (tok) {
      this.pipeless = true;
      return tok;
    }
  },
  doctype: function() {
    if (this.scan(/^!!! *([^\n]+)?/, 'doctype')) {
      throw new Error('`!!!` is deprecated, you must now use `doctype`');
    }
    var node = this.scan(/^(?:doctype) *([^\n]+)?/, 'doctype');
    if (node && node.val && node.val.trim() === '5') {
      throw new Error('`doctype 5` is deprecated, you must now use `doctype html`');
    }
    return node;
  },
  id: function() {
    return this.scan(/^#([\w-]+)/, 'id');
  },
  className: function() {
    return this.scan(/^\.([\w-]+)/, 'class');
  },
  text: function() {
    return this.scan(/^(?:\| ?| )([^\n]+)/, 'text') || this.scan(/^\|?( )/, 'text') || this.scan(/^(<[^\n]*)/, 'text');
  },
  textFail: function() {
    var tok;
    if (tok = this.scan(/^([^\.\n][^\n]+)/, 'text')) {
      console.warn('Warning: missing space before text for line ' + this.lineno + ' of jade file "' + this.filename + '"');
      return tok;
    }
  },
  dot: function() {
    var match;
    if (match = this.scan(/^\./, 'dot')) {
      this.pipeless = true;
      return match;
    }
  },
  "extends": function() {
    return this.scan(/^extends? +([^\n]+)/, 'extends');
  },
  prepend: function() {
    var captures;
    if (captures = /^prepend +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var mode = 'prepend',
          name = captures[1],
          tok = this.tok('block', name);
      tok.mode = mode;
      return tok;
    }
  },
  append: function() {
    var captures;
    if (captures = /^append +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var mode = 'append',
          name = captures[1],
          tok = this.tok('block', name);
      tok.mode = mode;
      return tok;
    }
  },
  block: function() {
    var captures;
    if (captures = /^block\b *(?:(prepend|append) +)?([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var mode = captures[1] || 'replace',
          name = captures[2],
          tok = this.tok('block', name);
      tok.mode = mode;
      return tok;
    }
  },
  mixinBlock: function() {
    var captures;
    if (captures = /^block[ \t]*(\n|$)/.exec(this.input)) {
      this.consume(captures[0].length - captures[1].length);
      return this.tok('mixin-block');
    }
  },
  'yield': function() {
    return this.scan(/^yield */, 'yield');
  },
  include: function() {
    return this.scan(/^include +([^\n]+)/, 'include');
  },
  includeFiltered: function() {
    var captures;
    if (captures = /^include:([\w\-]+)([\( ])/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      var filter = captures[1];
      var attrs = captures[2] === '(' ? this.attrs() : null;
      if (!(captures[2] === ' ' || this.input[0] === ' ')) {
        throw new Error('expected space after include:filter but got ' + utils.stringify(this.input[0]));
      }
      captures = /^ *([^\n]+)/.exec(this.input);
      if (!captures || captures[1].trim() === '') {
        throw new Error('missing path for include:filter');
      }
      this.consume(captures[0].length);
      var path = captures[1];
      var tok = this.tok('include', path);
      tok.filter = filter;
      tok.attrs = attrs;
      return tok;
    }
  },
  "case": function() {
    return this.scan(/^case +([^\n]+)/, 'case');
  },
  when: function() {
    return this.scan(/^when +([^:\n]+)/, 'when');
  },
  "default": function() {
    return this.scan(/^default */, 'default');
  },
  call: function() {
    var tok,
        captures;
    if (captures = /^\+(\s*)(([-\w]+)|(#\{))/.exec(this.input)) {
      if (captures[3]) {
        this.consume(captures[0].length);
        tok = this.tok('call', captures[3]);
      } else {
        var match = this.bracketExpression(2 + captures[1].length);
        this.consume(match.end + 1);
        assertExpression(match.src);
        tok = this.tok('call', '#{' + match.src + '}');
      }
      if (captures = /^ *\(/.exec(this.input)) {
        var range = this.bracketExpression(captures[0].length - 1);
        if (!/^\s*[-\w]+ *=/.test(range.src)) {
          this.consume(range.end + 1);
          tok.args = range.src;
        }
        if (tok.args) {
          assertExpression('[' + tok.args + ']');
        }
      }
      return tok;
    }
  },
  mixin: function() {
    var captures;
    if (captures = /^mixin +([-\w]+)(?: *\((.*)\))? */.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('mixin', captures[1]);
      tok.args = captures[2];
      return tok;
    }
  },
  conditional: function() {
    var captures;
    if (captures = /^(if|unless|else if|else)\b([^\n]*)/.exec(this.input)) {
      this.consume(captures[0].length);
      var type = captures[1];
      var js = captures[2];
      var isIf = false;
      var isElse = false;
      switch (type) {
        case 'if':
          assertExpression(js);
          js = 'if (' + js + ')';
          isIf = true;
          break;
        case 'unless':
          assertExpression(js);
          js = 'if (!(' + js + '))';
          isIf = true;
          break;
        case 'else if':
          assertExpression(js);
          js = 'else if (' + js + ')';
          isIf = true;
          isElse = true;
          break;
        case 'else':
          if (js && js.trim()) {
            throw new Error('`else` cannot have a condition, perhaps you meant `else if`');
          }
          js = 'else';
          isElse = true;
          break;
      }
      var tok = this.tok('code', js);
      tok.isElse = isElse;
      tok.isIf = isIf;
      tok.requiresBlock = true;
      return tok;
    }
  },
  "while": function() {
    var captures;
    if (captures = /^while +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      assertExpression(captures[1]);
      var tok = this.tok('code', 'while (' + captures[1] + ')');
      tok.requiresBlock = true;
      return tok;
    }
  },
  each: function() {
    var captures;
    if (captures = /^(?:- *)?(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? * in *([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('each', captures[1]);
      tok.key = captures[2] || '$index';
      assertExpression(captures[3]);
      tok.code = captures[3];
      return tok;
    }
  },
  code: function() {
    var captures;
    if (captures = /^(!?=|-)[ \t]*([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var flags = captures[1];
      captures[1] = captures[2];
      var tok = this.tok('code', captures[1]);
      tok.escape = flags.charAt(0) === '=';
      tok.buffer = flags.charAt(0) === '=' || flags.charAt(1) === '=';
      if (tok.buffer)
        assertExpression(captures[1]);
      return tok;
    }
  },
  blockCode: function() {
    var captures;
    if (captures = /^-\n/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      var tok = this.tok('blockCode');
      this.pipeless = true;
      return tok;
    }
  },
  attrs: function() {
    if ('(' == this.input.charAt(0)) {
      var index = this.bracketExpression().end,
          str = this.input.substr(1, index - 1),
          tok = this.tok('attrs');
      assertNestingCorrect(str);
      var quote = '';
      var interpolate = function(attr) {
        return attr.replace(/(\\)?#\{(.+)/g, function(_, escape, expr) {
          if (escape)
            return _;
          try {
            var range = characterParser.parseMax(expr);
            if (expr[range.end] !== '}')
              return _.substr(0, 2) + interpolate(_.substr(2));
            assertExpression(range.src);
            return quote + " + (" + range.src + ") + " + quote + interpolate(expr.substr(range.end + 1));
          } catch (ex) {
            return _.substr(0, 2) + interpolate(_.substr(2));
          }
        });
      };
      this.consume(index + 1);
      tok.attrs = [];
      var escapedAttr = true;
      var key = '';
      var val = '';
      var interpolatable = '';
      var state = characterParser.defaultState();
      var loc = 'key';
      var isEndOfAttribute = function(i) {
        if (key.trim() === '')
          return false;
        if (i === str.length)
          return true;
        if (loc === 'key') {
          if (str[i] === ' ' || str[i] === '\n') {
            for (var x = i; x < str.length; x++) {
              if (str[x] != ' ' && str[x] != '\n') {
                if (str[x] === '=' || str[x] === '!' || str[x] === ',')
                  return false;
                else
                  return true;
              }
            }
          }
          return str[i] === ',';
        } else if (loc === 'value' && !state.isNesting()) {
          try {
            assertExpression(val);
            if (str[i] === ' ' || str[i] === '\n') {
              for (var x = i; x < str.length; x++) {
                if (str[x] != ' ' && str[x] != '\n') {
                  if (characterParser.isPunctuator(str[x]) && str[x] != '"' && str[x] != "'")
                    return false;
                  else
                    return true;
                }
              }
            }
            return str[i] === ',';
          } catch (ex) {
            return false;
          }
        }
      };
      this.lineno += str.split("\n").length - 1;
      for (var i = 0; i <= str.length; i++) {
        if (isEndOfAttribute(i)) {
          val = val.trim();
          if (val)
            assertExpression(val);
          key = key.trim();
          key = key.replace(/^['"]|['"]$/g, '');
          tok.attrs.push({
            name: key,
            val: '' == val ? true : val,
            escaped: escapedAttr
          });
          key = val = '';
          loc = 'key';
          escapedAttr = false;
        } else {
          switch (loc) {
            case 'key-char':
              if (str[i] === quote) {
                loc = 'key';
                if (i + 1 < str.length && [' ', ',', '!', '=', '\n'].indexOf(str[i + 1]) === -1)
                  throw new Error('Unexpected character ' + str[i + 1] + ' expected ` `, `\\n`, `,`, `!` or `=`');
              } else {
                key += str[i];
              }
              break;
            case 'key':
              if (key === '' && (str[i] === '"' || str[i] === "'")) {
                loc = 'key-char';
                quote = str[i];
              } else if (str[i] === '!' || str[i] === '=') {
                escapedAttr = str[i] !== '!';
                if (str[i] === '!')
                  i++;
                if (str[i] !== '=')
                  throw new Error('Unexpected character ' + str[i] + ' expected `=`');
                loc = 'value';
                state = characterParser.defaultState();
              } else {
                key += str[i];
              }
              break;
            case 'value':
              state = characterParser.parseChar(str[i], state);
              if (state.isString()) {
                loc = 'string';
                quote = str[i];
                interpolatable = str[i];
              } else {
                val += str[i];
              }
              break;
            case 'string':
              state = characterParser.parseChar(str[i], state);
              interpolatable += str[i];
              if (!state.isString()) {
                loc = 'value';
                val += interpolate(interpolatable);
              }
              break;
          }
        }
      }
      if ('/' == this.input.charAt(0)) {
        this.consume(1);
        tok.selfClosing = true;
      }
      return tok;
    }
  },
  attributesBlock: function() {
    var captures;
    if (/^&attributes\b/.test(this.input)) {
      this.consume(11);
      var args = this.bracketExpression();
      this.consume(args.end + 1);
      return this.tok('&attributes', args.src);
    }
  },
  indent: function() {
    var captures,
        re;
    if (this.indentRe) {
      captures = this.indentRe.exec(this.input);
    } else {
      re = /^\n(\t*) */;
      captures = re.exec(this.input);
      if (captures && !captures[1].length) {
        re = /^\n( *)/;
        captures = re.exec(this.input);
      }
      if (captures && captures[1].length)
        this.indentRe = re;
    }
    if (captures) {
      var tok,
          indents = captures[1].length;
      ++this.lineno;
      this.consume(indents + 1);
      if (' ' == this.input[0] || '\t' == this.input[0]) {
        throw new Error('Invalid indentation, you can use tabs or spaces but not both');
      }
      if ('\n' == this.input[0]) {
        this.pipeless = false;
        return this.tok('newline');
      }
      if (this.indentStack.length && indents < this.indentStack[0]) {
        while (this.indentStack.length && this.indentStack[0] > indents) {
          this.stash.push(this.tok('outdent'));
          this.indentStack.shift();
        }
        tok = this.stash.pop();
      } else if (indents && indents != this.indentStack[0]) {
        this.indentStack.unshift(indents);
        tok = this.tok('indent', indents);
      } else {
        tok = this.tok('newline');
      }
      this.pipeless = false;
      return tok;
    }
  },
  pipelessText: function() {
    if (!this.pipeless)
      return;
    var captures,
        re;
    if (this.indentRe) {
      captures = this.indentRe.exec(this.input);
    } else {
      re = /^\n(\t*) */;
      captures = re.exec(this.input);
      if (captures && !captures[1].length) {
        re = /^\n( *)/;
        captures = re.exec(this.input);
      }
      if (captures && captures[1].length)
        this.indentRe = re;
    }
    var indents = captures && captures[1].length;
    if (indents && (this.indentStack.length === 0 || indents > this.indentStack[0])) {
      var indent = captures[1];
      var line;
      var tokens = [];
      var isMatch;
      do {
        var i = this.input.substr(1).indexOf('\n');
        if (-1 == i)
          i = this.input.length - 1;
        var str = this.input.substr(1, i);
        isMatch = str.substr(0, indent.length) === indent || !str.trim();
        if (isMatch) {
          this.consume(str.length + 1);
          ++this.lineno;
          tokens.push(str.substr(indent.length));
        }
      } while (this.input.length && isMatch);
      while (this.input.length === 0 && tokens[tokens.length - 1] === '')
        tokens.pop();
      return this.tok('pipeless-text', tokens);
    }
  },
  colon: function() {
    var good = /^: +/.test(this.input);
    var res = this.scan(/^: */, ':');
    if (res && !good) {
      console.warn('Warning: space required after `:` on line ' + this.lineno + ' of jade file "' + this.filename + '"');
    }
    return res;
  },
  fail: function() {
    throw new Error('unexpected text ' + this.input.substr(0, 5));
  },
  advance: function() {
    return this.stashed() || this.next();
  },
  next: function() {
    return this.deferred() || this.blank() || this.eos() || this.pipelessText() || this.yield() || this.doctype() || this.interpolation() || this["case"]() || this.when() || this["default"]() || this["extends"]() || this.append() || this.prepend() || this.block() || this.mixinBlock() || this.include() || this.includeFiltered() || this.mixin() || this.call() || this.conditional() || this.each() || this["while"]() || this.tag() || this.filter() || this.blockCode() || this.code() || this.id() || this.className() || this.attrs() || this.attributesBlock() || this.indent() || this.text() || this.comment() || this.colon() || this.dot() || this.textFail() || this.fail();
  }
};
