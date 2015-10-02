#### .Field.Types.Name( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  



<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">
this._fixedSize = 'large';
options.nofilter = true; // TODO: added in 0.4
</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/name/NameType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 


<span class="subMethod"> .Field.Types.Name.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
Adds String properties for .first and .last name, and a virtual with get() and set() methods for .full  
<div class="code-header addGitHubLink" data-file="fields/types/name/NameType.js#L18-L57"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Name.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.

<div class="code-header addGitHubLink" data-file="fields/types/name/NameType.js#L59-L65"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Name.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  
```javascript
return item.isModified(this.paths.first) || item.isModified(this.paths.last);
```
<div class="code-header addGitHubLink" data-file="fields/types/name/NameType.js#L84-L91">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Name.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 
Validates that a value for this field has been provided in a data object.  

<div class="code-header addGitHubLink" data-file="fields/types/name/NameType.js#L67-L82"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Name.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.  

<div class="code-header addGitHubLink" data-file="fields/types/name/NameType.js#L93-L124"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
