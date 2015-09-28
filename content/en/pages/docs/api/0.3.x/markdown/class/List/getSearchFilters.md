#### List.getSearchFilters( search, add )    
> _@param_ **search** {String} - query
> _@param_ **add** {Object} - additional filters     
> _@return_ **Object**

<p class="caution-note">This function is deprecated in favor of <code><a href="#List-addSearchToQuery">.addSearchToQuery</a></code> and will be removed in a later version.</p>

Gets filters for a Mongoose query that will search for the provided string, based on the searchFields List option.  

Also accepts a filters object from `processFilters()`, any of which may override the search string.  

```javascript  
list.getSearchFilters('jed') // returns { name: /jed/i }
```

 
<div class="code-header addGitHubLink" data-file="lib/list/getSearchFilters.js"><a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
