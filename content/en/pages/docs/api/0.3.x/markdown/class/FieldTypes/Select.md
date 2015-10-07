#### .Field.Types.Select( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  



<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this.ui = options.ui || 'select';
this.numeric = options.numeric ? true : false;
this._nativeType = (options.numeric) ? Number : String;
this._underscoreMethods = ['format'];
this._properties = ['ops', 'numeric'];
if (typeof options.options === 'string') {
	options.options = options.options.split(',');
}
if (!Array.isArray(options.options)) {
	throw new Error('Select fields require an options array.');
}
this.ops = options.options.map(function(i) {
	var op = _.isString(i) ? { value: i.trim(), label: utils.keyToLabel(i) } : i;
	if (!_.isObject(op)) {
		op = { label: '' + i, value: '' + i };
	}
	if (options.numeric && !_.isNumber(op.value)) {
		op.value = Number(op.value);
	}
	return op;
});
// undefined options.emptyOption defaults to true
if (options.emptyOption === undefined) {
	options.emptyOption = true;
}
// ensure this.emptyOption is a boolean
this.emptyOption = options.emptyOption ? true : false;
// cached maps for options, labels and values
this.map = utils.optionsMap(this.ops);
this.labels = utils.optionsMap(this.ops, 'label');
this.values = _.pluck(this.ops, 'value');</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/select/SelectType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Select.addFilterToQuery( filter, query ) </span>   
> *@param* **filter** {Object}   
> *@param* **query** {Object}   
> *@api* **public**    

Add filters to a query.  

<div class="code-header addGitHubLink" data-file="fields/types/select/SelectType.js#L103-L114">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---  
<span class="subMethod"> .Field.Types.Select.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
  
Adds a virtual for accessing the label of the selected value, and statics to the Schema for converting a value to a label, and retrieving all of the defined options.   
 
<div class="code-header addGitHubLink" data-file="fields/types/select/SelectType.js#L47-L87"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---  
<span class="subMethod"> .Field.Types.Select.cloneOps(  ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     


<div class="code-header"> <h4>Retrieves a shallow clone of the options arrays</h4></div><pre class=" language-javascript"><code class="language-javascript"> return _.map(this.ops, _.clone); </code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/select/SelectType.js#L89-L94"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---  
<span class="subMethod"> .Field.Types.Select.cloneMap(  ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     


<div class="code-header"> <h4>Retrieves a shallow clone of the options map.</h4></div><pre class=" language-javascript"><code class="language-javascript"> return utils.optionsMap(this.ops, true); </code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/select/SelectType.js#L96-L101"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---  
<span class="subMethod"> .Field.Types.Select.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.  
<div class="code-header addGitHubLink" data-file="fields/types/select/SelectType.js#L127-L132"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---  
<span class="subMethod"> .Field.Types.Select.validateInput( data [, required, item ] ) </span>  
> *@param* **data** {Object}    
> *@param* **required** {Boolean} 
> *@param* **item** {Object}   
> *@api* **public**     

Validates that a valid option has been provided in a data object.  

<div class="code-header addGitHubLink" data-file="fields/types/select/SelectType.js#L116-L125"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
