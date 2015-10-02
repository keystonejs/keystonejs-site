#### .Field.Types.Password( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  



<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = String;
this._underscoreMethods = ['format', 'compare'];
this._fixedSize = 'large';
// You can't sort on password fields
options.nosort = true;
options.nofilter = true; // TODO: remove this when 0.4 is merged
this.workFactor = options.workFactor || 10;</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/password/PasswordType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 


<span class="subMethod"> .Field.Types.Password.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
<div class="code-header addGitHubLink" data-file="fields/types/password/PasswordType.js#L23-L77"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Password.addFilterToQuery( filter, query )  </span> 
> *@param* **filter** {Object} - valid filter object
> *@param* **query** {Object} - valid query object  
> *@api* **public**   
  
Add filters to a query.  

<div class="code-header addGitHubLink" data-file="fields/types/password/PasswordType.js#L79-L86"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Password.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

<p class="note"> Password fields are always formatted as a random no. of asterisks, because the saved hash should never be displayed nor the length of the actual password hinted at.</p>

<div class="code-header addGitHubLink" data-file="fields/types/password/PasswordType.js#L88-L103"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Password.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  

<div class="code-header addGitHubLink" data-file="fields/types/password/PasswordType.js#L169-L185">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Password.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
  
Validates that a value for this field has been provided in a data object.  
`options.required` specifies an Array or space-delimited list of paths that are required (defaults to street1, suburb).  

<div class="code-header addGitHubLink" data-file="fields/types/password/PasswordType.js#L188-L230"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Password.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.

<div class="code-header addGitHubLink" data-file="fields/types/password/PasswordType.js#L233-L293"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
