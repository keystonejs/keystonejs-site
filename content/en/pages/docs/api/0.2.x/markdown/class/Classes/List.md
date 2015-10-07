#### new Keystone.List( key, options )
> *@param* **key** _{String}_  - List name   
> *@param* **options** _{Object}_  - Object of valid options    
> _@return_ **Instance**   

Create a new Keystone List.  
Each list is a wrapper around a mongoose collection schema and includes Keystone specific enhancements.  
The mongoose schema is available via `list.schema`.  

<div class="code-header"> <h4>Create a new list</h4></div><pre class=" language-javascript"><code class="language-javascript">  
	

		var keystone = require('keystone');
		var Types = keystone.Field.Types;
		
		var Post = new keystone.List('Post', {
			autokey: { path: 'slug', from: 'title', unique: true },
			map: { name: 'title' },
			defaultSort: '-createdAt'
		});

		Post.add({
			title: { type: String, required: true },
			state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
			author: { type: Types.Relationship, ref: 'User' },
			createdAt: { type: Date, default: Date.now },
			publishedAt: Date,
			image: { type: Types.CloudinaryImage },
			content: {
				brief: { type: Types.Html, wysiwyg: true, height: 150 },
				extended: { type: Types.Html, wysiwyg: true, height: 400 }
			}
		});

		Post.defaultColumns = 'title, state|20%, author, publishedAt|15%';
		Post.register();

</code></pre>  

<div class="code-header"> <h4>Default options </h4></div><pre class=" language-javascript"><code class="language-javascript">
	var defaultOptions = {
		schema: {
			collection: keystone.prefixModel(key)
		},
		noedit: false,
		nocreate: false,
		nodelete: false,
		autocreate: false,
		sortable: false,
		hidden: false,
		track: false,
		inherits: false,
		searchFields: '__name__',
		defaultSort: '__default__',
		defaultColumns: '__name__'
	};

</code></pre>  

<div class="code-header"> <h4>List properties </h4></div><pre class=" language-javascript"><code class="language-javascript">
	this.key = key;
	this.path = this.get('path') || utils.keyToPath(key, true);
	this.schema = new keystone.mongoose.Schema({}, this.options.schema);
	this.schemaFields = [];
	this.uiElements = [];
	this.underscoreMethods = {};
	this.fields = {};
	this.fieldsArray = [];
	this.fieldTypes = {};
	this.relationshipFields = [];
	this.relationships = {};
	this.mappings = {
		name: null,
		createdBy: null,
		createdOn: null,
		modifiedBy: null,
		modifiedOn: null
	};

</code></pre>  


<div class="code-header addGitHubLink" data-file="lib/list.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
