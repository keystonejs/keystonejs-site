#### .import( dirname )
> *@param* **dirname** _{String}_  - path  
> _@return_ **imported** 

returns all .js modules (recursively) in the path specified, relative to the module root (where the keystone project is being consumed from).

```javascript
var models = keystone.import('models');
```
<div class="code-header addGitHubLink" data-file="index.js#L156-L199"> <a href="#" class="loadCode"> code</a> </div><pre class=" language-javascript hideCode api"></pre> 
