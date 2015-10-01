#### Keystone.Field( list, path, options )
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **private**  

<p class="contextual-note"> Extended by `Field.Types` Classes, methods should not be used directly. </p>
<div class="code-header" > <h4>Extend</h4>file named customType.js</div><pre class=" language-javascript "><code  class=" language-javascript ">var keystone = require('keystone');
var util = require('util');

/**
 * Custom FieldType Constructor
 * @extends Field
 * @api public
 */
function custom(list, path, options) {
	// add your options to this
	
	// call super_
	custom.super_\_.call(this, list, path, options);
}
// inherit the 
util.inherits(custom, keystone.Field);

/* override or add methods */
custom.prototype.addToSchema = function() {
	// how to add to schema
	
}

/* Export Field Type */
exports = module.exports = custom;
</code></pre> 
<div class="code-header" > <h4>main file</div><pre class=" language-javascript "><code  class=" language-javascript ">var keystone = require('keystone');
Object.defineProperty(keystone.Field.Types, 'myField', { get: function() {
	return require(./customType.js');
} });


</code></pre> 
Field Type Classes are located at:  
**/fields/types/<i>fieldtype</i>/<i>Fieldtype</i>Type.js**  

  
Each Field Type has React class constructors on top of their unique methods.

##### Column Support
**/fields/types/<i>fieldtype</i>/<i>Fieldtype</i>Columns.js**  
##### Field HTML  
**/fields/types/<i>fieldtype</i>/<i>Fieldtype</i>Field.js**  
##### Filters
**/fields/types/<i>fieldtype</i>/<i>Fieldtype</i>Filters.js**  

 

<div class="code-header addGitHubLink" data-file="fields/types/Type.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 


