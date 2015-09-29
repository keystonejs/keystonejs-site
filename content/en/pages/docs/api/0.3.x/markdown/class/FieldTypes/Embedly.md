#### .Field.Types.Embedly( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<p class="caution-note">Requires the option `from` to refer to another path in the schema that provides the url to expand.</p>

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">
this._underscoreMethods = ['reset'];
this._fixedSize = 'full';

this.fromPath = options.from;
this.embedlyOptions = options.options || {};

// TODO: implement filtering, usage disabled for now
options.nofilter = true;

</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/embedly/EmbedlyType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre>  

---
<span class="subMethod"> .Field.Types.Embedly.addToSchema(  ) </span>      
> *@api* **public**    

Registers the field on the List's Mongoose Schema.    
<div class="code-header addGitHubLink" data-file="fields/types/embedly/EmbedlyType.js#L63-L182"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Embedly.reset( item ) </span>  
> *@param* **item** {Object} - valid item object       
> *@api* **public**     

<div class="code-header"> <h4>Resets the value of the field</h4></div><pre class=" language-javascript"><code class="language-javascript">{
	exists: false,
	type: null,
	title: null,
	url: null,
	width: null,
	height: null,
	version: null,
	description: null,
	html: null,
	authorName: null,
	authorUrl: null,
	providerName: null,
	providerUrl: null,
	thumbnailUrl: null,
	thumbnailWidth: null,
	thumbnailHeight: null
}</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/embedly/EmbedlyType.js#L185-L210"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Embedly.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.
```javascript
return item.get(this.paths.html);
```
<div class="code-header addGitHubLink" data-file="fields/types/embedly/EmbedlyType.js#L213-L221"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Embedly.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  
```javascript
// Assume that it has changed if the url is different
return item.isModified(this.paths.url);
```
<div class="code-header addGitHubLink" data-file="fields/types/embedly/EmbedlyType.js#L224-L233">&nbsp; </div><pre class=" language-javascript hideCode api"></pre>

---
<span class="subMethod"> .Field.Types.Embedly.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
  
<p class="caution-note">Embedly fields do not incur validation and will always return `true`. </p>

<div class="code-header addGitHubLink" data-file="fields/types/embedly/EmbedlyType.js#L236-L245"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Embedly.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.    

<div class="code-header addGitHubLink" data-file="fields/types/embedly/EmbedlyType.js#L248-L275"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
