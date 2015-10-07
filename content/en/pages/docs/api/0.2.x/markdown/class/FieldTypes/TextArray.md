#### .Field.Types.TextArray( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  



<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = [String];
this._underscoreMethods = ['crop'];</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/textarray/TextArrayType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre>  

<span class="subMethod"> .Field.Types.TextArray.validateInput( data [, required, item ]) </span>  
> *@param* **data** {Object} - valid filter object    
> *@param* **required** {Boolean} - required or not   
> *@param* **item** {Object} - valid query object     
> *@api* **public**     

Validates that a value for this field has been provided in a data object   

<div class="code-header addGitHubLink" data-file="fields/types/textarray/TextArrayType.js#L26-L47"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.TextArray.updateItem( item, data ) </span>  
> *@param* **item** {Object} - valid item object   
> *@param* **data** {Object}   
> *@api* **public**     

Updates the value for this field in the item from a data object.    

<div class="code-header addGitHubLink" data-file="fields/types/textarray/TextArrayType.js#L49-L72"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 



