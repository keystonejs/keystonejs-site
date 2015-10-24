/* */ 
(function(process) {
  'use strict';
  var Parser = require('./parser'),
      Lexer = require('./lexer'),
      Compiler = require('./compiler'),
      runtime = require('./runtime'),
      addWith = require('with'),
      fs = require('@empty'),
      utils = require('./utils');
  exports.selfClosing = Object.keys(require('void-elements'));
  exports.doctypes = require('./doctypes');
  exports.filters = require('./filters-client');
  exports.utils = utils;
  exports.Compiler = Compiler;
  exports.Parser = Parser;
  exports.Lexer = Lexer;
  exports.nodes = require('./nodes/index');
  exports.runtime = runtime;
  exports.cache = {};
  function parse(str, options) {
    if (options.lexer) {
      console.warn('Using `lexer` as a local in render() is deprecated and ' + 'will be interpreted as an option in Jade 2.0.0');
    }
    var parser = new (options.parser || Parser)(str, options.filename, options);
    var tokens;
    try {
      tokens = parser.parse();
    } catch (err) {
      parser = parser.context();
      runtime.rethrow(err, parser.filename, parser.lexer.lineno, parser.input);
    }
    var compiler = new (options.compiler || Compiler)(tokens, options);
    var js;
    try {
      js = compiler.compile();
    } catch (err) {
      if (err.line && (err.filename || !options.filename)) {
        runtime.rethrow(err, err.filename, err.line, parser.input);
      } else {
        if (err instanceof Error) {
          err.message += '\n\nPlease report this entire error and stack trace to https://github.com/jadejs/jade/issues';
        }
        throw err;
      }
    }
    if (options.debug) {
      console.error('\nCompiled Function:\n\n\u001b[90m%s\u001b[0m', js.replace(/^/gm, '  '));
    }
    var globals = [];
    if (options.globals) {
      globals = options.globals.slice();
    }
    globals.push('jade');
    globals.push('jade_mixins');
    globals.push('jade_interp');
    globals.push('jade_debug');
    globals.push('buf');
    var body = '' + 'var buf = [];\n' + 'var jade_mixins = {};\n' + 'var jade_interp;\n' + (options.self ? 'var self = locals || {};\n' + js : addWith('locals || {}', '\n' + js, globals)) + ';' + 'return buf.join("");';
    return {
      body: body,
      dependencies: parser.dependencies
    };
  }
  function handleTemplateCache(options, str) {
    var key = options.filename;
    if (options.cache && exports.cache[key]) {
      return exports.cache[key];
    } else {
      if (str === undefined)
        str = fs.readFileSync(options.filename, 'utf8');
      var templ = exports.compile(str, options);
      if (options.cache)
        exports.cache[key] = templ;
      return templ;
    }
  }
  exports.compile = function(str, options) {
    var options = options || {},
        filename = options.filename ? utils.stringify(options.filename) : 'undefined',
        fn;
    str = String(str);
    var parsed = parse(str, options);
    if (options.compileDebug !== false) {
      fn = ['var jade_debug = [ new jade.DebugItem( 1, ' + filename + ' ) ];', 'try {', parsed.body, '} catch (err) {', '  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno' + (options.compileDebug === true ? ',' + utils.stringify(str) : '') + ');', '}'].join('\n');
    } else {
      fn = parsed.body;
    }
    fn = new Function('locals, jade', fn);
    var res = function(locals) {
      return fn(locals, Object.create(runtime));
    };
    if (options.client) {
      res.toString = function() {
        var err = new Error('The `client` option is deprecated, use the `jade.compileClient` method instead');
        err.name = 'Warning';
        console.error(err.stack || err.message);
        return exports.compileClient(str, options);
      };
    }
    res.dependencies = parsed.dependencies;
    return res;
  };
  exports.compileClientWithDependenciesTracked = function(str, options) {
    var options = options || {};
    var name = options.name || 'template';
    var filename = options.filename ? utils.stringify(options.filename) : 'undefined';
    var fn;
    str = String(str);
    options.compileDebug = options.compileDebug ? true : false;
    var parsed = parse(str, options);
    if (options.compileDebug) {
      fn = ['var jade_debug = [ new jade.DebugItem( 1, ' + filename + ' ) ];', 'try {', parsed.body, '} catch (err) {', '  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ' + utils.stringify(str) + ');', '}'].join('\n');
    } else {
      fn = parsed.body;
    }
    return {
      body: 'function ' + name + '(locals) {\n' + fn + '\n}',
      dependencies: parsed.dependencies
    };
  };
  exports.compileClient = function(str, options) {
    return exports.compileClientWithDependenciesTracked(str, options).body;
  };
  exports.compileFile = function(path, options) {
    options = options || {};
    options.filename = path;
    return handleTemplateCache(options);
  };
  exports.render = function(str, options, fn) {
    if ('function' == typeof options) {
      fn = options, options = undefined;
    }
    if (typeof fn === 'function') {
      var res;
      try {
        res = exports.render(str, options);
      } catch (ex) {
        return fn(ex);
      }
      return fn(null, res);
    }
    options = options || {};
    if (options.cache && !options.filename) {
      throw new Error('the "filename" option is required for caching');
    }
    return handleTemplateCache(options, str)(options);
  };
  exports.renderFile = function(path, options, fn) {
    if ('function' == typeof options) {
      fn = options, options = undefined;
    }
    if (typeof fn === 'function') {
      var res;
      try {
        res = exports.renderFile(path, options);
      } catch (ex) {
        return fn(ex);
      }
      return fn(null, res);
    }
    options = options || {};
    options.filename = path;
    return handleTemplateCache(options)(options);
  };
  exports.compileFileClient = function(path, options) {
    var key = path + ':client';
    options = options || {};
    options.filename = path;
    if (options.cache && exports.cache[key]) {
      return exports.cache[key];
    }
    var str = fs.readFileSync(options.filename, 'utf8');
    var out = exports.compileClient(str, options);
    if (options.cache)
      exports.cache[key] = out;
    return out;
  };
  exports.__express = function(path, options, fn) {
    if (options.compileDebug == undefined && process.env.NODE_ENV === 'production') {
      options.compileDebug = false;
    }
    exports.renderFile(path, options, fn);
  };
})(require('process'));
