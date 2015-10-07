#### Keystone.Field( list, path, options )
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **private**  

<p class="contextual-note"> Extended by `Field.Types` Classes, methods should not be used directly. </p>
<div class="code-header" > <h4>Extend</h4>file named customType.js</div><pre class=" language-javascript "><code  class=" language-javascript ">var keystone = require('keystone');
var util = require('util');
/\**
	Custom FieldType Constructor
	@extends Field
	@api public
*\*/
function custom(list, path, options) {
    // add your options to this

		// call super\_  
		custom.super\_.call(this, list, path, options);  
	
}
/\** inherit Field *\*/
util.inherits(custom, keystone.Field);    
     
     
/\** override or add methods *\*/
custom.prototype.addToSchema = function() {
	// override schema instructions
	
}

/\** Export Field Type *\*/
exports = module.exports = custom;
</code></pre> 
<div class="code-header" > <h4>main file</div><pre class=" language-javascript "><code  class=" language-javascript ">var keystone = require('keystone');
Object.defineProperty(keystone.Field.Types, 'myField', { get: function() {
	return require(./customType.js');
} });


</code></pre> 



<div class="code-header addGitHubLink" data-file="fields/types/Type.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 


