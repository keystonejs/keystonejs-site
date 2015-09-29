#### List.expandColumns( cols )
> _@param_ **field** _{Object}_  - valid field object  
> _@return_ **this**   

Expands a comma-separated string or array of columns into valid column objects.  
  
Columns can be:  
* A Field, in the format `field|width` 
* A Field in a single related List, in the format `list:field|width`  
* Any valid path in the Schema, in the format `path|width`  
 
The width part is optional, and can be in the format `n%` or `npx`.
 
The path `__name__` is automatically mapped to the namePath of the List.  
 
The field or path for the name of the item (defaults to ID if not set or detected) is automatically prepended if not explicitly included.  

<div class="code-header addGitHubLink" data-file="lib/list/expandColumns.js"> <a href="#" class="loadCode">relevant code</a></div><pre class=" language-javascript hideCode api"></pre> 
