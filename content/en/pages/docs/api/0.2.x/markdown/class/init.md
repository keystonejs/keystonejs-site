#### .init( options )

> *@param* **options** _{Object}_ - set the intital value of Keystone options    
> _@return_ **this** 

Initialize the Keystone options object.  See [Configuration Docs](http://keystonejs.com/docs/configuration/).

If a Mongoose or Express reference has not been created with `.connect()` they will be added.  
```javascript
keystone.init({
	'name': 'Keystone',
	'brand': 'KeystoneJS',
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '=Hw1WfV6XlGW(w~K8=&5r%U2]EZ'
});
```
The minimum required to start a Keystone instance is the `cookie secret` option.

<div class="code-header addGitHubLink" data-file="lib/core/init.js"> <a href="#" class="loadCode"> code</a> </div><pre class=" language-javascript hideCode api"></pre> 
