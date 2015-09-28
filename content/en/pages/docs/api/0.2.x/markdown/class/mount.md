#### .mount( [_mountPath_, _parentApp_, _events_] )
> *@param* **mountPath** _{String}_  - _Optional_ Folder to mount Keystone as a sub-app  
> *@param* **parentApp** _{Express()}_  - _Optional_ Express app  
> *@param* **events** _{...Function|Object}_  - _Optional_ Object with onMount event or Function to run once mounted  
> _@return_ **events.onMount()** 

You can use `.mount()` for custom Express setups.  **mountPath** is an optional path to mount Keystone under. **parentApp** will be your Express app.  The **events** parameter can be used to perform commands once Keystone has been mounted.  If **events** is a function it will get mapped to `{onMount: events}`. 



```javascript
/* Mount Keystone as a sub-app */

var app = express(),
    keystone = require('keystone'),
    server,
    theEvents = require("events").EventEmitter;
    
...
set up your Express app and Keystone

you must call keystone.connect(app,mongoose) or keystone.init()
...

theEvents.on('keystone ready',function() {
	var server = app.listen(3000);
	console.log('server started');
});

keystone.mount('/content', app, {
    onMount: function() {
    	//put your app's static content and error handling middleware here and start your server
       theEvents.emit('keystone ready');
    }
});
```
<div class="code-header addGitHubLink" data-file="lib/core/mount.js"> <a href="#" class="loadCode"> code</a> </div><pre class=" language-javascript hideCode api"></pre> 
