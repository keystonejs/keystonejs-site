#### List.paginate( options  [, _callback_ ] )  
> _@param_ **options** {Object} - options  
> _@param_ **callback** {Function} - callback   
> _@return_ **chain** - exec

Gets a special Query object that will paginate documents in the list.  

```javascript
list.paginate({
	page: 1,
	perPage: 100,
	maxPages: 10
}).exec(function(err, results) {
	// do something
});
 
```
<div class="code-header addGitHubLink" data-file="lib/list/paginate.js"><a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
