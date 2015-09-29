#### .getPath( key, defaultValue )
> *@param* **key** _{String}_  - Key of the option you want to retrieve  
> *@param* **defaultValue** _{String}_  - Default value if `key` is not a valid option   
> _@return_ **path** 

Gets an expanded path option, expanded to include moduleRoot if it is relative.  

```javascript
var path = keystone.getPath('views', 'templates/views');
```
<div class="code-header addGitHubLink" data-file="lib/core/options.js#L206-L218"> &nbsp; </div><pre class=" language-javascript hideCode api"></pre> 
