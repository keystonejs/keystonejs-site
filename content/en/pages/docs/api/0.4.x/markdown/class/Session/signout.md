#### .session.signout( req, res, next )  
> *@param* **req** _{Object}_  - express request object  
> *@param* **res** _{Object}_  - express response object  
> *@param* **next** _{Object}_  - callback  

Signs the current user out and resets the session

<div class="code-header"> <h4>Example</h4>From <a href="http://www.sydjs.com" target="_blank">sydjs.com</a> <a href="https://github.com/JedWatson/sydjs-site/blob/master/routes/views/session/signout.js" target="_blank">(code)</a></div><pre class=" language-javascript"><code class="language-javascript">
function(req, res) {
	
		var view = new keystone.View(req, res),
			locals = res.locals;
		
		locals.section = 'session';
		
		keystone.session.signout(req, res, function() {
			res.redirect('/');
		});
	
};
</code></pre>

<div class="code-header addGitHubLink" data-file="lib/session.js#L127-L154"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
