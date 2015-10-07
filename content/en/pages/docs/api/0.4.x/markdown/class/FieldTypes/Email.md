#### .Field.Types.Email( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = String;
this._underscoreMethods = ['gravatarUrl'];
this.typeDescription = 'email address';
</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/email/EmailType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.Email.addFilterToQuery( filter, query ) </span>   
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object   
> *@api* **public**    

Add filters to a query.  
<div class="code-header addGitHubLink" data-file="fields/types/email/EmailType.js#L21"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Email.gravatarUrl( item, size, defaultImage, rating ) </span>  
> *@param* **item** {Object} - valid item object  
> *@param* **size** {Number} - size of images ranging from 1 to 2048 pixels, square   
> *@param* **defaultImage** {String}    
> *@param* **rating** {String}     
> *@api* **public**     

Get the value from a data object; may be simple or a pair of fields

<div class="code-header addGitHubLink" data-file="fields/types/email/EmailType.js#L23-L43"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Email.validateInput( data [, required, item ] )  </span> 
> *@param* **data** {Object} - valid data object  
> *@param* **required** {Boolean} - true if this is a required field  
> *@param* **item** {Object} - valid item object  
> *@api* **public**   
  
Validates that a valid email has been provided in a data object

<div class="code-header addGitHubLink" data-file="fields/types/email/EmailType.js#L45-L55"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Email.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.  
Ensures that the email address is lowercase.  

<div class="code-header addGitHubLink" data-file="fields/types/email/EmailType.js#L57-L69"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
