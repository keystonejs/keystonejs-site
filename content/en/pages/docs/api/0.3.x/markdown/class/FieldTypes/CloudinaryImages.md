#### .Field.Types.CloudinaryImages( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  


<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._underscoreMethods = ['format'];
this._fixedSize = 'full';
this._properties = ['select', 'selectPrefix', 'autoCleanup', 'publicID', 'folder', 'filenameAsPublicID'];
</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimages/CloudinaryImagesType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

  
<span class="subMethod"> .Field.Types.CloudinaryImages.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimages/CloudinaryImagesType.js#L51-L195"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.CloudinaryImages.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.
```javascript
return item.get(this.paths.url);
```
<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimages/CloudinaryImagesType.js#L198-L208"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.CloudinaryImages.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  
```javascript
return item.isModified(this.paths.url);
```
<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimages/CloudinaryImagesType.js#L211-L220">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.CloudinaryImages.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 

Validates that a value for this field has been provided in a data object 
<p class="warning-note"> TODO - will only return true</p>

<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimages/CloudinaryImagesType.js#L223-L232"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.CloudinaryImages.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  
  
Updates the value for this field in the item from a data object
<p class="warning-note"> TODO - will not return</p>

<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimages/CloudinaryImagesType.js#L235-L243"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.CloudinaryImages.getRequestHandler( item, req [, paths, callback] )  </span>
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Returns a callback that handles a standard form submission for the field.  
Expected form parts are:  
`field.paths.action` in `req.body` (`clear` or `delete`)  
`field.paths.upload` in `req.files` (uploads the image to cloudinary)  
<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimages/CloudinaryImagesType.js#L246-L350">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.CloudinaryImages.handleRequest( item, req [, paths, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Immediately handles a standard form submission for the field (see `.Field.Types.CloudinaryImage.getRequestHandler()`).  

<div class="code-header addGitHubLink" data-file="fields/types/cloudinaryimages/CloudinaryImagesType.js#L363-L371"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
 
