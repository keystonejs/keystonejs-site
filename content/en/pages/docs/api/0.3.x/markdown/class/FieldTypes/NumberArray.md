#### .Field.Types.NumberArray( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  



<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = [Number];
this._underscoreMethods = ['format'];
this._formatString = (options.format === false) ? false : (options.format || '0,0[.][000000000000]');
this._fixedSize = 'small';

</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/numberarray/NumberArrayType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 


<span class="subMethod"> .Field.Types.NumberArray.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.  

<div class="code-header addGitHubLink" data-file="fields/types/numberarray/NumberArrayType.js#L32-L51"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.NumberArray.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 
Checks that a valid array of number has been provided in a data object.  
An empty value clears the stored value and is considered valid.  

<div class="code-header addGitHubLink" data-file="fields/types/numberarray/NumberArrayType.js#L63-L101"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.NumberArray.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.  

<div class="code-header addGitHubLink" data-file="fields/types/numberarray/NumberArrayType.js#L103-L138"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
