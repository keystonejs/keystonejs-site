#### .Field.Types.CloudinaryImage( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._underscoreMethods = ['format'];
this._fixedSize = 'full';
this._properties = ['select', 'selectPrefix', 'autoCleanup', 'publicID', 'folder', 'filenameAsPublicID'];
</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimage/CloudinaryImageType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

  
<span class="subMethod"> .Field.Types.CloudinaryImage.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimage/CloudinaryImageType.js#L56-L270"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.CloudinaryImage.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.
```javascript
return item.get(this.paths.url);
```
<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimage/CloudinaryImageType.js#L273-L281"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.CloudinaryImage.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  
```javascript
return item.isModified(this.paths.url);
```
<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimage/CloudinaryImageType.js#L284-L292">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.CloudinaryImage.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 

Validates that a value for this field has been provided in a data object 
<p class="warning-note"> TODO - will only return true</p>

<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimage/CloudinaryImageType.js#L295-L304"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.CloudinaryImage.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object 

<p class="warning-note"> TODO - will not return</p>


<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimage/CloudinaryImageType.js#L307-L329"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.CloudinaryImage.getRequestHandler( item, req [, paths, callback] )  </span>
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - express req object    
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Returns a callback that handles a standard form submission for the field.  
Expected form parts are:  
`field.paths.action` in `req.body` (`clear` or `delete`)  
`field.paths.upload` in `req.files` (uploads the image to cloudinary)  
<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimage/CloudinaryImageType.js#L332-L446">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.CloudinaryImage.handleRequest( item, req [, paths, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - express req object    
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Immediately handles a standard form submission for the field (see `.Field.Types.CloudinaryImage.getRequestHandler()`).  

<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimage/CloudinaryImageType.js#L449-L457"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
 




