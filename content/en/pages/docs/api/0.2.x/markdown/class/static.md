#### .static( app )
> *@param* **app** _{Express()}_  - Express App  
> _@return_ **this** 

Adds bindings for keystone static resources.  
Can be included before other middleware (e.g. session management, logging, etc) for reduced overhead.

```javascript
var app = express();
keystone.static(app);
```
<div class="code-header addGitHubLink" data-file="lib/core/static.js"> <a href="#" class="loadCode"> code</a> </div><pre class=" language-javascript hideCode api"></pre> 
