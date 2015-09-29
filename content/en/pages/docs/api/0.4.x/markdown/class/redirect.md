#### .redirect( ...params )
> *@param* **params** _{...String|Object}_  - String or Object of redirects   
> _@return_ **callback events** 

Adds one or more redirections (urls that are redirected when no matching routes are found, before treating the request as a 404)

```javascript
keystone.redirect('/old-route', 'new-route');

keystone.redirect({
    'old-route': 'new-route'
});
```
<div class="code-header addGitHubLink" data-file="lib/core/redirect.js"> <a href="#" class="loadCode">relevant code</a> </div><pre class=" language-javascript hideCode api"></pre> 
