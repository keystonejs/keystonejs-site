#### new Keystone.Email( options )  
> *@param* **options** _{...String|Object}_  - options  
> _@return_ **this**     

Helper class for sending emails with Mandrill.  

<p class="api-note">Requires `emails` and `mandrill api key` options be set.</p>  

New instances take a `templateName` string or an object of template options. 

A template must be available at `templateName.templateExt` or `templateName/email.templateExt`.

Passing a string will use `Email.defaults` for everything but the template name.  

Once created, emails can be rendered or sent.  

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

<div class="code-header"> <h4>Email.defaults </h4></div><pre class=" language-javascript"><code class="language-javascript">
	{
		templateExt: 'jade',
		templateEngine: require('jade'),
		templateBasePath: path.normalize(path.join(__dirname, '..', 'templates', 'helpers', 'emails')),
		mandrill: {
			track_opens: true,
			track_clicks: true,
			preserve_recipients: false,
			inline_css: true
		},
		// Mandrill template
		templateMandrillName: null,
		templateForceHtml: false // Force html render
	}
</code></pre> 

<div class="code-header addGitHubLink" data-file="lib/email.js#L125-L167"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 


