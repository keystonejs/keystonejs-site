#### new Keystone( )  
> _@return_ **Instance**   

<div class="code-header" ><h4> The Keystone instance is a global object.</h4></div><pre class=" language-javascript  "><code  class=" language-javascript">var keystone = require('keystone'); </code></pre> 

<div class="code-header" ><h4> defaults</h4>Set with:<br /><code>keystone.init({ 'key': value, ... })</code> <br />  <code>keystone.options({ 'key': value, ... })</code><br /><code>keystone.set('key', value)</code>  </div><pre class=" language-javascript  "><code  class=" language-javascript">this.express = express; // exposes express
this.lists = {};
this.paths = {}; 

this._options = {
	'name': 'Keystone',
	'brand': 'Keystone',
	'compress': true,
	'headless': false,
	'logger': ':method :url :status :response-time ms',
	'auto update': false,
	'model prefix': null,
	'module root': moduleRoot,
	'frame guard': 'sameorigin',
	'env': process.env.NODE_ENV || 'development',
	'port': process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT,
	'host': process.env.HOST || process.env.IP || process.env.OPENSHIFT_NODEJS_IP,
	'listen': process.env.LISTEN,
	'ssl': process.env.SSL,
	'ssl port': process.env.SSL_PORT,
	'ssl host': process.env.SSL_HOST,
	'ssl key': process.env.SSL_KEY,
	'ssl cert': process.env.SSL_CERT,
	'cookie secret': process.env.COOKIE_SECRET,
	'cookie signin': this.get('env') === 'development') ? true : false,
	'embedly api key': process.env.EMBEDLY_API_KEY || process.env.EMBEDLY_APIKEY,
	'mandrill api key': process.env.MANDRILL_API_KEY || process.env.MANDRILL_APIKEY,
	'mandrill username': process.env.MANDRILL_USERNAME,
	'google api key':  process.env.GOOGLE_BROWSER_KEY,
	'google server api key':  process.env.GOOGLE_SERVER_KEY,
	'ga property':  process.env.GA_PROPERTY,
	'ga domain': process.env.GA_DOMAIN,
	'chartbeat property': process.env.CHARTBEAT_PROPERTY,
	'chartbeat domain': process.env.CHARTBEAT_DOMAIN,
	'allowed ip ranges': process.env.ALLOWED_IP_RANGES,
	// process.env.CLOUDINARY_URL is processed by the cloudinary package when this is set
	'cloudinary config': process.env.CLOUDINARY\_URL ? true : false,
	// s3 conditional on process.env.S3_* vars
	's3 config': { bucket: process.env.S3_BUCKET, key: process.env.S3_KEY, secret: process.env.S3_SECRET, region: process.env.S3_REGION }, 
	// azure conditional on process.env.AZURE_* vars
	'azurefile config': { account: process.env.AZURE_STORAGE_ACCOUNT, key: process.env.AZURE_STORAGE_ACCESS_KEY },
		
};



</code></pre> 

<div class="code-header addGitHubLink" data-file="index.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

