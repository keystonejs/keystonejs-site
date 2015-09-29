#### Email.send( [locals], options, [callback] ) 
> *@param* **locals** _{Object}_  - backwards compatibility   
> *@param* **options** _{Object}_  - passed to `Email.render()`  
> *@param* **callback** _{Object}_  - callback(err, info)    


<p class="api-note"> For compatibility with older implementations, send supports providing locals and options objects as the first and second arguments, and the callback as the third.  Typical use case should be `.send( options, callback )`</p>

 Options:

 * **mandrill** - Initialised Mandrill API instance
 * **mandrillOptions** - any other <a href="https://mandrillapp.com/api/docs/messages.JSON.html#method=send-template" target="_blank"> Mandrill **message** Option</a> 
 ```javascript
	options.mandrillOptions = {
		// whether or not to turn on open tracking for the message
		track_opens: true,
		// whether or not to turn on click tracking for the message
		track_clicks: true, 
		// whether or not to expose all recipients in the "To" header for each email
		preserve_recipients: false, 
		// whether or not to automatically inline all CSS styles provided 
		// in the message HTML - only for HTML documents less than 256KB in size
		inline_css: true 
	},
 ```   
 * **tags** - an array of **Strings** to tag the message with. Stats are accumulated using tags, and only the first 100 are stored, so this should not be unique or change frequently. Tags should be 50 characters or less. Any tags starting with an underscore are reserved for internal use and will cause errors.   
 * **html** - the full HTML content to be sent 
 * **attachments** - an array of supported attachments to add to the message  
 ```javascript
	options.attachments = [
		{
			type: MIME_TYPE,
			name: FILE_NAME,
			content: BASE64_STRING
		},
	]
 ```
 * **to** - Object / String or Array of Objects / Strings to send to, e.g.  
 ```javascript
   ['email2@domain.tld', { email: 'email@domain.tld' }]
   { email: 'email4@domain.tld' }
   'email0@domain.tld'
 ``` 
 * **from** - `{ name: 'Ted', email: 'ted@domain.tld' }` or `'ted@domain.tld'`  
 * **fromName** - Name to send from  
 * **fromEmail** - Email address to send from
<p class="caution-note"> You must include an  email to send from with either `from` or `fromEmail` </p>

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


<div class="code-header addGitHubLink" data-file="lib/email.js#L537-L630"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
