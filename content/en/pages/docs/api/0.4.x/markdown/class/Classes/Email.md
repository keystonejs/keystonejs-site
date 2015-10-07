#### new Keystone.Email( options )  
> *@param* **options** _{...String|Object}_   
> _@return_ **this**     

Once created, emails can be sent with Mandrill, or rendered for viewing.   

<p class="api-note">Passing a **String** will set `templateName` and use <a href="#email-defaults">`Email.defaults`</a>.</p>
<p class="caution-note"> Requires setting Keystone option `emails`  to render.  <br />Requires setting either `options.mandrill` or Keystone option `mandrill api key`  to send.   </p>    

** `options` **:   
* **templateName** - The name of the template to render.  Default use should be the name of a jade template file or directory. Required if not using ` templateMandrillName `.   
* **templateExt** - The extension name of our template file.  A template must be available at `templateName.templateExt` or `templateName/email.templateExt`.  
* **templateEngine** - The engine to use to render the email html.  Defaults to ` require('jade') `  
* **templateBasePath** - Base path to load email template files.   
* **templateCompile** - A custom template compiler.    Use in conjunction with ` templateRender `.  
```javascript
// example for nunjucks  
options.templateCompile: function(engine, contents, opts, path) {
    return engine.compile(contents, opts, path); //calling compile() on the nunjucks engine, and returning the compiled template
},
```
* **templateRender** - A custom renderer function.  Use in conjunction with ` templateCompile `.  
```javascript
// example for nunjucks  
options.templateRender: function(template, locals) {
    return template.render(locals); //calling the nunjucks compiled template render()
},
```
* **templateMandrillName** - Name of a Mandrill template to use to render emails.    
* **templateMandrillContent** - An **Array** of content blocks for a Mandrill template. 
```javascript  
options.templateMandrillContent = [
    {
        "name": "header",
        "content": "<h2>" + keystone.get('name') + "</h2>"
    }
]
```   

<div class="code-header"> <h4>Create a new Email instance and send an Email</h4></div><pre class=" language-javascript"><code class="language-javascript">
	var Email = new keystone.Email('welcome');
	Email.send({
		subject:'Your  account information',
		tags:'new user',
		to:newUser.realEmail,
		fromName:'Account Team',
		fromEmail:'support@domain.tld',
		enquiry: {
			_: require('lodash'),
			name:newUser.name.first+'  '+newUser.name.last,
			email:newUser.realEmail,
			html:''
		}
	},function(err,info){
		//console.log(err,'New user email sent',info);
	});
</code></pre>

<div class="contextual-note">
<h4> Explanation</h4> 
<p>We pass `'welcome'` as our template name. <br />Since we set ` keystone.init({ ..., 'emails': 'templates/emails'}) ` the class looked in ` /templates/emails/welcome.jade ` and ` /templates/emails/welcome/email.jade ` for the template to use to render the email.</p>
</div>  


<div class="code-header addGitHubLink" data-file="lib/email.js#L125-L170"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 


