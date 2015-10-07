#### .Field.Types.Code( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = String;
this._defaultSize = 'full';
this.height = options.height || 180;
this.lang = options.lang || options.language;
this._properties = ['editor', 'height', 'lang'];
this.codemirror = options.codemirror || {};
this.editor = _.defaults(this.codemirror, { mode : this.lang });</code></pre>
  
<div class="code-header addGitHubLink" data-file="/lib/fieldTypes/code.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.Code.addFilterToQuery( filter, query ) </span>   
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object   
> *@api* **public**    

Add filters to a query.    
<div class="code-header addGitHubLink" data-file="/lib/fieldTypes/code.js#L23-L24">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 
