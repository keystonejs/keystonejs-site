#### .populateRelated( docs, relationships, callback )
> *@param* **docs** _{Array}_  - Array of documents  
> *@param* **relationships** _{Array}_  - Array of ref paths to populate  
> *@param* **callback** _{Function}_  - Callback function on done or error   
> _@return_ **callback** 

Populate the related fields for an Array of docs.  
<p class="caution-note">This is currently highly inefficient and should only be used in development, or for small data sets. There are lots of things that can be done to improve performance... later.</p>

```javascript
keystone.populateRelated(docs,['owner','memberOf'],function() {
    // docs are populated
});
```

<div class="code-header addGitHubLink" data-file="lib/core/populateRelated.js"> <a href="#" class="loadCode">relevant code</a> </div><pre class=" language-javascript hideCode api"></pre> 
