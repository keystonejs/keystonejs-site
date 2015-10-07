#### .Field.Types.Markdown( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._defaultSize = 'full';
	
// TODO: implement filtering, usage disabled for now
options.nofilter = true;

this.toolbarOptions = options.toolbarOptions || {};
this.height = options.height || 90;

// since wysiwyg option can be falsey this needs to use `in` instead of ||
this.wysiwyg = ('wysiwyg' in options) ? options.wysiwyg : true;

this._properties = ['wysiwyg', 'height', 'toolbarOptions'];</code></pre>

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/markdown.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Markdown.addToSchema(  ) </span>      
> *@api* **public**    

Registers the field on the List's Mongoose Schema.    
<div class="code-header addGitHubLink" data-file="lib/fieldTypes/markdown.js#L41-L82"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Markdown.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.
```javascript
return item.get(this.paths.html);
```
<div class="code-header addGitHubLink" data-file="lib/fieldTypes/markdown.js#L85-L93"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Markdown.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  
```javascript
// Assume that it has changed if the url is different
return item.isModified(this.paths.md);
```
<div class="code-header addGitHubLink" data-file="lib/fieldTypes/markdown.js#L112-L120">&nbsp; </div><pre class=" language-javascript hideCode api"></pre>

---
<span class="subMethod"> .Field.Types.Markdown.validateInput( data [, required, item ] )  </span> 
> *@param* **data** {Object} - valid data object  
> *@param* **required** {Boolean} - true if this is a required field  
> *@param* **item** {Object} - valid item object  
> *@api* **public**   
  
Validates that a value for this field has been provided in a data object.  
Will accept either the field path, or paths.md.  

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/markdown.js#L96-L109"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Markdown.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.   
Will accept either the field path, or paths.md 

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/markdown.js#L123-L138"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
