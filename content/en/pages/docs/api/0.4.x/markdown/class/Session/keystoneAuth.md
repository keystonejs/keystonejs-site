#### .session.keystoneAuth( req, res, next )  
> *@param* **req** _{Object}_  - express request object  
> *@param* **res** _{Object}_  - express response object  
> *@param* **next** _{Object}_  - callback  

Middleware to enable access to Keystone.

Bounces the user to the signin screen if they are not signed in or do not have permission.  

`req.user` is the user returned by the database. It's type is Keystone.List.  
`req.user.canAccessKeystone` denotes whether the user has access to the admin panel.
<p class="note">If you're having issues double check your user model. Setting `canAccessKeystone` to true in the database will not be reflected here if it is virtual. <br/> See http://mongoosejs.com/docs/guide.html#virtuals</p>


<div class="code-header addGitHubLink" data-file="lib/session.js#L190-L215"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
