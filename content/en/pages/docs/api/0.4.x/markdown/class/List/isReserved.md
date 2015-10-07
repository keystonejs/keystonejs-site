#### List.isReserved( path )   
> _@param_ **path** {String} - path to check   
> _@return_ **Boolean**


Check whether or not a `path` is a reserved path. This restricts the use of `Object.prototype` method keys as well as internal mongo paths.  

<div class="code-header"> <h4>Reserved Paths</h4></div><pre class=" language-javascript"><code class="language-javascript">
	[
		'id',
		'\_id',
		'\_',
		'prototype',
		'\__proto\__',
		'hasOwnProperty',
		'toString',
		'\__defineGetter\__',
		'\__defineSetter\__',
		'\__lookupGetter\__',
		'\__lookupSetter\__',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'toLocaleString',
		'valueOf'
	];
</code></pre>  
 
<div class="code-header addGitHubLink" data-file="lib/list/isReserved.js"><a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
