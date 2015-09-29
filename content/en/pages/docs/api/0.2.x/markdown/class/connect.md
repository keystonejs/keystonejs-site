#### .connect( [_app_, _mongoose_] )
> *@param* **app** _{Express()}_ - _Optional_ Custom Express instance  
> *@param* **mongoose** _{Object}_ - _Optional_ Custom Mongoose instance  
> _@return_ **this** 
  

Set the **Mongoose** and/or **Express** instance for Keystone to use.  Order is not .  
**Must** be called before `.init()`
<div class="code-header"> <h4>Custom Express App </h4></div><pre class=" language-javascript"><code class="language-javascript">
var app = express(),
    keystone = require('keystone'),
    server,
    EventEmitter = require("events").EventEmitter;
	
var theEvents = new EventEmitter();

keystone.connect(app);

keystone.init({
    // config here
});

keystone.import('models');

theEvents.on('keystone ready',function() {
	var server = app.listen(3000);
	console.log('server started');
});

keystone.mount({
		onMount: function() {
        	theEvents.emit('keystone ready');
        }
});
</code></pre>

<div class="code-header"> <h4> Custom Express App with Mongoose </h4></div><pre class=" language-javascript"><code class=" language-javascript">
var mongoose = require('mongoose'),
    app = express(),
    keystone = require('keystone');

mongoose.connect('localhost', 'dbname');

keystone.connect(mongoose,app);

keystone.init({
    // config here
});

keystone.import('models');

keystone.start();
</code></pre>

<div class="code-header"> <h4> Mongoose only - No web server </h4></div><pre class=" language-javascript"><code class=" language-javascript">
var mongoose = require('mongoose'),
    keystone = require('keystone');

keystone.connect(mongoose,app);

keystone.init({
    // config here
});

keystone.import('models');

mongoose.connect('localhost', 'dbname');

mongoose.connection.on('open', function() {
    // ready to do things, e.g.
    var User = keystone.list('User');
    new User.model().save();
});
</code></pre>

<div class="code-header addGitHubLink" data-file="lib/core/connect.js"> <a href="#" class="loadCode"> code</a> </div><pre class=" language-javascript hideCode api"></pre> 
