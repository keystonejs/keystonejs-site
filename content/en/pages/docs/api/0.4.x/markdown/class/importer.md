#### .importer( rel__dirname )
> *@param* **rel__dirname** _{String}_  - path  
> _@return_ **imported** 

Import all .js Modules in given path

```javascript
var importRoutes = keystone.importer(__dirname);
 
var routes = {
    site: importRoutes('./site'),
    api: importRoutes('./api')
};
```
<div class="code-header addGitHubLink" data-file="lib/core/importer.js"> <a href="#" class="loadCode">relevant code</a> </div><pre class=" language-javascript hideCode api"></pre> 
