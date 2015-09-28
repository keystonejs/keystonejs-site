#### .list( arg )
> *@param* **arg** _{...String|Function}_  - current list key or new constructed List  
> _@return_ **list** 

Registers or retrieves a list.  Used by `List.register()` to register a newly constructed List with Keystone.   

```javascript
var User = keystone.list('User');

User.model.find().exec(function(docs,err) {

});
```  
<p class="api-note">To retrieve a list that may return `undefined` you should use `keystone.lists[key]`.  Using `.list()` will throw a `ReferenceError` if the arg is not a valid `List` or the `key` for a valid `List` </p> `  


<div class="code-header addGitHubLink" data-file="lib/core/list.js"> <a href="#" class="loadCode">relevant code</a> </div><pre class=" language-javascript hideCode api"></pre> 
