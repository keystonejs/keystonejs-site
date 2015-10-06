#### .Field.Types.S3File( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  



<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">grappling.mixin(this)
	.allowHooks('pre:upload');
this._underscoreMethods = ['format', 'uploadFile'];
this._fixedSize = 'full';

// TODO: implement filtering, usage disabled for now
options.nofilter = true;</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 


<span class="subMethod"> .Field.Types.S3File.s3config   
> *@api* **public**    

Exposes the custom or keystone azure config settings.  
<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L67-L75">&nbsp; </div><pre class=" language-javascript hideCode api"></pre>  

---

<span class="subMethod"> .Field.Types.S3File.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L78-L173"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.S3File.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.
```javascript
return item.get(this.paths.url);
```
<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L176-L184"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.S3File.hasFormatter(  ) </span> 
> *@api* **public**    

Detects the field have formatter function.  
```javascript
return 'function' === typeof this.options.format;
```
<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L178-L186">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 



---
<span class="subMethod"> .Field.Types.S3File.generateHeaders( item, file, callback )  </span>   
> *@param* **item** {Object} - list item  
> *@param* **file** {Object} - the uploaded file   
> *@param* **callback** {Function} - callback   
> *@api* **public**  

Generates a headers object for this item to use during upload.  

<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L223-L361"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.S3File.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  
```javascript
return item.isModified(this.paths.url);
```
<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L187-L195">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.S3File.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 

Validates that a value for this field has been provided in a data object 
<p class="warning-note"> TODO - will only return true</p>

<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L198-L207"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.S3File.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  
  
Updates the value for this field in the item from a data object
<p class="warning-note"> TODO - will not return</p>

<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L210-L218"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.S3File.uploadFile( item, file, update [, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **file** {Object} - valid file object  
> *@param* **update** {Boolean} - update or not  
> *@param* **callback** {Function} - callback (optional)  
> *@api* **public**  

Uploads the file for this field.
<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L221-L277"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.S3File.getRequestHandler( item, req [, paths, callback] )  </span>
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - express req object    
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Returns a callback that handles a standard form submission for the field.  
Expected form parts are:  
`field.paths.action` in `req.body` (`clear` or `delete`)  
`field.paths.upload` in `req.files` (uploads the file to s3file)  
<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L280-L320">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.S3File.handleRequest( item, req [, paths, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - express req object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Immediately handles a standard form submission for the field (see `.Field.Types.S3File.getRequestHandler()`).  

<div class="code-header addGitHubLink" data-file="fields/types/s3file/S3FileType.js#L323-L331"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
