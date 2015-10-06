#### Email.send( [ _locals _ ,] options [, _callback_ ] ) 
> *@param* **locals** _{Object}_  - backwards compatibility   
> *@param* **options** _{Object}_  - passed to `Email.render()`  
> *@param* **callback** _{Object}_  - callback(err, info)    


<p class="api-note"> For compatibility with older implementations, send supports providing locals and options objects as the first and second arguments, and the callback as the third.  Typical use case should be `.send( options, callback )`</p>

 Options:

 * **mandrill** - Initialised Mandrill API instance
 * **templateMandrillName** - the immutable name or slug of a template that exists in the user's account. For backwards-compatibility, the template name may also be used but the immutable slug is preferred.  Validation: required.  
 * **templateMandrillContent** - an array of template content to send. Each item in the array should be an object with two keys - name: the name of the content block to set the content for, and content: the actual content to put into the block
 ```javascript 
	options.templateMandrillContent = [
		{
			"name": "header",
			"content": "<h2>" + keystone.get('name') + "</h2>"
		}
	]
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
 
<p class="caution-note"> You must include an  email address with either `from` or `fromEmail` </p>

<div class="code-header"> <h4>Send an email</h4></div><pre class=" language-javascript"><code class="language-javascript">
	 var Email = new keystone.Email({ 
                templateMandrillName: 'welcome',
                templateMandrillContent: [
                    {
                        "name": "header",
                        "content": "<h2>" + keystone.get('name') + "</h2>"
                    }
                ]
            });

            Email.send({
                to: req.body.email,
                from: {
                    name: 'from name',
                    email: 'from@domain.tld'
                },
                subject: 'subject'
                templateMandrillContent: [
                    {
                        "name": "main",
                        "content": "custom html for main block"
                    }
                ],
                mandrillOptions: {
                    track_opens: false,
                    track_clicks: false
                },
            }, 
            function(err, info) {
                //console.log(err, info);
            });
</code></pre>
<div class="contextual-note">
<h4> Explanation</h4> 
<p>We defined a template at Mandrill and set `templateMandrillName: 'welcome'`. This will bypass `Email.render()` and send template information.  <br /> We add `templateMandrillContent` template blocks in both the **Email** constructor and in `.send`.  </p>
</div> 


<div class="code-header addGitHubLink" data-file="lib/email.js#L537-L630"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
