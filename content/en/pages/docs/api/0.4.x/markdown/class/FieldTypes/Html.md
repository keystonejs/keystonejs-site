#### .Field.Types.Html( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = String;
this._defaultSize = 'full';
this.wysiwyg = options.wysiwyg || false;
this.height = options.height || 180;
this._properties = ['wysiwyg', 'height'];</code></pre>
  
<div class="code-header addGitHubLink" data-file="fields/types/html/HtmlType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre>  

<span class="subMethod"> .Field.Types.Html.addFilterToQuery( filter, query ) </span>   
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object   
> *@api* **public**    

Add filters to a query.    
<div class="code-header addGitHubLink" data-file="fields/types/html/HtmlType.js#L21">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 


