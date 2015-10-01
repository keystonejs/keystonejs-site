#### .Field.Types.Key( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = String;
this._defaultSize = 'medium';
this.separator = options.separator || '-';</code></pre>
  
<div class="code-header addGitHubLink" data-file="fields/types/key/KeyType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre>  

<span class="subMethod"> .Field.Types.Key.addFilterToQuery( filter, query ) </span>   
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object   
> *@api* **public**    

Add filters to a query.    
<div class="code-header addGitHubLink" data-file="fields/types/key/KeyType.js#L20">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Key.generateKey( str ) </span>     
> *@param* **str** {String}   
> *@api* **public**     

Generates a valid key from a string

<div class="code-header addGitHubLink" data-file="fields/types/key/KeyType.js#L22-L27"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Key.validateInput( data [, required, item ] )  </span> 
> *@param* **data** {Object} - valid data object  
> *@param* **required** {Boolean} - true if this is a required field  
> *@param* **item** {Object} - valid item object  
> *@api* **public**   
  
Checks that a valid key has been provided in a data object

<div class="code-header addGitHubLink" data-file="fields/types/key/KeyType.js#L29-L39"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Key.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.  
Ensures that the email address is lowercase.  

<div class="code-header addGitHubLink" data-file="fields/types/key/KeyType.js#L41-L53"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
