#### View.on( on [, callback ] )
> *@param* **on** _{Function|Object|String}_  - Method to be executed   
> *@param* **callback** _{Function}_  - Function to run in parallel on `on`.   
> _@return_ **this**  

Adds a method (or array of methods) to be executed in parallel to the `init`, `action` or `render` queue.

#### Argument Options
* **init** - Init events are always fired in series, before any other actions
```javascript  
view.on('init', function (next) {
	// do something before any actions or queries have run
});
```
* **`Function`** - If the first argument is a **Function** that returns truthy then the second argument is added to the queue.
* **Dynamic** - Do certain actions depending on information in the response object.  
```javascript    
view.on({ 'user.name.first': 'Admin' }, function(next) {
	  console.log('Hello Admin!');
	  next();
});
```
* **get** - HTTP verb  
* **post** - HTTP verb  
* **put** - HTTP verb  
* **delete** - HTTP verb  
* **render** - Render events are always fired last in parallel, after any other actions  
```javascript  
view.on('render', function (next) {
	// do something after init, action and query middleware has run
});
```

<div class="code-header"><h4>example</h4></div><pre class=" language-javascript"><code class="language-javascript">view.on(function() {
	
        var thing = true;
        return thing;
	
    }, function(next) {
	
        console.log('thing is true!');
        next();
	
    });
</code></pre>  

<div class="code-header"> 
<h4>grab posts</h4>  
</div><pre class=" language-javascript"><code class="language-javascript">    // Load posts
    view.on('init', function(next) {
		
			var q = keystone.list('Post').paginate({
					page: req.query.page || 1,
					perPage: 10,
					maxPages: 10
				})
				.where('state', 'published')
				.sort('-publishedDate')
				.populate('author categories');
			
			if (locals.data.category) {
				q.where('categories').in([locals.data.category]);
			}
			
			q.exec(function(err, results) {
				locals.data.posts = results;
				next(err);
			});
		
        });
</code></pre>  

<div class="code-header addGitHubLink"  data-file="lib/view.js#L42-L193">&nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
