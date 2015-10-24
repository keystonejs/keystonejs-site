/* */ 
(function(process) {
  var decamelize = require('decamelize'),
      wordwrap = require('wordwrap'),
      wsize = require('window-size');
  module.exports = function(yargs) {
    var self = {};
    var fails = [];
    self.failFn = function(f) {
      fails.push(f);
    };
    var failMessage = null;
    var showHelpOnFail = true;
    self.showHelpOnFail = function(enabled, message) {
      if (typeof enabled === 'string') {
        message = enabled;
        enabled = true;
      } else if (typeof enabled === 'undefined') {
        enabled = true;
      }
      failMessage = message;
      showHelpOnFail = enabled;
      return self;
    };
    self.fail = function(msg) {
      if (fails.length) {
        fails.forEach(function(f) {
          f(msg);
        });
      } else {
        if (showHelpOnFail)
          yargs.showHelp("error");
        if (msg)
          console.error(msg);
        if (failMessage) {
          if (msg)
            console.error("");
          console.error(failMessage);
        }
        if (yargs.getExitProcess()) {
          process.exit(1);
        } else {
          throw new Error(msg);
        }
      }
    };
    var usage;
    self.usage = function(msg) {
      usage = msg;
    };
    var examples = [];
    self.example = function(cmd, description) {
      examples.push([cmd, description || '']);
    };
    var commands = [];
    self.command = function(cmd, description) {
      commands.push([cmd, description || '']);
    };
    self.getCommands = function() {
      return commands;
    };
    var descriptions = {};
    self.describe = function(key, desc) {
      if (typeof key === 'object') {
        Object.keys(key).forEach(function(k) {
          self.describe(k, key[k]);
        });
      } else {
        descriptions[key] = desc;
      }
    };
    self.getDescriptions = function() {
      return descriptions;
    };
    var epilog;
    self.epilog = function(msg) {
      epilog = msg;
    };
    var wrap = windowWidth();
    self.wrap = function(cols) {
      wrap = cols;
    };
    self.help = function() {
      var demanded = yargs.getDemanded(),
          options = yargs.getOptions(),
          keys = Object.keys(Object.keys(descriptions).concat(Object.keys(demanded)).concat(Object.keys(options.default)).reduce(function(acc, key) {
            if (key !== '_')
              acc[key] = true;
            return acc;
          }, {}));
      var help = keys.length ? ['Options:'] : [];
      if (commands.length) {
        help.unshift('');
        var commandsTable = {};
        commands.forEach(function(command) {
          commandsTable[command[0]] = {
            desc: command[1],
            extra: ''
          };
        });
        help = ['Commands:'].concat(formatTable(commandsTable, 5), help);
      }
      if (usage) {
        var u = usage.replace(/\$0/g, yargs.$0);
        if (wrap)
          u = wordwrap(0, wrap)(u);
        help.unshift(u, '');
      }
      var aliasKeys = (Object.keys(options.alias) || []).concat(Object.keys(yargs.parsed.newAliases) || []);
      keys = keys.filter(function(key) {
        return !yargs.parsed.newAliases[key] && aliasKeys.every(function(alias) {
          return -1 == (options.alias[alias] || []).indexOf(key);
        });
      });
      var switches = keys.reduce(function(acc, key) {
        acc[key] = [key].concat(options.alias[key] || []).map(function(sw) {
          return (sw.length > 1 ? '--' : '-') + sw;
        }).join(', ');
        ;
        return acc;
      }, {});
      var switchTable = {};
      keys.forEach(function(key) {
        var kswitch = switches[key];
        var desc = descriptions[key] || '';
        var type = null;
        if (options.boolean[key])
          type = '[boolean]';
        if (options.count[key])
          type = '[count]';
        if (options.string[key])
          type = '[string]';
        if (options.normalize[key])
          type = '[string]';
        var extra = [type, demanded[key] ? '[required]' : null, defaultString(options.default[key], options.defaultDescription[key])].filter(Boolean).join('  ');
        switchTable[kswitch] = {
          desc: desc,
          extra: extra
        };
      });
      help.push.apply(help, formatTable(switchTable, 3));
      if (keys.length)
        help.push('');
      if (examples.length) {
        examples.forEach(function(example) {
          example[0] = example[0].replace(/\$0/g, yargs.$0);
        });
        var examplesTable = {};
        examples.forEach(function(example) {
          examplesTable[example[0]] = {
            desc: example[1],
            extra: ''
          };
        });
        help.push.apply(help, ['Examples:'].concat(formatTable(examplesTable, 5), ''));
      }
      if (epilog) {
        var e = epilog.replace(/\$0/g, yargs.$0);
        if (wrap)
          e = wordwrap(0, wrap)(e);
        help.push(e, '');
      }
      return help.join('\n');
    };
    self.showHelp = function(level) {
      level = level || 'error';
      console[level](self.help());
    };
    function defaultString(value, defaultDescription) {
      var string = '[default: ';
      if (value === undefined)
        return null;
      if (defaultDescription) {
        string += defaultDescription;
      } else {
        switch (typeof value) {
          case 'string':
            string += JSON.stringify(value);
            break;
          case 'function':
            string += '(' + (value.name.length ? decamelize(value.name, '-') : 'generated-value') + ')';
            break;
          default:
            string += value;
        }
      }
      return string + ']';
    }
    function formatTable(table, padding) {
      var output = [];
      var llen = longest(Object.keys(table));
      if (wrap) {
        llen = Math.min(llen, parseInt(wrap / 2));
      }
      var desclen = longest(Object.keys(table).map(function(k) {
        return table[k].desc;
      }));
      Object.keys(table).forEach(function(left) {
        var desc = table[left].desc,
            extra = table[left].extra,
            leftLines = null;
        if (wrap) {
          desc = wordwrap(llen + padding + 1, wrap)(desc).slice(llen + padding + 1);
        }
        if (wrap && left.length > llen) {
          leftLines = wordwrap(2, llen)(left.trim()).split('\n');
          left = '';
        }
        var lpadding = new Array(Math.max(llen - left.length + padding, 0)).join(' ');
        var dpadding = new Array(Math.max(desclen - desc.length + 1, 0)).join(' ');
        if (!wrap && dpadding.length > 0) {
          desc += dpadding;
        }
        var prelude = '  ' + left + lpadding;
        var body = [desc, extra].filter(Boolean).join('  ');
        if (wrap) {
          var dlines = desc.split('\n');
          var dlen = dlines.slice(-1)[0].length + (dlines.length === 1 ? prelude.length : 0);
          if (extra.length > wrap) {
            body = desc + '\n' + wordwrap(llen + 4, wrap)(extra);
          } else {
            body = desc + (dlen + extra.length > wrap - 2 ? '\n' + new Array(wrap - extra.length + 1).join(' ') + extra : new Array(wrap - extra.length - dlen + 1).join(' ') + extra);
          }
        }
        if (leftLines) {
          var rightLines = body.split('\n'),
              firstLine = prelude + rightLines[0],
              lineCount = Math.max(leftLines.length, rightLines.length);
          for (var i = 0; i < lineCount; i++) {
            var left = leftLines[i],
                right = i ? rightLines[i] : firstLine;
            output.push(strcpy(left, right, firstLine.length));
          }
        } else {
          output.push(prelude + body);
        }
      });
      return output;
    }
    function longest(xs) {
      return Math.max.apply(null, xs.map(function(x) {
        return x.length;
      }));
    }
    function strcpy(source, destination, width) {
      var str = '';
      source = source || '';
      destination = destination || new Array(width).join(' ');
      for (var i = 0; i < destination.length; i++) {
        var char = destination.charAt(i);
        if (char === ' ')
          char = source.charAt(i) || char;
        str += char;
      }
      return str;
    }
    function windowWidth() {
      return wsize.width ? Math.min(80, wsize.width) : null;
    }
    var version = null;
    self.version = function(ver, opt, msg) {
      version = ver;
    };
    self.showVersion = function() {
      if (typeof version === 'function')
        console.log(version());
      else
        console.log(version);
    };
    return self;
  };
})(require('process'));
