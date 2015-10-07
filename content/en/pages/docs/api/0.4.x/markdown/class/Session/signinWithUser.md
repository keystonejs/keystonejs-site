#### .session.signinWithUser( user, req, res, onSuccess )  
> *@param* **user** _{Object}_  - user object  
> *@param* **req** _{Object}_  - express request object  
> *@param* **res** _{Object}_  - express response object  
> *@param* **onSuccess** _{Object}_  - onSuccess callback, is passed the User instance  

Creates a user session by supplying a user object 

<div class="code-header"> <h4>Example</h4></div><pre class=" language-javascript"><code class="language-javascript">


// express route
keystone.app.post('/signin', function(req, res) {
		
		var passwordCheck = req.body.password;
		var onSuccess = function(user) {
			// successful session generation
		}
		User.model.find({email: req.body.email}).exec(function(err, user) {
			if (user && (!passwordCheck || scmp(passwordCheck, hash(user.password)))) {
				keystone.session.signinWithUser(user, req, res, onSuccess);
			} else {
				// handle error
			}
		});
}
</code></pre>

<div class="code-header addGitHubLink" data-file="lib/session.js#L23-L58"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
