#### .Field.Types.Number( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = Number;
this._fixedSize = 'small';
this._underscoreMethods = ['format'];
this._formatString = (options.format === false) ? false : (options.format || '0,0[.][000000000000]');</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/number/NumberType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.Number.addFilterToQuery( filter, query ) </span>  
> *@param* **filter** {Object} - valid filter object 
> *@param* **query** {Object} - valid query object   
> *@api* **public**     

Adds filters to a query.   

<div class="code-header addGitHubLink" data-file="fields/types/number/NumberType.js#L23-L56"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Number.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.  

<div class="code-header addGitHubLink" data-file="fields/types/number/NumberType.js#L32-L51"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Number.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 
Checks that a valid array of number has been provided in a data object.  
An empty value clears the stored value and is considered valid.  

<div class="code-header addGitHubLink" data-file="fields/types/number/NumberType.js#L69-L84"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Number.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.  

<div class="code-header addGitHubLink" data-file="fields/types/number/NumberType.js#L86-L102"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
