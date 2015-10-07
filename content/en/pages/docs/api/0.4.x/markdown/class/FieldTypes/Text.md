#### .Field.Types.Text( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  



<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = String;
this._underscoreMethods = ['crop'];</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/text/TextType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.Text.addFilterToQuery( filter, query ) </span>  
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object    
> *@api* **public**     

Adds filters to a query.   

<div class="code-header addGitHubLink" data-file="fields/types/text/TextType.js#L17-L37"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Text.crop( item, length, append, preserveWords ) </span>  
> *@param* **item** {Object} - valid field object   
> *@param* **length** {Number} - length to crop to  
> *@param* **append** {String} - string to append  
> *@param* **preserveWords** {Boolean} - whether to preserve the last word in full  
> *@return* {String} - cropped string   
> *@api* **public**     

Crops the string to the specifed length.  

<div class="code-header addGitHubLink" data-file="fields/types/text/TextType.js#L39-L44"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

