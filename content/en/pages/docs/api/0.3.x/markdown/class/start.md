#### .start( [_events_] )
> *@param* **events** _{...Function|Object}_  - Function or Object of events  
> _@return_ **callback events** 

Start the Keystone server.  You can work with the events in the example.

```javascript
keystone.start({
    onMount: function() {

    },
    onStart: function() {
    
    },
    onHttpServerCreated: function() {

    },
    onHttpsServerCreated: function() {

    },
    onSocketServerCreated: function() {

    },
});
```
<div class="code-header addGitHubLink" data-file="lib/core/start.js"> <a href="#" class="loadCode"> code</a> </div><pre class=" language-javascript hideCode api"></pre> 
