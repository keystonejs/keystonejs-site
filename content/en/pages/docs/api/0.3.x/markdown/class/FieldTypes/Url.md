#### .Field.Types.Url( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = String;
this._underscoreMethods = ['format'];
this._formatUrl = options.format || removeProtocolPrefix;</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/url/UrlType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 


<span class="subMethod"> .Field.Types.Url.addFilterToQuery( filter, query ) </span>  
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object    
> *@api* **public**     

Adds filters to a query.   

<div class="code-header addGitHubLink" data-file="fields/types/url/UrlType.js#L18-L19"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Url.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value using either a supplied format function or default.  
Strips the leading protocol from the value for simpler display.  

<div class="code-header addGitHubLink" data-file="fields/types/url/UrlType.js#L21-L28"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---

<span class="subMethod"> .Field.Types.Url.removeProtocolPrefix( url ) </span>  
> *@param* **url** {String} - valid field object    
> *@api* **public**     

Remove the protocol prefix from url.   

<div class="code-header addGitHubLink" data-file="fields/types/url/UrlType.js#L30-L35"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
