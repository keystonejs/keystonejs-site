#### Email.defaults    
> *@api* **public**  

<div class="code-header"> <h4>Email.defaults </h4></div><pre class=" language-javascript"><code class="language-javascript">{
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

<div class="code-header addGitHubLink" data-file="lib/email.js#L12-L25"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
