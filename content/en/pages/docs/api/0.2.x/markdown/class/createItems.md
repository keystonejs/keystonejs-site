#### .createItems( data[, _options_], callback )
> *@param* **data** _{Object}_  - Create item data  
> *@param* **options** _{Object}_  - _Optional_ Object of options  
> *@param* **callback** _{Function}_  - Callback function on done or error   
> _@return_ **callback** 

Keystone's `createItems` function is a simple but powerful way to populate your database with data.

It can be used to create [test fixtures](http://en.wikipedia.org/wiki/Test_fixture) or initialise your database with default content / users / etc.

There's also a shorthand syntax that can be used within update files; if you are using the `auto updates` feature, any file that exports a `create` object will automatically be wrapped and the data will be created.

`createItems` takes two passes at the data it is provided, first creating the items and retaining references by key (if provided) that can be used to populate relationships in the second pass. This makes it easy to create related data without asynchronous nesting (which for data creation sometimes ends up in knots).

The `data` argument should be an `Object` containing an `Array` for each `List` you want to populate. Each object in the array contains the data for a single item.

Each data property should match to a field path (or sub-field path) - all paths recognised by the `UpdateHandler` are usable.

A special property, `__ref`, can be set with a string value that is used to reference the item in relationships.

Relationship fields should contain either a string matching another item's `__ref` property, or (for `many: true` relationship fields) can contain an array of strings.

The `options` parameter can be used to override the default options.  
```javascript
var options = {
	verbose: false,
	strict: true
};
```
The `callback(err, stats)` function is passed the error (if there was one) and a stats object containing counts for each list of items that were created, and a special `message` property that can be parsed as Markdown or logged to the console.

```javascript
// This example demonstrates complete usage of keystone.createItems,
// and how to use its callback to log the message to the console.
 
function(done) {
	
	keystone.createItems({
		
		User: [{
			'name.full': 'Jed Watson',
			email: 'jed@keystonejs.com',
			password: 'admin',
			isAdmin: true,
			__ref: 'jed'
		}],
		
		PostCategory: [{
			name: 'Keystone JS',
			__ref: 'keystone'
		}, {
			name: 'Node.js',
			__ref: 'node'
		}],
		
		Post: [{
			title: 'A draft post',
			author: 'jed',
			'content.brief': 'This is an example draft post.',
			categories: ['keystone', 'node']
		}, {
			title: 'A published post',
			state: 'published',
			author: 'jed',
			publishedDate: '2014-04-12',
			'content.brief': 'This post has been published!',
			categories: 'node'
		}]
		
	}, function(err, stats) {
		stats && console.log(stats.message);
		done(err);
	});
 
}
```
```javascript
// This example demonstrates the shorthand syntax you can use to
// create items in a Keystone update script.
 
var keystone = require('keystone');
 
exports.create = {
	
	User: [{
		'name.full': 'Jed Watson',
		email: 'jed@keystonejs.com',
		password: 'admin',
		isAdmin: true,
		__ref: 'jed'
	}],
	
	PostCategory: [{
		name: 'Keystone JS',
		__ref: 'keystone'
	}, {
		name: 'Node.js',
		__ref: 'node'
	}],
	
	Post: [{
		title: 'A draft post',
		author: 'jed',
		'content.brief': 'This is an example draft post.',
		categories: ['keystone', 'node']
	}, {
		title: 'A published post',
		state: 'published',
		author: 'jed',
		publishedDate: '2014-04-12',
		'content.brief': 'This post has been published!',
		categories: 'node'
	}]
	
};
```
<div class="code-header addGitHubLink" data-file="lib/core/createItems.js"> <a href="#" class="loadCode"> code</a> </div><pre class=" language-javascript hideCode api"></pre> 
