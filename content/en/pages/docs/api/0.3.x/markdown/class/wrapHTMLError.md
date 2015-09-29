#### .wrapHTMLError( title, [_err_] )
> *@param* **title** _{String}_  - Error title  
> *@param* **err** _{String}_  - _Optional_ Error message  
> _@return_ **html** 

Wraps an error in simple HTML to be sent as a response to the browser

```javascript
var html = keystone.wrapHTMLError('Credential Error','Please <a href="/keystone/signin">login</a> to view this page');
```
<div class="code-header addGitHubLink" data-file="lib/core/wrapHTMLError.js"> <a href="#" class="loadCode"> code</a> </div><pre class=" language-javascript hideCode api"></pre> 
