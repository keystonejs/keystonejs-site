#### .Field.Types.Textarea( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = String;
this._underscoreMethods = ['format', 'crop'];
this.height = options.height || 90;
this._properties = ['height'];</code></pre>


<div class="code-header addGitHubLink" data-file="fields/types/textarea/TextareaType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.Textarea.addFilterToQuery( filter, query ) </span>  
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object    
> *@api* **public**     

Adds filters to a query.   

<div class="code-header addGitHubLink" data-file="fields/types/textarea/TextareaType.js#L21"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Textarea.crop( item, length, append, preserveWords ) </span>  
> *@param* **item** {Object} - valid field object   
> *@param* **length** {Number} - length to crop to  
> *@param* **append** {String} - string to append  
> *@param* **preserveWords** {Boolean} - whether to preserve the last word in full  
> *@return* {String} - cropped string   
> *@api* **public**     

Crops the string to the specifed length.  

<div class="code-header addGitHubLink" data-file="fields/types/textarea/TextareaType.js#L22"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Textarea.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.  

<div class="code-header addGitHubLink" data-file="fields/types/textarea/TextareaType.js#L24-L30"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

