/* */ 
'use strict';
var fs = require('@empty');
var pr = require('pull-request');
var readdirp = require('lsr').sync;
var TOKEN = JSON.parse(fs.readFileSync(__dirname + '/.release.json', 'utf8'));
var version = require('./package.json!systemjs-json').version;
var compiledWebsite = require('./docs/stop');
compiledWebsite.then(function() {
  var fileUpdates = readdirp(__dirname + '/docs/out').filter(function(info) {
    return info.isFile();
  }).map(function(info) {
    return {
      path: info.path.replace(/^\.\//, ''),
      content: fs.readFileSync(info.fullPath)
    };
  });
  return pr.commit('jadejs', 'jade', {
    branch: 'gh-pages',
    message: 'Update website for ' + version,
    updates: fileUpdates
  }, {auth: {
      type: 'oauth',
      token: TOKEN
    }});
}).then(function() {}).done(function() {
  console.log('website published');
});
