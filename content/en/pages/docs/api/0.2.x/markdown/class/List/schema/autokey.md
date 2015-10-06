#### List _schemaPlugins_.autokey (  )  
> _@api_ **private**   

<div class="code-header"> 
#### Adds a key to each document in a collection
Uses a current field, `from`, to create a key.    
Creates a new field based on `path`.  
Key will be unique if `unique` is **boolean** `true`.  
Key will update anytime the `from` field updates unless `fixed` is **boolean** `true`.  
</div><pre class=" language-javascript"><code class="language-javascript">    autokey: { 
		path: 'slug', 
		from: 'name',
		unique: true,
		fixed: false
	}
</code></pre>

Uses <code class="default-value"> list.schema.pre('save'...) </code> to alter documents.

<div class="code-header addGitHubLink" data-file="lib/schemaPlugins.js"><a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
