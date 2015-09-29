#### .Field.Types.LocalFile( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._underscoreMethods = ['format', 'uploadFile'];
this._fixedSize = 'full';

// TODO: implement filtering, usage disabled for now
options.nofilter = true;
</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.LocalFile.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L65-L167"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.LocalFile.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.
Delegates to the options.format function if it exists.  

<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L170-L185"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFile.hasFormatter(  ) </span> 
> *@api* **public**    

Detects whether the field has formatter function in `options.format`
<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L188-L196">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFile.href( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Return the public href for the stored file  

<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L199-L209">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFile.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  
```javascript
return item.isModified(this.paths.path);
```
<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L212-L220">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFile.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 
<p class="warning-note"> TODO (if needed) - will only return true</p>

<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L295-L304"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.LocalFile.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

<p class="warning-note"> TODO - direct updating of data (not via upload) - will not currently return</p>

<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L235-L243"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFile.uploadFile( item, file, update [, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **file** {Object} - valid file object  
> *@param* **update** {Boolean} - update or not  
> *@param* **callback** {Function} - callback (optional)  
> *@api* **public**  

Uploads the file for this field.  
<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L246-L304"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFile.getRequestHandler( item, req [, paths, callback] )  </span>
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Returns a callback that handles a standard form submission for the field.  
Expected form parts are:  
`field.paths.action` in `req.body` (`clear` or `delete`)  
`field.paths.upload` in `req.files` (uploads the image to localfile)  
<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L307-L348">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFile.handleRequest( item, req [, paths, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Immediately handles a standard form submission for the field (see `.Field.Types.LocalFile.getRequestHandler()`).  

<div class="code-header addGitHubLink" data-file="fields/types/localfile/LocalFileType.js#L351-L359"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre>
