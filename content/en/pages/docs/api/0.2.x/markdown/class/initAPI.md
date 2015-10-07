#### .initAPI
> *@api* **public**     

<div class="code-header"> <h4>Adds helper methods to the `res` object</h4></div><pre class=" language-javascript"><code class="language-javascript">res.apiResponse(data);
  
res.apiError(key, err, msg, code);  

res.apiNotFound(err, msg);  

res.apiNotAllowed(err, msg);

</code></pre>

<div class="code-header"> <h4>Example</h4></div><pre class=" language-javascript"><code class="language-javascript">app.all('/api*', keystone.middleware.api);
app.get('/api/v2/posts', function( req, res ){
	// send back json data with included middleware
	... // get data
	res.apiResponse(data); 
});
</code></pre>

<div class="code-header addGitHubLink" data-file="lib/middleware/initAPI.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
