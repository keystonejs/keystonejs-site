#### View.query( key, query, options )
> *@param* **key** _{Array}_  - Keys can be nested paths, containing objects will be created as required.  
> *@param* **query** _{Object}_  - Mongoose query  
> *@param* **options** _{Object}_  - Options  
> _@return_ **chain** - QueryCallbacks  

Queues a mongoose query for execution before the view is rendered.  
The results of the query are set in `locals[key]`.  
Keys can be nested paths, containing objects will be created as required.  
The third argument `then` can be a method to call after the query is completed such as <code class="default-value"> function(err, results, callback)</code>, or a `populateRelated` definition (string or array).

<div class="code-header"> <h4>Examples</h4></div><pre class=" language-javascript"><code class="language-javascript"> 

    /* an array of books from the database will be added to locals.books.*/
    view.query('books', keystone.list('Book').model.find());
    
    /*  You can also nest properties on the locals variable. */
    view.query(
        'admin.books',
        keystone.list('Book').model.find().where('user', 'Admin')
    );
    /* locals.admin.books will be the result of the query */
    
    
    /* views.query().then is always called if it is available */
    view.query('books', keystone.list('Book').model.find())
		.then(function (err, results, next) {
			if (err) return next(err);
			console.log(results);
			next();
		});
		
</code></pre>
<div class="code-header addGitHubLink" data-file="lib/view.js#L214-L310">&nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
