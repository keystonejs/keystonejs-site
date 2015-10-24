/* */ 
(function(process) {
  var fs = require('@empty'),
      program = require('commander'),
      path = require('path'),
      basename = path.basename,
      dirname = path.dirname,
      resolve = path.resolve,
      normalize = path.normalize,
      join = path.join,
      mkdirp = require('mkdirp'),
      jade = require('../lib/index');
  var options = {};
  program.version(require('../package.json!systemjs-json').version).usage('[options] [dir|file ...]').option('-O, --obj <str|path>', 'JavaScript options object or JSON file containing it').option('-o, --out <dir>', 'output the compiled html to <dir>').option('-p, --path <path>', 'filename used to resolve includes').option('-P, --pretty', 'compile pretty html output').option('-c, --client', 'compile function for client-side runtime.js').option('-n, --name <str>', 'The name of the compiled template (requires --client)').option('-D, --no-debug', 'compile without debugging (smaller functions)').option('-w, --watch', 'watch files for changes and automatically re-render').option('-E, --extension <ext>', 'specify the output file extension').option('-H, --hierarchy', 'keep directory hierarchy when a directory is specified').option('--name-after-file', 'Name the template after the last section of the file path (requires --client and overriden by --name)').option('--doctype <str>', 'Specify the doctype on the command line (useful if it is not specified by the template)');
  program.on('--help', function() {
    console.log('  Examples:');
    console.log('');
    console.log('    # translate jade the templates dir');
    console.log('    $ jade templates');
    console.log('');
    console.log('    # create {foo,bar}.html');
    console.log('    $ jade {foo,bar}.jade');
    console.log('');
    console.log('    # jade over stdio');
    console.log('    $ jade < my.jade > my.html');
    console.log('');
    console.log('    # jade over stdio');
    console.log('    $ echo \'h1 Jade!\' | jade');
    console.log('');
    console.log('    # foo, bar dirs rendering to /tmp');
    console.log('    $ jade foo bar --out /tmp ');
    console.log('');
  });
  program.parse(process.argv);
  if (program.obj) {
    options = parseObj(program.obj);
  }
  function parseObj(input) {
    var str,
        out;
    try {
      str = fs.readFileSync(program.obj);
    } catch (e) {
      return eval('(' + program.obj + ')');
    }
    return JSON.parse(str);
  }
  if (program.path)
    options.filename = program.path;
  options.compileDebug = program.debug;
  options.client = program.client;
  options.pretty = program.pretty;
  options.watch = program.watch;
  if (typeof program.name === 'string') {
    options.name = program.name;
  }
  options.doctype = program.doctype;
  var files = program.args;
  var watchList = [];
  var render = program.watch ? tryRender : renderFile;
  if (files.length) {
    console.log();
    if (options.watch) {
      process.on('SIGINT', function() {
        process.exit(1);
      });
    }
    files.forEach(function(file) {
      render(file);
    });
    process.on('exit', function() {
      console.log();
    });
  } else {
    stdin();
  }
  function watchFile(path, base, rootPath) {
    path = normalize(path);
    if (watchList.indexOf(path) !== -1)
      return;
    console.log("  \033[90mwatching \033[36m%s\033[0m", path);
    fs.watchFile(path, {
      persistent: true,
      interval: 200
    }, function(curr, prev) {
      if (curr.mtime.getTime() === 0)
        return;
      if (curr.mtime.getTime() === prev.mtime.getTime())
        return;
      tryRender(base || path, rootPath);
    });
    watchList.push(path);
  }
  function errorToString(e) {
    return e.stack || (e.message || e);
  }
  function tryRender(path, rootPath) {
    try {
      renderFile(path, rootPath);
    } catch (e) {
      console.error(errorToString(e));
    }
  }
  function stdin() {
    var buf = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(chunk) {
      buf += chunk;
    });
    process.stdin.on('end', function() {
      var output;
      if (options.client) {
        output = jade.compileClient(buf, options);
      } else {
        var fn = jade.compile(buf, options);
        var output = fn(options);
      }
      process.stdout.write(output);
    }).resume();
    process.on('SIGINT', function() {
      process.stdout.write('\n');
      process.stdin.emit('end');
      process.stdout.write('\n');
      process.exit();
    });
  }
  var hierarchyWarned = false;
  function renderFile(path, rootPath) {
    var re = /\.jade$/;
    var stat = fs.lstatSync(path);
    if (stat.isFile() && re.test(path)) {
      if (options.watch)
        watchFile(path, null, rootPath);
      if (program.nameAfterFile) {
        options.name = getNameFromFileName(path);
      }
      var fn = options.client ? jade.compileFileClient(path, options) : jade.compileFile(path, options);
      if (options.watch && fn.dependencies) {
        fn.dependencies.forEach(function(dep) {
          watchFile(dep, path, rootPath);
        });
      }
      var extname;
      if (program.extension)
        extname = '.' + program.extension;
      else if (options.client)
        extname = '.js';
      else
        extname = '.html';
      path = path.replace(re, extname);
      if (program.out) {
        if (rootPath && program.hierarchy) {
          path = resolve(path).replace(new RegExp('^' + resolve(rootPath)), '');
          path = join(program.out, path);
        } else {
          if (rootPath && !hierarchyWarned) {
            console.warn('In Jade 2.0.0 --hierarchy will become the default.');
            hierarchyWarned = true;
          }
          path = join(program.out, basename(path));
        }
      }
      var dir = resolve(dirname(path));
      mkdirp.sync(dir, 0755);
      var output = options.client ? fn : fn(options);
      fs.writeFileSync(path, output);
      console.log('  \033[90mrendered \033[36m%s\033[0m', normalize(path));
    } else if (stat.isDirectory()) {
      var files = fs.readdirSync(path);
      files.map(function(filename) {
        return path + '/' + filename;
      }).forEach(function(file) {
        render(file, rootPath || path);
      });
    }
  }
  function getNameFromFileName(filename) {
    var file = basename(filename, '.jade');
    return file.toLowerCase().replace(/[^a-z0-9]+([a-z])/g, function(_, character) {
      return character.toUpperCase();
    }) + 'Template';
  }
})(require('process'));
