#### .Field.Types.AzureFile( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

**<span class="subMethod">New / Override Methods</span>**  

<span class="subMethod"> .Field.Types.AzureFile.azurefileconfig   
> *@api* **public**    

Exposes the custom or keystone s3 config settings.  

---
<span class="subMethod"> .Field.Types.AzureFile.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.
```javascript
return item.get(this.paths.url);
```

---
<span class="subMethod"> .Field.Types.AzureFile.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  
```javascript
return item.isModified(this.paths.url);
```

---
<span class="subMethod"> .Field.Types.AzureFile.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 
<p class="warning-note"> TODO - will only return true</p>
Validates that a value for this field has been provided in a data object 
```javascript
return true;
```  


---
<span class="subMethod"> .Field.Types.AzureFile.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  
 
<p class="warning-note"> TODO - will not return</p>
Updates the value for this field in the item from a data object


---
<span class="subMethod"> .Field.Types.AzureFile.uploadFile( item, file, update [, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **file** {Object} - valid file object  
> *@param* **update** {Boolean} - update or not  
> *@param* **callback** {Function} - callback (optional)  
> *@api* **public**  

Uploads the file for this field.

---
<span class="subMethod"> .Field.Types.AzureFile.getRequestHandler( item, req [, paths, callback] )  </span>
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Returns a callback that handles a standard form submission for the field.  
Expected form parts are:  
`field.paths.action` in `req.body` (`clear` or `delete`)  
`field.paths.upload` in `req.files` (uploads the file to s3file)  

---
<span class="subMethod"> .Field.Types.AzureFile.handleRequest( item, req [, paths, callback] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Immediately handles a standard form submission for the field (see `.Field.Types.AzureFile.getRequestHandler()`).  


<div class="code-header addGitHubLink" data-file="fields/types/azurefile/AzureFileType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
