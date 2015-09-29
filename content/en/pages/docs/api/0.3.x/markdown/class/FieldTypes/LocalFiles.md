#### .Field.Types.LocalFiles( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  


<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._underscoreMethods = ['format', 'uploadFile'];
this._fixedSize = 'full';

// TODO: implement filtering, usage disabled for now
options.nofilter = true;
</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.LocalFiles.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L67-L193"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.LocalFiles.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.
Delegates to the options.format function if it exists.  

<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L196-L214"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFiles.hasFormatter(  ) </span> 
> *@api* **public**    

Detects whether the field has formatter function in `options.format`
<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L217-L225">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFiles.href( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Return the public href for a single stored file  

<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L228-L238">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFiles.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  
```javascript
return item.isModified(this.paths.path);
```
<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L241-L249">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFiles.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 
<p class="warning-note"> TODO (if needed) - will only return true</p>

<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L252-L261"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.LocalFiles.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

<p class="warning-note"> TODO - direct updating of data (not via upload) - will not currently return</p>

<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L264-L272"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFiles.uploadFiles( item, file, update [, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **file** {Object} - valid file object  
> *@param* **update** {Boolean} - update or not  
> *@param* **callback** {Function} - callback (optional)  
> *@api* **public**  

Uploads the files for this field.  
<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L275-L339"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFiles.getRequestHandler( item, req [, paths, callback] )  </span>
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Returns a callback that handles a standard form submission for the field.  
Expected form parts are:  
`field.paths.action` in `req.body` (`clear` or `delete`)  
`field.paths.upload` in `req.files` (uploads the image to localfiles)  
<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L352-L421">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.LocalFiles.handleRequest( item, req [, paths, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Immediately handles a standard form submission for the field (see `.Field.Types.LocalFiles.getRequestHandler()`).  

<div class="code-header addGitHubLink" data-file="fields/types/localfiles/LocalFilesType.js#L424-L432"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre>

