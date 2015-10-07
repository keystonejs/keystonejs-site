#### .Field.Types.Boolean( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = Boolean;
this._properties = ['indent'];
this._fixedSize = 'full';
this.indent = (options.indent) ? true : false;</code></pre>

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/boolean.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre>  
  
<span class="subMethod"> .Field.Types.Boolean.addFilterToQuery( filter, query ) </span>   
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object   
> *@api* **public**    

Add filters to a query.    
<div class="code-header addGitHubLink" data-file="lib/fieldTypes/boolean.js#L18-L29">&nbsp; </div><pre class=" language-javascript hideCode api"></pre>  

---

<span class="subMethod"> .Field.Types.Boolean.validateInput( data [, required ] ) </span>  
> *@param* **data** {Object} - valid filter object    
> *@param* **required** {Boolean} - (optional)   
> *@api* **public**     

Validates that a truthy value for this field has been provided in a data object.  
Useful for checkboxes that are required to be true (e.g. agreed to terms and cond's).  
<div class="code-header addGitHubLink" data-file="lib/fieldTypes/boolean.js#L31-L41"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Boolean.updateItem( item, data ) </span>  
> *@param* **item** {Object} - valid item object  
> *@param* **data** {Object} - valid data value object     
> *@api* **public**     

Updates the value for this field in the item from a data object.  
Only updates the value if it has changed.  
Treats a falsy value or the string "false" as `false`, everything else as true.  
<div class="code-header addGitHubLink" data-file="lib/fieldTypes/boolean.js#L176-L184"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


