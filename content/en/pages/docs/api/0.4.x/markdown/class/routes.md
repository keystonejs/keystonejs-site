#### .routes( app )
> *@param* **app** _{Express()}_  - Express app instance  
> _@return_ **this** 

Adds bindings for the keystone routes

```javascript
var app = express();
app.use(...); // middlewareroutes, routes, etc. should come before keystone is mounted / started
keystone.routes(app);
```
<div class="code-header addGitHubLink" data-file="lib/core/routes.js"> <a href="#" class="loadCode">relevant code</a> </div><pre class=" language-javascript hideCode api"></pre> 
