var path = require("path");
var ghpages = require('gh-pages');
var dashes = '--------------------------------------';
ghpages.clean()
showMsg('start gh-pages clone')
ghpages.publish(
	path.join(__dirname, '../build'),
	{
		logger: function(message) {
			console.log(message);
		},
		branch: 'master',
		repo: 'git@github.com:snowkeeper/snowkeeper.github.io.git'		
	},
	function(err) {
		showMsg(err, 'gh-pages cloned');
		done();
	}
);


function showMsg() {
	var args = Array.prototype.slice.call(arguments);
	if(!isNaN(args[args.length-1])) {
		// set to samll
		var small = true
		args.pop()
	}
	if(!small) console.log(dashes);
	console.log(dashes);
	console.log.apply(this, args)
	console.log(dashes)
	if(!small) console.log(dashes);
}
