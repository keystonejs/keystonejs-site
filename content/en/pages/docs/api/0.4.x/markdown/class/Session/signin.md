#### .session.signin( user, req, res, onSuccess, onFail )
> *@param* **user** _{Object}_  - user object  
> *@param* **req** _{Object}_  - express request object  
> *@param* **res** _{Object}_  - express response object  
> *@param* **onSuccess** _{Object}_  - onSuccess callback, is passed the User instance  
> *@param* **onFail** _{Object}_  - onFail callback  

Signs in a user user matching the lookup filters 

<div class="code-header"> <h4>Example</h4>From <a href="http://www.sydjs.com" target="_blank">sydjs.com</a> <a href="https://github.com/JedWatson/sydjs-site/blob/master/routes/views/session/signin.js" target="_blank">(code)</a></div><pre class=" language-javascript"><code class="language-javascript">
function(req, res) {
	
	if (req.user) {
		return res.redirect(req.cookies.target || '/me');
	}
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'session';
	locals.form = req.body;
	
	view.on('post', { action: 'signin' }, function(next) {
		
		if (!req.body.email || !req.body.password) {
			req.flash('error', 'Please enter your username and password.');
			return next();
		}
		
		var onSuccess = function() {
			if (req.body.target && !/join|signin/.test(req.body.target)) {
				console.log('[signin] - Set target as [' + req.body.target + '].');
				res.redirect(req.body.target);
			} else {
				res.redirect('/me');
			}
		}
		
		var onFail = function() {
			req.flash('error', 'Your username or password were incorrect, please try again.');
			return next();
		}
		
		keystone.session.signin({ email: req.body.email, password: req.body.password }, req, res, onSuccess, onFail);
		
	});
	
	view.render('session/signin');
	
}
</code></pre>

<div class="code-header addGitHubLink" data-file="lib/session.js#L71-L116"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
