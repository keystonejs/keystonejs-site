#### .session.persist( req, res, next )  
> *@param* **req** _{Object}_  - express request object  
> *@param* **res** _{Object}_  - express response object  
> *@param* **next** _{Object}_  - callback  

Middleware to ensure session persistence across server restarts.  

Looks for a userId cookie, and if present, and there is no user signed in, automatically signs the user in.

<div class="code-header addGitHubLink" data-file="lib/session.js#L156-L188"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
