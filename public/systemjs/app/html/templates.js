import jade from 'jade-runtime'
export default {
"404": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"page-header page-header\"><div class=\"container\"><h1>404</h1><p class=\"lead\">Oh snap! That page doesn't exist.</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\"><div class=\"docs-sidebar-info\"><p>You're on this page because the page you requested has been moved or deleted.</p><p>Check out the links on the right to find your way.</p></div></div><div class=\"col-sm-9\"><div class=\"docs-content\"><div class=\"row\"><div class=\"col-sm-6\"><h3>On this site</h3><ul class=\"list-unstyled lead\"><li><a href=\"/getting-started\" title=\"KeystoneJS Getting Started\">Getting Started</a></li><li><a href=\"/docs/configuration\" title=\"KeystoneJS Configuration\">KeystoneJS Configuration</a></li><li><a href=\"/docs/database\" title=\"KeystoneJS Database\">Database Setup</a></li><li><a href=\"/examples\" title=\"KeystoneJS Application\">Examples Applications</a></li></ul></div><div class=\"col-sm-6\"><h3>Other resources</h3><ul class=\"list-unstyled lead\"><li><a href=\"https://github.com/keystonejs/keystone\" target=\"_blank\" title=\"Github Project\">Github Project</a></li><li><a href=\"http://demo.keystonejs.com\" target=\"_blank\" title=\"Demo Website\">Demo Website</a></li><li><a href=\"https://groups.google.com/forum/#!forum/keystonejs\" target=\"_blank\" title=\"Demo Website\">Google Group</a></li></ul></div></div></div></div></div></div>");;return buf.join("");
},
"index": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (language, title) {
buf.push("<!DOCTYPE html><html" + (jade.attr("lang", language, true, true)) + "><head><script>var _sf_startpt=(new Date()).getTime()</script><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width\"><title>KeystoneJS");
if ( title)
{
buf.push(" &middot; " + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "");
}
buf.push("</title><meta name=\"keywords\" content=\"node.js,nodejs,cms,publishing,platform,web,development,framework,express,mongo,mongodb,bootstrap,react,jquery\"><meta name=\"description\" content=\"Get a head-start on the features you need. KeystoneJS is the easiest way to build dynamic websites, applications and APIs with Node.js and MongoDB.\"><meta property=\"og:locale\" content=\"en-us\"><meta property=\"og:title\" content=\"KeystoneJS\"><meta property=\"og:description\" content=\"KeystoneJS is an open source Node.js CMS and web application platform built on Express and MongoDB.\"><meta property=\"og:url\" content=\"https://keystonejs.com^current_url^\"><meta property=\"og:site_name\" content=\"KeystoneJS\"><meta property=\"og:type\" content=\"article\"><link href=\"http://fonts.googleapis.com/css?family=Roboto:100,300,300italic,400,500,700\" rel=\"stylesheet\"><link href=\"/styles/site.min.css\" rel=\"stylesheet\"><link href=\"/styles/prism.css\" rel=\"stylesheet\"><link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\"></head><body><div id=\"keystonejs-spa\"><div class=\"home-header back-key\"><div class=\"container\"><img src=\"/images/logo-inverted.svg\" alt=\"KeystoneJS\" width=\"80\" height=\"81\"><h2>The open source framework for developing database-driven websites, applications and APIs in Node.js. Built on Express and MongoDB.</h2><h2 style=\"text-align:left; padding-left:50px;\">import keystone from keystonejs\n<br />\n<br /> keystone.init({\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'name': 'Acme, Inc.',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'brand': 'Acme, Inc.',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'less': 'public',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'static': 'public',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'favicon': 'public/favicon.ico',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'views': 'templates/views',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'view engine': 'jade',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'emails': 'templates/emails',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'auto update': true,\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'session': true,\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'auth': true,\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'user model': 'User'\n<br /> })\n<br />\n<br /> keystone.import('models')\n<br />\n<br /> keystone.set('locals',{ hello: 'Hi!' })\n<br />\n<br /> keystone.start()</h2></div></div></div><script src=\"/systemjs/jspm_packages/system.js\"></script><script src=\"/systemjs/config.js\"></script><script src=\"/systemjs/client.js\"></script></body></html>");}.call(this,"language" in locals_for_with?locals_for_with.language:typeof language!=="undefined"?language:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
},
"en/pages/404": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"page-header page-header\"><div class=\"container\"><h1>404</h1><p class=\"lead\">Oh snap! That page doesn't exist.</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\"><div class=\"docs-sidebar-info\"><p>You're on this page because the page you requested has been moved or deleted.</p><p>Check out the links on the right to find your way.</p></div></div><div class=\"col-sm-9\"><div class=\"docs-content\"><div class=\"row\"><div class=\"col-sm-6\"><h3>On this site</h3><ul class=\"list-unstyled lead\"><li><a href=\"/quick-start\" title=\"KeystoneJS Getting Started\">Getting Started</a></li><li><a href=\"/docs/configuration\" title=\"KeystoneJS Configuration\">KeystoneJS Configuration</a></li><li><a href=\"/docs/database\" title=\"KeystoneJS Database\">Database Setup</a></li><li><a href=\"/examples\" title=\"KeystoneJS Application\">Examples Applications</a></li></ul></div><div class=\"col-sm-6\"><h3>Other resources</h3><ul class=\"list-unstyled lead\"><li><a href=\"https://github.com/keystonejs/keystone\" target=\"_blank\" title=\"Github Project\">Github Project</a></li><li><a href=\"http://demo.keystonejs.com\" target=\"_blank\" title=\"Demo Website\">Demo Website</a></li><li><a href=\"https://groups.google.com/forum/#!forum/keystonejs\" target=\"_blank\" title=\"Demo Website\">Google Group</a></li></ul></div></div></div></div></div></div>");;return buf.join("");
},
"en/pages/examples": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"page-header\"><div class=\"container\"><h1>env:production</h1><p class=\"lead\">.start(viewing Keystone in action and how to use its various features)</p></div></div><div style=\"margin-bottom: 3em;\" class=\"container-sm\"><a name=\"app\"></a><h2>Applications</h2><a name=\"app-demo\"></a><h3>Demo App</h3><p>The demo app is a simple implementation showing how to create a blog, photo gallery and contact form, as well as how to set up session management, error handling and csv downloads.</p><p>You can also log into the Keystone Admin UI and see how it works using the demo account.</p><ul class=\"list-inline\"><li><a href=\"http://demo.keystonejs.com\" target=\"_blank\" title=\"Demo website\" class=\"btn btn-primary\">Launch the site</a></li><li><a href=\"http://github.com/JedWatson/keystone-demo\" target=\"_blank\" title=\"View on GitHub\" class=\"btn btn-default\">View the GitHub Project</a></li></ul><a name=\"app-sydjs\"></a><h3>SydJS Website</h3><p>The team at <a href='http://www.thinkmill.com.au/' target='_blank'>Thinkmill</a> created a new website for SydJS, Sydney's Javascript Meetup, using Keystone.</p><p>It features a database of meetups, members, links, blog, organisations and mentors, as well as support for account creation and login using Facebook, Twitter and GitHub accounts.</p><p>It also includes the new client-side content management features, and a page where members can manage their profiles, rsvp to meetups and submit posts and links.</p><ul class=\"list-inline\"><li><a href=\"http://www.sydjs.com\" target=\"_blank\" title=\"Demo website\" class=\"btn btn-primary\">Launch the site</a></li><li><a href=\"http://github.com/JedWatson/sydjs-site\" target=\"_blank\" title=\"View on GitHub\" class=\"btn btn-default\">View the GitHub Project</a></li></ul><a name=\"production\"></a><h2>KeystoneJS in Production</h2><p>There are an ever-growing number of websites and applications in production powered by KeystoneJS - here are some of our favourites.</p><p>Have you launched a project with KeystoneJS? Let us know! Tweet <a href=\"https://twitter.com/KeystoneJS\" target=\"_blank\">@KeystoneJS</a></p><h3>BodyMindLife</h3><p>BodyMindLife's KeystoneJS-powered website has dynamic content, events, timetables, and pass purchasing integrated with the MindBodyOnline studio management system.</p><ul class=\"list-inline\"><li><a href=\"http://www.bodymindlife.com.au\" target=\"_blank\" title=\"BodyMindLife Yoga Studio\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>CorkDev.io (Tech Meetup)</h3><p>corkdev.io is an open forum of professionals, hackers, architects and software engineers in Cork, Ireland.</p><ul class=\"list-inline\"><li><a href=\"http://corkdev.io/\" target=\"_blank\" title=\"CorkDev.io\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>ExhibitionsRUs</h3><p>The ExhibitionsRUs website is a UK e-commerce site with a product catalogue and shopping cart, built by <a href=\"http://prowebsoftware.net\" target=\"_blank\">ProWebSoftware</a> with KeystoneJS.</p><ul class=\"list-inline\"><li><a href=\"https://www.exhibitionsrus.co.uk\" target=\"_blank\" title=\"ExhibitionsRUs\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>flowthings.io</h3><p>The marketing site for flowthings.io is powered by KeystoneJS. They are a startup from Brooklyn that creates a realtime data analytics solution specially geared towards the Internet of Things.</p><ul class=\"list-inline\"><li><a href=\"https://flowthings.io\" target=\"_blank\" title=\"flowthings.io\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Gold Class Butler</h3><p>KeystoneJS powers the API and payment integration behind Event Cinemas' mobile app for ordering food and drink while you're watching a movie.</p><ul class=\"list-inline\"><li><a href=\"http://www.goldclassbutler.com.au\" target=\"_blank\" title=\"Gold Class Butler\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Hood (Social Network)</h3><p>The idea behind this site is to connect positive people of cheerful spirit and a good heart in every possible way.</p><ul class=\"list-inline\"><li><a href=\"http://www.hood.rs/\" target=\"_blank\" title=\"Hood.rs\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>HS Hackers Philly</h3><p>The High School Hackers meetup crew in Philly have done a great job of taking our SydJS site and making it their own.</p><ul class=\"list-inline\"><li><a href=\"http://hshackers.org\" target=\"_blank\" title=\"HS Hackers Philly\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Macmillan Connect</h3><p>Macmillan Education's next generation of learning applications is powered by KeystoneJS, which provides their licensing system, back-end API, progress synchronisation and mark book generation for teachers.</p><ul class=\"list-inline\"><li><a href=\"http://www.macmillanconnect.com.au\" target=\"_blank\" title=\"Macmillan Connect\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Make &amp; Build</h3><p>Make &amp; Build is a team of digital craftsmen in Atlanta, GA, and you can read their slidedeck about moving from Wordpress to KeystoneJS <a href=\"https://s3.amazonaws.com/mnb_keystone/slidedecks/keystonejs.pdf\" target=\"_blank\" title=\"Make &amp; Build Transition to KeystoneJS Slidedeck\">here</a>.</p><ul class=\"list-inline\"><li><a href=\"http://makeandbuild.com\" target=\"_blank\" title=\"Make &amp; Build\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>MiMi</h3><p>Mimi is driven to create valuable products for a healthier, more empowered and informed user. Combining scientific knowledge with a profound understanding of design, MiMi builds smartphone-based tools for people to hear better.</p><ul class=\"list-inline\"><li><a href=\"http://mimi.io\" target=\"_blank\" title=\"MiMi\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Suit Shop</h3><p>KeystoneJS is behind the beautiful design, dynamic content and appointment setting features and customer area of Suit Shop's website.</p><ul class=\"list-inline\"><li><a href=\"http://www.suitshop.com.au\" target=\"_blank\" title=\"Suit Shop\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Tim Pietrusky</h3><p>Tim has created a unique format for his personal blog, to go with the great content. You can read about his experience transitioning to KeystoneJS in <a href=\"http://timpietrusky.com/restart\">this post</a>.</p><ul class=\"list-inline\"><li><a href=\"http://timpietrusky.com\" target=\"_blank\" title=\"Tim Pietrusky\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Yoga Australia</h3><p>The Yoga Teachers Association of Australia's website and back-end management system is built with KeystoneJS.</p><ul class=\"list-inline\"><li><a href=\"http://www.yogaaustralia.org.au\" target=\"_blank\" title=\"Yoga Australia\" class=\"btn btn-primary\">Launch the site</a></li></ul></div>");;return buf.join("");
},
"en/pages/fetchError": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (error, page) {
buf.push("<p class=\"lead\">Fetch Error</p><p>" + (jade.escape(null == (jade_interp = error) ? "" : jade_interp)) + "</p><p>fetched page: <b>" + (jade.escape((jade_interp = page) == null ? '' : jade_interp)) + "</b></p><p>This could be a CORS error. Check the console for a more detailed reason.</p>");}.call(this,"error" in locals_for_with?locals_for_with.error:typeof error!=="undefined"?error:undefined,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined));;return buf.join("");
},
"en/pages/home": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (version) {
buf.push("<div class=\"home-header\"><div class=\"container\"><img src=\"/images/logo-inverted.svg\" alt=\"KeystoneJS\" width=\"80\" height=\"81\"/><h1>Node.js CMS &amp; Web Application Platform</h1><h2>The open source framework for developing database-driven websites, applications and APIs in Node.js. Built on Express and MongoDB.</h2><div class=\"home-header-buttons\"><a href=\"/quick-start\" title=\"KeystoneJS getting started guide\" class=\"btn btn-lg btn-primary\"><span class=\"hidden-xs\">Get Started</span><span class=\"visible-xs\">Start</span></a><a href=\"http://demo.keystonejs.com\" target=\"_blank\" title=\"Demo Website (new window)\" class=\"btn btn-lg btn-link hidden-xs\">Try the demo</a></div><ul class=\"home-header-list-links\"><li><a href=\"/docs\" title=\"KeystoneJS Documentation\">Read the Documentation</a></li><li>Current version " + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + "</li><li><a href=\"https://github.com/keystonejs/keystone/blob/master/HISTORY.md\" target=\"_blank\" title=\"View Changelog on GitHub\">What's new</a></li><li>Free and open source (MIT)</li></ul><ul class=\"home-header-list-social\"><li class=\"hidden-xs\"><a href=\"/examples\" title=\"Sample Applications\"><i class=\"entypo entypo-network\"></i><span class=\"home-header-social-item\">See examples</span></a></li><li><a href=\"https://twitter.com/keystonejs\" target=\"_blank\"><i class=\"entypo-social entypo-twitter\"></i><span class=\"home-header-social-item\">Follow @KeystoneJS on Twitter</span></a></li><li><a href=\"http://github.com/keystonejs/keystone\" target=\"_blank\"><i class=\"entypo-social entypo-github\"></i><span class=\"home-header-social-item\">Star on Github</span></a></li></ul><div class=\"home-header-brands-title\">Keystone powers websites, apps and APIs for:</div><div class=\"home-header-brands\"><div class=\"home-header-brand\"><img src=\"/images/brand-continental.png\"/></div><div class=\"home-header-brand\"><img src=\"/images/brand-westpac.png\"/></div><div class=\"home-header-brand\"><img src=\"/images/brand-sony.png\"/></div><div class=\"home-header-brand\"><img src=\"/images/brand-event_cinemas.png\"/></div><div class=\"home-header-brand\"><img src=\"/images/brand-vodafone.png\"/></div><div class=\"home-header-brand\"><img src=\"/images/brand-macmillan.png\"/></div></div></div></div><section class=\"intro-section building-section\"><div class=\"container\"><div class=\"section-header\"><h2>Get a head-start on the features you need</h2><p class=\"lead\">KeystoneJS is the easiest way to build database-driven websites, applications and APIs in Node.js.</p></div><div class=\"row\"><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-leaf\"></span><div class=\"feature-content\"><h4>Express.js and MongoDB</h4><p>Keystone will configure express - the de facto web server for node.js - for you and connect to your MongoDB database using Mongoose, the leading ODM package.</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-shuffle\"></span><div class=\"feature-content\"><h4>Dynamic Routes</h4><p>Keystone starts with best practices for setting up your MV* application, and makes it easy to manage your templates, views and routes.</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-picture\"></span><div class=\"feature-content\"><h4>Database Fields</h4><p>IDs, Strings, Booleans, Dates and Numbers are the building blocks of your database. Keystone builds on these with useful, real-world field types like name, email, password, address, image and relationship fields (and more)</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-light-bulb\"></span><div class=\"feature-content\"><h4>Auto-generated Admin UI</h4><p>Whether you use it while you're building out your application, or in production as a database content management system, Keystone's Admin UI will save you time and make managing your data easy.</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-pencil\"></span><div class=\"feature-content\"><h4>Simpler Code</h4><p>Sometimes, async code can get complicated to do simple things. Keystone helps keep simple things - like loading data before displaying it in a view - simple.</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-docs\"></span><div class=\"feature-content\"><h4>Form Processing</h4><p>Want to validate a form, upload an image, and update your database with a single line? Keystone can do that, based on the data models you've already defined.</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-users\"></span><div class=\"feature-content\"><h4>Session Management</h4><p>Keystone comes ready out of the box with session management and authentication features, including automatic encryption for password fields.</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-paper-plane\"></span><div class=\"feature-content\"><h4>Email Sending</h4><p>Keystone makes it easy to set up, preview and send template-based emails for your application. It also integrates with Mandrill (Mailchimp's excellent transaction email sending service)</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3 hidden-sm hidden-lg\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-publish\"></span><div class=\"feature-content\"><h4>Managed Updates</h4><p>Keystone includes an optional updates framework, that can take care of running update scripts for you, making it easy to transition from development to production.</p></div></div></div></div></div></section><section class=\"intro-section feedback-section\"><div class=\"container\"><div class=\"section-header\"><h2>Community Feedback</h2><p class=\"lead\">What people have been saying about KeystoneJS</p></div><div class=\"row\"><div class=\"col-sm-4\"><blockquote lang=\"en\" class=\"twitter-tweet\"><p><a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> It&apos;s by far the best CMS framework I&apos;ve come across.</p>&mdash; Elliott Eastbourne (@e_eastbourne) <a href=\"https://twitter.com/e_eastbourne/status/581819586212925440\">March 28, 2015</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p>Wow, there is an awesome <a href=\"https://twitter.com/hashtag/nodejs?src=hash\">#nodejs</a> <a href=\"https://twitter.com/hashtag/cms?src=hash\">#cms</a>, nice to meet you <a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> !</p>&mdash; Marcell Kiss (@kmarci88) <a href=\"https://twitter.com/kmarci88/status/576303451778478080\">March 13, 2015</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p>Really impressed by <a href=\"https://twitter.com/KeystoneJS\">@keystonejs</a>. We&apos;re having fun building our new site with it down at the <a href=\"https://twitter.com/futurecitiescat\">@futurecitiescat</a> lab. <a href=\"http://t.co/befOjrSENQ\">http://t.co/befOjrSENQ</a> <a href=\"https://twitter.com/hashtag/js?src=hash\">#js</a></p>&mdash; Tom Hartnell (@tomhartnell) <a href=\"https://twitter.com/tomhartnell/status/560776490011590656\">January 29, 2015</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p>So decided to peruse CMS frameworks built in NodeJS. <a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> is rock solid and so damn simple to use!</p>&mdash; Joshua Jung (@joshua_p_jung) <a href=\"https://twitter.com/joshua_p_jung/status/541266458987466752\">December 6, 2014</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p><a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> is simply blowing my mind! Loving it :)</p>&mdash; Nick Loyal (@craftbynick) <a href=\"https://twitter.com/craftbynick/status/504604182935240704\">August 27, 2014</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p>Starting with <a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> , it is momentous &amp; beauteous, kudos to the team behind this awe-inspiring masterpiece.</p>&mdash; Shreyansh Jaiswal (@shreyanshsum) <a href=\"https://twitter.com/shreyanshsum/status/478845070527832064\">June 17, 2014</a></blockquote></div><div class=\"col-sm-4\"><blockquote lang=\"en\" class=\"twitter-tweet\"><p>Trying out <a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> to build my portfolio site, it&apos;s brilliant! <a href=\"https://twitter.com/hashtag/nodejs?src=hash\">#nodejs</a> <a href=\"https://twitter.com/hashtag/expressjs?src=hash\">#expressjs</a> <a href=\"https://twitter.com/hashtag/meanstack?src=hash\">#meanstack</a></p>&mdash; Graeme Fulton (@graeme_fulton) <a href=\"https://twitter.com/graeme_fulton/status/581421065303392256\">March 27, 2015</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p>Been using <a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> in a couple projects and so far I think it&apos;s really <a href=\"https://twitter.com/hashtag/awesome?src=hash\">#awesome</a>! If you don&apos;t know what it is, check it out already! :)</p>&mdash; Juhani Kumara (@JuhaniKumara) <a href=\"https://twitter.com/JuhaniKumara/status/576650515204943872\">March 14, 2015</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p>The folks <a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> created an awesome CMS / Framework for <a href=\"https://twitter.com/hashtag/nodejs?src=hash\">#nodejs</a>. <a href=\"https://twitter.com/hashtag/express?src=hash\">#express</a>, <a href=\"https://twitter.com/hashtag/mongodb?src=hash\">#mongodb</a>, <a href=\"https://twitter.com/hashtag/less?src=hash\">#less</a>, <a href=\"https://twitter.com/hashtag/bootstrap?src=hash\">#bootstrap</a>, <a href=\"https://twitter.com/hashtag/responsive?src=hash\">#responsive</a>. Wow!</p>&mdash; Daniel Khan (@dkhan) <a href=\"https://twitter.com/dkhan/status/564421474107535360\">February 8, 2015</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p>Have come back to <a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> to build my portfolio with and I must say I am constantly discovering things that impress me!</p>&mdash; Tim Veletta (@TimVeletta) <a href=\"https://twitter.com/TimVeletta/status/540521334040588290\">December 4, 2014</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p><a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> is the awe in awesome. :)</p>- Lasana Murray (@metasansana)<a href=\"https://twitter.com/metasansana/statuses/458414971492507650\">April 22, 2014</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p><a href=\"https://twitter.com/JedWatson\">@JedWatson</a> <a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> Thanks for the immense effort. You are enabling a lot of productivity for a lot of developers. <a href=\"https://twitter.com/search?q=%23LoveKeystoneJS&amp;src=hash\">#LoveKeystoneJS</a></p>- Jason Welch (@JChristopherW)<a href=\"https://twitter.com/JChristopherW/statuses/451872595512922112\">April 4, 2014</a></blockquote></div><div class=\"col-sm-4\"><blockquote lang=\"en\" class=\"twitter-tweet\"><p><a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS\n congrats guys, great framework</a></p>&mdash; Hugo Di Francesco (@hugo__df) <a href=\"https://twitter.com/hugo__df/status/585691583653220352\">April 8, 2015</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p><a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> that was the easiest setup of my life!</p>&mdash; Tom Newby (@tomnewbyau) <a href=\"https://twitter.com/tomnewbyau/status/579080171430359041\">March 21, 2015</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p><a href=\"http://t.co/2VSm33YS7b\">http://t.co/2VSm33YS7b</a> is the best node based CMS I&apos;ve found so far. Lot&apos;s of community support and good docs. <a href=\"https://twitter.com/hashtag/webdev?src=hash\">#webdev</a> <a href=\"https://twitter.com/hashtag/nodejs?src=hash\">#nodejs</a></p>&mdash; Christopher Marshall (@thoughtpalette) <a href=\"https://twitter.com/thoughtpalette/status/555026285689188352\">January 13, 2015</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p>If you are developing websites for small to medium (and even large) companies, you cant ignore KeystoneJS.... <a href=\"http://t.co/fFpD2UDNsk\">http://t.co/fFpD2UDNsk</a></p>&mdash; John Cardwell (@saddacracker) <a href=\"https://twitter.com/saddacracker/status/536346807807524864\">November 23, 2014</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p><a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> is the way to go. Very fun and easy to develop with. IT&apos;S THE FUTURE!</p>&mdash; Gabriel Jablanczy (@Jblnczy) <a href=\"https://twitter.com/Jblnczy/status/511123171362500608\">September 14, 2014</a></blockquote><blockquote lang=\"en\" class=\"twitter-tweet\"><p><a href=\"https://twitter.com/KeystoneJS\">@KeystoneJS</a> So far, I&apos;m loving Keystone&apos;s versatility! I use WordPress for a lot, but this does so much more, and more easily! Thanks!</p>&mdash; Codacity (@Codacity) <a href=\"https://twitter.com/Codacity/status/493098291932823553\">July 26, 2014</a></blockquote></div></div><hr/><div class=\"section-header\"><a href=\"https://twitter.com/keystonejs\" data-show-count=\"true\" data-size=\"large\" class=\"twitter-follow-button\">Follow @keystonejs</a></div></div></section><section class=\"intro-section admin-section\"><div class=\"container\"><div class=\"section-header\"><h2>Admin Interface</h2><p class=\"lead\">Keystone gives you a beautiful, customisable Admin UI based on your models</p></div></div><div class=\"container admin-image-full\"><img src=\"/images/home/admin-interface.png\" class=\"img-responsive\"/></div></section><section class=\"intro-section tools-section\"><span class=\"tool-icon tool-icon__cloud entypo entypo-cloud\"></span><span class=\"tool-icon tool-icon__rocket entypo entypo-rocket\"></span><div class=\"container\"><div class=\"section-header\"><h2 class=\"text-center\">What you build is up to you.</h2><p class=\"lead\">There are a lot of frameworks that make decisions for you, and many that take decisions away. Keystone doesn't do that. Use the features that suit you, and replace the ones that don't.</p></div><div class=\"big-icon\"><span class=\"entypo entypo-tools\"></span></div><div class=\"row\"><div class=\"col-sm-6 col-md-3\"><h4>Built on Express</h4><p>Keystone can configure Express for you, or you can take over and treat Keystone like any other Express middleware.</p><p>You can also easily integrate it into an existing Express app.</p></div><div class=\"col-sm-6 col-md-3\"><h4>Powered by MongoDB</h4><p>Keystone uses Mongoose, the leading ODM for node.js and MongoDB, and gives you a single place for your schema, \nvalidation rules and logic.</p><p>So anything you can build with MongoDB, you can build with Keystone.</p></div><div class=\"col-sm-6 col-md-3\"><h4>Lightweight and flexible</h4><p>Keystone is designed to be as light as you want - you can pick and choose the features you want to include.</p><p>Create your own routes, your own database schema, and use any template language you like.</p></div><div class=\"col-sm-6 col-md-3\"><h4>Extendable</h4><p>One of the greatest things about node.js is the vast number of quality packages available.</p><p>Keystone is designed to let you use any of them, without losing the benefits it provides.</p></div></div></div></section><section class=\"intro-section cta-section\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"left-col\"><h3><a href=\"/quick-start\" title=\"KeystoneJS Getting Started\">Get Started &rarr;</a></h3><p class=\"lead\">Sound like what you've been looking for? Check out the getting started guide and learn how to get up and running in less than a minute.</p></div></div><div class=\"col-sm-6\"><div class=\"right-col\"><h3><a href=\"mailto:contact@keystonejs.com\">Get in Touch &rarr;</a></h3><p class=\"lead\">If you are using Keystone for a project, interested in contributing, or looking for commercial support, we'd love to hear about it. Please contact us.</p></div></div></div></div></section><script async=\"\" src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");}.call(this,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
},
"en/pages/journal": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>ES6 React SPA  </h1><p class=\"lead\">Using System.js and babel to build a new KeystoneJS.com SPA with React.</p></div></div><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><div class=\"jl-guide\"><!-- goals--><div class=\"jl-guide-section\"><div class=\"container\"><div class=\"jl-guide__header\"><h2 class=\"jl-guide__title\"><div class=\"jl-guide__title-label\"> \n Goals <div class=\"jl-guide__title-info\"> rundown of our requirements for a complete project    </div></div></h2></div><p>The goal of this guide will be to take a current ExpressJS website built with Jade templates and convert it into a React based SPA integrated with Keystone. The current jade templates will remain and be included via plugin. A route config file will be used to designate the process for compiling each page.</p><p> We will perform this excercise with source code from the current website for <a href=\"https://github.com/keystonejs/keystonejs-site\">KeystoneJS.com</a>.  Since the final output will need to be a <code>gh-pages</code> deployment, this guide will also document that process as well.  </p><p>In place of webpack / browserify we will use <a href=\"https://github.com/systemjs/systemjs\">System.js</a> and build based on ES6 making use of <a href=\"http://babeljs.io\">babel</a></p><Rundown></Rundown><ul><li>ES6 with System.js and babel</li><li>SPA using React and React-Router</li><li>Add Keystone to current express setup</li><li>Build process to deploy static version to  <code>gh-pages</code> branch</li></ul></div></div><!-- prepare--><div class=\"jl-guide-section\"><div class=\"container\"><div class=\"jl-guide__header\"><h2 class=\"jl-guide__title\"><div class=\"jl-guide__title-label\"> <div class=\"jl-guide__title-count\"><span class=\"jl-guide__title-count\">1</span></div> Prepare <div class=\"jl-guide__title-info\"> get your code base ready  </div></div></h2></div><p>We will start by cloning our repo and creating a new branch <b>spa</b>.  Pick a unique branch for you if working from a current local repo.  </p><pre class=\"line-numbers language-javascript\">git clone git@github.com:keystonejs/keystonejs-site.git  \ncd keystonejs-site \ngit checkout -b spa  </pre><p>Create a new folder for our client files.  We will serve this as a static just like public.  </p><pre class=\"command-line\"><code class=\"language-javascript\">mkdir client </code></pre><p>Install and save our new dependencies.  </p><pre class=\"command-line\"><code class=\"language-javascript\">npm i --save systemjs babel typescript keystone react react-router  </code></pre></div></div><div class=\"jl-guide-section\"><div class=\"container\"> \t\t\t\t<div class=\"jl-guide__header\"><h2 class=\"jl-guide__title\"><div class=\"jl-guide__title-label\"> <div class=\"jl-guide__title-count\"><span class=\"jl-guide__title-count\">2</span></div>Client Files<div class=\"jl-guide__title-info\">create your new client app </div></div></h2></div><h3>Rework our jade files</h3><p>We still like using jade.  It is quick, good for large blocks of html, and having seperate files is easier for multiple parties to maintain.  </p><p>For our SPA we only need an index file.  We will create a new base file and remove the template include lines from each of the content files. The old base file can eventually be removed.  </p><p class=\"note\">You do not have to remove all of the template includes from your content files.  Instead, rename each appropriate template file and replace it with a blank one.</p><div class=\"code-header\"><h4> Create your SPA index file. </h4><p>Copy <code>content/common/templates/layout/base.jade</code> to <code>content/common/templates/layout/spa_base.jade</code> and add a named div.</p><p>Replace the old javascript with the system.js tag.  We will add our app later.  </p></div><pre class=\"language-javascript\"><code class=\"language-markup\">\n\t// old code\n\t\t.docs-body\n\t\t\tblock content\n\t\t\n\t// replace with\n\t\t.docs-body\n\t\t\t#keystonejs-spa\n\t\t\n\t/* javascript tag */\n\t// old code\n\t\tscript(src=\"/js/lib/jquery/jquery-1.10.2.min.js\")\n\t\tscript(src='/js/lib/bootstrap/collapse.js')\n\t\t//- script(src='/js/lib/bootstrap/dropdown.js')\n\t\tscript(src='/js/lib/prism/prism.min.js')\n\t\tscript(src='/js/anchor-links.js')\n\t\tscript(src='/js/api-code.js')\n\t\n\t// replace with\n\t\tscript(src=\"system.js\")\n\t\n</code>\n\n</pre><h3>Create a folder for your project</h3><p>Create your project wherever you want:</p><pre class=\"command-line\">mkdir my-test-project</pre><p>Than make sure you're in your new project:</p><pre class=\"command-line\">cd my-test-project</pre><h3>Run the generator</h3><pre class=\"command-line\">yo keystone</pre><p>The generator will ask you a few questions about what features you'd like to include, then configure and copy all the files you'll need into your project.</p><p>It will also install dependencies from npm so you're ready to go.</p></div></div><div class=\"jl-guide-figure jl-guide-figure--commands hidden-xs\"><div class=\"window safari\"><img src=\"/images/getting-started/commands-safari.png\" alt=\"Safari window\" width=\"942\" height=\"616\"/></div><div class=\"window terminal\"><div class=\"terminal-cursor\"></div><img src=\"/images/getting-started/commands-terminal.png\" alt=\"Terminal window\" width=\"650\" height=\"437\"/></div><div class=\"figure-shadow\"></div></div><div class=\"jl-guide-section\"><div class=\"container-sm\"><div class=\"jl-guide__header\"><h2 class=\"jl-guide__title\"><span class=\"jl-guide__title-count\">3</span><div class=\"jl-guide__title-label\">You're Done!</div></h2><p class=\"jl-guide__subtitle\">So you just created your first KeystoneJS project, congrats!</p><p class=\"jl-guide__subtitle\">Run it in your command line like this:</p><pre class=\"command-line\">node keystone</pre><p class=\"jl-guide__subtitle\">Then open <a href=\"http://localhost:3000\" target=\"_blank\">http://localhost:3000</a> to view it in your browser.</p><p class=\"jl-guide__subtitle\">If you want to see what the generator actually did take a look at our getting started guide, it'll walk you through the manual setup process. This is particularly helpful if you're new to Node.js.</p><p class=\"jl-guide__subtitle\"><a href=\"/docs/getting-started\">View the getting started guide &rarr;</a></p></div></div></div><div class=\"jl-guide-figure jl-guide-figure--finished wow-much-find hidden-xs\"><img src=\"/images/getting-started/commands-safari.png\" alt=\"Safari window\" width=\"1680\" height=\"600\" class=\"sr-only\"/></div><div class=\"jl-guide-section\"><div class=\"container-sm\"><div class=\"jl-guide__header\"><h2 class=\"jl-guide__title\"><span class=\"jl-guide__title-count\">?</span><div class=\"jl-guide__title-label\">Problems</div></h2><p class=\"jl-guide__subtitle\">Something went wrong? Hopefully these tips will help.</p><h3>ERR! Please try running this command again as root/Administrator.</h3><p>When running npm install -g generator-keystone, you may get an EACCES error asking you to run the command again as root/Administrator. This indicates that there is a permissions issue.</p><p>On your development system you can change directory ownership to the current $USER so you do not have to run sudo while installing untrusted code:</p><pre>sudo chown -R $USER /usr/local\n \n# Other directories may be required depending on your O/S\nsudo chown -R $USER /usr/lib/node_modules/</pre><p>For a production/shared environment you may wish to re-run the npm command with the sudo prefix:</p><pre>sudo npm install -g generator-keystone</pre><p>For more information, see the <a href='http://foohack.com/2010/08/intro-to-npm/#what_no_sudo', target='_blank'>\"What, no sudo?\"</a> of the Intro to npm by Isaac Schulueter.</p><h3>What do you mean it couldn't find my Database?</h3><p>By default, KeystoneJS will look for a MongoDB server running on localhost on the default port, and connect to it. If you're getting errors related to the MongoDB connection, make sure your MongoDB server is running.</p><p>If you haven't installed MongoDB yet, follow <a href=\"https://www.mongodb.org/downloads\" target=\"_blank\">the official instructions.</a></p><p>To connect to a server other than localhost, add a MONGO_URI setting to the .env file in your Keystone project directory:</p><pre>MONGO_URI=mongodb://your-server/database-name</pre><h3>Something else?</h3><p class=\"jl-guide__subtitle\">If your issue still isn't resolved, reach out to us on the <a href=\"https://groups.google.com/d/forum/keystonejs\" target=\"_blank\">KeystoneJS Google Group</a>.</p></div></div></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/starting": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"page-header\"><div class=\"container\"><h1>quick:start  </h1><p class=\"lead\">.the(fastest way to create a Node.js website)<br /> .for(a deeper dive, <a href=\"/docs/getting-started\">check out the docs)</a></p></div></div><div class=\"gs-guide\"><div class=\"gs-guide-section\"><div class=\"container-sm\"><div class=\"gs-guide__header\"><h2 class=\"gs-guide__title\"><span class=\"gs-guide__title-count\">1</span><div class=\"gs-guide__title-label\">Prerequisites</div></h2><div class=\"gs-guide__subtitle\"><p>Before you begin, make sure you have <a href=\"http://nodejs.org/download\" target=\"_blank\">Node.js</a> 0.10+ installed and <a href=\"http://www.mongodb.org/downloads\" target=\"_blank\">MongoDB</a> v2.4+ installed and running.</p><p>You'll need a reasonable working knowledge of Javascript to use KeystoneJS, as well as familiarity with basics such as database concepts, and using node / npm etc.</p></div></div></div></div><div class=\"gs-guide-figure gs-guide-figure--prerequisites hidden-xs\"><div class=\"column nodejs\"><a href=\"http://nodejs.org/download/\" target=\"_blank\"><div class=\"logo\"><img src=\"/images/getting-started/nodejs-logo.png\" alt=\"Node.js logo\" width=\"245\" height=\"66\"/></div><span class=\"prerequisite\">Download and install the Node.js binaries for your platform from the Node.js download page.</span></a></div><div class=\"column mongodb\"><a href=\"http://docs.mongodb.org/manual/installation/\" target=\"_blank\"><div class=\"logo\"><img src=\"/images/getting-started/mongodb-logo.png\" alt=\"MongoDB logo\" width=\"294\" height=\"84\"/></div><span class=\"prerequisite\">See the MongoDB installation guide for how to install MongoDB on your operating system.</span></a></div></div><div class=\"gs-guide-section\"><div class=\"container-sm\"><div class=\"gs-guide__header\"><h2 class=\"gs-guide__title\"><span class=\"gs-guide__title-count\">2</span><div class=\"gs-guide__title-label\">Commands</div></h2></div><h3>Install the generator</h3><p>You'll be using the <a href='https://github.com/keystonejs/generator-keystone', target='_blank'>KeystoneJS generator</a> made with <a href='http://yeoman.io/', target='_blank'>Yeoman</a>. In your root directory run:</p><pre class=\"command-line\">npm install -g generator-keystone</pre><h3>Create a folder for your project</h3><p>Create your project wherever you want:</p><pre class=\"command-line\">mkdir my-test-project</pre><p>Than make sure you're in your new project:</p><pre class=\"command-line\">cd my-test-project</pre><h3>Run the generator</h3><pre class=\"command-line\">yo keystone</pre><p>The generator will ask you a few questions about what features you'd like to include, then configure and copy all the files you'll need into your project.</p><p>It will also install dependencies from npm so you're ready to go.</p></div></div><div class=\"gs-guide-figure gs-guide-figure--commands hidden-xs\"><div class=\"window safari\"><img src=\"/images/getting-started/commands-safari.png\" alt=\"Safari window\" width=\"942\" height=\"616\"/></div><div class=\"window terminal\"><div class=\"terminal-cursor\"></div><img src=\"/images/getting-started/commands-terminal.png\" alt=\"Terminal window\" width=\"650\" height=\"437\"/></div><div class=\"figure-shadow\"></div></div><div class=\"gs-guide-section\"><div class=\"container-sm\"><div class=\"gs-guide__header\"><h2 class=\"gs-guide__title\"><span class=\"gs-guide__title-count\">3</span><div class=\"gs-guide__title-label\">You're Done!</div></h2><p class=\"gs-guide__subtitle\">So you just created your first KeystoneJS project, congrats!</p><p class=\"gs-guide__subtitle\">Run it in your command line like this:</p><pre class=\"command-line\">node keystone</pre><p class=\"gs-guide__subtitle\">Then open <a href=\"http://localhost:3000\" target=\"_blank\">http://localhost:3000</a> to view it in your browser.</p><p class=\"gs-guide__subtitle\">If you want to see what the generator actually did take a look at our getting started guide, it'll walk you through the manual setup process. This is particularly helpful if you're new to Node.js.</p><p class=\"gs-guide__subtitle\"><a href=\"/docs/getting-started\">View the getting started guide &rarr;</a></p></div></div></div><div class=\"gs-guide-figure gs-guide-figure--finished wow-much-find hidden-xs\"><img src=\"/images/getting-started/commands-safari.png\" alt=\"Safari window\" width=\"1680\" height=\"600\" class=\"sr-only\"/></div><div class=\"gs-guide-section\"><div class=\"container-sm\"><div class=\"gs-guide__header\"><h2 class=\"gs-guide__title\"><span class=\"gs-guide__title-count\">?</span><div class=\"gs-guide__title-label\">Problems</div></h2><p class=\"gs-guide__subtitle\">Something went wrong? Hopefully these tips will help.</p><h3>ERR! Please try running this command again as root/Administrator.</h3><p>When running npm install -g generator-keystone, you may get an EACCES error asking you to run the command again as root/Administrator. This indicates that there is a permissions issue.</p><p>On your development system you can change directory ownership to the current $USER so you do not have to run sudo while installing untrusted code:</p><pre>sudo chown -R $USER /usr/local\n \n# Other directories may be required depending on your O/S\nsudo chown -R $USER /usr/lib/node_modules/</pre><p>For a production/shared environment you may wish to re-run the npm command with the sudo prefix:</p><pre>sudo npm install -g generator-keystone</pre><p>For more information, see the <a href='http://foohack.com/2010/08/intro-to-npm/#what_no_sudo', target='_blank'>\"What, no sudo?\"</a> of the Intro to npm by Isaac Schulueter.</p><h3>What do you mean it couldn't find my Database?</h3><p>By default, KeystoneJS will look for a MongoDB server running on localhost on the default port, and connect to it. If you're getting errors related to the MongoDB connection, make sure your MongoDB server is running.</p><p>If you haven't installed MongoDB yet, follow <a href=\"https://www.mongodb.org/downloads\" target=\"_blank\">the official instructions.</a></p><p>To connect to a server other than localhost, add a MONGO_URI setting to the .env file in your Keystone project directory:</p><pre>MONGO_URI=mongodb://your-server/database-name</pre><h3>Something else?</h3><p class=\"gs-guide__subtitle\">If your issue still isn't resolved, reach out to us on the <a href=\"https://groups.google.com/d/forum/keystonejs\" target=\"_blank\">KeystoneJS Google Group</a>.</p></div></div></div></div>");;return buf.join("");
},
"en/templates/left-menu": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
jade_mixins["docsnav"](docssection);}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"zh/pages/404": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"page-header page-header\"><div class=\"container\"><h1>404</h1><p class=\"lead\">Oh snap! That page doesn't exist</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\"><div class=\"docs-sidebar-info\"><p>You're on this page because the page you requested has been moved or deleted.</p><p>Check out the links on the right to find your way.</p></div></div><div class=\"col-sm-9\"><div class=\"docs-content\"><div class=\"row\"><div class=\"col-sm-6\"><h3>On this site</h3><ul class=\"list-unstyled lead\"><li><a href=\"/zh/getting-started\" title=\"KeystoneJS Getting Started\">Getting Started</a></li><li><a href=\"/zh/docs/configuration\" title=\"KeystoneJS Configuration\">KeystoneJS Configuration</a></li><li><a href=\"/zh/docs/database\" title=\"KeystoneJS Database\">Database Setup</a></li><li><a href=\"/zh/examples\" title=\"KeystoneJS Application\">Examples Applications</a></li></ul></div><div class=\"col-sm-6\"><h3>Other resources</h3><ul class=\"list-unstyled lead\"><li><a href=\"https://github.com/keystonejs/keystone\" target=\"_blank\" title=\"Github Project\">Github Project</a></li><li><a href=\"http://demo.keystonejs.com\" target=\"_blank\" title=\"Demo Website\">Demo Website</a></li><li><a href=\"https://groups.google.com/forum/#!forum/keystonejs\" target=\"_blank\" title=\"Demo Website\">Google Group</a></li></ul></div></div></div></div></div></div>");;return buf.join("");
},
"zh/pages/examples": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"page-header\"><div class=\"container\"><h1>示例</h1><p class=\"lead\">下面这些例子很好地展示了Keystone的能力，以及如何使用它的各种功能。</p></div></div><div style=\"margin-bottom: 3em;\" class=\"container-sm\"><a name=\"app\"></a><h2>应用程序</h2><a name=\"app-demo\"></a><h3>演示App</h3><p>演示app是个简单实现，演示了如何创建一个博客、照片库和联系表单，以及如何设置会话管理、错误处理和csv下载。</p><p>你还可以用demo账号登录到Keystone管理界面中看看它是如何工作的。</p><ul class=\"list-inline\"><li><a href=\"http://demo.keystonejs.com\" target=\"_blank\" title=\"Demo website\" class=\"btn btn-primary\">打开网站</a></li><li><a href=\"http://github.com/JedWatson/keystone-demo\" target=\"_blank\" title=\"View on GitHub\" class=\"btn btn-default\">查看GitHub项目</a></li></ul><a name=\"app-sydjs\"></a><h3>SydJS网站</h3><p><a href='http://www.thinkmill.com.au/' target='_blank'>Thinkmill</a>的团队用Keystone为SydJS（悉尼Javascript聚会）创建了一个新网站。</p><p>它是一个聚会、会员、链接、博客、组织和教练的数据库，还支持创建账号，以及用Facebook、Twitter和GitHub账号登录。</p><p>它还包含新的客户端内容管理功能，有供会员管理自己档案、响应聚会和提交文章和链接的页面。</p><ul class=\"list-inline\"><li><a href=\"http://www.sydjs.com\" target=\"_blank\" title=\"Demo website\" class=\"btn btn-primary\">打开网站</a></li><li><a href=\"http://github.com/JedWatson/sydjs-site\" target=\"_blank\" title=\"View on GitHub\" class=\"btn btn-default\">查看GitHub项目</a></li></ul><a name=\"production\"></a><h2>用于生产中的KeystoneJS</h2><p>在生产环境中由KeystoneJS支撑的网站和应用程序越来越多 - 这里有几个我们比较喜欢的。</p><p>你启用了使用KeystoneJS的网站吗？告诉我们吧！ Tweet <a href=\"https://twitter.com/KeystoneJS\" target=\"_blank\">@KeystoneJS</a></p><h3>制作 &amp; 构建</h3><p>Make &amp; Build is a team of digital craftsmen in Atlanta, GA, and you can read their slidedeck about moving from Wordpress to KeystoneJS <a href=\"https://s3.amazonaws.com/mnb_keystone/slidedecks/keystonejs.pdf\" target=\"_blank\" title=\"Make &amp; Build Transition to KeystoneJS Slidedeck\">here</a>.</p><ul class=\"list-inline\"><li><a href=\"http://makeandbuild.com\" target=\"_blank\" title=\"Make &amp; Build\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Gold Class Butler</h3><p>KeystoneJS powers the API and payment integration behind Event Cinemas' mobile app for ordering food and drink while you're watching a movie.</p><ul class=\"list-inline\"><li><a href=\"http://www.goldclassbutler.com.au\" target=\"_blank\" title=\"Gold Class Butler\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Macmillan Connect</h3><p>Macmillan Education's next generation of learning applications is powered by KeystoneJS, which provides their licensing system, back-end API, progress synchronisation and mark book generation for teachers.</p><ul class=\"list-inline\"><li><a href=\"http://www.macmillanconnect.com.au\" target=\"_blank\" title=\"Macmillan Connect\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Yoga Australia</h3><p>The Yoga Teachers Association of Australia's website and back-end management system is built with KeystoneJS.</p><ul class=\"list-inline\"><li><a href=\"http://www.yogaaustralia.org.au\" target=\"_blank\" title=\"Yoga Australia\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Suit Shop</h3><p>KeystoneJS is behind the beautiful design, dynamic content and appointment setting features and customer area of Suit Shop's website.</p><ul class=\"list-inline\"><li><a href=\"http://www.suitshop.com.au\" target=\"_blank\" title=\"Suit Shop\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Tim Pietrusky</h3><p>Tim has created a unique format for his personal blog, to go with the great content. You can read about his experience transitioning to KeystoneJS in <a href=\"http://timpietrusky.com/restart\">this post</a>.</p><ul class=\"list-inline\"><li><a href=\"http://timpietrusky.com\" target=\"_blank\" title=\"Tim Pietrusky\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>BodyMindLife</h3><p>BodyMindLife's KeystoneJS-powered website has dynamic content, events, timetables, and pass purchasing integrated with the MindBodyOnline studio management system.</p><ul class=\"list-inline\"><li><a href=\"http://www.bodymindlife.com.au\" target=\"_blank\" title=\"BodyMindLife Yoga Studio\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>ExhibitionsRUs</h3><p>The ExhibitionsRUs website is a UK e-commerce site with a product catalogue and shopping cart, built by <a href=\"http://prowebsoftware.net\" target=\"_blank\">ProWebSoftware</a> with KeystoneJS.</p><ul class=\"list-inline\"><li><a href=\"https://www.exhibitionsrus.co.uk\" target=\"_blank\" title=\"ExhibitionsRUs\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>Hood (Social Network)</h3><p>The idea behind this site is to connect positive people of cheerful spirit and a good heart in every possible way.</p><ul class=\"list-inline\"><li><a href=\"http://www.hood.rs/\" target=\"_blank\" title=\"Hood.rs\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>CorkDev.io (Tech Meetup)</h3><p>corkdev.io is an open forum of professionals, hackers, architects and software engineers in Cork, Ireland.</p><ul class=\"list-inline\"><li><a href=\"http://corkdev.io/\" target=\"_blank\" title=\"CorkDev.io\" class=\"btn btn-primary\">Launch the site</a></li></ul><h3>HS Hackers Philly</h3><p>The High School Hackers meetup crew in Philly have done a great job of taking our SydJS site and making it their own.</p><ul class=\"list-inline\"><li><a href=\"http://hshackers.org\" target=\"_blank\" title=\"HS Hackers Philly\" class=\"btn btn-primary\">Launch the site</a></li></ul></div>");;return buf.join("");
},
"zh/pages/home": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (version) {
buf.push("<div class=\"home-header\"><div class=\"container\"><img src=\"/images/logo-inverted.svg\" alt=\"KeystoneJS\" width=\"80\" height=\"81\"/><h1>以Express和MongoDB为基础搭建的Node.js CMS和web应用程序平台。</h1><div class=\"home-header-buttons\"><a href=\"/zh/getting-started\" title=\"KeystoneJS getting started guide\" class=\"btn btn-lg btn-primary\"><span class=\"hidden-xs\">入门</span><span class=\"visible-xs\">开始</span></a><a href=\"http://demo.keystonejs.com\" target=\"_blank\" title=\"Demo Website (new window)\" class=\"btn btn-lg btn-link hidden-xs\">试用Demo</a></div><ul class=\"home-header-list-links\"><li><a href=\"/zh/docs\" title=\"KeystoneJS Documentation\">文档</a></li><li class=\"hidden-xs\"><a href=\"/zh/examples\" title=\"Sample Applications\">例子</a></li><li>Current version " + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + "</li><li><a href=\"https://github.com/keystonejs/keystone/blob/master/HISTORY.md\" target=\"_blank\" title=\"View Changelog on GitHub\">新变化</a></li><li>Keystone是免费的开源软件。(MIT 授权)</li></ul><ul class=\"home-header-list-social\"><li><a href=\"https://twitter.com/keystonejs\" target=\"_blank\"><i class=\"entypo-social entypo-twitter\"></i><span class=\"home-header-social-item\">Follow on Twitter</span></a></li><li><a href=\"http://github.com/keystonejs/keystone\" target=\"_blank\"><i class=\"entypo-social entypo-github\"></i><span class=\"home-header-social-item\">GitHub 项目</span></a></li></ul></div></div><section class=\"intro-section building-section\"><div class=\"container\"><div class=\"section-header\"><h2>在你需要的功能上领先一步</h2><p class=\"lead\">在Node.js中，用Keystone搭建数据驱动的网站、应用程序和API是最容易的。</p></div><div class=\"row\"><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-leaf\"></span><div class=\"feature-content\"><h4>Express.js和MongoDB</h4><p>Keystone会为你配置express（node.js事实上的Web服务器），用Mongoose（领先的ODM包）连接你的MongoDB数据库。 </p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-shuffle\"></span><div class=\"feature-content\"><h4>动态路由</h4><p>Keystone从设置MV*程序的最佳实践入手，让你管理模板、视图和路由变得更容易。</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-picture\"></span><div class=\"feature-content\"><h4>数据库域</h4><p>ID、String、Boolean、Date和Number是数据库的构件。Keystone以它们为基础实现了在现实工作中更实用的域类型，比如name、email、password、address、image和relationship (及其它)</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-light-bulb\"></span><div class=\"feature-content\"><h4>自动生成管理员界面</h4><p>不管你在搭建应用程序，或者在生产环境中作为数据库内容管理系统时是否用它，Keystone的管理员界面都能节省你的时间，让你管理数据更容易。</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-pencil\"></span><div class=\"feature-content\"><h4>编码更简单</h4><p>有时即便做的事情简单，异步代码也会变得复杂。Keystone让简单的事情（比如在视图中显示之前加载数据）保持简单。</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-docs\"></span><div class=\"feature-content\"><h4>表单处理</h4><p>要验证表单、上次图片或用一行代码更新数据库？基于你已经定义的数据模型，Keystone可以做到。</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-users\"></span><div class=\"feature-content\"><h4>会话管理</h4><p>Keystone自带了会话管理和认证功能，包括密码域的自动加密。</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-paper-plane\"></span><div class=\"feature-content\"><h4>发送Email</h4><p>借助Keystone，你的应用程序可以轻松地设置、预览和发送基于模板的email。它还集成了Mandrill (Mailchimp卓越的事务性email发送服务)</p></div></div></div><div class=\"col-sm-6 col-md-4 col-lg-3 hidden-sm hidden-lg\"><div class=\"feature-panel\"><span class=\"feature-icon entypo entypo-publish\"></span><div class=\"feature-content\"><h4>管理式升级</h4><p>Keystone包含一个可选的升级框架，可以替你运行升级升级脚本，方便从开发环境向生产环境切换。</p></div></div></div></div></div></section><section class=\"intro-section admin-section\"><div class=\"container\"><div class=\"section-header\"><h2>管理界面</h2><p class=\"lead\">Keystone基于模型给你生成一个漂亮的、可定制的管理界面</p></div></div><div class=\"container-sm\"><div class=\"row\"><div class=\"col-sm-6\"><h3>你需要的一切</h3><p>创建、管理、编辑、删除。Keystone的管理界面会提供基本功能，所以你就不用自己做了。</p><p>配置哪些域可以编辑，哪些模型可以创建，并按你的心意定制一切。</p></div><div class=\"col-sm-6\"><div class=\"admin-image\"><img src=\"/images/home/inline-item-creation.png\" class=\"img-responsive img-circle\"/></div></div></div><div class=\"row\"><div class=\"col-sm-6 col-sm-push-6\"><h3>响应式 &amp; 主题化</h3><p>想在路上用你的CMS？Keystone可以让你得偿所愿。</p><p>Keystone的管理员界面是在Bootstrap 3基础上做的，可以适应所有屏幕尺寸和设备。</p><p>你也可以用互联网上最流行的css框架修改主题 (或者去掉我们的)。</p></div><div class=\"col-sm-6 col-sm-pull-6\"><div class=\"admin-image\"><img src=\"/images/home/responsive-design.png\" class=\"img-responsive img-circle\"/></div></div></div><div class=\"row\"><div class=\"col-sm-6\"><h3>精巧的过滤</h3><p>Keystone的管理界面不仅仅是搜索和让你基于数据库中的任何域可视化地创建自己的查询。</p><p>每种域类型都有自己的规则和UI - 所以你可以根据日期、位置等进行过滤。</p></div><div class=\"col-sm-6\"><div class=\"admin-image\"><img src=\"/images/home/sophisticated-filtering.png\" class=\"img-responsive img-circle\"/></div></div></div><div class=\"row\"><div class=\"col-sm-6 col-sm-push-6\"><h3>漂亮的表单</h3><p>Keystone不仅了解数据的结构 - 它还知道数据的意图。</p><p>所以日期域成了日期选择器，HTML域成了WYSIWYG编辑器，关系变成了搜索框。</p><p>输入域还可以依据条件，所以复杂表单变简单了。</p></div><div class=\"col-sm-6 col-sm-pull-6\"><div class=\"admin-image\"><img src=\"/images/home/sophisticated-fields.png\" class=\"img-responsive img-circle\"/></div></div></div></div></section><section class=\"intro-section tools-section\"><span class=\"tool-icon tool-icon__cloud entypo entypo-cloud\"></span><span class=\"tool-icon tool-icon__rocket entypo entypo-rocket\"></span><div class=\"container\"><div class=\"section-header\"><h2 class=\"text-center\">做什么取决于你。</h2><p class=\"lead\">有很多框架会为你做决定，还有很多把决定权拿走了。Keystone不会那样。使用适合你的功能，换掉不合适的。</p></div><div class=\"big-icon\"><span class=\"entypo entypo-tools\"></span></div><div class=\"row\"><div class=\"col-sm-6 col-md-3\"><h4>以Express为基础搭建</h4><p>Keystone可以为你配置Express，或者你可以接管，将Keystone当作Express中间件对待。</p><p>你也可以轻松地将其集成到已有的Express程序中。</p></div><div class=\"col-sm-6 col-md-3\"><h4>由MongoDB提供动力</h4><p>Keystone使用Mongoose，用于node.js和MongoDB的领先ODM，让你在一个地方定义模式、\n验证规则和逻辑。</p><p>所以任何可以用MongoDB做的东西都可以用Keystone做。</p></div><div class=\"col-sm-6 col-md-3\"><h4>轻便又灵活</h4><p>Keystone设计的尽可能轻便 - 你可以选择自己想要引入的功能。</p><p>创建你自己的路由，你自己的数据库模式，使用任何你喜欢的模板。</p></div><div class=\"col-sm-6 col-md-3\"><h4>可扩展</h4><p>node.js最好的地方之一是有大量优质的包。</p><p>Keystone被设计成让你可以使用任何包，不会失去它们带来的好处。</p></div></div></div></section><section class=\"intro-section cta-section\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"left-col\"><h3><a href=\"/zh/getting-started\" title=\"KeystoneJS Getting Started\">开始 &rarr;</a></h3><p class=\"lead\">看起来是你要找的吗？检出入门指南，学习如何在一分钟内把它跑起来吧。</p></div></div><div class=\"col-sm-6\"><div class=\"right-col\"><h3><a href=\"mailto:contact@keystonejs.com\">联系我们 &rarr;</a></h3><p class=\"lead\">如果你希望用Keystone做项目，希望贡献力量，或者寻求商业支持，我们乐于听到你的声音。请与我们联系。</p></div></div></div></div></section><script async=\"\" src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");}.call(this,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
},
"zh/pages/starting": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"page-header\"><div class=\"container\"><h1>入门</h1><p class=\"lead\">创建Node.js网站最快的方式。要深入其中，<a href=\"/zh/docs/getting-started\">请查阅文档。</a></p></div></div><div class=\"gs-guide\"><div class=\"gs-guide-section\"><div class=\"container-sm\"><div class=\"gs-guide__header\"><h2 class=\"gs-guide__title\"><span class=\"gs-guide__title-count\">1</span><div class=\"gs-guide__title-label\">前提条件</div></h2><div class=\"gs-guide__subtitle\"><p>开始之前先确保你已经安装了<a href=\"http://nodejs.org/download\" target=\"_blank\">Node.js</a> 0.10+ 和<a href=\"http://www.mongodb.org/downloads\" target=\"_blank\">MongoDB</a> v2.4+。</p><p>要使用KeystoneJS，你需要掌握合理的Javascript知识，并熟悉数据库概念之类的基础知识，会用 node / npm 等。</p></div></div></div></div><div class=\"gs-guide-figure gs-guide-figure--prerequisites hidden-xs\"><div class=\"column nodejs\"><a href=\"http://nodejs.org/download/\" target=\"_blank\"><div class=\"logo\"><img src=\"/images/getting-started/nodejs-logo.png\" alt=\"Node.js logo\" width=\"245\" height=\"66\"/></div><span class=\"prerequisite\">从Node.js下载页面下载并安装用于你的平台的Node.js。</span></a></div><div class=\"column mongodb\"><a href=\"http://docs.mongodb.org/manual/installation/\" target=\"_blank\"><div class=\"logo\"><img src=\"/images/getting-started/mongodb-logo.png\" alt=\"MongoDB logo\" width=\"294\" height=\"84\"/></div><span class=\"prerequisite\">查阅MongoDB安装指南了解如何在你的操作系统上安装MongoDB。</span></a></div></div><div class=\"gs-guide-section\"><div class=\"container-sm\"><div class=\"gs-guide__header\"><h2 class=\"gs-guide__title\"><span class=\"gs-guide__title-count\">2</span><div class=\"gs-guide__title-label\">命令</div></h2></div><h3>安装生成器</h3><p>你将要使用由<a href='http://yeoman.io/', target='_blank'>Yeoman</a>制作的<a href='https://github.com/keystonejs/generator-keystone', target='_blank'>KeystoneJS 生成器</a>。在根目录运行：</p><pre class=\"command-line\">npm install -g generator-keystone</pre><h3>给项目创建一个文件夹</h3><p>你可以在任何地方创建项目：</p><pre class=\"command-line\">mkdir my-test-project</pre><p>然后进入新项目目录：</p><pre class=\"command-line\">cd my-test-project</pre><h3>运行生成器</h3><pre class=\"command-line\">yo keystone</pre><p>生成器会问你几个问题，主要是你想要什么功能，然后进行配置，并把你需要的所有文件复制到你的项目目录中。</p><p>它还会从npm中安装依赖项，帮你做好准备。</p></div></div><div class=\"gs-guide-figure gs-guide-figure--commands hidden-xs\"><div class=\"window safari\"><img src=\"/images/getting-started/commands-safari.png\" alt=\"Safari window\" width=\"942\" height=\"616\"/></div><div class=\"window terminal\"><div class=\"terminal-cursor\"></div><img src=\"/images/getting-started/commands-terminal.png\" alt=\"Terminal window\" width=\"650\" height=\"437\"/></div><div class=\"figure-shadow\"></div></div><div class=\"gs-guide-section\"><div class=\"container-sm\"><div class=\"gs-guide__header\"><h2 class=\"gs-guide__title\"><span class=\"gs-guide__title-count\">3</span><div class=\"gs-guide__title-label\">搞定了！</div></h2><p class=\"gs-guide__subtitle\">你刚刚创建了自己的第一个KeystoneJS项目，恭喜你！</p><p class=\"gs-guide__subtitle\">像这样在命令行中运行它：</p><pre class=\"command-line\">node keystone</pre><p class=\"gs-guide__subtitle\">然后打开<a href=\"http://localhost:3000\" target=\"_blank\">http://localhost:3000</a> 在浏览器中看看。</p><p class=\"gs-guide__subtitle\">如果你想知道生成器究竟做了什么，可以看一下我们的入门指南，它介绍了手动搭建过程。如果你刚接触Node.js，看一下对你非常有帮助。</p><p class=\"gs-guide__subtitle\"><a href=\"/zh/docs/getting-started\">查阅入门指南 &rarr;</a></p></div></div></div><div class=\"gs-guide-figure gs-guide-figure--finished wow-much-find hidden-xs\"><img src=\"/images/getting-started/commands-safari.png\" alt=\"Safari window\" width=\"1680\" height=\"600\" class=\"sr-only\"/></div><div class=\"gs-guide-section\"><div class=\"container-sm\"><div class=\"gs-guide__header\"><h2 class=\"gs-guide__title\"><span class=\"gs-guide__title-count\">?</span><div class=\"gs-guide__title-label\">问题</div></h2><p class=\"gs-guide__subtitle\">出错了？希望下面这些提示会有帮助。</p><h3>错误！请试着以root/管理员身份重新运行该命令。</h3><p>在运行npm install -g generator-keystone时，你可能会遇到EACCES错误，让你以root/管理员身份重新运行这个命令。这表明有许可权限问题。</p><p>你可以在开发系统中将目录的所有权改成当前$USER，这样在安装非受信代码时就不必运行sudo了：</p><pre>sudo chown -R $USER /usr/local\n \n# 某些O/S可能还要改其它目录\nsudo chown -R $USER /usr/lib/node_modules/</pre><p>在生产/共享环境中，你可能希望带着sudo前缀重新运行npm命令：</p><pre>sudo npm install -g generator-keystone</pre><p>要了解更多信息，请参阅Isaac Schulueter写的Intro to npm中的<a href='http://foohack.com/2010/08/intro-to-npm/#what_no_sudo', target='_blank'>\"什么, 没sudo?\"</a>章节。</p><h3>你说找不到我的数据库是什么意思？</h3><p>默认情况下，KeystoneJS会在localhost的默认端口下连接运行中的MongoDB服务器。如果你遇到跟MongoDB连接相关的错误，请确保MongoDB服务器运行着。</p><p>如果你还没装MongoDB，请按照下面的指示操作。</p><p>要连接除localhost之外的其它服务器，找到Keystone项目目录下的.env文件，添加MONGO_URI配置：</p><pre>MONGO_URI=mongodb://your-server/database-name</pre><h3>其它问题？</h3><p class=\"gs-guide__subtitle\">如果你的问题还没解决，可以到<a href=\"https://groups.google.com/d/forum/keystonejs\" target=\"_blank\">KeystoneJS谷歌群组</a>上找我们。</p></div></div></div></div>");;return buf.join("");
},
"common/templates/layout/base": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("");;return buf.join("");
},
"common/templates/layout/dev_base": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (language, title) {
buf.push("<!DOCTYPE html><html" + (jade.attr("lang", language, true, true)) + "><head><script>var _sf_startpt=(new Date()).getTime()</script><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width\"><title>KeystoneJS");
if ( title)
{
buf.push(" &middot; " + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "");
}
buf.push("</title><meta name=\"keywords\" content=\"node.js,nodejs,cms,publishing,platform,web,development,framework,express,mongo,mongodb,bootstrap,react,jquery\"><meta name=\"description\" content=\"Get a head-start on the features you need. KeystoneJS is the easiest way to build dynamic websites, applications and APIs with Node.js and MongoDB.\"><meta property=\"og:locale\" content=\"en-us\"><meta property=\"og:title\" content=\"KeystoneJS\"><meta property=\"og:description\" content=\"KeystoneJS is an open source Node.js CMS and web application platform built on Express and MongoDB.\"><meta property=\"og:url\" content=\"https://keystonejs.com^current_url^\"><meta property=\"og:site_name\" content=\"KeystoneJS\"><meta property=\"og:type\" content=\"article\"><link href=\"http://fonts.googleapis.com/css?family=Roboto:100,300,300italic,400,500,700\" rel=\"stylesheet\"><link href=\"/styles/site.min.css\" rel=\"stylesheet\"><link href=\"/styles/prism.css\" rel=\"stylesheet\"><link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\"></head><body><div id=\"keystonejs-spa\"><div class=\"home-header back-key\"><div class=\"container\"><img src=\"/images/logo-inverted.svg\" alt=\"KeystoneJS\" width=\"80\" height=\"81\"><h2>The open source framework for developing database-driven websites, applications and APIs in Node.js. Built on Express and MongoDB.</h2><h2 style=\"text-align:left; padding-left:50px;\">import keystone from keystonejs\n<br />\n<br /> keystone.init({\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'name': 'Acme, Inc.',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'brand': 'Acme, Inc.',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'less': 'public',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'static': 'public',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'favicon': 'public/favicon.ico',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'views': 'templates/views',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'view engine': 'jade',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'emails': 'templates/emails',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'auto update': true,\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'session': true,\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'auth': true,\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'user model': 'User'\n<br /> })\n<br />\n<br /> keystone.import('models')\n<br />\n<br /> keystone.set('locals',{ hello: 'Hi!' })\n<br />\n<br /> keystone.start()</h2></div></div></div><script src=\"/systemjs/jspm_packages/system.js\"></script><script src=\"/systemjs/config.js\"></script><script src=\"/systemjs/client.js\"></script></body></html>");}.call(this,"language" in locals_for_with?locals_for_with.language:typeof language!=="undefined"?language:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
},
"common/templates/layout/footer": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (prefix) {
buf.push("<div class=\"docs-footer\"><div class=\"container\"><p>Created by <a href=\"http://twitter.com/jedwatson\" target=\"_blank\">@jedwatson</a>, <a href=\"http://twitter.com/bladey\" target=\"_blank\">@bladey</a> and <a href=\"http://twitter.com/jossmackison\" target=\"_blank\">@jossmackison</a> at <a href=\"http://www.thinkmill.com.au\" target=\"_blank\">Thinkmill</a>, and other <a href=\"https://github.com/keystonejs/keystone/contributors\" target=\"_blank\">contributors</a> under the <a href=\"http://opensource.org/licenses/MIT\" target=\"_blank\">MIT License</a></p><ul class=\"list-inline\"><li><a" + (jade.attr("href", prefix + 'getting-started', true, false)) + " title=\"KeystoneJS Getting Started\">Getting Started</a></li><li><a" + (jade.attr("href", prefix + 'docs', true, false)) + " title=\"KeystoneJS Documentation\">Documentation</a></li><li><a href=\"https://groups.google.com/forum/#!forum/keystonejs\" target=\"_blank\" title=\"KeystoneJS Google Group\">Google Group</a></li><li><a href=\"https://github.com/keystonejs/keystone\" target=\"_blank\" title=\"Github Project (new window)\">Github Project</a></li><li><a href=\"http://demo.keystonejs.com\" target=\"_blank\" title=\"Demo Website (new window)\">Demo Website</a></li><li><a" + (jade.attr("href", prefix + 'examples', true, false)) + " title=\"KeystoneJS Database\">Examples</a></li></ul></div></div><div class=\"docs-footer-floor\"><div class=\"container\"><div class=\"social-buttons\"><div class=\"social-button social-button__twitter\"><a href=\"https://twitter.com/keystonejs\" data-show-count=\"true\" class=\"twitter-follow-button\">Follow @keystonejs</a></div><div class=\"social-button social-button__github\"><iframe src=\"http://ghbtns.com/github-btn.html?user=keystonejs&amp;repo=keystone&amp;type=watch&amp;count=true\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"86\" height=\"20\"></iframe></div></div></div></div>");}.call(this,"prefix" in locals_for_with?locals_for_with.prefix:typeof prefix!=="undefined"?prefix:undefined));;return buf.join("");
},
"common/templates/layout/header": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (content, docssection, docssubsection, language, languages, prefix, primarynav, section, undefined) {
jade_mixins["breadcrumbs"] = jade_interp = function(docssection, docssubsection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"page-header page-breadcrumbs\"><div class=\"container\"><h1><a" + (jade.attr("href", docssection.path, true, false)) + " class=\"page-breadcrumbs__section\">" + (jade.escape(null == (jade_interp = docssection.label) ? "" : jade_interp)) + "</a><span class=\"page-breadcrumbs__subsection\">" + (jade.escape(null == (jade_interp = docssubsection.label) ? "" : jade_interp)) + "</span></h1></div></div>");
};
buf.push("<div class=\"language-switcher\"><div class=\"container\"><a" + (jade.attr("href", languages.zh.links[section], true, false)) + (jade.cls([(language === 'zh' ? 'active' : ''),'language-switcher-option'], [true,null])) + ">中文 (Chinese)</a><a" + (jade.attr("href", languages.en.links[section], true, false)) + (jade.cls([(language === 'en' ? 'active' : ''),'language-switcher-option'], [true,null])) + ">English</a></div></div>");
if ( section !== 'home')
{
buf.push("<header role=\"banner\" class=\"docs-header\"><div class=\"container\"><button type=\"button\" data-toggle=\"collapse\" data-target=\".docs-nav__collapse\" class=\"navbar-toggle navbar-toggle-menu\"><span class=\"sr-only\">" + (jade.escape(null == (jade_interp = content.toggle_navigation) ? "" : jade_interp)) + "</span>" + (null == (jade_interp = '<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>') ? "" : jade_interp) + "</button><a" + (jade.attr("href", prefix, true, false)) + " title=\"KeystoneJS\" class=\"keystone-logo\"><img src=\"/images/logo.svg\" alt=\"KeystoneJS\" width=\"207\" height=\"70\"/></a><nav class=\"docs-nav\"><div class=\"docs-nav__collapse collapse\"><ul class=\"docs-nav__nav\">");
// iterate primarynav
;(function(){
  var $$obj = primarynav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([section == item.section ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + ">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([section == item.section ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + ">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></nav></div></header>");
}
if ( section === 'docs' && docssubsection)
{
jade_mixins["breadcrumbs"](docssection, docssubsection);
}
else
{
buf.push("");
}}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined,"docssubsection" in locals_for_with?locals_for_with.docssubsection:typeof docssubsection!=="undefined"?docssubsection:undefined,"language" in locals_for_with?locals_for_with.language:typeof language!=="undefined"?language:undefined,"languages" in locals_for_with?locals_for_with.languages:typeof languages!=="undefined"?languages:undefined,"prefix" in locals_for_with?locals_for_with.prefix:typeof prefix!=="undefined"?prefix:undefined,"primarynav" in locals_for_with?locals_for_with.primarynav:typeof primarynav!=="undefined"?primarynav:undefined,"section" in locals_for_with?locals_for_with.section:typeof section!=="undefined"?section:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
},
"common/templates/layout/spa_base": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (language, title) {
buf.push("<!DOCTYPE html><html" + (jade.attr("lang", language, true, true)) + "><head><script>var _sf_startpt=(new Date()).getTime()</script><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width\"><title>KeystoneJS");
if ( title)
{
buf.push(" &middot; " + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "");
}
buf.push("</title><meta name=\"keywords\" content=\"node.js,nodejs,cms,publishing,platform,web,development,framework,express,mongo,mongodb,bootstrap,react,jquery\"><meta name=\"description\" content=\"Get a head-start on the features you need. KeystoneJS is the easiest way to build dynamic websites, applications and APIs with Node.js and MongoDB.\"><meta property=\"og:locale\" content=\"en-us\"><meta property=\"og:title\" content=\"KeystoneJS\"><meta property=\"og:description\" content=\"KeystoneJS is an open source Node.js CMS and web application platform built on Express and MongoDB.\"><meta property=\"og:url\" content=\"https://keystonejs.com^current_url^\"><meta property=\"og:site_name\" content=\"KeystoneJS\"><meta property=\"og:type\" content=\"article\"><link href=\"http://fonts.googleapis.com/css?family=Roboto:100,300,300italic,400,500,700\" rel=\"stylesheet\"><link href=\"/styles/site.min.css\" rel=\"stylesheet\"><link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\"></head><body><div id=\"keystonejs-spa\"><div class=\"home-header back-key\"><div class=\"container\"><img src=\"/images/logo-inverted.svg\" alt=\"KeystoneJS\" width=\"80\" height=\"81\"><h2>The open source framework for developing database-driven websites, applications and APIs in Node.js. Built on Express and MongoDB.</h2><h2 style=\"text-align:left; padding-left:50px;\">import keystone from keystonejs\n<br />\n<br /> keystone.init({\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'name': 'Acme, Inc.',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'brand': 'Acme, Inc.',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'less': 'public',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'static': 'public',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'favicon': 'public/favicon.ico',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'views': 'templates/views',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'view engine': 'jade',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'emails': 'templates/emails',\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'auto update': true,\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'session': true,\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'auth': true,\n<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'user model': 'User'\n<br /> })\n<br />\n<br /> keystone.import('models')\n<br />\n<br /> keystone.set('locals',{ hello: 'Hi!' })\n<br />\n<br /> keystone.start()</h2></div></div></div><script src=\"/system.js\"></script><script src=\"/config.js\"></script><script src=\"/inclusive-bundle.js\"></script></body></html>");}.call(this,"language" in locals_for_with?locals_for_with.language:typeof language!=="undefined"?language:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
},
"common/templates/mixins/breadcrumbs": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;




;return buf.join("");
},
"en/pages/docs/api": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Communicate</h1><p class=\"lead\">.class(reference & endpoint api)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a href=\"/docs/api/current/class\">Class Api</a></h2></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/configuration": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Prep</h1><p class=\"lead\">.init(KeystoneJS the way you want it)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2>Keystone Options</h2><a name=\"options-concepts\"></a><h3>Setting Options</h3><p>The options for KeystoneJS cover a range of behaviours, from how the express app is configured to enabling features and authentication options for integrated services.</p><p>There are three ways to set options:</p><ul class=\"options\"><li>Passing a <code>{ key: 'value' }</code> configuration <code class=\"data-type\">Object</code> to the <code>keystone.init(options)</code> method</li><li>Calling <code>keystone.set('key', 'value')</code></li><li>Setting environment variables in <code>process.env</code>. Only some options support this (noted below).</li></ul><p>If you want to keep secret keys and configuration out of your codebase (especially important for open source projects, or projects where not all developers should have access to production config settings) the <a href=\"https://npmjs.org/package/dotenv\" target=\"_blank\">dotenv</a> module makes this very easy to manage.</p><a name=\"options-project\"></a><h3>Project Options</h3><p>The following options control the branding, navigation and default export settings of the KeystoneJS application in the Admin UI:</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>name</code> <code class=\"data-type\">String</code></td><td> <p>The name of the KeystoneJS application</p><p class=\"note\">If no <code>mongo</code> option is provided, Keystone will use <code>name</code> as the database name.</p></td></tr><tr><td><code>brand</code> <code class=\"data-type\">String</code></td><td>Displayed in the top left hand corner of the Admin UI</td></tr><tr><td><code>module root</code> <code class=\"data-type\">String</code></td><td><p>This setting tells Keystone the root path of your app. By default, <code>module root</code> points to the path of the first script that required Keystone within your app. This default may be undesireable at times.</p><p>Setting <code>module root</code> allows you to specify a custom root path for your app. Overriding the default <code>module root</code> may be useful, for example, when unit testing your app.</p><p><code>module root</code> is used by Keystone's <code>.getPath()</code> method to resolve/expand the paths of the <code>views</code>, <code>favicon</code>, <code>extensions</code>, <code>ssl cert</code>, <code>ssl key</code>, <code>ssl ca</code>, <code>emails</code>, and <code>updates</code> settings.</p><p>When setting a custom <code>module root</code> you may use either an absolute or a relative path.</p><p class=\"note\">If a relative path is used, it will be considered relative to the location of the script from which the setting was made.</p></td></tr><tr><td><code>frame guard</code> <code class=\"data-type\">String/Boolean</code></td><td><p>This settings tells Keystone how to handle <code>iframe</code> tags. It does this by setting the response <code>X-Frame-Options</code> header. This header is used to protect against \"ClickJacking\" attacks.</p><p>The default setting is <code>sameorigin</code>.</p><p>Valid options are:</p><ul><li><code class=\"default-value\">\"sameorigin\"</code> allows requests from <code>iframe</code> tags that originate from the same server</li><li><code class=\"default-value\">\"deny\"</code> denies requests form all <code>iframe</code> tags, regardless of origin</li><li><code class=\"default-value\">true</code> (same as <code class=\"default-value\">\"deny\"</code> )</li><li><code class=\"default-value\">false</code> disables <code>frame guard</code></li></ul></td></tr><tr><td><code>nav</code> <code class=\"data-type\">Object</code></td><td><p>An object that specifies the navigation structure for the Admin UI. Create a key for each section that should be visible in the primary navigation. Each key's value can be a single list path (as is seen in the URL when you view a list) or an array of list paths. When an array is used, secondary navigation is rendered in the Admin UI.</p><p>The nav is also used to generate the links on the Admin UI home page; any lists that are registered but not included in the <code>nav</code> will be grouped at the bottom of the screen under the 'Other' heading.</p></td></tr><tr><td><code>csv field delimiter</code> <code class=\"data-type\">String</code></td><td>Allow you to choose a custom field delimiter to be used for CSV export instead of the default comma.</td></tr><tr><td><code>app</code> <code class=\"data-type\">Object</code></td><td>Instance of Express to be used instead of the default instance.</td></tr><tr><td><code>mongoose</code> <code class=\"data-type\">Object</code></td><td>Instance of Mongoose to be used instead of the default instance.</td></tr></table><p class=\"note\">The <code>app</code> and <code>mongoose</code> options replace the functionality of the <code>keystone.connect()</code> method which is now deprecated.  Due to changes in Express 4, `keystone.connect()` no longer works as expected.</p><div class=\"code-header\"><h4>Custom Navigation Example</h4><p>If you had <code>User</code>, <code>Post</code> and <code>PostCategory</code> models, you could group the posts and post categories into a <strong>Content</strong> navigation item like this:</p></div><pre><code class=\"language-javascript\">keystone.set('nav', {\n    'users': 'users',\n    'content': ['posts', 'post-categories']\n});</code></pre><a name=\"options-server\"></a><h3>Web Server Options</h3><p>The following options control the configuration of your web server and the express app:</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>env</code> <code class=\"data-type\">String</code></td><td><p>The environment setting to use. The keys <strong>development</strong> and <strong>production</strong> are supported, and this will have an impact on things like caching compiled templates. Defaults to <code class=\"default-value\">process.env.NODE_ENV || \"development\"</code>.</p><p>You should really <strong>set this to <code class=\"default-value\">production</code> for your production servers</strong> using the <code>NODE_ENV</code> environment variable. Several other modules expect this convention also.</p></td></tr><tr><td><code>port</code> <code class=\"data-type\">Number</code></td><td><p>The port to listen for request on. Defaults to <code class=\"default-value\">process.env.PORT || 3000</code></p></td></tr><tr><td><code>host</code> <code class=\"data-type\">String</code></td><td><p>The ip address to listen for request on. Defaults to <code class=\"default-value\">process.env.IP || '127.0.0.1'</code></p><p><code>port</code> must be set (either by option or env variable) or the <code>host</code> option will be ignored.</p></td></tr><tr><td><code>views</code> <code class=\"data-type\">String</code></td><td><p>The path to your application's <strong>view templates</strong>. This is required for using the <code>keystone.View</code> Class, and will also be set on the express app.</p><p>If you're following the <a href=\"/guide#start_structure\">recommended project structure</a>, this should be set to <code class=\"default-value\">\"/templates/views\"</code>.</p></td></tr><tr><td><code>view engine</code> <code class=\"data-type\">String</code></td><td><p>The template engine to use by default. Any engine with express support should work. <strong>Jade</strong> is included with Keystone, but you will have to add any alternate engine to your project's dependencies in your <code>package.json</code>.</p><p>This option is set on the express app (<a href=\"http://expressjs.com/api.html#app.engine\" target=\"_blank\">see docs here</a>).</p></td></tr><tr><td><code>custom engine</code> <code class=\"data-type\">Function</code></td><td><p>If you want to use a custom template engine, set this option to the function that should be used to process your templates.</p><p>See below for an example of how to use the <a href=\"http://paularmstrong.github.io/swig/\" target=\"_blank\">Swig</a> template engine.</p></td></tr><tr><td><code>view cache</code> <code class=\"data-type\">Boolean</code></td><td><p>This option is passed through to Express, and controls whether compiled view templates are cached between requests.</p><p>It defaults to <code class=\"default-value\">true</code> in production, or <code class=\"default-value\">false</code> otherwise so there is rarely any reason to set it explicitly.</p></td></tr><tr><td><code>locals</code> <code class=\"data-type\">Object</code></td><td><p>The default local variables to pass to your view templates.</p><p>Routes can extend or change local variables by modifying <code>res.locals</code>.</p></td></tr><tr><td><code>static</code> <code class=\"data-type\">String</code> or <code class=\"data-type\">Array</code></td><td><p>One or more paths to your application's static files. Setting this will include the <code>serve-static</code> middleware.</p><p>If you're following the <a href=\"/guide#start_structure\">recommended project structure</a>, this should be set to <code class=\"default-value\">'public'</code>.</p></td></tr><tr><td><code>static options</code> <code class=\"data-type\">Object</code></td><td><p>Optional config options that will be passed to the <code>serve-static</code> middleware (<a href=\"https://github.com/expressjs/serve-static\" target=\"_blank\">see docs here</a>).</p></td></tr><tr><td><code>less</code> <code class=\"data-type\">String</code> or <code class=\"data-type\">Array</code></td><td><p>If you want Keystone to automatically compile <strong>.less</strong> files into <strong>.css</strong> files, set this value to the same path as the <code>static</code> option.</p><p>When this option is set, any requests to a <strong>.css</strong> or <strong>.min.css</strong> file will first check for a <strong>.less</strong> file with the same name, and if one is found, the css file will be generated.</p></td></tr><tr><td><code>less options</code> <code class=\"data-type\">Object</code></td><td><p>Optional config options that will be passed to the <code>less</code> middleware; see <a href=\"https://github.com/emberfeather/less.js-middleware\" target=\"_blank\">github.com/emberfeather/less.js-middleware</a> for more information.</p></td></tr><tr><td><code>sass</code> <code class=\"data-type\">String</code> or <code class=\"data-type\">Array</code></td><td><p>If you want Keystone to automatically compile <strong>.scss</strong> files into <strong>.css</strong> files, set this value to the same path as the <code>static</code> option.</p><p>When this option is set, any requests to a <strong>.css</strong> or <strong>.min.css</strong> file will first check for a <strong>.scss</strong> file with the same name, and if one is found, the css file will be generated.</p><p class=\"note\">Note that enabling this option requires you to have specified the <a href=\"https://github.com/sass/node-sass\" target=\"_blank\"><code>node-sass</code></a> package as a dependency in your project's <code>package.json</code> file; it is not automatically included with Keystone.</p></td></tr><tr><td><code>sass options</code> <code class=\"data-type\">Object</code></td><td><p>Optional config options that will be passed to the <code>sass</code> middleware; see <a href=\"https://github.com/sass/node-sass#options\" target=\"_blank\">github.com/sass/node-sass</a> for more information.</p><p class=\"note\">To enable complation of <strong>.sass</strong> files pass <code>{ indentedSyntax: true }</code></p></td></tr><tr><td><code>favicon</code> <code class=\"data-type\">String</code></td><td><p>The path to your application's <strong>favicon</strong>. Setting this will include the <code>serve-favicon</code> middleware. Should be relative to your project's root.</p><p>If you're following the <a href=\"/guide#start_structure\">recommended project structure</a>, this should be set to <code class=\"default-value\">\"/public/favicon.ico\"</code>.</p></td></tr><tr><td><code>compress</code> <code class=\"data-type\">Boolean</code></td><td>Set this to <code class=\"default-value\">true</code> to enable HTTP compression. This will include the <code>compression</code> middleware (<a href=\"https://github.com/expressjs/compression\" target=\"_blank\">see docs here</a>).</td></tr><tr><td><code>logger</code> <code class=\"data-type\">String</code></td><td>Set this to include the <code>morgan</code> middleware. The value will be passed to the middleware initialisation (<a href=\"https://github.com/expressjs/morgan\" target=\"_blank\">see docs here</a>). Set this to <code class=\"default-value\">false</code> to disable logging altogether. Defaults to <code class=\"default-value\">:method :url :status :response-time ms</code>.</td></tr><tr><td><code>logger options</code> <code class=\"data-type\">Object</code></td><td><p>Optional config options that will be passed to the <code>morgan</code> middleware; see <a href=\"https://github.com/expressjs/morgan\" target=\"_blank\">github.com/expressjs/morgan</a> for more information.</p></td></tr><tr><td><code>trust proxy</code> <code class=\"data-type\">Boolean</code></td><td>Set this to enable processing of the HTTP request <code>X-Forwarded-For</code> header. Extracted IP addresses will be available as the array <code>req.ips</code> (<a href=\"http://expressjs.com/api.html#req.ips\">see docs here</a>).</td></tr></table><div class=\"code-header\"><h4>Alternate View Engines</h4><p>By default, Keystone uses the <strong>Jade</strong> template engine for your views. Here's how you would set up a different engine, e.g. <strong>Swig</strong>.</p></div><pre><code class=\"language-javascript\">var swig = require('swig');\nkeystone.set('view engine', 'swig');\nkeystone.set('custom engine', swig.renderFile);</code></pre><div class=\"code-header\"><h4>Exposes <code >onHttpServerCreated</code> event</h4></div><pre><code class=\"language-javascript\">keystone.start({\n    onHttpServerCreated: function() {\n      var server = keystone.httpServer;\n    }\n});</code></pre><a name=\"options-ssl\"></a><h3>HTTPS Web Server Options</h3><p>There are two ways to implement HTTPS for your KeystoneJS application: either use a web server (e.g. <a href=\"http://nginx.com\" target=\"_blank\">NGINX</a>) or PAAS (e.g. <a href=\"https://www.heroku.com\" target=\"_blank\">Heroku</a>) that handles it for you, or set the following options to use the <a href=\"http://nodejs.org/api/https.html\" target=\"_blank\">https server provided by node.js</a>.</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>ssl</code> <code class=\"data-type\">Boolean</code> or <code class=\"data-type\">String</code></td><td><p>Whether to start the SSL Server. Defaults to <code class=\"default-value\">false</code>.</p><p>When set to <code class=\"default-value\">true</code>, both http and https servers will be started. If <code>ssl key</code> or <code>ssl cert</code> are invalid, just the http server will be started.</p><p>When set to <code class=\"default-value\">\"only\"</code>, only the https server will be started. If <code>ssl key</code> or <code>ssl cert</code> are invalid, KeystoneJS will not start.</p></td></tr><tr><td><code>ssl key</code> <code class=\"data-type\">Path</code></td><td><p>The path to your SSL Key. Should be either absolute or relative to <code class=\"default-value\">process.cwd()</code> (which is usually your project root).</p></td></tr><tr><td><code>ssl cert</code> <code class=\"data-type\">Path</code></td><td><p>The path to your SSL Certificate. Should be either absolute or relative to <code class=\"default-value\">process.cwd()</code> (which is usually your project root).</p></td></tr><tr><td><code>ssl ca</code> <code class=\"data-type\">Path</code></td><td><p>The path to your SSL CA Bundle. Should be either absolute or relative to <code class=\"default-value\">process.cwd()</code> (which is usually your project root).</p></td></tr><tr><td><code>ssl port</code> <code class=\"data-type\">Number</code></td><td><p>The port to start the SSL Server on. Defaults to <code class=\"default-value\">3001</code>.</p></td></tr><tr><td><code>ssl host</code> <code class=\"data-type\">String</code></td><td><p>The ip address to listen for request on. Defaults to <code class=\"default-value\">process.env.SSL_IP</code> or the value of the <code>host</code> option.</p></td></tr><tr><td colspan=\"2\"><p>Exposes <code class=\"\">onHttpsServerCreated</code> event during <code class=\"language-javascript\">keystone.start()</code></p></td></tr></table><p class=\"note\"><strong>WARNING:</strong> If you intend to enable SSL on your KeystoneJS app, make sure you're using Node.js <code class=\"default-value\">0.10.33</code> or newer. Node versions prior to <code class=\"default-value\">0.10.33</code> are susceptible to the POODLE (Padding Oracle On Downgraded Legacy Encryption) vulnerability, a man-in-the-middle attack that targets <code class=\"default-value\">SSLv3</code> (see <a href=\"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3566\">CVE-2014-3566</a>). As of Node version <code class=\"default-value\">0.10.33</code>, the <code class=\"default-value\">SSLv2</code>and <code class=\"default-value\">SSLv3</code> protocols are disabled by default. For more information see the release notes for <a href=\"http://blog.nodejs.org/2014/10/23/node-v0-10-33-stable/\">Node v0.10.33 (Stable)</a>.</p><a name=\"options-unix-socket\"></a><h3>Unix Socket Web Server Option</h3><p>Express will listen to a unix socket for connections.   </p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>unix socket</code> <code class=\"data-type\">String</code></td><td><p>Path to a writable unix socket. Should be either absolute or relative to <code class=\"default-value\">process.cwd()</code> (which is usually your project root). File will be removed first if present.</p><p>When set http and https servers are ignored.</p></td></tr><tr><td colspan=\"2\"><p>Exposes <code class=\"\">onSocketServerCreated</code> event during <code class=\"language-javascript\">keystone.start()</code>\t</p></td></tr></table><a name=\"options-database\"></a><h3>Database and User Auth Options</h3><p>The following options control your database configuration and user models / authentication:</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>mongo</code> <code class=\"data-type\">String</code></td><td><p>The url for your MongoDB connection.</p><p>You should typically set this to <code class=\"default-value\">process.env.MONGO_URI || \"mongodb://localhost/your-db\"</code></p><p class=\"note\">If the <code>mongo</code> option is not provided, Keystone will use the <code>name</code> option as the database name. <code class=\"default-value\">mongodb://localhost/keystone</code></p></td></tr><tr><td><code>model prefix</code> <code class=\"data-type\">String</code></td><td><p>A prefix to apply to all the mongodb collections used by the models.</p></td></tr><tr><td><code>auth</code> <code class=\"data-type\">Mixed</code></td><td><p>Whether to enable built-in auth for Keystone's Admin UI, or a custom function to use to authenticate users.</p><p>When this is set to <code class=\"default-value\">false</code> (or not defined), Keystone's Admin UI will be open to the public (so set it!)</p><p>If using a custom function, it should follow the standard for express middleware of <code>function(req, res, next)</code>. If a user is not logged in or should not access Keystone's Admin UI, use <code>res.redirect()</code> to redirect them - otherwise call the <code>next</code> callback to enable access.</p></td></tr><tr><td><code>user model</code> <code class=\"data-type\">String</code></td><td><p>The key of the Keystone List for users, <strong>required</strong> if <code>auth</code> is set to <code class=\"default-value\">true</code></p><p>Typically this would be set to <code class=\"default-value\">User</code>.</p></td></tr><tr><td><code>cookie secret</code> <code class=\"data-type\">String</code></td><td><p>The encryption key to use for your cookies. Passed to Express's cookie parser.</p><p>It's a really good idea to set this to a long, random string.</p></td></tr><tr><td><code>session store</code> <code class=\"data-type\">String</code> or <code class=\"data-type\">Function</code></td><td><p>Set this to <code class=\"default-value\">mongo</code> to use your MongoDB database to persist session data.</p><p>By default, Keystone will use the in-memory session store provided by Express, which should only be used in development because it does not scale past a single process, and leaks memory over time.</p><p>Valid options are:</p><ul><li><code class=\"default-value\">mongo</code> (or <code class=\"default-value\">connect-mongo</code>)</li><li><code class=\"default-value\">connect-mongostore</code> (supports replica sets, but requires explicit configuration - see below)</li><li><code class=\"default-value\">connect-redis</code></li><li><code class=\"default-value\">function(expressSession){ ... }</code>.  You may specify a custom express-session store implementation by setting the <code>session store</code> property to a function that returns an express-session store implementation (see example below).</li></ul><p class=\"note\">Session store packages are not bundled with Keystone, so make sure you explicitly add the selected session store to your project's <code>package.json</code>.</p><p class=\"note\">The session configuration passed to Express is available via <code class=\"language-javascript\">keystone.get('express session')</code></p><div class=\"code-header\"><h4>Example using custom express-session store</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    ConnectMemcached = require('connect-memcached')\n \nkeystone.init({\n  //...\n  'session store': function(session){\n    return new (ConnectMemcached(session))({\n      hosts: [\n        'localhost:11211'\n      ]\n    });\n  }\n});</code></pre></td></tr><tr><td><code>session store options</code> <code class=\"data-type\">Object</code></td><td><p>This option allows you to override the default session store configuration, and is passed to the session store package.</p><p>It is required when using the <code class=\"default-value\">connect-mongostore</code> store.</p><div class=\"code-header\"><h4>Example for connect-mongostore</h4></div><pre><code class=\"language-javascript\">\"sessionStore\": {\n  \"db\": {\n    \"name\": \"myDb\",\n    \"servers\": [\n      { \"host\": \"192.168.1.100\", \"port\": 28001 },\n      { \"host\": \"192.168.1.100\", \"port\": 28002 },\n      { \"host\": \"192.168.1.101\", \"port\": 27017 }\n    ]\n  }\n}</code></pre><div class=\"code-header\"><h4>Example for connect-redis</h4></div><pre><code class=\"language-javascript\">\"sessionStore\": {\n  \"host\": \"\", // Redis server hostname\n  \"port\": \"\", // Redis server port\n  \"ttl\": \"\", // Redis session TTL in seconds\n  \"db\": \"\", // Database index to use\n  \"pass\": \"\", // Password for Redis authentication\n  \"prefix\": \"\", // Key prefix defaulting to \"sess:\"\n  \"url\": \"\", // e.g. redis://user:pass@host:port/db\n}</code></pre><p class=\"note\">The session options are made available via <code class=\"language-javascript\">keystone.get('session options')</code></p></td></tr><tr><td><code>back url</code> <code class=\"data-type\">String</code></td><td><p><code>href</code> to use for the 'back to (site name)' link in the header of the Admin UI</p><p>Defaults to <code class=\"default-value\">/</code></p></td></tr><tr><td><code>signin url</code> <code class=\"data-type\">String</code></td><td><p><code>href</code> to bounce visitors to when they fail the default auth check (e.g. not signed in)</p><p>Defaults to <code class=\"default-value\">/keystone/signin</code>, only used when <code>auth</code> is set to <code class=\"default-value\">true</code></p></td></tr><tr><td><code>signin redirect</code> <code class=\"data-type\">String</code></td><td><p><code>href</code> to bounce visitors to after they successfully sign in via the built-in signin route</p><p>Defaults to <code class=\"default-value\">/keystone</code></p></td></tr><tr><td><code>signout url</code> <code class=\"data-type\">String</code></td><td><p><code>href</code> for the signout link in the top right of the UI</p><p>Defaults to <code class=\"default-value\">/keystone/signout</code> if <code>auth</code> is set to <code class=\"default-value\">true</code></p></td></tr><tr><td><code>signout redirect</code> <code class=\"data-type\">String</code></td><td><p><code>href</code> to bounce visitors to after they successfully sign out via the built-in sign out route</p><p>Defaults to <code class=\"default-value\">/keystone</code></p></td></tr></table><p>For more information about setting up and using database models with Keystone, see the <a href=\"/docs/database\">database guide</a>.</p><a name=\"options-email\"></a><h3>Email Settings</h3><p>Options available for use with Keystone.Email   </p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>emails</code> <code class=\"data-type\">String</code></td><td><p>Path to email template folder</p></td></tr><tr><td><code>email locals</code> <code class=\"data-type\">Object</code></td><td><p>Setup common locals for your emails. Required by Keystone's default email templates. Ignore if using your own.</p></td></tr><tr><td><code>email rules</code> <code class=\"data-type\">Object</code></td><td><p>Setup replacement rules for emails, to automate the handling of differences between development and production.</p></td></tr><tr><td><code>mandrill api key</code> <code class=\"data-type\">String</code></td><td><p>Mandrill API key</p></td></tr><tr><td><code>mandrill username</code> <code class=\"data-type\">String</code></td><td><p>Mandrill username</p></td></tr></table><a name=\"options-ui\"></a><h3>Admin UI Options</h3><p>The following options control some ui options for the Admin backend:</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>wysiwyg images</code> <code class=\"data-type\">Boolean</code></td><td><p>Adds an image button which enables including images from other URLS in your WYSIWYG Editor.</p></td></tr><tr><td><code>wysiwyg cloudinary images</code> <code class=\"data-type\">Boolean</code></td><td><p>Adds an image upload button and enables cloudinary image uploads directly in your WYSIWYG Editor.</p></td></tr><tr><td><code>wysiwyg additional buttons</code> <code class=\"data-type\">String</code></td><td><p>Allows to add additional extra functionality buttons such as <code>blockquote</code>.</p><p>A complete list of available buttons can be found at: <a href=\"http://www.tinymce.com/wiki.php/Controls\">http://www.tinymce.com/wiki.php/Controls</a></p></td></tr><tr><td><code>wysiwyg additional plugins</code> <code class=\"data-type\">String</code></td><td><p>Allows for additional plugins to be activated which can be found at: <a href=\"http://www.tinymce.com/wiki.php/Plugins\">http://www.tinymce.com/wiki.php/Plugins</a></p></td></tr><tr><td><code>wysiwyg additional options</code> <code class=\"data-type\">Object</code></td><td><p>Allows for additional TinyMCE options, such as <code>{ menubar: true }</code> to be modified.</p></td></tr><tr><td><code>wysiwyg override toolbar</code> <code class=\"data-type\">Boolean</code></td><td><p>This will remove the default set of buttons for wysiwyg mode. Use this with <code>wysiwyg additional buttons</code> and <code>wysiwyg additional plugins</code>. Defaults to <code class=\"data-type\">false</code>.</p></td></tr><tr><td><code>wysiwyg menubar</code> <code class=\"data-type\">Boolean</code></td><td><p>Show the menubar for wysiwyg editor. Defaults to <code class=\"data-type\">false</code>.</p><p>See <a href=\"http://www.tinymce.com/wiki.php/Configuration:menubar\">http://www.tinymce.com/wiki.php/Configuration:menubar</a> for more details.</p></td></tr><tr><td><code>wysiwyg importcss</code> <code class=\"data-type\">String</code></td><td><p>Sets the <code class=\"data-type\">content_css</code> and configures the <code class=\"data-type\">importcss</code> plugin for TinyMCE.</p><p>See <a href=\"http://www.tinymce.com/wiki.php/Configuration:content_css\">http://www.tinymce.com/wiki.php/Configuration:content_css</a> for more details.</p></td></tr><tr><td><code>wysiwyg skin</code> <code class=\"data-type\">String</code></td><td><p>Allow you to change the TinyMCE skin. Defaults to <code class=\"data-type\">keystone</code>.</p><p>See <a href=\"http://www.tinymce.com/wiki.php/Configuration:skin\">http://www.tinymce.com/wiki.php/Configuration:skin</a> for more details.<div class=\"code-header\"><h4>Example using wysiwyg options</h4></div><pre><code class=\"language-javascript\">keystone.init({\n'wysiwyg override toolbar': false,\n'wysiwyg menubar': true,\n'wysiwyg skin': 'lightgray',\n'wysiwyg additional buttons': 'searchreplace visualchars,'\n + ' charmap ltr rtl pagebreak paste, forecolor backcolor,'\n +' emoticons media, preview print ',\n'wysiwyg additional plugins': 'example, table, advlist, anchor,'\n + ' autolink, autosave, bbcode, charmap, contextmenu, '\n + ' directionality, emoticons, fullpage, hr, media, pagebreak,'\n + ' paste, preview, print, searchreplace, textcolor,'\n + ' visualblocks, visualchars, wordcount',\n});</code></pre></p></td></tr></table><a name=\"services\"></a><h2>Services</h2><a name=\"services-google-analytics\"></a><h3>Google Analytics</h3><p>Keystone has support for Google Analytics tracking in the Admin UI. To enable tracking, set the following configuration options:</p><table class=\"table\"><col width=\"270\"/><col/><tr><td><code>ga property</code> <code class=\"data-type\">String</code></td><td><p>Your Google Analytics Property</p><p>Will default to <code class=\"default-value\">process.env.GA_PROPERTY</code></p></td></tr><tr><td><code>ga domain</code> <code class=\"data-type\">String</code></td><td><p>Your Google Analytics Domain</p><p>Will default to <code class=\"default-value\">process.env.GA_DOMAIN</code></p></td></tr></table><p class=\"note\">Note if you only want to include Google Analytics tracking in the front-end of your project, you should use different variable names from those above.</p><a name=\"services-google-maps\"></a><h3>Google Maps</h3><p>Keystone's <a href=\"/docs/database#field_location\">Location field type</a> supports integration with the <a href=\"http://www.morethanamap.com\" target=\"_blank\">Google Maps API</a> to auto-improve values (including discovering latitude and longitude) via the <a href=\"https://developers.google.com/places/documentation/autocomplete\" target=\"_blank\"> Places Autocomplete API</a>.</p><p>To enable these features, <a href=\"https://code.google.com/apis/console/\" target\"_blank\">obtain an API Key from Google</a> and enable the Google Maps v3 and Google Places APIs for it, then set the following options:</p><table class=\"table\"><col width=\"270\"/><col/><tr><td><code>google api key</code> <code class=\"data-type\">String</code></td><td><p>Your Google API browser key, used to authenticate the Javascript Maps API in the Admin UI.</p><p>Will default to <code class=\"default-value\">process.env.GOOGLE_BROWSER_KEY</code></p></td></tr><tr><td><code>google server api key</code> <code class=\"data-type\">String</code></td><td><p>Your Google API server key, used to authenticate requests to the Maps API from the server.</p><p>Will default to <code class=\"default-value\">process.env.GOOGLE_SERVER_KEY</code></p></td></tr><tr><td><code>default region</code> <code class=\"data-type\">String</code></td><td><p><strong>Optional</strong> setting to limit autocomplete results to a specific region.</p><p>This option takes a region code, specified as a <a href=\"http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry\" target=\"_blank\">IANA language region</a> subtag.</p><p>Can be specified on a per-field basis by setting the <code>region</code> option on any <code>Location</code> field.</p></td></tr></table><pre><code class=\"language-javascript\">keystone.set('google api key', 'your-browser-key');\nkeystone.set('google server api key', 'your-server-key');\nkeystone.set('default region', 'au'); // optional, will limit autocomplete results to Australia</code></pre><p class=\"note\">Note that the use of the Places Geocoding API is subject to a query limit of 2,500 geolocation requests per day, except with an enterprise license.</p><p class=\"note\">The Places Geocoding API may only be used in conjunction with a Google map; geocoding results without displaying them on a map is prohibited. Please make sure your Keystone app complies with the Google Maps API License.</p><a name=\"services-amazons3\"></a><h3>Amazon S3</h3><p>KeystoneJS supports <a href=\"http://aws.amazon.com/s3/\" target=\"_blank\">Amazon S3</a> for file upload and hosting, with the <a href=\"/docs/database#field_s3file\">S3File</a> field type.</p><p>To use the S3File field in your app, <a href=\"https://portal.aws.amazon.com/gp/aws/developer/subscription/index.html?productCode=AmazonS3\" target=\"_blank\">sign up for an account</a>, create an <strong>S3 bucket</strong>, and get your <strong>key</strong> and <strong>secret</strong>.</p><p>Then set the <code>s3 config</code> option to an object containing your configuration (see example below).</p><p>Alternatively, set the <code class=\"default-value\">S3_BUCKET</code>, <code class=\"default-value\">S3_KEY</code> and <code class=\"default-value\">S3_SECRET</code> environment variables.</p><pre><code class=\"language-javascript\">keystone.set('s3 config', { bucket: 'my-bucket', key: 'my-key', secret: 'my-secret' });</code></pre><p>The config object can also contain a 'default headers' property. This property should be either an <code class=\"data-type\">Object</code> or an <code class=\"data-type\">Array</code>.</p><pre><code class=\"language-javascript\">keystone.set('s3 config', { \n\tbucket: 'my-bucket', \n\tkey: 'my-key', \n\tsecret: 'my-secret',\n\t'default headers':  {\n    'x-amz-meta-X-Default-Header': 'Custom Default Value'\n  }\n});\n\n</code></pre><a name=\"services-azure\"></a><h3>Windows Azure Storage</h3><p>KeystoneJS supports <a href=\"http://www.windowsazure.com/\" target=\"_blank\">Windows Azure Storage</a> for file upload and hosting, with the <a href=\"/docs/database#field_azurefile\">AzureFile</a> field type.</p><p>To use the AzureFile field in your app, <a href=\"http://www.windowsazure.com/pricing/free-trial/\" target=\"_blank\">sign up for an account</a>, enter into <a href=\"https://manage.windowsazure.com/\">Azure Management Portal</a>. Create a storage account with new(button), data services, storage. In storage account page get the access (account name, key (valid primary or secondary key)) with the button \"manage access key\".</p><p>Then set the <code>azurefile config</code> option to an object containing your configuration (see example below).</p><p>Alternatively, set the <code class=\"default-value\">AZURE_STORAGE_ACCOUNT</code> and <code class=\"default-value\">AZURE_STORAGE_ACCESS_KEY</code> environment variables.</p><p>Note that the <strong>account</strong> property should be set to your <strong>storage account</strong>, <em>not your user account</em>.</p><pre><code class=\"language-javascript\">keystone.set('azurefile config', { account: 'my storage account', key: 'secret api key' });</code></pre><a name=\"services-cloudinary\"></a><h3>Cloudinary</h3><p><a href=\"http://cloudinary.com\" target=\"_blank\">Cloudinary</a> is an image upload / resizing / hosting service that makes it easy to implement image management in your KeystoneJS app using the <a href=\"/docs/database#field_cloudinaryimage\">CloudinaryImage</a> and <a href=\"/docs/database#field_cloudinaryimages\">CloudinaryImages</a> field types.</p><p>To use the Cloudinary Image fields in your app, <a href=\"https://cloudinary.com/users/register/free\" target=\"_blank\">sign up for an account</a> (Cloudinary offers a free tier with up to 500MB storage, 50,000 images and 1GB data transfer) and get your <strong>cloud name</strong>, <strong>api key</strong> and <strong>api secret</strong>.</p><p>Then set the <code>cloudinary config</code> option to<ul><li>an object containing your configuration (see example below), or</li><li>the environment variable string Cloudinary gives you (e.g. <code class=\"default-value\">cloudinary://api_key:api_secret@cloud_name</code>)</li></ul></p><p>This option will default to the <code class=\"default-value\">CLOUDINARY_URL</code> environment variable if it is set.</p><p>When images are uploaded to Cloudinary via the Admin UI or field methods, they will have some tags automatically set on them. To prefix these tags with a custom string, set the <code>cloudinary prefix</code> option.</p><p>The built-in tags that are automatically set include:<ul><li><code class=\"default-value\">{list.path}_{field.path}</code></li><li><code class=\"default-value\">{list.path}_{field.path}_{item.id}</code></li><li><code class=\"default-value\">{prefix}</code> (if set)</li><li><code class=\"default-value\">dev</code> (if the <code>env</code> option is not set to <code class=\"default-value\">production</code>)</li></ul></p><p>You may optionally enabled the Cloudinary upload folder option by setting the Keystone <code>cloudinary folders</code> option to <code class=\"default-value\">true</code>. The default Cloudinary folder will be set based on the following rules:<ul><li><code class=\"default-value\">{list.path}/{field.path}/</code> (when <code>cloudinary prefix</code> is not set)</li><li><code class=\"default-value\">{prefix}/{list.path}/{field.path}/</code> (when <code>cloudinary prefix</code> is set)</li></ul></p><p class=\"note\"> \nYou may override the default Cloudinary folder by setting the <code class=\"default-value\">folder</code> option directly on a <code>CloudinaryImage</code> field (see <a href=\"/docs/database#fieldtypes-cloudinaryimage\">CloudinaryImage</a> options) or a <code>CloudinaryImages</code> field (see <a href=\"/docs/database#fieldtypes-cloudinaryimages\">CloudinaryImages</a> options).<br/><br/>If you want Cloudinary to automatically create folders when the <code>cloudinary folders</code> option is set to <code class=\"default-value\">true</code>, make sure you enable \"Auto-create folders\" in your Cloudinary account \"Upload Settings\".</p><p>If you are serving over HTTPS and want to ensure that cloudinary images are also serverd over HTTPS, set the <code>cloudinary secure</code> option to <code class=\"default-value\">true</code>.</p><pre><code class=\"language-javascript\">keystone.set('cloudinary config', { cloud_name: 'my-cloud', api_key: 'abc', api_secret: '123' });\n// or\nkeystone.set('cloudinary config', 'cloudinary://api_key:api_secret@cloud_name' );\n \n// optional, will prefix all built-in tags with 'keystone_'\nkeystone.set('cloudinary prefix', 'keystone');\n \n// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/\nkeystone.set('cloudinary folders', true);\n \n// optional, will force cloudinary to serve images over https\nkeystone.set('cloudinary secure', true);</code></pre><a name=\"services-embedly\"></a><h3>Embed.ly</h3><p><a href=\"http://embed.ly\" target=\"_blank\">Embed.ly</a> is a service that will parse a url (e.g. Youtube embed link) and return a whole lot of useful information, like the provider name, summary metadata, width and height of videos, as well as a clean link to use for embedding media in your views. They offer a free plan for up to 5,000 urls per month.</p><p>The <a href=\"/docs/database#field_embedly\">Embedly field type</a> is an easy way to integrate their API with your KeystoneJS app.</p><p>To configure KeystoneJS to support the Embed.ly API, simply <a href=\"https://app.embed.ly/signup\">sign up for an account</a>, get your api key, and set the <code>embedly api key</code> option.</p><p>This option will default to the <code class=\"default-value\">EMBEDLY_API_KEY</code> environment variable if it is set.</p><pre><code class=\"language-javascript\">keystone.set('embedly api key', 'your-key');</code></pre><a name=\"services-mandrill\"></a><h3>Mandrill</h3><p><a href=\"http://mandrill.com\" target=\"_blank\">Mandrill</a> is a scalable and affordable email infrastructure service that allows you to send emails easily. They offer a free plan for up to 12,000 emails per month.</p><p>To configure KeystoneJS to support the Mandrill API, simply <a href=\"https://mandrill.com/signup/\">sign up for an account</a>, get your api key, and set both the <code>mandrill api key</code> and <code>mandrill username</code> options.</p><p>These options will default to the <code class=\"default-value\">MANDRILL_API_KEY &amp; MANDRILL_USERNAME</code> environment variable's if set.</p><pre><code class=\"language-javascript\">keystone.set('mandrill api key', 'your-key');\nkeystone.set('mandrill username', 'your-username');</code></pre><a name=\"updates\"></a><h2>Application Updates</h2><p>Keystone includes an updates framework, which you can enable by setting the <code>auto update</code> option to <code class=\"default-value\">true</code>.</p><p>Updates provide an easy way to seed your database, transition data when your models change, or run transformation scripts against your database.</p><p>Update files should be named using a semantic version followed by an optional key, like <code>0.0.1-init.js</code>. The version numbers are used to order the update scripts correctly, while the keys are a nice way to identify what each update does.</p><p>Each update file should export a single function, which should accept a single argument - the <code>next(err)</code> callback, to be called when the update is complete.</p><p>All the update files will be executed (each one waits for the previous update to complete) before the web server is started.</p><p>If the <code>next</code> callback is receives an error it will be reported to the console, and application initialisation will halt.</p><p>You can temporarily disable updates from running in development by setting a <code>__defer__</code> property on the exported function to <code>true</code>. Any subsequent updates will be skipped, but the application will be started.</p><p>Updates are only run once, and each completed update is logged in an <code>app_updates</code> collection in your database.</p><div class=\"code-header\"><h4>Update Script Example</h4><p>Creates a new admin User</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    User = keystone.list('User');\n \nexports = module.exports = function(done) {\n    new User.model({\n        name: { first: 'Admin', last: 'User' },\n        password: 'admin',\n        isAdmin: true\n    }).save(done);\n};</code></pre><a name=\"headless\"></a><h2>Disabling the Admin UI</h2><p>You can disable the Admin UI by setting the <code>headless</code> option to <code class=\"default-value\">true</code>.</p><p>This will allow you to use <code>keystone.start()</code> or <code>keystone.routes(app)</code> without Keystone creating route bindings for the Admin UI routes under <code class=\"default-value\">/keystone</code>.</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/database": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:db</h1><p class=\"lead\">.List(and configure data models)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"concepts\"></a>Concepts</h2><div class=\"alert alert-warning\"><p>KeystoneJS requires MongoDB v2.4 or greater.</p></div><p>In KeystoneJS, your data schema and models are controlled by <strong>Lists</strong>, and documents in your database are often called <strong>Items</strong>.</p><p>To define a data model, you create a <code>new keystone.List</code>, and pass it <a href=\"#lists-options\">list options</a>. </p><p>You then <code>add</code> fields to the list. Behind the scenes, a Keystone List will create a <a href=\"http://mongoosejs.com/docs/guide.html\" target=\"_blank\">mongoose schema</a>, and add the appropriate paths to it for the fields you define.</p><p>The <code>schema</code> is accessible, allowing you to plug in other mongoose functionality like virtuals, methods and pre / post hooks.</p><p>When you have finished setting up your List, call <code>list.register()</code> to initialise it and register it with Keystone.</p><p>To query your data, you use the <code>list.model</code> (which is a <a href=\"http://mongoosejs.com/docs/models.html\" target=\"_blank\">mongoose model</a>).</p><p>List Items are <a href=\"http://mongoosejs.com/docs/documents.html\" target\"_blank\">mongoose documents</a>. To create new items, use <code>new list.model()</code> and when you're ready to save it (or to save changes to an existing Item), call <code>item.save()</code>.</p><a name=\"lists\"></a><h2>Lists</h2><a name=\"lists-usage\"></a><h3>Usage</h3><h4><code>new keystone.List(key[, options]);</code></h4><p>The syntax for creating a <strong>Keystone List</strong> is very similar to the syntax for creating a Mongoose Schema, with the exception of the constructor, which is <code class='default-value'>var MyList = new keystone.List(key, options)</code>.</p><p>Once you have created a new List, add fields to it using <code>MyList.add(fields)</code>, where fields is an object of keys (for field paths) and values (for field types, or options).</p><p>Fields are defined by an object with a <code>type</code> property, which must be a valid Field Type or basic data type. Using the object syntax you can specify additional options for the field. Common field options and field-type-specific options are detailed in the fields documentation.</p><p>When all the fields and options have been set on the list, call <code>MyList.register()</code> to register the list with Keystone and finalise its configuration.</p><a name=\"lists-example\"></a><h3>Example</h3><p>A simple Post model for a blog might look like this:</p><div class=\"code-header\"><h4>Post.js</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Types = keystone.Field.Types;\n \nvar Post = new keystone.List('Post', {\n    autokey: { path: 'slug', from: 'title', unique: true },\n    map: { name: 'title' },\n    defaultSort: '-createdAt'\n});\n \nPost.add({\n    title: { type: String, required: true },\n    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },\n    author: { type: Types.Relationship, ref: 'User' },\n    createdAt: { type: Date, default: Date.now },\n    publishedAt: Date,\n    image: { type: Types.CloudinaryImage },\n    content: {\n        brief: { type: Types.Html, wysiwyg: true, height: 150 },\n        extended: { type: Types.Html, wysiwyg: true, height: 400 }\n    }\n});\n \nPost.defaultColumns = 'title, state|20%, author, publishedAt|15%'\nPost.register();</code></pre><div class=\"contextual-note\"><h4>Explanation</h4><p>This example implements the optional <code>map</code>, <code>autokey</code> and <code>defaultSort</code> options, described below.</p><p>The Admin UI will look for <code>map: { name: 'FieldFromDoc'}</code> first, then a document field <code>name</code>, and if those are not available use <code>doc._id</code> as the default column when viewing lists.</p><p>Our example also specifies <code>title</code>, <code>state</code>, <code>author</code> and <code>publishedAt</code> as the default columns to display in the Admin UI, with state and publishedAt being given column widths. </p><p>The <code>author</code> field is a relationship with the <code>User</code> model, as described in the <a href=\"#relationships\">Relationships</a> section.  </p></div><a name=\"lists-options\"></a><h3>Options</h3><p>Lists support the following options:</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>autokey</code> <code class=\"data-type\">Object</code></td><td>Adds a plugin to the list that automatically generates a key for each document when it is saved, based on the value of another field or path. The value of the option should be an object with the following keys:<ul class=\"options\"><li><code>from</code> <code class=\"data-type\">String</code> - the field or path to generate the key from, can be a space-delimited list of fields</li><li><code>path</code> <code class=\"data-type\">String</code> - the path to store the key at</li><li><code>unique</code> <code class=\"data-type\">Boolean</code> - whether the key should be unique or not</li><li><code>fixed</code> <code class=\"data-type\">Boolean</code> - the key should be kept if it exists and it's non-empty. Defaults to <code class=\"data-type\">false</code>.</li></ul><em>Autokey paths are automatically indexed; you may also want to include them in compound indexes.</em></td></tr><tr><td><code>defaultColumns</code> <code class=\"data-type\">String</code></td><td>A comma-delimited list of default columns to display in the Admin UI List View.\n You can specify width in either pixels or percent after a <code>|</code> pipe character.</td></tr><tr><td><code>defaultSort</code> <code class=\"data-type\">String</code></td><td>The default column or path to sort on in the Admin UI</td></tr><tr><td><code>drilldown</code> <code class=\"data-type\">String</code></td><td>A space-delimited list of relationships to display as drilldown in the Admin UI</td></tr><tr><td><code>hidden</code> <code class=\"data-type\">Boolean</code></td><td>Hides the list in the Keystone Admin UI</td></tr><tr><td><code>inherits</code> <code class=\"data-type\">List</code></td><td>A list object that you would like to inherit fields from.</td></tr><tr><td><code>label</code> <code class=\"data-type\">String</code></td><td>The label used for the list in the Admin UI. Defaults to a friendly form of <code class=\"default-value\">key</code></td></tr><tr><td><code>map</code> <code class=\"data-type\">Object</code></td><td>An object that maps fields to special <strong>list</strong> paths. Each path defaults to its key if a field with that key is added. Mappable paths include<ul class=\"options\"><li><code>name</code> - the field that contains the name of the item, for display in the Admin UI</li></ul></td></tr><tr><td><code>nocreate</code> <code class=\"data-type\">Boolean</code></td><td>Prevents creation of new items in the list through the Keystone Admin UI</td></tr><tr><td><code>nodelete</code> <code class=\"data-type\">Boolean</code></td><td>Prevents deletion of items from the list through the Keystone Admin UI</td></tr><tr><td><code>noedit</code> <code class=\"data-type\">Boolean</code></td><td>Prevents editing of items in the list through the Keystone Admin UI</td></tr><tr><td><code>path</code> <code class=\"data-type\">String</code></td><td>The path used for the list in the Admin UI. Defaults to a slugified form of <code class=\"default-value\">key</code>.</td></tr><tr><td><code>perPage</code> <code class=\"data-type\">Number</code></td><td>The number of List items to display per page. Defaults to 50.</td></tr><tr><td><code>plural</code> <code class=\"data-type\">String</code></td><td>The plural label for the items in the list. Used in the Admin UI, defaults to a plural form of <code class=\"default-value\">singular</code></td></tr><tr><td><code>schema</code> <code class=\"data-type\">String</code></td><td><p>Options for the Mongoose Schema for the List. Among other things, this option lets you specify a custom name for the <strong>collection</strong>. See the <a href=\"http://mongoosejs.com/docs/guide.html#options\" target=\"_blank\">mongoose schema docs</a> for a list of available options.</p><p><em>Warning: do not modify the <code>id</code> or <code>_id</code> schema options; the default behaviour is required by Keystone</em></p></td></tr><tr><td><code>searchFields</code> <code class=\"data-type\">String</code></td><td>A comma-delimited list of paths to use for searching in Admin UI</td></tr><tr><td><code>singular</code> <code class=\"data-type\">String</code></td><td>The singular label for the items in the list. Used in the Admin UI, defaults to a singular form of <code class=\"default-value\">label</code></td></tr><tr><td><code>sortContext</code> <code class=\"data-type\">String</code></td><td>A <code>List:relationship</code> pair to control when drag and drop sorting is available in the Admin UI</td></tr><tr><td><code>sortable</code> <code class=\"data-type\">Boolean</code></td><td>Adds a hidden field <code>sortOrder</code> to the schema, and enables drag and drop sorting in the Admin UI</td></tr><tr><td><code>track</code> <code class=\"data-type\">Boolean or Object</code></td><td><p>Adds a plugin to the list that automatically keeps track of when and who (i.e. which Keystone user) created and last updated an item.</p><p>When set to <code class=\"data-type\">true</code> all tracking fields are enabled using their default names.</p><p>You may also selectively enable each field and optionally specify a custom field name by setting <code>track</code> to an <code class=\"data-type\">object</code> with any or all the following fields:</p><ul class=\"options\"><li><code>createdAt</code> <code class=\"data-type\">Boolean/String</code> - when set to <code class=\"data-type\">true</code>, enables tracking when the item was created (using the default field name <em>createdAt</em>). To use a custom field name set to a <code class=\"data-type\">String</code> with the desired name. Defaults to <code class=\"data-type\">false</code>.</li><li><code>createdBy</code> <code class=\"data-type\">Boolean/String</code> - when set to <code class=\"data-type\">true</code>, enables tracking which user created the item (using the default field name <em>createdBy</em>). To use a custom field name set to a <code class=\"data-type\">String</code> with the desired name. Defaults to <code class=\"data-type\">false</code>.</li><li><code>updatedAt</code> <code class=\"data-type\">Boolean/String</code> - when set to <code class=\"data-type\">true</code>, enables tracking when the item was last updated (using the default field name <em>updatedAt</em>). To use a custom field name set to a <code class=\"data-type\">String</code> with the desired name. Defaults to <code class=\"data-type\">false</code>.</li><li><code>updatedBy</code> <code class=\"data-type\">Boolean/String</code> - when set to <code class=\"data-type\">true</code>, enables tracking which user last updated the item (using the default field name <em>updatedBy</em>). To use a custom field name set to a <code class=\"data-type\">String</code> with the desired name. Defaults to <code class=\"data-type\">false</code>.</li></ul><p class=\"note\">The <code>createdBy</code> and <code>updatedBy</code> fields are only automatically updated when adding/modifying items via the Keystone Admin UI. However, if you intend to add/modify items from within your own app, you must manually set the <code>._req_user</code> property of the item to the currently logged on user (<code>req.user</code>) prior to saving the item, as shown in the example below.</p><pre><code class=\"language-javascript\">var item = new List.model();\nitem.set({ field1: 'value1', field2: 'value2' });\nitem._req_user = req.user;\nitem.save();</code></pre></td></tr></table><p class=\"note\">If you're wondering how to control which navigation area Lists are categorised under in the Admin UI, check out the <code>nav</code> option in the <a href=\"http://keystonejs.com/docs/configuration/#options-project\">KeystoneJS Configuration</a> docs.</p><h4>Drilldown example</h4><p>The drilldown option is a nice way to improve the usability of the Admin UI by providing context to the item a user is currently editing.</p><p>By default, the drilldown will just show the list that the item belongs to.</p><p>You can, however, set it to a <code>Relationship</code> field in the schema, and it will display the item currently stored in that relationship field.</p><p>If there would be several relationships that may be  to display in the drilldown list, you can separate their paths with spaces.</p><div class=\"code-header\"><h4>Example: Including the author in the drilldown for Posts</h4></div><pre><code class=\"language-javascript\">var Post = new keystone.List('Post', {\n    autokey: { path: 'slug', from: 'title', unique: true },\n    map: { name: 'title' },\n    defaultSort: '-createdAt',\n    drilldown: 'author' // author is defined as a Relationship field in the example above\n});</code></pre><h4>Inheritance example</h4><p>The inheritance option can be used to allow a list to inherit its fields from another list using Mongoose <a href=\"http://mongoosejs.com/docs/3.7.x/docs/api.html#model_Model.discriminator\">model discriminators</a></p><p>Parent lists may not themselves inherit from other lists.</p><div class=\"code-header\"><h4>Example: Inheriting List fields from other lists</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone');\n \nvar BasePage = new keystone.List('BasePage', {\n   map: { name: 'title' },\n\t    autokey: { path: 'slug', from: 'title', unique: true },\n\t});\nBasePage.add(\n\t{\n\t\ttitle: { type: String, required: true },\n\t\tslug: { type: String, readonly: true },\n\t}\n);\nBasePage.register();\n \nvar ChildPage = new keystone.List('ChildPage', { inherits: BasePage });\nChildPage.add({ child_content: { type: String, readonly: true } });\nChildPage.register();</code></pre><a name=\"lists-plugins\"></a><h3>Schema Plugins</h3><p>You can specify <a href=\"http://mongoosejs.com/docs/guide.html\" target=\"_blank\"><strong>virtuals</strong>, <strong>methods</strong>, <strong>statics</strong></a> as well as <a href=\"http://mongoosejs.com/docs/middleware.html\" target=\"_blank\"><strong>pre</strong> and <strong>post</strong> hooks</a> for your <strong>Lists</strong> using the <code>schema</code>. You can also use <a href=\"http://mongoosejs.com/docs/plugins.html\" target=\"_blank\">mongoose plugins</a> from the <a href=\"http://plugins.mongoosejs.com\" target=\"_blank\">plugins website</a>.</p><p>For example, in our <strong>Post</strong> list above, we might want to automatically set the <code>publishedAt</code> value when the <code>state</code> is changed to <code>published</code> (but only if it hasn't already been set).</p><p>We might also want to add a method to check whether the post is published, rather than checking the <code>state</code> field value directly.</p><p>Before calling <code>Post.register()</code>, we would add the following code:</p><pre><code class=\"language-javascript\">Post.schema.methods.isPublished = function() {\n    return this.state == 'published';\n}\n \nPost.schema.pre('save', function(next) {\n    if (this.isModified('state') &amp;&amp; this.isPublished() &amp;&amp; !this.publishedAt) {\n        this.publishedAt = new Date();\n    }\n    next();\n});</code></pre><a name=\"lists-querying\"></a><h3>Querying Data</h3><p>To query data, you can use any of the <a href=\"http://mongoosejs.com/docs/queries.html\" target=\"_blank\">mongoose query</a> methods on the <code>list.model</code>.</p><p><strong>For example:</strong> to load the last 5 <code>posts</code> with the state <code>published</code>, populating the linked <code>author</code>, sorted by reverse published date:</p><div class=\"code-header\"><h4>Loading Posts</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nPost.model.find()\n    .where('state', 'published')\n    .populate('author')\n    .sort('-publishedAt')\n    .limit(5)\n    .exec(function(err, posts) {\n        // do something with posts\n    });</code></pre><p><strong>Promises</strong></p><p>There exists another way to work with events in Javascript that is included in mongoose query methods. Instead of passing a <a href=\"http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/\" target=\"_blank\">callback</a> to the  <a href=\"http://mongoosejs.com/docs/api.html#query_Query-exec\" target=\"_blank\">exec</a> method, we can use what it returns: a <a href=\"http://www.html5rocks.com/en/tutorials/es6/promises/\" target=\"_blank\">Promise</a>. Promises are very useful for clean chaining of events with propagation of error.</p><p><strong>For example:</strong> load 100 <code>posts</code>, then do something asynchronous, then do something with result:</p><div class=\"code-header\"><h4>Loading Posts, doing something asynchronous, doing something</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nPost.model.find()\n    .limit(100)\n    .exec()\n    .then(function (posts) { //first promise fulfilled\n        //return another async promise\n    }, function (err) { //first promise rejected\n        throw err;\n    }).then(function (result) { //second promise fulfilled\n        //do something with final results\n    }, function (err) { //something happened\n        //catch the error, it can be thrown by any promise in the chain\n        console.log(err);\n    });</code></pre><a name=\"lists-paginate\"></a><h3>Pagination Querying</h3><p>To query data with pagination, you can use <code>List.paginate()</code>,it returns a query object, just as <code>List.model.find()</code> would. It supports the options</p><ul><li><code>page</code> - page to start at</li><li><code>perPage</code> - number of results to return per page</li><li><code>maxPages</code> - optional, causes the page calculation to omit pages from the beginning/middle/end(useful if you have lots of pages, and do not want them to wrap over several lines).</li></ul><p><strong>For example:</strong> to load the <code>posts</code> with the <code>maxPages</code> 10 and <code>perPage</code> 10,which state is <code>published</code>, populating the linked <code>author</code> and <code>categories</code>, sorted by reverse published date:</p><div class=\"code-header\"><h4>Loading Posts with paginate</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \n Post.paginate({\n\t\tpage: req.query.page || 1,\n\t\tperPage: 10,\n\t\tmaxPages: 10\n\t})\n\t.where('state', 'published')\n\t.sort('-publishedDate')\n\t.populate('author categories')\n\t.exec(function(err, results) {\n\t\tlocals.data.posts = results;\n\t\tnext(err);\n\t});</code></pre><p>When you call <code>exec</code> on a paginated query, it will return a lot of metadata along with the results:</p><ul><li><code>total</code>: all matching results (not just on this page)</li><li><code>results</code>: array of results for this page</li><li><code>currentPage</code>: the index of the current page</li><li><code>totalPages</code>: the total number of pages</li><li><code>pages</code>: array of pages to display</li><li><code>previous</code>: index of the previous page, false if at the first page</li><li><code>next</code>: index of the next page, false if at the last page</li><li><code>first</code>: the index of the first result included</li><li><code>last</code>: index of the last result included</li></ul><a name=\"lists-creating\"></a><h3>Creating Items</h3><p>To create new items, again use the <a href=\"http://mongoosejs.com/docs/models.html\" target\"_blank\">mongoose model</a>:</p><div class=\"code-header\"><h4>Creating Posts</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nvar newPost = new Post.model({\n    title: 'New Post'\n});\n \nif (shouldBePublished) {\n    newPost.state = 'published';\n}\n \nnewPost.save(function(err) {\n    // post has been saved\t\n});</code></pre><div class=\"contextual-note\"><h4>Automatic keys</h4><p>Because we set the <code>autokey</code> option on our <code>Post</code> list, it will have generated a unique key based on the <code>title</code> before it was saved to the database.</p><pre>newPost.slug == 'new-post';</pre></div><a name=\"lists-deleting\"></a><h3>Deleting Items</h3><p>To delete items, first load the data, then use the <code>remove</code> method:</p><div class=\"code-header\"><h4>Deleting a Post</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nPost.model.findById(postId)\n    .remove(function(err) {\n        // post has been deleted\n    });</code></pre><!-- TODO: Documentation for Schema features (virtuals, methods, statics and hooks)--><!-- TODO: Documentation for Update Handler--><a name=\"headings\"></a><h2>Headings</h2><p>Define headings to display within the flow of your documents.  Headings can be defined as a <code>String</code> or <code>Object</code> and can <a href=\"#dependsOn\">depend on</a> another field value for display.</p><pre><code class=\"language-javascript\">Person.add(\n\t'User', \n\t{ name: { type: Types.Name, required: true, index: true, initial: true } }, \n\t'Permissions', \n\t{ isAdmin: { type: Boolean, label: 'Can access Keystone', index: true } },\n\t// header object\n\t{ heading: 'Activities' }, \n\t{ place: { type: Types.Select, options: ['GT', 'UGA'] } },\n\t// header with dependsOn\n\t{ heading: \"GT Activities\", dependsOn: { place: 'GT' } },\n\t{ type: { type: Types.Select, options: ['ZC', 'MP'], dependsOn: { place: 'GT'} }\n);</code></pre><div class=\"options\"><h5>Options</h5><p><code>heading</code> <code class=\"data-type\">String</code> - the text to display</p><p><code>dependsOn</code> <code class=\"data-type\">Object</code> - heading will only be displayed when the paths specified in the object match the current data for the item. <a href=\"#dependsOn\">dependsOn</a></p></div><a name=\"fields\"></a><h2>Fields</h2><p>When adding <strong>fields</strong> to <strong>Lists</strong>, you can either specify basic data types or Keystone Field Types.</p><a name=\"fields-overview\"></a><h3>Overview</h3><p><strong>Keystone Fields</strong> allow you to easily add rich, functional fields to your application's models. They are designed to describe not just the <em>structure</em> of your data, but also the <em>intention</em> of your data. They provide:</p><ul><li>Rich controls in Keystone's Admin UI</li><li>Complex data types; e.g. the <code>location</code> field stores several strings and an GeoJSON lng/lat point</li><li>Formatting and validation methods</li><li>Additional virtual properties; e.g. the <code>name</code> field provides a <code>name.full</code> virtual which concatenates the stored <code>name.first</code> and <code>name.last</code></li><li>Underscore methods; e.g. the <code>password</code> field provides a <code>password.compare</code> method for testing against the encrypted hash</li><li>Metadata about how fields relate to each other; e.g. which fields depend on certain values in other fields</li></ul><p>Basic data types are mapped to their corresponding Keystone field types:</p><table style=\"width:200px\" class=\"table\"><col/><col/><thead><th>Data type</th><th>Field type</th></thead><tr><td><code class=\"data-type\">String</code></td><td><code class=\"data-type\">Text</code></td></tr><tr><td><code class=\"data-type\">Number</code></td><td><code class=\"data-type\">Number</code></td></tr><tr><td><code class=\"data-type\">Date</code></td><td><code class=\"data-type\">DateTime</code></td></tr><tr><td><code class=\"data-type\">Boolean</code></td><td><code class=\"data-type\">Boolean</code></td></tr></table><a name=\"fields-options\"></a><h3>Field Options</h3><p>All field types support several common options, which can specify database settings (such as <code>index</code> and <code>default</code>), or can provide information for Keystone's Admin UI (such as <code>label</code>).</p><p class=\"note\">Fields can be nested inside objects, as in mongoose schemas.</p><p class=\"note\">All <a href=\"http://mongoosejs.com/docs/schematypes.html\" target=\"_blank\">mongoose schema type options</a> are passed to the <a href=\"http://mongoosejs.com/docs/guide.html\" target=\"_blank\">mongoose schema</a>, so you can also use any options mongoose supports.</p><p>Common field options include:</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>label</code> <code class=\"data-type\">String</code></td><td>The label of each field is generated from the field path; set this option to override the default.</td></tr><tr><td><code>required</code> <code class=\"data-type\">Boolean</code></td><td>Validates that the field has a value before an item can be saved (<em>also passed to mongoose and enforced using a database index</em>).</td></tr><tr><td><code>initial</code> <code class=\"data-type\">Boolean</code></td><td>Causes the field to be displayed in the <strong>Create Item</strong> form, in the Admin UI.</td></tr><tr><td><code>noedit</code> <code class=\"data-type\">Boolean</code></td><td>Renders the field as read-only in the admin UI.</td></tr><tr><td><code>note</code> <code class=\"data-type\">String</code></td><td>Is displayed with the field in the admin UI.</td></tr><tr><td><code>hidden</code> <code class=\"data-type\">Boolean</code></td><td>The field will always be hidden in the Admin UI if this is set to <code class=\"default-value\">true</code></td></tr></table><a name=\"fields-conditional\"></a><h3>Conditional Fields</h3><p>To improve the usability of the Admin UI, it is possible to hide fields when no value is set, or depending on the value of other fields.</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>collapse</code> <code class=\"data-type\">Boolean</code></td><td>Displays an <strong>+ <u>add</u></strong> link in the admin UI when the field has no value. Will completely hide field UI when <code>noedit</code> is also set to true, when the field has no value</td></tr><tr><td><a name=\"dependsOn\"><code>dependsOn</code> <code class=\"data-type\">Object</code></a></td><td><p>The field or header will only be displayed when the paths specified in the object match the current data for the item.<p>You can target multiple values per path using an Array.</p><div class=\"code-header\"><h4>Example</h4></div><pre><code class=\"language-javascript\">first: { type: String },\n// Will show if first === \"value1\", \"1\" or \"2\"\nsecond: { type: String, dependsOn: { first: ['value1', '1', 2] } },\n// Will show if first == \"value1\"\nthird: { type: String, dependsOn: { first: 'value1' } }</code></pre></p></td></tr></table><a name=\"fields-watching\"></a><h3>Generated values and watching fields</h3><p>Keystone's fields support a simple syntax for configuring dynamically updated fields. You can set a field to update its value whenever:</p><ul><li>The item is saved</li><li>The value of any other field (or fields) changes</li><li>The value of any other field (or fields) changes to a specific value</li></ul><p>To use the watching functionaliy, set the following two options:</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>watch</code> <code class=\"data-type\">Boolean</code> or <code class=\"data-type\">String</code> or <code class=\"data-type\">Object</code> or <code class=\"data-type\">Function</code></td><td><p>When <code class=\"default-value\">true</code>, the field value will be recalculated every time an item is saved. <br></p><p>Provide a space-delimited list of paths to recalculate the field value whenever one of those paths changes. <br><strong>For example:</strong> <code class=\"default-value\">'author title state'</code></p><p>Provide an object of key / value pairs to recalculate the field value whenever one of those paths changes to the value specified. <br><strong>For example:</strong> <code class=\"default-value\">{'state': 'published', 'mainPost': true}</code></p><p>Provide a function that returns true/false whenever you want. <br><strong>For example:</strong> <code class=\"default-value\">function() { return this.author === this.editor; }</code></p></td></tr><tr><td><code>value</code> <code class=\"data-type\">Function</code></td><td><p>The function to generate the field value when a watched path is changed. Must return the new value, or accept a node-style <code>callback</code> argument, which can be called to set the field value asynchronously.</p><p>The <code>this</code> context of the function will be the item being saved.</p><div class=\"code-header\"><h4>Example (synchronous)</h4></div><pre><code class=\"language-javascript\">function () {\n    return this.total<=this.totalreceived ? true:false;\n}</code></pre><div class=\"code-header\"><h4>Example (asynchronous)</h4></div><pre><code class=\"language-javascript\">function (callback) { // BEWARE: MUST be called \"callback\" to allow asynchronous execution\n\tlist.model.findById(this.createdBy).exec(function(err, user){\n\t\tcallback(err, user.name + \"-\" + Date.now());\n\t});\n}</code></pre></td></tr></table><a name=\"fields-underscoremethods\"></a><h3>Underscore Methods</h3><p>Some field types include helpful <strong>underscore methods</strong>, which are available on the item at the field's path preceded by an underscore.</p><p><strong>For example</strong>: use the <code>format</code> underscore method of the <code>createdAt</code> <code class=\"data-type\">DateTime</code> field of the Posts List (above) like this</p><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nPost.model.findById(postId).exec(function(err, post) {\n   console.log(post._.createdAt.format('Do MMMM YYYY')); // 25th August 2013\n});</code></pre><a name=\"relationships\"></a><h2>Relationships</h2><p>Keystone enhances MongoDB's ability to store the ObjectIDs of related documents in a field (or many related ObjectIDs in an Array) with support for Relationship fields and Definitions in Models.</p><a name=\"relationship-fields\"></a><h3>Relationship Fields</h3><h4><code class=\"data-type\">ObjectId</code> or <code class=\"data-type\">Array</code> &mdash; Displayed as an auto-suggest field in the Admin UI</h4><p>Stores references to ObjectIDs from another Model in an ObjectID field or array to create one-many or many-many relationships.</p><p>Specify the related Model using the <code>ref</code> option. For a many-many relationship, set the <code>many</code> option to <code class=\"default-value\">true</code>.</p><p>For example, if you wanted to link a <strong>Post</strong> model to a single <strong>Author</strong> and many <strong>PostCategories</strong>, you would do it like this:</p><pre><code class=\"language-javascript\">Post.add({\n    author: { type: Types.Relationship, ref: 'User' },\n    categories: { type: Types.Relationship, ref: 'PostCategory', many: true }\n});</code></pre><h5>Relationship Filters</h5><p>You can filter a relationship field using the <code>filters</code> option.</p><p>The <code>filters</code> option is an object of key/value pairs, in which the keys correspond to the fields of the related model to be filtered, and the values will either be literals or field names in the current model, the value of which will be used to filter the relationship.</p><p>In the example below, the <code>author</code> field will only allow selection of a <code>User</code> whose <code>group</code> field is equal to 'admin'.</p><pre><code class=\"language-javascript\">Post.add({\n    title: { type: String, required: true },\n    category: { type: Types.Select, options: 'user, editor, admin', default: 'user' },\n    author: { type: Types.Relationship, ref: 'User', filters: { group: 'admin' } }\n});</code></pre><p>You can also filter by the value of another field on the model. You do this setting the value of the filter to the name of the field, prefixed by a colon (:). </p><p>In the example below, the <code>author</code> field will only allow selection of a <code>User</code> whose <code>group</code> field is equal to the value of the <code>category</code> field of the <code>Post</code> model.</p><pre><code class=\"language-javascript\">Post.add({\n    title: { type: String, required: true },\n    category: { type: Types.Select, options: 'user, editor, admin', default: 'user' },\n    author: { type: Types.Relationship, ref: 'User', filters: { group: ':category' } }\n});</code></pre><p>Finally, you can also filter by the current model's <code>_id</code> field.</p><p>In the example below, the <code>bestPost</code> field will only allow selection of a <code>Post</code> whose <code>author</code> field is equal to the <code>_id</code> of the current document.</p><pre><code class=\"language-javascript\">User.add({\n    name: { type: String, required: true },\n    group: { type: Types.Select, options: 'user, editor, admin', default: 'user' },\n    bestPost: { type: Types.Relationship, ref: 'Post', filters: { author: ':_id' } }\n});</code></pre><p class=\"note\">You can only set filters on one-many relationships (i.e. when the <code>many</code> option is NOT set to <code class=\"default-value\">true</code>).</p><h5>Populating related data in queries</h5><p>You can populate related data for relationship fields thanks to <a href=\"http://mongoosejs.com/docs/populate.html\" target=\"_blank\">Mongoose's populate functionality</a>. To populate the author and category documents when loading a Post from the example above, you would do this:</p><pre><code class=\"language-javascript\">Post.model.findOne().populate('author categories').exec(function(err, post) {\n    // the author is a fully populated User document\n    console.log(post.author.name);\n});</code></pre><p class=\"note\">Note that if no ObjectId is stored, or an invalid ObjectId is stored (e.g. a document has been deleted), <code>author</code> will be <code class=\"data-type\">undefined</code> in the example above.</p><a name=\"relationship-definitions\"></a><h3>Relationship Definitions</h3><p>What if, in the example above, you wanted to see a list of the Posts by each Author? Because the relationship field is on the Post, you need to tell the Author (and the PostCategory) Model that it is being referred to. Doing so allows the Admin UI to represent the relationship from both sides.</p><p>You do this by calling the <code>relationship</code> method on the <code>Model</code> like this:</p><pre><code class=\"language-javascript\">User.relationship({ path: 'posts', ref: 'Post', refPath: 'author' });</code></pre><div class=\"options\"><h5>Options</h5><p><code>path</code> <code class=\"data-type\">String</code> - the path of the relationship reference on the Model</p><p><code>ref</code> <code class=\"data-type\">String</code> - the key of the referred Model (the one that has the relationship field)</p><p><code>refPath</code> <code class=\"data-type\">String</code> - the path of the relationship being referred to in the referred Model</p></div><p>As you can see, the options provided to the <code>relationship</code> method mirror those of the relationship field it refers to.</p><p class=\"note\">Relationship definitions are optional; if you leave them out, the relationships simply won't be displayed in the Admin UI from the other side of the relationship. The relationship field will still work as expected.</p><a name=\"relationship-queries\"></a><h3>Loading related items</h3><p>Filtering one-to-many related items is easy; simply specify the ID of the item you wish to filter on like any other value:</p><pre><code class=\"language-javascript\">Post.model.find().where('author', author.id).exec(function(err, posts) {\n    // ...\n});</code></pre><p>To filter many-to-many related items, use an <code>in</code> condition and specify one (or more) ids as an array:</p><pre><code class=\"language-javascript\">Post.model.find().where('categories').in([category.id]).exec(function(err, posts) {\n    // ...\n});</code></pre><a name=\"fieldtypes\"></a><h2>Field Types</h2><a name=\"fieldtypes-boolean\"></a><h3><code>Boolean</code></h3><h4><code class=\"data-type\">Boolean</code> &mdash; Displayed as a checkbox in the Admin UI</h4><pre><code class=\"language-javascript\">{ type: Types.Boolean }</code></pre><a name=\"fieldtypes-code\"></a><h3><code>Code</code></h3><h4><code class=\"data-type\">String</code> &mdash; Displayed with CodeMirror in the Admin UI.</h4><pre><code class=\"language-javascript\">{ type: Types.Code, height: 180, language: json }</code></pre><div class=\"options\"><h5>Options</h5><p><code>height</code> <code class=\"data-type\">Number</code> - the height of the field (in pixels). Default: 180</p><p><code>language</code> <code class=\"data-type\">String</code> - the language in the code field.</p>Supported Languages: <code>asp, c, coffee, css, c++, html, ini</code>\n<code> jade, java, js, json, jsp, less, lisp</code>\n<code>objectivec, perl, php, python, ruby, sass, sh, sql, tpl, vb, xml</code></div><a name=\"fieldtypes-color\"></a><h3><code>Color</code></h3><h4><code class=\"data-type\">Color</code> &mdash; Displayed as a text field with a color picker</h4><pre><code class=\"language-javascript\">{ type: Types.Color }</code></pre><a name=\"fieldtypes-date\"></a><h3><code>Date</code></h3><h4><code class=\"data-type\">Date</code> &mdash; Displayed as a date picker in the Admin UI</h4><p class=\"note\">Input should either be a valid <strong>Date</strong>, or a string in the format <strong>YYYY-MM-DD</strong> (can be blank unless field is required)</p><p class=\"note\">To default Date fields to the current time, set the <code>default</code> option to <code class=\"default-value\">Date.now</code></p><pre><code class=\"language-javascript\">{ type: Types.Date }</code></pre><div class=\"options\"><h5>Options</h5><p><code>format</code> <code class=\"data-type\">string</code> - the default format pattern to use, defaults to <code class=\"default-value\">Do MMM YYYY</code></p><p><code>yearRange</code> <code class=\"data-type\">Array</code> <code class=\"default-value\">minYear, maxYear</code> - the default range of years to be displayed.</p><p>See the <a href=\"http://momentjs.com/docs/#/displaying/format/\" target=\"_blank\">momentjs format docs</a> for information on the supported formats and options.</p><h5>Underscore methods</h5><p><code>format(string)</code> - formats the stored value using <a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a></p><p><code>moment()</code> - returns a <a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a> object initialised with the value of the field</p><p><code>parse(input, format, ...)</code> - parses input using <a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a>, sets the field value and returns the moment object</p><p>See the <a href=\"http://momentjs.com/docs/#/parsing/\" target=\"_blank\">momentjs parse docs</a> for information on the supported formats and options for the <code>parse</code> method.</p><pre><code class=\"language-javascript\">item.createdDate = Date.now();\nitem._.createdDate.format(); // returns today's date using the default format string\nitem._.createdDate.parse('2013-12-04'); // returns a moment object with the parsed date\nitem._.createdDate.format('YYYY-MM-DD'); // returns '2013-12-04'</code></pre></div><a name=\"fieldtypes-datetime\"></a><h3><code>Datetime</code></h3><h4><code class=\"data-type\">Datetime</code> &mdash; Displayed as a date and time picker in the Admin UI</h4><p class=\"note\">Input should either be a valid <strong>Date</strong>, or a string in the format <code class=\"default-value\">YYYY-MM-DD</code> (can be blank unless field is required)</p><p class=\"note\">To default Date fields to the current time, set the <code>default</code> option to <code>Date.now</code></p><pre><code class=\"language-javascript\">{ type: Types.Datetime, default: Date.now }</code></pre><div class=\"options\"><h5>Options:</h5><p><code>format</code> <code class=\"data-type\">string</code> - the default format pattern to use, defaults to <code class=\"default-value\">Do MMM YYYY hh:mm:ss a</code></p><p>See the <a href=\"http://momentjs.com/docs/#/displaying/format/\" target=\"_blank\">momentjs format docs</a> for information on the supported formats and options.</p><h5>Underscore methods:</h5><p><code>format(string)</code> - formats the stored value using <a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a></p><p><code>moment()</code> - returns a <a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a> object initialised with the value of the field</p><p><code>parse(input, format, ...)</code> - parses input using <a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a>, sets the field value and returns the moment object</p><p>See the <a href=\"http://momentjs.com/docs/#/parsing/\" target=\"_blank\">momentjs parse docs</a> for information on the supported formats and options for the <code>parse</code> method.</p></div><a name=\"fieldtypes-email\"></a><h3><code>Email</code></h3><h4><code class=\"data-type\">String</code> &mdash; Displayed as a text field in the Admin UI</h4><p class=\"note\">Input must look like a valid email address (can be blank unless field is required)</p><pre><code class=\"language-javascript\">{ type: Types.Email, displayGravatar: true }</code></pre><div class=\"options\"><h5>Options</h5><p><code>displayGravatar</code> <code class=\"data-type\">Boolean</code> - whether to display a gravatar image in the Admin UI</p><h5>Underscore methods:</h5><p><code>gravatarUrl(input, size, defaultImage, rating)</code> - generates a gravatar image request url</p><pre><code class=\"language-javascript\">item.email = \"demo@keystonejs.com\";\nitem._.email.gravatarUrl(); // \"//www.gravatar.com/avatar/74a0071e5f3a7107b570b7d4a1a7619d?s=80&d=identicon&r=g\"\nitem._.email.gravatarUrl(200,'mm','r'); // \"//www.gravatar.com/avatar/74a0071e5f3a7107b570b7d4a1a7619d?s=200&d=mm&r=r\"</code></pre></div><a name=\"fieldtypes-html\"></a><h3><code>Html</code></h3><h4><code class=\"data-type\">String</code> &mdash; Displayed as a text field or WYSIWYG Editor in the Admin UI.</h4><pre><code class=\"language-javascript\">{ type: Types.Html, wysiwyg: true }</code></pre><div class=\"options\"><h5>Options</h5><p><code>wysiwyg</code> <code class=\"data-type\">Boolean</code> - whether to display a WYSIWYG editor in the Admin UI  - for customizations of the editor see the <a href=\"/docs/configuration/#options-ui\">Admin UI Options</a>.</p><p><code>height</code> <code class=\"data-type\">Number</code> - the height of the field (in pixels)</p></div><p>See the <a href=\"/docs/configuration#options-ui\">Admin UI Options</a> for global configuration options that can be used to customise the WYSIWYG editor.</p><a name=\"fieldtypes-key\"></a><h3><code>Key</code></h3><h4><code class=\"data-type\">String</code> &mdash; Displayed as a text field in the Admin UI</h4><p>Automatically converts input to a valid key (no spaces or special characters). White space is replaced with a separator.</p><pre><code class=\"language-javascript\">{ type: Types.Key }</code></pre><div class=\"options\"><h5>Options</h5><p><code>separator</code> <code class=\"data-type\">String</code> - the separator to use when replace white space in the input; defaults to <code class=\"default-value\">-</code></p></div><a name=\"fieldtypes-location\"></a><h3><code>Location</code></h3><h4><code class=\"data-type\">Object</code> &mdash; Displayed as a combination of fields in the Admin UI</h4><p>Contains a standard set of strings for storing an address, and a longitude / latitude point with a <code class=\"data-type\">2dsphere</code> index.</p><p>Also provides autocomplete functionality using Google's Geocoding API. This requires either a Google Maps API key to be provided (see the <a href=\"/docs/configuration#services-google\">Google configuration documentation</a> for details), or the option \"<code>geocodeGoogle</code>\" to be set to <code>true</code>.</p><p>Providing an API key allows you to monitor your application's API usage in the Google Developers Console and enables per-key instead of per-IP-address quota limits.</p><p>The Geocoding API may only be used in accordance with the Google Maps API License. </p><pre><code class=\"language-javascript\">{ type: Types.Location, defaults: { country: 'Australia' } }</code></pre><p class=\"note\">Note: the schema paths are based on Australian address formats, and should be updated to be more appropriate for other international formats. If you have feedback on how the structure should be internationalised, please open a ticket.</p><div class=\"options\"><h5>Options</h5><p><code>defaults</code> <code class=\"data-type\">Object</code> - default values for each path in the field schema</p><p><code>geocodeGoogle</code> <code class=\"data-type\">Boolean</code> - activate or deactivate the Google Geocoding API, whether an API key is set or not.</p><h5>Schema</h5><p><code>name</code> <code class=\"data-type\">String</code> - building name</p><p><code>number</code> <code class=\"data-type\">String</code> - unit or shop number</p><p><code>street1</code> <code class=\"data-type\">String</code> - street address</p><p><code>street2</code> <code class=\"data-type\">String</code> - street address line 2</p><p><code>suburb</code> <code class=\"data-type\">String</code></p><p><code>state</code> <code class=\"data-type\">String</code></p><p><code>postcode</code> <code class=\"data-type\">String</code></p><p><code>country</code> <code class=\"data-type\">String</code></p><p><code>geo</code> <code class=\"data-type\">Array</code> <code class=\"default-value\">longitude, latitude</code></p><p class=\"note\"><strong>Important</strong>: as per the MongoDB convention, the order for the <strong>geo</strong> array must be <code class=\"default-value\">lng, lat</code> which is the opposite of the order used by Google's API.</p><h5>Underscore methods</h5><p><code>googleLookup(region, update, callback)</code> - autodetect the full address and lng, lat from the stored value.</p><ul><li><code>region</code> <code class=\"data-type\">String</code> is passed to the Places API for regional biasing and filtering.</li><li><code>update</code> <code class=\"data-type\">String</code> passing <code class=\"default-value\">\"overwrite\"</code> will completely overwrite existing data with the result. <code class=\"default-value\">true</code> will set blank properties on the field with the result.</li><li><code>callback(err, location, result)</code> - is passed the parsed <strong>location</strong> object, and the raw <strong>result</strong> from Google.</li></ul><p>Internal status codes mimic the Google API status codes. See <a href=\"https://developers.google.com/maps/documentation/geocoding/\" target=\"_blank\">https://developers.google.com/maps/documentation/geocoding/</a> for more information.</p><p>Use of the Google Geocoding API is subject to a query limit of 2,500 geolocation requests per day, except with an enterprise license.</p><p>The Geocoding API may only be used in conjunction with a Google map; geocoding results without displaying them on a map is prohibited. Please make sure your Keystone app complies with the Google Maps API License.</p></div><a name=\"fieldtypes-markdown\"></a><h3><code>Markdown</code></h3><h4><code class=\"data-type\">Object</code> &mdash; Displayed as a textarea field in the Admin UI</h4><pre><code class=\"language-javascript\">{ type: Types.Markdown }</code></pre><div class=\"options\"><h5>Options</h5><p><code>height</code> <code class=\"data-type\">Number</code> - defines the height of the markdown editor; defaults to <code class=\"default-value\">90</code>.</p><pre><code class=\"language-javascript\">{ type: Types.Markdown, height: 200 }</code></pre><p><code>toolbarOptions</code> <code class=\"data-type\">Object</code> - allow customizations of the toolbar.</p><p><code>toolbarOptions.hiddenButtons</code> <code class=\"data-type\">String</code> - Comma separated list of buttons to hide.</p><pre><code class=\"language-javascript\">{ type: Types.Markdown, toolbarOptions: { hiddenButtons: 'H1,H6,Code' } }</code></pre><h5>Schema</h5><p>The markdown field will automatically convert markdown to html when the <code>md</code> property is changed, via a setter on the <code>md</code> path.</p><p><code>md</code> <code class=\"data-type\">String</code> - source markdown text</p><p><code>html</code> <code class=\"data-type\">String</code> - generated html code</p><pre><code class=\"language-javascript\">Page.add({ content: Types.Markdown });\n \nvar page = new Page.model();\npage.content.md = \"# Hello World\";\npage.content.html == \"&lt;h1&gt;Hello World&lt;/h1&gt;\";\n \n// or...\n \nPage.fields.content.updateItem(page, \"* list item\");\npage.fields.content.format(page) == \"&lt;ul&gt;&lt;li&gt;list item&lt;/ul&gt;&lt;/li&gt;\";</code></pre></div><a name=\"fieldtypes-money\"></a><h3><code>Money</code></h3><h4><code class=\"data-type\">Number</code> &mdash; Displayed as a number field in the Admin UI</h4><p>Input should either be a valid <strong>Number</strong>, or a string that can be converted to a number (leading symbols are allowed; can be blank unless field is required).</p><pre><code class=\"language-javascript\">{ type: Types.Money }</code></pre><div class=\"options\"><h5>Options</h5><p><code>format</code> <code class=\"data-type\">String</code>, formats the stored value using <a href=\"http://numeraljs.com\" target=\"_blank\">numeraljs</a>.</p><pre><code class=\"language-javascript\">{ type: Types.Money, format: '$0,0.00' }</code></pre><p><code>currency</code> <code class=\"data-type\">String</code>, loads a predefined object of settings for a specific language, the language must exist as a .js in numeral/languages folder.</p><pre><code class=\"language-javascript\">{ type: Types.Money, currency: 'en-gb' }</code></pre><h5>Underscore methods</h5><p><code>format(string)</code> - formats the stored value using <a href=\"http://numeraljs.com\" target=\"_blank\">numeraljs</a>. Set to <code class=\"default-value\">false</code> to disable automatic formatting.</p><p>Format string defaults to <code class=\"default-value\">$0,0.00</code></p></div><a name=\"fieldtypes-name\"></a><h3><code>Name</code></h3><h4><code class=\"data-type\">Object</code> &mdash; Displayed as <strong>firstname</strong> <strong>lastname</strong> fields in the Admin UI</h4><pre><code class=\"language-javascript\">{ type: Types.Name }</code></pre><div class=\"options\"><h5>Schema</h5><p>The name field adds <code>first</code> and <code>last</code> <code class=\"data-type\">String</code> paths to the schema, as well as a <code>full</code> virtual getter and setter.</p><p><code>first</code> <code class=\"data-type\">String</code> - first name</p><p><code>last</code> <code class=\"data-type\">String</code> - last name</p><h5>Virtuals</h5><p><code>full</code> <code class=\"data-type\">String</code> - first and last name, concatenated with a space (if both have a value)</p><p>The <code>name.full</code> setter splits input at the first space.</p></div><a name=\"fieldtypes-number\"></a><h3><code>Number</code></h3><h4><code class=\"data-type\">Number</code> &mdash; Displayed as a number field in the Admin UI</h4><p>Input should either be a valid <strong>Number</strong>, or a string that can be converted to a number (can be blank unless field is required)</p><pre><code class=\"language-javascript\">{ type: Types.Number }</code></pre><div class=\"options\"><h5>Underscore methods</h5><p><code>format(string)</code> - formats the stored value using <a href=\"http://numeraljs.com\" target=\"_blank\">numeraljs</a>. Set to <code class=\"default-value\">false</code> to disable automatic formatting.</p><p>Format string defaults to <code class=\"default-value\">0,0[.][000000000000]</code></p></div><a name=\"fieldtypes-numberarray\"></a><h3><code>Numberarray</code></h3><h4><code class=\"data-type\">Array</code> &mdash; Displayed as a series of number fields in the Admin UI</h4><pre><code class=\"language-javascript\">{ type: Types.Numberarray }</code></pre><div class=\"options\"><h5>Underscore methods</h5><p><code>format(string)</code> - formats the stored value using <a href=\"http://numeraljs.com\" target=\"_blank\">numeraljs</a>. Set to <code class=\"default-value\">false</code> to disable automatic formatting.</p><p>Format string defaults to <code class=\"default-value\">0,0[.][000000000000]</code></p></div><a name=\"fieldtypes-password\"></a><h3><code>Password</code></h3><h4><code class=\"data-type\">String</code> &mdash; Displayed as a password field in the Admin UI, with a 'change' button.</h4><p>Passwords are automatically encrypted with bcrypt, and expose a method to compare a string to the encrypted hash.</p><p class=\"note\">The encryption happens with a <strong>pre-save hook</strong> added to the <strong>schema</strong>, so passwords set will not be encrypted until an item has been saved to the database.</p><pre><code class=\"language-javascript\">{ type: Types.Password }</code></pre><div class=\"options\"><h5>Options</h5><p><code>workFactor</code> <code class=\"data-type\">Number</code> - the bcrypt workfactor to use when generating the hash, higher numbers are slower but more secure (defaults to <code class=\"default-value\">10</code>)</p><h5>Underscore methods</h5><p><code>compare(candidate, callback)</code> - encrypts the candidate and compares it against the encrypted hash</p><ul><li><code>candidate</code> <code class=\"data-type\">String</code> to compare</li><li><code>callback(err, result)</code> - <strong>result</strong> is <code class=\"default-value\">true</code> if the candidate matches the stored password, or <code class=\"default-value\">false</code> if it doesn't</li></ul><h5>Special paths</h5><p><code>{path}_compare</code> - when provided to the <strong>updateHandler</strong>, it will be checked against <code>{path}</code> and validation will fail if they don't match.</p></div><a name=\"fieldtypes-select\"></a><h3><code>Select</code></h3><h4><code class=\"data-type\">String</code> or <code class=\"data-type\">Number</code> &mdash; Displayed as a select field in the Admin UI</h4><p class=\"note\">Similar to <code>Enum</code> in other Frameworks.</p><pre><code class=\"language-javascript\">{ type: Types.Select, options: 'first, second, third' }</code></pre><div class=\"options\"><h5>Options</h5><p><code>numeric</code> <code class=\"data-type\">Boolean</code> when <code class=\"default-value\">true</code>, causes the value of the field to be stored as a <code class=\"data-type\">Number</code> instead of a <code class=\"data-type\">String</code></p><pre><code class=\"language-javascript\">{ type: Types.Select, numeric: true, options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }] }</code></pre><p><code>emptyOption</code> <code class=\"data-type\">Boolean</code> when <code class=\"default-value\">undefined || true</code>, includes a blank value as the first option in the <code>&lt;select&gt;</code> field.</p><pre><code class=\"language-javascript\">{ type: Types.Select, required: true, options: 'first, second', emptyOption: false }</code></pre><p><code>options</code> <code class=\"data-type\">String</code> or <code class=\"data-type\">Array</code> - the options for the select field</p><p>Option values can be provided as a comma-delimited list <code class=\"data-type\">String</code> of values, in which the string is split into an <code class=\"data-type\">Array</code>.</p><p>For an <code class=\"data-type\">Array</code> of options, each option should be either a</p><ul><li><code class=\"data-type\">String</code> representing the <code>value</code> of the option; the <code>label</code> is automatically generated</li><li><code class=\"data-type\">Object</code> with <code>value</code> and <code>label</code> <code class=\"data-type\">String</code> properties</li></ul><p>You can mix <code class=\"data-type\">String</code> and <code class=\"data-type\">Object</code> items in the <code>options</code> <code class=\"data-type\">Array</code>:</p><pre><code class=\"language-javascript\">{ type: Types.Select, options: ['first', 'second', { value: 'third', label: 'The third one' }] }</code></pre><p><code class=\"data-type\">Object</code> options can have additional properties which are accessible when the current options data, or fields options are retrieved.</p><pre><code class=\"language-javascript\">{ type: Types.Select, options: [\n    { value: 'first', label: 'The first option', custom: 'value' },\n    { value: 'second', label: 'Second' }\n]}</code></pre><h5>Properties</h5><p><code>ops</code> <code class=\"data-type\">Array</code> - the field <strong>options</strong> array</p><p><code>values</code> <code class=\"data-type\">Array</code> - all <code>option.value</code> properties</p><p><code>labels</code> <code class=\"data-type\">Object</code> - all <code>option.label</code> properties, keyed by <code>option.value</code></p><p><code>map</code> <code class=\"data-type\">Object</code> - map of options, keyed by <code>option.value</code></p><h5>Schema</h5><p>The value of the current option will be stored at <code>{path}</code>. In addition, these virtuals are provided:</p><p><code>pathLabel</code> <code class=\"data-type\">String</code> - the label of the currently selected <strong>option</strong></p><p><code>pathData</code> <code class=\"data-type\">Object</code> - the currently selected <strong>option</strong>, including any custom properties</p><p><code>pathOptions</code> <code class=\"data-type\">Array</code> - the field <strong>options</strong> array</p><p><code>pathOptionsMap</code> <code class=\"data-type\">Object</code> - map of options, keyed by <code>option.value</code></p><h5>Underscore methods:</h5><p><code>pluck(property, default)</code> - returns <code>property</code> value of the currently selected <strong>option</strong>, or <code>default</code>. Useful in conjunction with custom properties for options.</p><pre><code class=\"language-javascript\">MyList.add({ state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' });\n \nMyList.fields.state.values == 'draft,published,archived';\nMyList.fields.state.labels == { draft: 'Draft', published: 'Published', archived: 'Archived' };\nMyList.fields.state.ops == [\n    { value: 'draft', label: 'Draft' },\n    { value: 'published', label: 'Published' },\n    { value: 'archived', label: 'Archived' }\n];\nMyList.fields.state.map == {\n    draft: { value: 'draft', label: 'Draft' },\n    published: { value: 'published', label: 'Published' },\n    archived: { value: 'archived', label: 'Archived' }\n};\n \nvar item = new MyList.model();\nitem.state == 'draft';\nitem.stateLabel == 'Draft';\nitem.stateData == { value: 'draft', label: 'Draft' };\nitem.stateOptions == MyList.fields.state.ops;\nitem.stateOptionsMap == MyList.fields.state.map;</code></pre></div><a name=\"fieldtypes-text\"></a><h3><code>Text</code></h3><h4><code class=\"data-type\">String</code> &mdash; Displayed as a text field in the Admin UI</h4><pre><code class=\"language-javascript\">{ type: Types.Text }</code></pre><a name=\"fieldtypes-textarea\"></a><h3><code>Textarea</code></h3><h4><code class=\"data-type\">String</code> &mdash; Displayed as a textarea field in the Admin UI</h4><pre><code class=\"language-javascript\">{ type: Types.Textarea }</code></pre><div class=\"options\"><h5>Options</h5><p><code>height</code> <code class=\"data-type\">Number</code> - the height of the field (in pixels)</p></div><a name=\"fieldtypes-textarray\"></a><h3><code>Textarray</code></h3><h4><code class=\"data-type\">Array</code> &mdash; Displayed as a series of text fields in the Admin UI</h4><pre><code class=\"language-javascript\">{ type: Types.Textarray }</code></pre><a name=\"fieldtypes-url\"></a><h3><code>Url</code></h3><h4><code class=\"data-type\">String</code> &mdash; Displayed as a text field in the Admin UI.</h4><pre><code class=\"language-javascript\">{ type: Types.Url }</code></pre><div class=\"options\"><h5>Options</h5><p><code>format</code> <code class=\"data-type\">Function</code> - process URL before its printed in the href/text of Admin UI cell. Defaults to <code class=\"default-value\">removeProtocolPrefix</code></p><h5>Underscore methods:</h5><p><code>format()</code> - formats the stored value by stripping the leading protocol (if any)</p><pre><code class=\"language-javascript\">item.url = \"http://keystonejs.com\";\nitem._.url.format(); // \"keystonejs.com\"</code></pre></div><h3>Storage\t</h3><a name=\"fieldtypes-azurefile\"></a><h3><code>AzureFile</code></h3><h4><code class=\"data-type\">Object</code> &mdash; Displayed as an file upload field in the Admin UI</h4><p>Automatically manages files stored in <a href=\"http://www.windowsazure.com/\" target=\"_blank\">Windows Azure Storage</a>, including uploading and deleting.</p><pre><code class=\"language-javascript\">{ type: Types.AzureFile }</code></pre><div class=\"options\"><h5>Options</h5><p><code>filenameFormatter</code> <code class=\"data-type\">Callback</code> - function with arguments current model and client file name to return the new filename to upload.</p><pre><code class=\"language-javascript\">{ type: Types.AzureFile, filenameFormatter: function(item, filename) {\n\treturn item._id + require('path').extname(filename);\n} }</code></pre><p><code>containerFormatter</code> <code class=\"data-type\">Callback</code> - function with arguments current model and client file name to return the new container name (container are a root folder in Azure Storage Account).</p><pre><code class=\"language-javascript\">{ type: Types.AzureFile, containerFormatter: containerFormatter: function(item, filename) {\n\treturn item.modelProperty;\n} }</code></pre><h5>Schema</h5><p><code>filename</code> <code class=\"data-type\">String</code></p><p><code>type</code> <code class=\"data-type\">String</code></p><p><code>filesize</code> <code class=\"data-type\">Number</code></p><p><code>url</code> <code class=\"data-type\">String</code></p><p><code>etag</code> <code class=\"data-type\">String</code></p><h5>Virtuals</h5><code>exists</code> <code class=\"data-type\">Boolean</code> - whether there is a stored file<h5>Underscore methods</h5><p><code>uploadFile(file, update, callback)</code> - uploads a file to the Azure Storage Account, stores the details in the field and provides the file data to the callback.</p><ul><li><code>file</code> <code class=\"data-type\">File</code> should be a file as provided by express when a file is uploaded, i.e. <code class=\"default-value\">req.files.path</code></li><li><code>update</code> <code class=\"data-type\">Boolean</code> whether to update the field with the details of the file after upload completes</li><li><code>callback(err, fileData)</code> - is passed the object that will be stored in the field (see schema above)</li></ul></div><a name=\"fieldtypes-cloudinaryimage\"></a><h3><code>CloudinaryImage</code></h3><h4><code class=\"data-type\">Object</code> &mdash; Displayed as an image upload field in the Admin UI</h4><p>Automatically manages images stored in <a href=\"http://cloudinary.com\" target=\"_blank\">Cloudinary</a>, including uploading, resizing and deleting.</p><p>See the <a href=\"/docs/configuration#services-cloudinary\">Cloudinary configuration documentation</a> for details on how to set up Cloudinary in KeystoneJS.</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage }</code></pre><div class=\"options\"><h5>Options</h5><p><code>publicID</code> <code class=\"data-type\">String</code> name of the field to be used as the Cloudinary image <code class=\"data-type\">public_id</code>.</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, publicID: 'slug' }</code></pre><p><code>folder</code> <code class=\"data-type\">String</code> specifies a custom folder/prefix for the Cloudinary image <code class=\"data-type\">public_id</code> when <code class=\"default-value\">cloudinary folders</code> is set to <code class=\"default-value\">true</code>.</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, folder: 'path/to/image' }</code></pre><p class=\"note\">If you want Cloudinary to automatically create folders when the <code>cloudinary folders</code> option is set to <code class=\"default-value\">true</code>, make sure you enable \"Auto-create folders\" in your Cloudinary account \"Upload Settings\".</p><p><code>autoCleanup</code> <code class=\"data-type\">Boolean</code> when <code class=\"default-value\">true</code> changes Keystone's default behavior from <code class=\"default-value\">remove</code> (which only removes the Cloudinary image from the database) to <code class=\"default-value\">delete</code> (which removes the image from both the database and Cloudinary storage). Additionally, this option replaces an existing image (if one already exists) during upload.</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, autoCleanup : true }</code></pre><p><code>select</code> <code class=\"data-type\">Boolean</code> when <code class=\"default-value\">true</code> a select field is displayed with a list of images currently available in Cloudinary storage. Only images with IDs that begin with the <code>selectPrefix</code> will be displayed when the <code>selectPrefix</code> is specified. Otherwise, images with IDs that begin with the <code>folder</code> will be displayed. If neither <code>selectPrefix</code> nor <code>folder</code> are configured, then only images with IDs that begin with <code class=\"data-type\">[{prefix}]/{list.path}/{field.path}/</code> will be displayed.</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, select : true }</code></pre><p><code>selectPrefix</code> <code class=\"data-type\">String</code> specifies the the prefix of the images that will be available for selection when <code>select</code> option is <code class=\"default-value\">true</code>.</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, select: true, selectPrefix: 'path/to/images' }</code></pre><h5>Schema</h5><p><code>public_id</code> <code class=\"data-type\">String</code></p><p><code>version</code> <code class=\"data-type\">Number</code></p><p><code>signature</code> <code class=\"data-type\">String</code></p><p><code>format</code> <code class=\"data-type\">String</code></p><p><code>resource_type</code> <code class=\"data-type\">String</code></p><p><code>url</code> <code class=\"data-type\">String</code></p><p><code>width</code> <code class=\"data-type\">Number</code></p><p><code>height</code> <code class=\"data-type\">Number</code></p><p><code>secure_url</code> <code class=\"data-type\">String</code></p><h5>Virtuals</h5><code>exists</code> <code class=\"data-type\">Boolean</code> - whether there is a stored image<h5>Special paths</h5><p><code>{path}_upload</code> - when a <code class=\"data-type\">file</code> is provided to the <strong>updateHandler</strong>, it will be uploaded to cloudinary and the details will be stored in the field.</p><h5>Underscore methods</h5><p><code>src(options)</code> <code class=\"data-type\">String</code> - returns the url of the image, accepts all options cloudinary supports</p><p><code>tag(options)</code> <code class=\"data-type\">String</code> - returns an <code class=\"default-value\">&lt;img&gt;</code> tag</p><p><code>scale(width, height, options)</code> <code class=\"data-type\">String</code> - scales the image to fit the exact width and height, retaining aspect ratio</p><p><code>fit(width, height, options)</code> <code class=\"data-type\">String</code> - scales the image to fit within the specified width and height, retaining aspect ratio</p><p><code>lfit(width, height, options)</code> <code class=\"data-type\">String</code> - scales the image to fit within the specified width and height, retaining aspect ratio (without exceeding the original dimensions)</p><p><code>limit(width, height, options)</code> <code class=\"data-type\">String</code> - scales the image (down only) to fit within the specified width and height, retaining aspect ratio</p><p><code>fill(width, height, options)</code> <code class=\"data-type\">String</code> - scales the image to fill the specified width and height</p><p><code>crop(width, height, options)</code> <code class=\"data-type\">String</code> - crops the image to fill the specified width and height</p><p><code>pad(width, height, options)</code> <code class=\"data-type\">String</code> - pads the image to fill the specified width and height</p><p><code>lpad(width, height, options)</code> <code class=\"data-type\">String</code> - pads the image to fill the specified width and height (without exceeding the original dimensions)</p><p><code>thumbnail(width, height, options)</code> <code class=\"data-type\">String</code> - crops the image to fill the specified width and height</p><p>In all methods, <code class=\"default-value\">options</code> is an optional <code class=\"data-type\">Object</code>. See <a href=\"http://cloudinary.com/documentation/image_transformations\" target=\"_blank\">Cloudinary's Transformation Documentation</a> for more information on the supported options and transformations.</p></div><p class=\"note\">Remember that if you are uploading images to a <code>CloudinaryImage</code> field using an HTML form, you need to specify <code>enctype=\"multipart/form-data\"</code> in your <code>form</code> tag.</p><a name=\"fieldtypes-cloudinaryimages\"></a><h3><code>CloudinaryImages</code></h3><h4><code class=\"data-type\">Array</code> &mdash; Displayed as a series of images, and an upload field in the Admin UI</h4><p>Stores multiple images in a array as a nested <code class=\"data-type\">Schema</code>, each of which expose the same methods as the <code class=\"data-type\">cloudinaryimage</code> field.</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImages }</code></pre><div class=\"options\"><h5>Options</h5><p><code>folder</code> <code class=\"data-type\">String</code> specifies a custom folder/prefix for the Cloudinary image <code class=\"data-type\">public_id</code> when <code class=\"default-value\">cloudinary folders</code> is set to <code class=\"default-value\">true</code>.</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImages, folder: 'path/to/image' }</code></pre><p class=\"note\">If you want Cloudinary to automatically create folders when the <code>cloudinary folders</code> option is set to <code class=\"default-value\">true</code>, make sure you enable \"Auto-create folders\" in your Cloudinary account \"Upload Settings\".</p></div><a name=\"fieldtypes-embedly\"></a><h3><code>Embedly</code></h3><h4><code class=\"data-type\">Object</code> &mdash; Displayed as read-only data in the Admin UI</h4><p>Automatically retrieves data from the <a href=\"http://embed.ly\" target=\"_blank\">Embedly</a> API about the value of another field (specified with the <code>from</code> option).</p><p>It stores the retrieved data (which includes the provider, media type, full URL, HTML embed code, width, height, thumbnail picture and more).</p><p>The api call to retrieve the data is implemented as a pre-save hook, and is only triggered if the <strong>from path</strong> value has changed.</p><p>See the <a href=\"/docs/configuration#services-embedly\">Embed.ly configuration documentation</a> for details on how to set up Embed.ly in KeystoneJS.</p><pre><code class=\"language-javascript\">{ type: Types.Embedly, from: 'path' }</code></pre><div class=\"options\"><h5>Options</h5><p><code>from</code> <code class=\"data-type\">String</code> - the path of another field in the Schema that will be passed to the Embedly API. The other field must contain a <code class=\"data-type\">String</code> value.</p><p><code>options</code> <code class=\"data-type\">Object</code> (optional) - passed as arguments to the embedly API along with the <code>from</code> field value</p><p>See <a href=\"http://embed.ly/docs/embed/api/endpoints/1/oembed\" target=\"_blank\">Embedly's oEmbed API documentation</a> for more information on options and returned data.</p><h5>Schema</h5><p><code>exists</code> <code class=\"data-type\">Boolean</code></p><p><code>type</code> <code class=\"data-type\">String</code></p><p><code>title</code> <code class=\"data-type\">String</code></p><p><code>url</code> <code class=\"data-type\">String</code></p><p><code>width</code> <code class=\"data-type\">Number</code></p><p><code>height</code> <code class=\"data-type\">Number</code></p><p><code>version</code> <code class=\"data-type\">String</code></p><p><code>description</code> <code class=\"data-type\">String</code></p><p><code>html</code> <code class=\"data-type\">String</code></p><p><code>authorName</code> <code class=\"data-type\">String</code></p><p><code>authorUrl</code> <code class=\"data-type\">String</code></p><p><code>providerName</code> <code class=\"data-type\">String</code></p><p><code>providerUrl</code> <code class=\"data-type\">String</code></p><p><code>thumbnailUrl</code> <code class=\"data-type\">String</code></p><p><code>thumbnailWidth</code> <code class=\"data-type\">Number</code></p><p><code>thumbnailHeight</code> <code class=\"data-type\">Number</code></p></div><a name=\"fieldtypes-localfile\"></a><h3><code>LocalFile</code></h3><div class=\"alert alert-warning\">This field type is not compatible with PAAS Hosts like Heroku because it relies on the local file system</div><h4><code class=\"data-type\">Object</code> &mdash; Displayed as a file upload field in the Admin UI</h4><p>Stores files on the local file system.</p><pre><code class=\"language-javascript\">{ type: Types.LocalFile }</code></pre><div class=\"options\"><h5>Options</h5><p><code>dest</code> <code class=\"data-type\">String</code> - required, the path to store uploaded file</p><p><code>prefix</code> <code class=\"data-type\">String</code> - the path prefix in browser, if it different with <code>dest</code></p><p><code>datePrefix</code> <code class=\"data-type\">String</code> - if set, prefixes the file name with the current date in this format (see <a href=\"http://momentjs.com\" target=\"_blank\">moment.js</a> for format options)</p><p><code>allowedTypes</code> <code class=\"data-type\">Array</code> of <code class=\"data-type\">String</code> - optional white-list of allowed mime types for uploaded file</p><p><code>filename</code> <code class=\"data-type\">Function</code> - function with two arguments: current model and file object to return the new filename to upload.<pre><code class=\"language-javascript\">{\n\ttype: Types.LocalFile,\n\tdest: '/data/files',\n\tprefix: '/files/',\n\tfilename: function(item, file){\n\t\treturn item.id + '.' + file.extension\n\t}\n}</code></pre></p><p><code>format</code> <code class=\"data-type\">Function</code> - function with two arguments: current model and file object to return representation of this file in Admin UI.<pre><code class=\"language-javascript\">{\n\ttype: Types.LocalFile,\n\tdest: '/data/files',\n\tprefix: '/files/',\n\tformat: function(item, file){\n\t\treturn '&lt;img src=\"/files/'+file.filename+'\" style=\"max-width: 300px\"&gt;'\n\t}\n}\n</code></pre></p><h5>Schema</h5><p><code>filename</code> <code class=\"data-type\">String</code></p><p><code>path</code> <code class=\"data-type\">String</code></p><p><code>size</code> <code class=\"data-type\">Number</code></p><p><code>filetype</code> <code class=\"data-type\">String</code></p><h5>Virtuals</h5><code>exists</code> <code class=\"data-type\">Boolean</code> - whether there is a file path stored<h5>Underscore methods</h5><p><code>uploadFile(file, update, callback)</code> - uploads a file to the local storage, stores the details in the field and provides the file data to the callback.</p><ul><li><code>file</code> <code class=\"data-type\">File</code> should be a file as provided by express when a file is uploaded, i.e. <code class=\"default-value\">req.files.path</code></li><li><code>update</code> <code class=\"data-type\">Boolean</code> whether to update the field with the details of the file after upload completes</li><li><code>callback(err, fileData)</code> - is passed the object that will be stored in the field (see schema above)</li></ul></div><a name=\"fieldtypes-s3file\"></a><h3><code>S3 File</code></h3><h4><code class=\"data-type\">Object</code> &mdash; Displayed as an file upload field in the Admin UI</h4><p>Automatically manages files stored in <a href=\"http://aws.amazon.com/s3\" target=\"_blank\">Amazon S3</a>, including uploading and deleting.</p><pre><code class=\"language-javascript\">{ type: Types.S3File }</code></pre><div class=\"options\"><h5>Options</h5><p><code>s3path</code> <code class=\"data-type\">String</code> - the path to store uploaded files under in the S3 bucket</p><p><code>datePrefix</code> <code class=\"data-type\">String</code> - if set, prefixes the file name with the current date in this format (see <a href=\"http://momentjs.com\" target=\"_blank\">moment.js</a> for format options)</p><p><code>allowedTypes</code> <code class=\"data-type\">Array</code> of <code class=\"data-type\">String</code> - optional white-list of allowed mime types for uploaded files</p><p><code>filename</code> <code class=\"data-type\">Function</code> - function with arguments current model and client file name to return the new filename to upload.<pre><code class=\"language-javascript\">{\n\ttype: Types.S3File,\n\tfilename: function(item, filename){\n\t\t// prefix file name with object id\n\t\treturn item._id + '-' + filename;\n\t}\n}</code></pre></p><p><code>headers</code> <code class=\"data-type\">Object</code> or <code class=\"data-type\">Array</code> or <code class=\"data-type\">Function</code> - headers to set on the S3 object</p><p>Headers can be provided as an <code class=\"data-type\">Object</code>, in which the keys are used as header names and the values are used as header values.<pre><code class=\"language-javascript\">{ \n\ttype: Types.S3File, \n\theaders: { \n\t\t'x-amz-meta-Cache-Control' : 'max-age=' + (60 * 15),\n\t\t'x-amz-meta-X-Custom-Header' : 'Object Option'\n\t} \n}</code></pre></p><p>When the option is provided as an <code class=\"data-type\">Array</code> of headers, each header element in the array should be an <code class=\"data-type\">Object</code> with <code>name</code> and <code>value</code> <code class=\"data-type\">String</code> properties<pre><code class=\"language-javascript\">{ \n\ttype: Types.S3File, \n\theaders: [\n\t\t{ name: 'x-amz-meta-Cache-Control', value: 'max-age=' + (60 * 15) },\n\t\t{ name: 'x-amz-meta-X-Custom-Header', value: 'Array Option' }\n\t]\n}</code></pre></p><p>When the option is provided as a <code class=\"data-type\">Function</code>, the function will be called with arguments for the current model and client file; The function should return either an <code class=\"data-type\">Array</code> of valid header objects or a simple <code class=\"data-type\">Object</code>.<pre><code class=\"language-javascript\">{ \n\ttype: Types.S3File, \n\theaders: function (item, file) {\n\t\tvar headers = [];\n\t\theaders.push({ name: 'x-amz-meta-Cache-Control', value: 'max-age=' + item.maxAge });\n\t\theaders.push({ name: 'x-amz-meta-X-Custom-Header', value: 'Computed Option (Array)' });\n\t\treturn headers;\n\t}\n}\n// or \n{ \n\ttype: Types.S3File, \n\theaders: function (item, file){\n\t\tvar headers = {};\n\t\theaders['x-amz-meta-Cache-Control'] = 'max-age=' + item.maxAge;\n\t\theaders['x-amz-meta-X-Custom-Header'] = 'Computed Option (Object)';\n\t\treturn headers;\n\t}\n}</code></pre></p><p><code>format</code> <code class=\"data-type\">Function</code> - function with two arguments: current model and file object to return representation of this file in Admin UI.<pre><code class=\"language-javascript\">{\n\ttype: Types.S3File,\n\tformat: function(item, file){\n\t\treturn '&lt;pre&gt;'+JSON.stringify(file, false, 2)+'&lt;/pre&gt;'+\n\t\t\t\t\t'&lt;img src=\"'+file.url+'\" style=\"max-width: 300px\"&gt;'\n\t}\n}\n</code></pre></p><h5>Schema</h5><p><code>filename</code> <code class=\"data-type\">String</code></p><p><code>type</code> <code class=\"data-type\">String</code></p><p><code>filesize</code> <code class=\"data-type\">Number</code></p><p><code>url</code> <code class=\"data-type\">String</code></p><h5>Virtuals</h5><code>exists</code> <code class=\"data-type\">Boolean</code> - whether there is a stored file<h5>Special paths</h5><p><code>{path}_upload</code> - when a <code class=\"data-type\">file</code> is provided to the <strong>updateHandler</strong>, it will be uploaded to s3 and the details will be stored in the field.</p><h5>Underscore methods</h5><p><code>uploadFile(file, update, callback)</code> - uploads a file to the s3 bucket, stores the details in the field and provides the file data to the callback.</p><ul><li><code>file</code> <code class=\"data-type\">File</code> should be a file as provided by express when a file is uploaded, i.e. <code class=\"default-value\">req.files.path</code></li><li><code>update</code> <code class=\"data-type\">Boolean</code> whether to update the field with the details of the file after upload completes</li><li><code>callback(err, fileData)</code> - is passed the object that will be stored in the field (see schema above)</li></ul></div><h2>More examples</h2><p>See the <a href=\"/examples\">Examples</a> page for projects that demonstrate real-world usage of the various list options and field types.</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/faqs": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>FAQ's</h1><p class=\"lead\">A collection of frequently asked questions's asked throughout community forums</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"faqs\"></a>Deploying to Heroku</h2><h3>Description</h3><p>This section describes the steps required to deploy your KeystoneJS application to Heroku. </p><h3>Prerequisites</h3><ol class=\"fancy-list\"><li>Sign up for a Heroku account and install the <a href=\"https://toolbelt.heroku.com/\">Heroku Toolbelt</a></li><li>In this section, we will be using Git and Github so make sure you are appropriately set up with both</li><li>Create a Keystone application, Github repository and clone the repository locally</li></ol><h3>Steps</h3><p class=\"lead\">Create the heroku application</p><p>Run the following command <code>heroku create</code> from your terminal and within your Keystone applications root directory. Heroku will generate an app name for you (i.e. beautiful-island-4327) and set up a git remote called Heroku to use for identification</p><p class=\"lead\">If you wish to rename your application</p><p>Run the command <code>heroku apps:rename your-new-app-name --app current-name-of-your-app</code> in order to change your applications name</p><p class=\"lead\">Add your new Heroku remotes.</p><p>Run the command <code>heroku git:remote --app your-new-app-name</code> in order to add the appropriate Heroku remotes</p><p class=\"lead\">Include Heroku add-ons</p><p>Firstly, you'll need a database. There are a few providers you can choose from in Heroku's add-ons directory. For the purpose of this walk-through we'll be using Mongolab. Secondly, let's add a logging system. Again, there are a few to choose from but we'll be using Papertrail. This gives you a nice web UI to your application logs and lets you set up alerts for errors, etc. The basic plan for papertrail is also free. </p><ol> <li>Adding MongoLab</li><p>Run the command <code>heroku addons:add mongolab:sandbox</code></p><i class=\"mt-2\">N.B: You can point your Keystone site at any database provider by customising the MONGO_URI environment variable (make sure to remove the mongolab addon first!)</i><li class=\"mt-2\">Adding Papertrail</li><p>Run the command <code>heroku addons:add papertrail:choklad</code> </p></ol><p class=\"lead\">Adding environment variables for 3rd party service providers</p><p>You can do this yourself (the dashboard gives you the ENV variable set up) or you can add it as an add-on to your Heroku account like Mongolab and Papertrail. We recommend you do this manually as you'll probably want to use the account in development and staging as well, rather than having it tied to as single Heroku app.</p><p class=\"lead\">Deployment</p><p>Once you've created your Keystone application and got the database configured, commit all your code to git and run the following command to make your site go live <code>git push heroku master</code></p><p class=\"lead\">View your live site</p><p>Now that you have deployed your application you can enter the command <code>heroku open</code> or simply navigate to http://your-new-app-name.herokapp.com</p><p class=\"lead\">Adding a custom domain</p><p>Login to your Heroku account and add a real domain for your application. Following this, point your DNS at Heroku and you're off. You can also set up SSL and whatever else you need. </p><i>N.B: Heroku doesn't keep any changes to the local file system so you can't keep user-uploaded files without putting them on a 3rd party service, hence the Cloudinary/Azure/S3 integration.</i><p class=\"mt-2\">Make sure to checkout <a href=\"https://devcenter.heroku.com/articles/getting-started-with-nodejs\">Heroku's getting started docs for Node.js </a> if you hit any hurdles.</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/getting-started": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Beginnings</h1><p class=\"lead\">.step(by).step(guide)  <br />.yo(<a href='/quick-start'> there's also a generator</a>)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"introduction\"></a>Introduction</h2><p>KeystoneJS makes it easy to build database-driven websites, applications and APIs in node.js.</p><p>Under the hood, KeystoneJS uses the <a href=\"http://expressjs.com\" target=\"_blank\">express.js</a> web server framework, and a <a href=\"http://mongodb.com\" target=\"_blank\">MongoDB</a> database via the <a href=\"http://mongoosejs.com\" target=\"_blank\">mongoose</a> object modelling framework.</p><div class=\"contextual-note\"><h4>Simple vs. Flexible</h4><p>Keystone is designed to make complicated things simple, without limiting the power or flexibility of node.js or the frameworks it is built on.</p><p>This guide will show you how to build a KeystoneJS website using the default project structure and options.</p><p>To learn more about how things work under the hood, and how you can extend or replace features, we strongly recommend reading the <a href=\"/docs/api/current/class\" >class reference</a> or <a href=\"https://github.com/keystonejs/keystone\" target=\"_blank\">source code</a>. </p></div><a name=\"introduction-prerequisites\"></a><h3>Prerequisites</h3><ol class=\"fancy-list\"><li>Before you begin, make sure you have <a href=\"http://nodejs.org/download\" target=\"_blank\">Node.js</a> 0.10+ installed and <a href=\"http://www.mongodb.org/downloads\" target=\"_blank\">MongoDB</a> v2.4+ installed and running.</li><li>You'll need a reasonable working knowledge of Javascript to use KeystoneJS, as well as familiarity with basics such as database concepts, and using node / npm etc.</li><li>In the guide we'll also be using <a href=\"http://jade-lang.com\" target=\"_blank\">Jade</a> for our view templates and <a href=\"http://lesscss.org\" target=\"_blank\">LESS</a> for our CSS templates. In your own project you can use any template language you like; see <a href=\"#templates_other\">using other template languages</a> (below) for more information.</li></ol><a name=\"introduction-productionvsdevelopment\"></a><h3>Production vs. Development</h3><p>Keystone applies different settings in production and development modes. The environment will default to <code>development</code>, so you should set the <code>NODE_ENV</code> environment variable to <code>production</code> on your production servers for better performance.</p><p>Your app can detect which environment it is running in by calling <code>keystone.get('env')</code>.</p><a name=\"gettingstarted\"></a><h2>Getting Started</h2><a name=\"gettingstarted-usingyeoman\"></a><h3>Using the Yeoman Generator</h3><p>The easiest way to get started with KeystoneJS is to use our new Yeoman Generator.</p><p>Follow the <a href=\"/quick-start\" >KeystoneJS Yeoman Generator Guide</a> for installation instructions.</p><a name=\"gettingstarted-startinganewproject\"></a><h3>Starting a new project</h3><p>Create a new directory for your project, then add the following two files which are responsible for setting up your project and starting your webserver.</p><div class=\"code-header\"><h4>package.json</h4><p>This file describes our project for npm, including the fact that it depends on <code>keystone</code>.</p></div><pre><code class=\"language-javascript\">{\n  \"name\": \"my-project\",\n  \"version\": \"0.0.1\",\n  \"private\": true,\n  \"dependencies\": {\n    \"keystone\": \"latest\",\n    \"underscore\": \"latest\"\n  },\n  \"engines\": {\n    \"node\": \"0.10.x\",\n    \"npm\": \"1.3.x\"\n  },\n  \"scripts\": {\n    \"start\": \"web.js\"\n  }\n}</code></pre><p class=\"note\">Note we're also requiring the <a href=\"http://underscorejs.org\">underscore library</a>, because we'll use some of its functionality later. You can use any other packages you like from <a href=\"https://npmjs.org\">npm</a> in your Keystone application by adding them to your <code>package.json</code>.</p><div class=\"code-header\"><h4>web.js</h4><p>This is the script that will run our keystone website.</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone');\nkeystone.init({\n  \n  'name': 'My Project',\n  \n  'favicon': 'public/favicon.ico',\n  'less': 'public',\n  'static': ['public'],\n  \n  'views': 'templates/views',\n  'view engine': 'jade',\n  \n  'auto update': true,\n  'mongo': 'mongodb://localhost/my-project',\n  \n  'session': true,\n  'auth': true,\n  'user model': 'User',\n  'cookie secret': '(your secret here)'\n  \n});\n \nrequire('./models');\n \nkeystone.set('locals', {\n  utils: keystone.utils\n});\n \nkeystone.set('routes', require('./routes'));\n \nkeystone.start();</code></pre><p>Now, in your console, run <code>npm install</code> from the root folder of your project (where package.json is) to install Keystone.</p><p class=\"note\">For more information about the options Keystone supports, see the <a href=\"/docs/configuration\">configuration guide</a>.</p><p class=\"note\">Note: your web script won't run yet, because it is including models and routes that have not been set up yet. It assumes you follow the conventions in this guide.</p><div class=\"contextual-note\"><h4>BYO Express and Mongoose</h4><p>If you want to require Express or Mongoose in your application, instead of having Keystone provide and configure them completely, you can do so.</p><p>Include them in the dependencies list for your project, then provide them to Keystone using the <code>app</code> and <code>mongoose</code> options respectively.</p><pre>var express = require('express'),\n    mongoose = require('mongoose'),\n    app = express(),\n    keystone = require('keystone');\n \n    keystone.set('app', app);\n    keystone.set('mongoose', mongoose);</pre></div><p class=\"note\">The <code>keystone.connect()</code> method, previously used to set your own Express/Mongoose instances, is now deprecated and will be removed in future versions of Keystone. Due to changes in Express 4, `keystone.connect()` no longer works as expected. Please use the Keystone <code>app</code> and <code>mongoose</code> options in its place.</p><a name=\"gettingstarted-projectstructure\"></a><h3>Project Structure</h3><p>With your package and web scripts in place, it's time to scaffold out containers for the rest of your app. Create the following directory structure:</p><pre>|--lib\n|  <span>Custom libraries and other code</span>\n|--models\n|  <span>Your application's database models</span>\n|--public\n|  <span>Static files (css, js, images, etc.) that are publicly available</span>\n|--routes\n|  |--api\n|  |  <span>Your application's api controllers</span>\n|  |--views\n|  |  <span>Your application's view controllers</span>\n|  |--index.js\n|  |  <span>Initialises your application's routes and views</span>\n|  |--middleware.js\n|  |  <span>Custom middleware for your routes</span>\n|--templates\n|  |--includes\n|  |  <span>Common .jade includes go in here</span>\n|  |--layouts\n|  |  <span>Base .jade layouts go in here</span>\n|  |--mixins\n|  |  <span>Common .jade mixins go in here</span>\n|  |--views\n|  |  <span>Your application's view templates</span>\n|--updates\n|  <span>Data population and migration scripts</span>\n|--package.json\n|  <span>Project configuration for npm</span>\n|--web.js\n|  <span>Main script that starts your application</span></pre><p>We also recommend that your application will be simpler to build and maintain if you mirror the internal structure of your <code>routes/views</code> and <code>templates/views</code> directories as much as possible.</p><div class=\"contextual-note\"><h4>Structure</h4><p>This guide assumes you follow the recommendations above, however Keystone doesn't actually enforce any structure, so you're free to make changes to suit your application better.</p></div><a name=\"models\"></a><h2>Models</h2><p>Before you can start your Keystone app, you'll need some data models.</p><p>We're going to start with the <code>User</code> model, which is special - we need it so that Keystone can do authentication and session management.</p><p>Create the following two files in the <code>/models</code> folder:</p><div class=\"code-header\"><h4>models/index.js</h4><p>This is the script that includes your models. It doesn't need to export anything.</p></div><pre><code class=\"language-javascript\">require('./users.js');</code></pre><div class=\"code-header\"><h4>models/users.js</h4><p>This script initialises the <code>User</code> model. It doesn't need to export anything, but the model <em>must</em> be registered with Keystone.</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Types = keystone.Field.Types;\n \nvar User = new keystone.List('User');\n \nUser.add({\n    name: { type: Types.Name, required: true, index: true },\n    email: { type: Types.Email, initial: true, required: true, index: true },\n    password: { type: Types.Password, initial: true },\n    canAccessKeystone: { type: Boolean, initial: true }\n});\n \nUser.register();</code></pre><a name=\"models-authentication\"></a><h3>Authentication and Session Management</h3><p>For Keystone to provide authentication and session management to your application, it needs to know a few things (which we've now configured).</p><p>To recap:</p><ul class=\"list\"><li>The option <code>user model</code> must be the name of the Model that Keystone should look in to find your users. If you use a different model name, be sure to set the option correctly.</li><li>If you want your application to support session management, set the <code>session</code> option to <strong>true</strong>. Loading sessions incurs a small overhead, so if your application doesn't need sessions you can turn this off.</li><li>Keystone has built-in views for signing in and out. To enable them, set the <code>auth</code> option to <strong>true</strong>. You can also implement custom signin and signout screens in your applications' views.</li><li>Sessions are persisted using an encrypted cookie storing the user's ID. Make sure you set the <code>cookie secret</code> option to a long, random string.</li><li>The user model must have a <code>canAccessKeystone</code> property (which can be a virtual method or a stored boolean) that says whether a user can access Keystone's Admin UI or not. *Note* If you choose to use a virtual method setting the value in mongodb directly will not authenticate correctly. A virtual method is useful when the criteria for access is more complex. See <a href=\"http://mongoosejs.com/docs/guide.html#virtuals\">Mongoose virtuals</a></li></ul><h4>More on Data Models</h4><p>For more information on how to set up your application's models, and the full documentation for lists and fields, see the <a href=\"/docs/database\">database guide</a>.</p><a name=\"routesviews\"></a><h2>Routes &amp; Views</h2><p>Usually, the easiest and clearest way to configure the logic for different routes (or views) in your application is to set up all the bindings single file, then put any common logic (or middleware) in another file.</p><p>Then, the controller for each route you bind goes in its own file, organised similarly to the template that renders the view.</p><p>Keystone's <code>importer</code> and Express's middleware support makes this easy to set up.</p><a name=\"routesviews-settingup\"></a><h3>Setting up your Routes and Middleware</h3><h4>Route index controller</h4><p>First, create a <code>routes/index.js</code> file. This is where we bind your application's URL patterns to the controllers that load and process data, and render the appropriate template.</p><div class=\"code-header\"><h4>routes/index.js</h4><p>This script imports your route controllers and binds them to URLs.</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    middleware = require('./middleware'),\n    importRoutes = keystone.importer(__dirname);\n \n// Common Middleware\nkeystone.pre('routes', middleware.initErrorHandlers);\nkeystone.pre('routes', middleware.initLocals);\nkeystone.pre('render', middleware.flashMessages);\n \n// Handle 404 errors\nkeystone.set('404', function(req, res, next) {\n    res.notfound('Error (404)', 'The requested page was not found');\n});\n \n// Handle other errors\nkeystone.set('500', function(err, req, res, next) {\n    var message;\n    if (err instanceof Error) {\n        message = err.message;\n        err = err.stack;\n    }\n    res.err(err, 'Error (500)', message || 'The site has encountered an error');\n});\n \n// Load Routes\nvar routes = {\n    views: importRoutes('./views')\n};\n \n// Bind Routes\nexports = module.exports = function(app) {\n    \n    app.get('/', routes.views.index);\n    \n}</code></pre><h4>Stepping through the route controller index</h4><ul><li>Load <code>keystone</code>, the <code>middleware.js</code> file (below), and create an <code>importer</code> for the current directory</li><li>Bind middleware (below) that<ul><li>Initialises our basic error handlers</li><li>Initialises common local variables for our view templates</li><li>Retrieves flash messages from session before the view template is rendered</li></ul></li><li>Tell Keystone how to handle <code>404</code> and <code>500</code> errors</li><li>Use the importer to load all the route controllers in the <code>/routes/views</code> directory</li><li>Export a method that binds the index route controller to <code>GET</code> requests on the root url <code>/</code><ul><li>The <code>app</code> argument to this method our express app, so anything you can do binding routes in express, you can do here.</li></ul></li></ul><p>Additional route controllers that you add to your app should be added using <code>app.get</code>, <code>app.post</code> or <code>app.all</code> under your root controller.</p><h4>Error Handling</h4><div class=\"code-header\"><h4>routes/index.js</h4><p>Add error handling at the end of your export function</p></div><pre><code class=\"language-javascript\">// Bind Routes\nexports = module.exports = function(app) {\n    \n    app.get('/', routes.views.index);\n\t  \n\t  // Error Handling\n\t  app.use(function(err, req, res) {\n\t  \t res.status(500).send('ERROR MIDDLEWARE');\n\t  }); \n    \n}</code></pre><div class=\"code-header\"><h4>onMount Event</h4><p>Add error handling with <code>keystone.start</code>.  Order matters and your error handler should be last.  </p></div><pre><code class=\"language-javascript\"> \n// Bind Routes\nkeystone.start({\n    onMount: function() {\n\t  \t  // Error Handling\n\t  \t  keystone.app.use(function(err, req, res) {\n\t  \t \t  res.status(500).send('ERROR MIDDLEWARE');\n\t  \t  });\n\t  }\n});\n </code></pre><a name=\"routesviews-middleware\"></a><h3>Common Route Middleware</h3><p>Putting your common middleware in a separate <code>routes/middleware.js</code> file keeps your route index nice and clean. If your middleware file gets too big, it's a good idea to restructure any significant functionality into custom modules in your projects <code>/lib</code> folder.</p><p>Now we'll add the basic middleware to get your app up and running with default behaviours:</p><div class=\"code-header\"><h4>routes/middleware.js</h4><p>This script includes common middleware for your application routes</p></div><pre><code class=\"language-javascript\">var _ = require('underscore'),\n    keystone = require('keystone');\n \n/**\n    Initialises the standard view locals.\n    Include anything that should be initialised before route controllers are executed.\n*/\nexports.initLocals = function(req, res, next) {\n    \n    var locals = res.locals;\n    \n    locals.user = req.user;\n    \n    // Add your own local variables here\n    \n    next();\n    \n};\n \n/**\n    Inits the error handler functions into `res`\n*/\nexports.initErrorHandlers = function(req, res, next) {\n    \n    res.err = function(err, title, message) {\n        res.status(500).render('errors/500', {\n            err: err,\n            errorTitle: title,\n            errorMsg: message\n        });\n    }\n    \n    res.notfound = function(title, message) {\n        res.status(404).render('errors/404', {\n            errorTitle: title,\n            errorMsg: message\n        });\n    }\n    \n    next();\n    \n};\n \n/**\n    Fetches and clears the flashMessages before a view is rendered\n*/\nexports.flashMessages = function(req, res, next) {\n    \n    var flashMessages = {\n        info: req.flash('info'),\n        success: req.flash('success'),\n        warning: req.flash('warning'),\n        error: req.flash('error')\n    };\n    \n    res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length }) ? flashMessages : false;\n    \n    next();\n    \n};</code></pre><h4>Middleware functions</h4><p>Keystone expects middleware functions to accept the following arguments:</p><ul class=\"options\"><li><code>req</code> - an express request object</li><li><code>res</code> - an express response object</li><li><code>next</code> - the method to call when the middleware has finished running (including any internal callbacks)</li></ul><h4>Flash message support (no, not that flash)</h4><p>Keystone includes support for 'flashing' messages to your visitors via session. The default setup above supports four categories, all of which can be styled differently:</p><ul class=\"options\"><li><code>info</code></li><li><code>success</code></li><li><code>warning</code></li><li><code>error</code></li></ul><p>You can easily support other types of messages by updating your middleware and the .jade template that renders them (which we'll get to below).</p><p>To use flash messages in your route controllers, do this:</p><p><code>req.flash('info', 'Some information!');</code></p><p>Messages use session so they survive redirects, and will only be displayed to the user once, making them perfect for status messages (e.g. \"Your changes have been saved\") or form validation (e.g. \"Please enter a valid email address\").</p><p>Some Keystone features (such as the Update Handler) can automatically generate flash messages for you, and expect the categories above to be available.</p><a name=\"routesviews-firstview\"></a><h3>Your first View</h3><p>Now we're going to set up your first route controller (for the index page), and the template it will render.</p><p>The importer (above) expects the directory you ask it for to include <code>.js</code> or <code>.coffee</code> files that export a single method accepting the following arguments:</p><ul class=\"options\"><li><code>req</code> - an express request object</li><li><code>res</code> - an express response object</li></ul><p>Our first view controller is going to be very simple - just rendering a template. Create an <code>routes/views/index.js</code> file like this:</p><div class=\"code-header\"><h4>routes/views/index.js</h4><p>The route controller for our home page view</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone');\n \nexports = module.exports = function(req, res) {\n    \n    var view = new keystone.View(req, res);\n    \n    view.render('index');\n    \n}</code></pre><a name=\"routesviews-templates\"></a><h3>Templates</h3><p>Now, for the template our route will render. The <code>render</code> method looks in the <code>views</code> directory specified in our <code>web.js</code>, which we set to <code>/templates/views</code>.</p><p>In this guide, we're going to use <strong>Jade</strong> for our templates. To learn more about Jade, visit <a href=\"http://jade-lang.com\" target=\"_blank\">jade-lang.org</a>, or check out the great <a href=\"http://naltatis.github.io/jade-syntax-docs/\" target=\"_blank\">live syntax documentation</a> to learn by example.</p><p>First up, create <code>templates/views/index.jade</code>:</p><div class=\"code-header\"><h4>templates/views/index.jade</h4><p>The template for our home page view</p></div><pre>extends ../layouts/base\n \nblock content\n    h1 Hello World</pre><p>If you haven't noted, we also need <code>templates/views/errors/404.jade</code> and <code>templates/views/errors/500.jade</code> for routes/middleware.js to render correctly when needed.</p><p>Then, create <code>templates/views/errors/404.jade</code>:</p><div class=\"code-header\"><h4>templates/views/errors/404.jade</h4><p>The template for 404 errors</p></div><pre>extends ../layouts/base\n \nblock content\n    h1= errorTitle\n    p= errorMsg</pre><p>And also create <code>templates/views/errors/500.jade</code>:</p><div class=\"code-header\"><h4>templates/views/errors/500.jade</h4><p>The template for 500 errors</p></div><pre>extends ../layouts/base\n \nblock content\n    h1= errorTitle\n    p= errorMsg\n    pre= err</pre><p>Jade comes with some great features to simplify templates - including using layouts that define regions. We're going to use a layout called <code>../common/templates/layout/base.jade</code>, which is included on the first line of the file above:</p><div class=\"code-header\"><h4>templates/layouts/base.jade</h4><p>The base layout for our view templates</p></div><pre><code>include ../mixins/flash-messages\n \ndoctype html\nhtml\n    head\n        meta(charset=\"utf-8\")\n        meta(name=\"viewport\", content=\"initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width\")\n        \n        title= title || 'My Keystone Website'\n        link(rel=\"shortcut icon\", href=\"/favicon.ico\", type=\"image/x-icon\")\n        link(href=\"/styles/site.min.css\", rel=\"stylesheet\")\n        \n        block css\n        block head\n    body\n        \n        #header My Keystone Website\n        \n        #body\n            \n            block intro\n            \n            +flash-messages(messages)\n            \n            block content\n        \n        #footer Powered by &lt;a href='http://keystonejs.com', target='_blank'&gt;KeystoneJS&lt;/a&gt;.\n    \n    script(src='/js/lib/jquery/jquery-1.10.2.min.js')\n    \n    block js</code></pre><p>We're also going to create a <code>templates/mixins/flash-messages.jade</code> template to include the <code>flash-messages</code> mixin. Including mixins in your layout or view templates is a great way to keep your layout and view files clean, and re-use mixins across multiple views.</p><div class=\"code-header\"><h4>templates/mixins/flash-messages.jade</h4><p>Our flash-messages mixin</p></div><pre><code>mixin flash-messages(messages)\n    if messages\n        #flash-messages.container\n            each message in messages.info\n                +flash-message(message, 'info')\n            each message in messages.success\n                +flash-message(message, 'success')\n            each message in messages.warning\n                +flash-message(message, 'warning')\n            each message in messages.error\n                +flash-message(message, 'danger')\n                \nmixin flash-message(message, type)\n    div(class='alert alert-' + type)\n        if utils.isObject(message)\n            if message.title\n                h4= message.title\n            if message.detail\n                p= message.detail\n            if message.list\n                ul\n                    each item in message.list\n                        li= item\n        else\n            = message</code></pre><a name=\"templates_other\"></a><div class=\"contextual-note\"><h4>Using other template languages</h4><p>KeystoneJS supports <a href='http://expressjs.com/api.html#app.engine', target='_blank'>any template language supported by express</a>.</p><p>Use the <code>view engine</code> option to specify the template language you want to use (it will default to <code class=\"data-type\">jade</code>).</p><p>If you want to use a custom template engine, set the <code>custom engine</code> option as well. For instance, <a href=\"http://embeddedjs.com/\">ejs</a> is supported by express by default, but you might want to use <a href=\"https://github.com/RandomEtc/ejs-locals\">ejs.locals</a> as a template engine in order to benefit from get extensions.</p><pre><code class=\"language-javascript\">// Modified web.js to use the ejs-locals custom template engine.\nvar keystone = require('keystone');\nvar engine   = require('ejs-locals');\nkeystone.init({\n  ...\n  'custom engine': engine,\n  'view engine': 'ejs',\n  ...\n});</code></pre></div><a name=\"routesviews-publicassets\"></a><h3>Public Assets</h3><p>You'll want to add your own css, javascript, images and other files to your project. In the examples above, we're including <code>/styles/site.min.css</code> and <code>/js/lib/jquery-1.10.2.min.js</code>.</p><p>Keystone will serve any static assets you place in the <code>public</code> directory. This path is specified in <code>web.js</code> by the <code>static</code> option.</p><p>It will also automatically generate <code>.css</code> or compressed <code>.min.css</code> files when a corresponding <code>.less</code> file is found in the <code>public</code> folder, as specified in <code>web.js</code> by the <code>less</code> option. For more information on LESS, see <a href=\"http://lesscss.org\" target=\"_blank\">lesscss.org</a>.</p><a name=\"runningyourapp\"></a><h2>Running your app</h2><p>You're now (almost) ready to run your app! Before we do, though, we should add a <strong>User</strong> so you can sign in to Keystone's Admin UI.</p><a name=\"runningyourapp-writingupdates\"></a><h3>Writing Updates</h3><p>To do this, we're going to create an update script, which Keystone will automatically run before starting the web server.</p><p>Keystone's automatic update functionality is enabled in <code>web.js</code> by the <code>auto update</code> option.</p><p>When the option is set to <code>true</code>, Keystone will scan the <code>updates</code> directory for <code>.js</code> files, each of which should export a method accepting a single argument:</p><ul><li><code>next</code> - the method to call when the update has finished running (including any internal callbacks)</li></ul><p>Updates are ordered using <a href=\"http://semver.org\" target=\"_blank\">Semantic Versioning</a>, and Keystone will only run them once (successfully executed updates are stored in your database, in a collection called <code>app_updates</code>).</p><p>Update file names should match the pattern <code>x.x.x-description.js</code> - anything after the first hyphen is ignored, so you can describe the update in the filename.</p><p>So to automatically add a new Admin User when your app first launches, create a <code>updates/0.0.1-admin.js</code> file:</p><div class=\"code-header\"><h4>updates/0.0.1-admin.js</h4><p>Update script to add the first admin (change to your own name, email and password)</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    User = keystone.list('User');\n \nexports = module.exports = function(done) {\n    \n    new User.model({\n        name: { first: 'Admin', last: 'User' },\n        email: 'admin@keystonejs.com',\n        password: 'admin',\n        canAccessKeystone: true\n    }).save(done);\n    \n};</code></pre><p class=\"note\">You probably don't want to store your real password in the code, so it's a good idea to set the default password to something simple, then sign in and change it using Keystone's Admin UI after you start your app for the first time.</p><a name=\"runningyourapp-startingkeystone\"></a><h3>Starting Keystone</h3><p>Now you're ready to run your application, so execute the following in your project's main folder:</p><p><code>node web</code></p><p>Keystone will automatically apply the update, and then start a web server on the default port, 3000.</p><p>To see your home page, point your browser at <a href=\"http://localhost:3000\" target=\"_blank\">localhost:3000</a>. You should see our <strong>Hello World!</strong> message.</p><p>To sign in to Keystone's Admin UI, go to <a href=\"http://localhost:3000/keystone\" target=\"_blank\">localhost:3000/keystone</a>. Use the email and password you put in the update script above to sign in, and you'll be redirected to Keystone's home page.</p><a name=\"runningyourapp-nextstep\"></a><h3>Next Steps</h3><p>... you're done! Well, not really. It's time to start building your app now. For more information on list options and the field types Keystone supports, browse the <a href=\"/docs/database\">database guide</a>.</p><p>You should also <a href=\"https://twitter.com/keystonejs\" target=\"_blank\">Follow @KeystoneJS on Twitter</a> for news and updates, <a href=\"https://github.com/keystonejs/keystone/\" target=\"_blank\">Star KeystoneJS on GitHub</a>, and discuss this guide (or anything KeystoneJS related) on the <a href=\"https://groups.google.com/d/forum/keystonejs\" target=\"_blank\">KeystoneJS Google Group</a>.</p><p>We've also got more <a href=\"/examples\">Examples and Sample Code</a> for you on the examples page.</p><p>Enjoy using KeystoneJS!</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/index": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Docs</h1><p class=\"lead\">.build(database driven websites, applications and APIs in Node.js)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2>Welcome</h2><h3>Let's jump in</h3><p class=\"lead text-muted\">Use the sidebar on the left to navigate the docs.</p><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4><a href=\"/docs/getting-started\">Getting Started</a></h4><p>The getting started guide walks you through how to manually setup a KeystoneJS website. it's a great place to begin.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4><a href=\"/docs/configuration\">Configuration</a></h4><p>Once you're comfortable with KeystoneJS it's time to configure. There are many possible settings and services to let you build your app or website.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4><a href=\"/docs/database\">Database</a></h4><p>KeystoneJS builds on top of Mongoose schema's to create \"Lists\", which contain items. Lists are available in the Admin UI.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4><a href=\"/docs/learn\">Learn</a></h4><p>Information warehouse.  Code examples, knowledge base, how-tos, repo reference materials and more.</p></div></div></div><div class=\"col-sm-12 col-md-4\"></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4><a href=\"/docs/api/current/class\">Class Reference</a></h4><p>Complete class reference for KeystoneJS.</p></div></div></div></div></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/learn": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:School</h1><p class=\"lead\">.consume(articles, examples and resources to help you use Keystone)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><p class=\"lead\">Articles, code examples and more resources</p><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Support</h4><p><a href=\"/docs/learn/kb\">Knowledge Base</a></p><p><a href=\"https://gitter.im/keystonejs/keystone?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge\" target=\"_blank\" title=\"Gitter\" alt=\"Gitter\"><img src='https://badges.gitter.im/Join%20Chat.svg'  title=\"Gitter\" alt=\"Gitter\" /></a></p><p><a href='https://groups.google.com/d/forum/keystonejs' target=\"_blank\"> Google Group </a> - ideas, questions or need some advice</p><p><a href='https://github.com/keystonejs/keystone/issues' target=\"_blank\"> Issue Tracker </a> - report bugs and issues</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div style=\"background:url('/images/taged.png') no-repeat center;background-position:30px 109px;background-size:54%;\" class=\"feature-panel\"><div class=\"feature-content\"><h4>Code Examples</h4><p>View <a href=\"/docs/learn/code\" >code examples</a>  for Email, socket.io support and more.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Reference Materials</h4><p><a href=\"/docs/learn/reference/readme\">README  </a></p><p><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></p><p><a href=\"/docs/learn/reference/history\">History   </a></p><p><a href=\"/docs/learn/reference/contributing\">Contributing</a></p><p><a href=\"/docs/learn/reference/coding-standards\">Code Standards</a></p></div></div></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div style=\"\" class=\"feature-panel\"><div class=\"feature-content\"><h4>Heroku Deployment</h4><p><a href=\"/docs/learn/heroku\">Learn how to deploy your app to Heroku.</a></p><p>You can also deploy a starter project to <a href=\"https://heroku.com\" target=\"_blank\">Heroku</a> for free to try it out:</p><p><a href=\"https://heroku.com/deploy?template=https://github.com/JedWatson/keystone-starter\" target=\"_blank\"><img src=\"https://www.herokucdn.com/deploy/button.png\"/></a></p></div></div></div><div class=\"col-sm-12 col-md-4\"><div style=\"background:url('/images/es2015.png') no-repeat center;background-size:95px;background-position:35px 75px;\" class=\"feature-panel\"><div class=\"feature-content\"><h4>ES2015 & System.js</h4><p><a href=\"/docs/learn/es2015\">Read the conversion guide</a></p><p><br/></p><p><br/></p><p><br/></p><p>We converted this site to use <a href=\"https://github.com/systemjs/systemjs\" target=\"_blank\">System.js</a>, <a href=\"http://babeljs.io\" target=\"_blank\">Babel</a> and <a href=\"https://facebook.github.io/react/\" target=\"_blank\">React</a></p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Resources</h4><p><a href=\"/docs/learn/kb/Related-Projects\">Related Projects</a></p><p><a href=\"/docs/learn/resources\" >Goodies</a> about everything from MongoDB, mongoose, React, System.js, Keystone and more.</p></div></div></div></div></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/views": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Views</h1><p class=\"lead\">Using Views with your keystone application</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"concepts\"></a>Concepts</h2><p>The View class makes it easier to write descriptive route handlers without worrying about async code too much. Express routes can get messy when they're handling several different branches, because of the async nature of node.js.</p><a name=\"queues\"></a><h2>Queues</h2><a name=\"queue-init\"></a><h3>Init</h3><p>registers callbacks to run first.</p><a name=\"queue-action\"></a><h3>Action</h3><p>`view.on('{REST verb}', callback)`</p><p>This method differs from what express middleware would do subtly. We can also supply a middle argument to match on e.g.</p><div class=\"code-header\"><h4>/views/form.js</h4></div><pre><code class=\"language-javascript\">view.on('post', { action: 'contact' }, function() {\nhandle submission of contact form\n});\nview.on('post', { action: 'comment' }, function() {\n    // let the user leave a comment\n});</code></pre><p>This is useful in complicated setups, e.g., multiple forms on a single page. Each form would POST back to the same url, with a hidden field called action in it.</p><a name=\"queue-render\"></a><h3>Render</h3><p>final queue to be executed.</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/templates/mixins/docsapinav": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

























































































;return buf.join("");
},
"en/templates/mixins/docsnav": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;










































































;return buf.join("");
},
"zh/pages/docs/configuration": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/zh/docs\" class=\"nav-heading\">欢迎</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
if ( docssection.value != 'introduction')
{
buf.push("<hr/><ul class=\"sidebar-nav\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>配置</h1><p class=\"lead\">如何让KeystoneJS按你想要的方式工作</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2>Keystone参数</h2><a name=\"options-concepts\"></a><h3>设定参数</h3><p>KeystoneJS的参数可以设定它的很多行为，从如何配置express程序到启用某些功能和集成服务的认证参数。</p><p>参数有3种设定办法：</p><ul class=\"options\"><li>给<code>keystone.init(options)</code>方法传一个<code>{ key: 'value' }</code> 配置 <code class=\"data-type\">Object</code></li><li>调用<code>keystone.set('key', 'value')</code></li><li>在<code>process.env</code>中设置环境变量。仅有部分参数支持这种方式（注意下文的提示）。</li></ul><p>如果你不想把秘钥和配置放在代码库中(这对于开源项目，或者不是所有开发人员都可以访问生产配置设定的项目来说非常重要) ，用<a href=\"https://npmjs.org/package/dotenv\" target=\"_blank\">dotenv</a>模块很容易实现。</p><a name=\"options-project\"></a><h3>项目参数</h3><p>下面这些参数控制着品牌塑造、导航和KeystoneJS程序在管理界面中的默认输出设定：</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>name</code> <code class=\"data-type\">String</code></td><td>KeystoneJS程序的名称</td></tr><tr><td><code>brand</code> <code class=\"data-type\">String</code></td><td>在管理界面的左上角显示</td></tr><tr><td><code>module root</code> <code class=\"data-type\">String</code></td><td><p>设置 Keystone 应用所在根路径。<code>module root</code> 默认指向应用内第一次引用 Keystone script 所在目录。默认设置有时候不满足需求。</p><p><code>module root</code> 允许自定义指定应用内根路径。重写默认 <code>module root</code> 有时很有用，例如，对你的应用进行单元测试。</p><p><code>module root</code> 通过 Keystone 的 <code>.getPath()</code> 方法来解析和扩展 <code>views</code>， <code>favicon</code>， <code>extensions</code>， <code>ssl cert</code>， <code>ssl key</code>， <code>ssl ca</code>， <code>emails</code> 和 <code>updates</code> 的路径设置。</p><p><code>module root</code> 可以被设置为相对路径或者绝对路径。</p><p class=\"note\">如果使用相对路径，相对路径会根据设置 script 所在路径决定。</p></td></tr><tr><td><code>frame guard</code> <code class=\"data-type\">String/Boolean</code></td><td><p>这个设置告诉 Keystone 如何处理 <code>iframe</code> 标签。 它通过设置响应报头 <code>X-Frame-Options</code> 完成。 这个请求报头用来防止 \"ClickJacking\" 攻击。</p><p>默认设置是 <code>sameorigin</code>。</p><p>以下是有效参数。</p><ul><li><code class=\"default-value\">\"sameorigin\"</code> 允许来自同一服务器的 <code>iframe</code> 标签请求</li><li><code class=\"default-value\">\"deny\"</code> 拒绝所有来自 <code>iframe</code> 标签的请求</li><li><code class=\"default-value\">true</code> (与 <code class=\"default-value\">\"deny\"</code> 相同)</li><li><code class=\"default-value\">false</code> 禁用 <code>frame guard</code></li></ul></td></tr><tr><td><code>nav</code> <code class=\"data-type\">Object</code></td><td><p>指定管理界面导航结构的对象。给每个应该在主导航中可见的部分创建一个键。每个键的值都可以是单个列表路径（查看列表时在URL中见到的部分）或一个列表路径数组。使用数组时，会在管理界面中渲染二级导航。</p><p>nav还用来生成管理界面首页上的链接；所有已注册但不包含在<code>nav</code>中的列表都会出现在屏幕底部的'Other'分组下。</p></td></tr><tr><td><code>csv field delimiter</code> <code class=\"data-type\">String</code></td><td>允许你选一个定制的域分隔符用在导出的CSV中，代替默认的逗号。</td></tr><tr><td><code>app</code> <code class=\"data-type\">Object</code></td><td>用来代替默认的Express实例。</td></tr><tr><td><code>mongoose</code> <code class=\"data-type\">Object</code></td><td>用来代替默认的mongoose实例。</td></tr></table><p class=\"note\"><code>app</code> 和 <code>mongoose</code> 参数用来替换已过期的 <code>keystone.connect()</code> 方法。由于升级至Express 4, `keystone.connect()` 不再按预期那样工作。</p><div class=\"code-header\"><h4>定制导航的例子</h4><p>如果你有<code>User</code>、<code>Post</code>和<code>PostCategory</code>三个模型，可以像下面这样将posts和post-categories分组到<strong>Content</strong>导航条目中：</p></div><pre><code class=\"language-javascript\">keystone.set('nav', {\n    'users': 'users',\n    'content': ['posts', 'post-categories']\n});</code></pre><a name=\"options-server\"></a><h3>Web服务器参数</h3><p>下面这些参数控制着web服务器和express程序的配置：</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>env</code> <code class=\"data-type\">String</code></td><td><p>要用的环境设定。支持<strong>development</strong>和<strong>production</strong>，这个参数会影响缓存已编译模板之类的事情。默认为<code class=\"default-value\">process.env.NODE_ENV || \"development\"</code>。</p><p>你真的应该用环境变量<code>NODE_ENV</code><strong>在生产服务器上将这个设为<code class=\"default-value\">production</code></strong>。还有几个模块也遵循这个约定。</p></td></tr><tr><td><code>port</code> <code class=\"data-type\">Number</code></td><td><p>监听请求的端口。默认为<code class=\"default-value\">process.env.PORT || 3000</code></p></td></tr><tr><td><code>host</code> <code class=\"data-type\">String</code></td><td><p>监听请求的ip地址。默认为<code class=\"default-value\">process.env.IP || '127.0.0.1'</code></p><p>必须设定了<code>port</code>(通过参数或环境变量) <code>host</code>参数才能生效。</p></td></tr><tr><td><code>views</code> <code class=\"data-type\">String</code></td><td><p>放程序<strong>视图模板</strong>的路径。使用<code>keystone.View</code>类需要这个，并且也会在express app上设定。</p><p>如果你遵循<a href=\"/zh/guide#start_structure\">推荐的项目结构</a>，这个应该设为<code class=\"default-value\">\"/templates/views\"</code>。</p></td></tr><tr><td><code>view engine</code> <code class=\"data-type\">String</code></td><td><p>默认使用的模板引擎。express支持的任何引擎应该都可以。Keystone中包含<strong>Jade</strong>，但用其它引擎都必须添加到<code>package.json</code>里的项目依赖项部分。</p><p>这个参数是设定在express app 上的(<a href=\"http://expressjs.com/api.html#app.engine\" target=\"_blank\">参见相关文档</a>)。</p></td></tr><tr><td><code>custom engine</code> <code class=\"data-type\">Function</code></td><td><p>如果你要用定制的模板引擎，要将这个参数设为用来处理模板的函数。</p><p>参见下面的例子，了解如何使用<a href=\"http://paularmstrong.github.io/swig/\" target=\"_blank\">Swig</a> 模板引擎。</p></td></tr><tr><td><code>view cache</code> <code class=\"data-type\">Boolean</code></td><td><p>这个参数是传给Express的，用来控制是否在请求间缓存编译的视图模板。</p><p>在生产环境中默认是<code class=\"default-value\">true</code>，否则是<code class=\"default-value\">false</code>，所以几乎不用特意设定它。</p></td></tr><tr><td><code>locals</code> <code class=\"data-type\">Object</code></td><td><p>传给视图模板的默认local变量。</p><p>路由可以通过修改<code>res.locals</code>扩展或修改local变量。</p></td></tr><tr><td><code>static</code> <code class=\"data-type\">String</code> 或 <code class=\"data-type\">Array</code></td><td><p>指向程序静态文件的一或多个路径。设定这个会引入<code>express.static</code> 中间件。</p><p>如果你遵循<a href=\"/zh/guide#start_structure\">推荐的项目结构</a>，这个应该设为<code class=\"default-value\">'public'</code>。</p></td></tr><tr><td><code>static options</code> <code class=\"data-type\">Object</code></td><td><p>可选的配置参数，将会传给<code>express.static</code>中间件。</p></td></tr><tr><td><code>less</code> <code class=\"data-type\">String</code> 或 <code class=\"data-type\">Array</code></td><td><p>如果你想让Keystone将<strong>.less</strong>文件自动编译成<strong>.css</strong>文件，把它的值也设成<code>static</code>参数指定的路径。</p><p>设了这个参数之后，所有对<strong>.css</strong>或<strong>.min.css</strong>文件的请求处理都会先检查有没有同名的<strong>.less</strong>文件，如果有，则生成css文件。</p></td></tr><tr><td><code>less options</code> <code class=\"data-type\">Object</code></td><td><p>可选的配置参数，会传给<code>less</code> 中间件；参见<a href=\"https://github.com/emberfeather/less.js-middleware\" target=\"_blank\">github.com/emberfeather/less.js-middleware</a>了解详情。</p></td></tr><tr><td><code>sass</code> <code class=\"data-type\">String</code> 或 <code class=\"data-type\">Array</code></td><td><p>如果你想让Keystone将<strong>.sass</strong>文件自动编译成<strong>.css</strong>文件，把它的值也设成<code>static</code>参数指定的路径。</p><p>设了这个参数之后，所有对<strong>.css</strong>或<strong>.min.css</strong>文件的请求处理都会先检查有没有同名的<strong>.sass</strong>文件，如果有，则生成css文件。</p><p class=\"note\">注意，启用这个参数需要在<code>package.json</code>文件中添加<a href=\"https://github.com/sass/node-sass\" target=\"_blank\"><code>node-sass</code></a>包作为依赖项；Keystone不会自动引入它。</p></td></tr><tr><td><code>sass options</code> <code class=\"data-type\">Object</code></td><td><p>可选的配置参数，会传给<code>sass</code> 中间件；参见<a href=\"https://github.com/sass/node-sass#options\" target=\"_blank\">github.com/sass/node-sass</a>了解详情。</p></td></tr><tr><td><code>favicon</code> <code class=\"data-type\">String</code></td><td><p>程序的<strong>favicon</strong>的路径。设定这个会引入<code>express.favicon</code>中间件。应该是相对项目根路径的路径。</p><p>如果你遵循<a href=\"/zh/guide#start_structure\">推荐的项目结构</a>，这个应该设为<code class=\"default-value\">\"/public/favicon.ico\"</code>。</p></td></tr><tr><td><code>compress</code> <code class=\"data-type\">Boolean</code></td><td>将这个参数设为<code class=\"default-value\">true</code>以启用HTTP压缩。这会引入<code>express.compress</code>中间件(<a href=\"http://expressjs.com/api.html#compress\" target=\"_blank\">相关文档</a>).</td></tr><tr><td><code>logger</code> <code class=\"data-type\">String</code></td><td>设定这个会引入<code>express.logger</code>中间件。它的值会传给中间件去做初始化(<a href=\"http://www.senchalabs.org/connect/logger.html\" target=\"_blank\">相关文档</a>)。 设为<code class=\"default-value\">false</code>可以一并禁用日志。</td></tr><tr><td><code>trust proxy</code> <code class=\"data-type\">Boolean</code></td><td>设定这个启用HTTP请求头<code>X-Forwarded-For</code>。提取出来的IP地址会放在数组<code>req.ips</code> (<a href=\"http://expressjs.com/api.html#req.ips\">相关文档</a>)。</td></tr></table><div class=\"code-header\"><h4>备选的视图引擎</h4><p>Keystone默认使用<strong>Jade</strong>模板引擎处理视图。这里有个设置其它引擎<strong>Swig</strong>的例子。</p></div><pre><code class=\"language-javascript\">var swig = require('swig');\nkeystone.set('view engine', 'swig');\nkeystone.set('custom engine', swig.renderFile);</code></pre><div class=\"code-header\"><h4>输出 <code >onHttpServerCreated</code> 事件</h4></div><pre><code class=\"language-javascript\">keystone.start({\n    onHttpServerCreated: function() {\n      var server = keystone.httpServer;\n    }\n});</code></pre><a name=\"options-ssl\"></a><h3>HTTPS Web服务器参数</h3><p>KeystoneJS程序实现HTTPS主要有两种方式：或者使用一个web服务器 (比如 <a href=\"http://nginx.com\" target=\"_blank\">NGINX</a>)或PAAS (e.g. <a href=\"https://www.heroku.com\" target=\"_blank\">Heroku</a>)实现，或者用<a href=\"http://nodejs.org/api/https.html\" target=\"_blank\">node.js提供的https服务器</a>设定下面的参数。</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>ssl</code> <code class=\"data-type\">Boolean</code> 或 <code class=\"data-type\">String</code></td><td><p>是否启动SSL服务器。默认为<code class=\"default-value\">false</code>。</p><p>设为<code class=\"default-value\">true</code>时，会启动http和https服务器。如果<code>ssl key</code> 或<code>ssl cert</code>无效，只启动http服务器。</p><p>设为<code class=\"default-value\">\"only\"</code>时，只启动https服务器。如果<code>ssl key</code> 或 <code>ssl cert</code>无效，则KeystoneJS不会启动。</p></td></tr><tr><td><code>ssl key</code> <code class=\"data-type\">Path</code></td><td><p>指向SSL秘钥的路径。应该为绝对或相对于<code class=\"default-value\">process.cwd()</code>的路径 (通常是项目的根路径)。</p></td></tr><tr><td><code>ssl cert</code> <code class=\"data-type\">Path</code></td><td><p>指向SSL证书的路径。应该为绝对或相对于<code class=\"default-value\">process.cwd()</code>的路径 (通常是项目的根路径)。</p></td></tr><tr><td><code>ssl ca</code> <code class=\"data-type\">Path</code></td><td><p>应该为绝对或相对于<code class=\"default-value\">process.cwd()</code>的路径 (通常是项目的根路径)。</p></td></tr><tr><td><code>ssl port</code> <code class=\"data-type\">Number</code></td><td><p>启动SSL服务器的端口。默认为<code class=\"default-value\">3001</code>。</p></td></tr><tr><td><code>ssl host</code> <code class=\"data-type\">String</code></td><td><p>监听请求的ip地址。默认为<code class=\"default-value\">process.env.SSL_IP</code>或<code>host</code> 参数的值。</p></td></tr><tr><td colspan=\"2\"><p>在<code class=\"language-javascript\">keystone.start()</code>期间输出<code class=\"\">onHttpsServerCreated</code>事件。</p></td></tr></table><p class=\"note\"><strong>警告：</strong> 如果你计划在 KeystoneJS 应用中启用 SSL，确保使用中的 Node.js 版本为 <code class=\"default-value\">0.10.33</code> 或者更高。 低于<code class=\"default-value\">0.10.33</code> 版本的 Node 容易引发 POODLE (Padding Oracle On Downgraded Legacy Encryption) 漏洞，一种“中间人”攻击目标 <code class=\"default-value\">SSLv3</code> (see <a href=\"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3566\">CVE-2014-3566</a>)。<code class=\"default-value\">0.10.33</code>版本的 Node，<code class=\"default-value\">SSLv2</code>和 <code class=\"default-value\">SSLv3</code> 协议默认关闭。更多信息参见 <a href=\"http://blog.nodejs.org/2014/10/23/node-v0-10-33-stable/\">Node v0.10.33 (Stable)</a> 的release notes。</p><a name=\"options-unix-socket\"></a><h3>Unix Socket Web 服务器参数</h3><p>Express会监听一个unix socket的连接。   </p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>unix socket</code> <code class=\"data-type\">String</code></td><td><p>指向可写unix socket的路径。应该是绝对路径或相对于<code class=\"default-value\">process.cwd()</code> （一般是项目的根路径）的路径. 如果文件之前已经存在了，会先被移除。</p><p>当设定 http 和 https 服务器时会被忽略。</p></td></tr><tr><td colspan=\"2\"><p>在<code class=\"language-javascript\">keystone.start()</code>期间输出<code class=\"\">onHttpsServerCreated</code>事件。</p></td></tr></table><a name=\"options-database\"></a><h3>数据库和用户认证参数</h3><p>下面这些参数控制着数据库配置和用户模型 / 认证：</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>mongo</code> <code class=\"data-type\">String</code></td><td><p>MongoDB连接的url。</p><p>一般应该设为<code class=\"default-value\">process.env.MONGO_URI || \"mongodb://localhost/your-db\"</code></p></td></tr><tr><td><code>model prefix</code> <code class=\"data-type\">String</code></td><td><p>应用到模型所用的所有mongodb集合的前缀。</p></td></tr><tr><td><code>auth</code> <code class=\"data-type\">Mixed</code></td><td><p>是否为Keyston的管理界面启用内置的认证，或者用定制的函数认证用户。</p><p>当这个设为<code class=\"default-value\">false</code> (或未定义)时，Keystone的管理界面会向公众开放(所以一定要设定它！)</p><p>如果使用定制函数，应该遵循express中间件<code>function(req, res, next)</code>的标准。如果用户没有登录或不应该访问Keystone的管理界面，使用<code>res.redirect()</code>转发 - 否则调用 <code>next</code>回调启用访问。</p></td></tr><tr><td><code>user model</code> <code class=\"data-type\">String</code></td><td><p>用户的Keystone列表的键，如果<code>auth</code>设为<code class=\"default-value\">true</code>，则是<strong>必需的</strong>。</p><p>一般这个会设为<code class=\"default-value\">User</code>。</p></td></tr><tr><td><code>cookie secret</code> <code class=\"data-type\">String</code></td><td><p>cookies的加密密钥。传给Express的cookie解析器。</p><p>最好将这个设为一个长长的随机字符串。</p></td></tr><tr><td><code>session store</code> <code class=\"data-type\">String</code></td><td><p>将这个设为<code class=\"default-value\">mongo</code>用MongoDB数据库存储会话数据。</p><p>默认情况下，Keystone会用Express提供的内存会话存储，这个只应该在开发时用，因为它不能扩展，只能支持单进程，时间长了还会出现内存泄露。</p><p>有效的参数是：</p><ul><li><code class=\"default-value\">mongo</code> (或<code class=\"default-value\">connect-mongo</code>)</li><li><code class=\"default-value\">connect-mongostore</code> (支持复制集，但需要显式地配置 - 见下文)</li><li><code class=\"default-value\">connect-redis</code></li></ul><p class=\"note\">Keystone没有捆绑会话存储包，所以一定要将选定的会话存储添加到项目的<code>package.json</code>中。</p><p class=\"note\">可以通过<code class=\"language-javascript\">keystone.get('express session')</code>获取传给Express的会话配置。</p></td></tr><tr><td><code>session store options</code> <code class=\"data-type\">Object</code></td><td><p>用这个参数可以覆盖默认的会话存储配置，并且会传给会话存储包。</p><p>使用<code class=\"default-value\">connect-mongostore</code>存储时需要设定这个。</p><div class=\"code-header\"><h4>connect-mongostore的例子</h4></div><pre><code class=\"language-javascript\">\"sessionStore\": {\n  \"db\": {\n    \"name\": \"myDb\",\n    \"servers\": [\n      { \"host\": \"192.168.1.100\", \"port\": 28001 },\n      { \"host\": \"192.168.1.100\", \"port\": 28002 },\n      { \"host\": \"192.168.1.101\", \"port\": 27017 }\n    ]\n  }\n}</code></pre><div class=\"code-header\"><h4>connect-redis的例子</h4></div><pre><code class=\"language-javascript\">\"sessionStore\": {\n  \"host\": \"\", // Redis服务器主机名\n  \"port\": \"\", // Redis服务器端口\n  \"ttl\": \"\", // 以秒为单位的Redis会话TTL\n  \"db\": \"\", // 所用的数据库索引\n  \"pass\": \"\", // 用于Redis认证的密码\n  \"prefix\": \"\", // Key前缀默认为\"sess:\"\n  \"url\": \"\", // 比如 redis://user:pass@host:port/db\n}</code></pre><p class=\"note\">可以通过<code class=\"language-javascript\">keystone.get('session options')</code>获取到会话参数。</p></td></tr><tr><td><code>back url</code> <code class=\"data-type\">String</code></td><td><p>管理界面中用在'回到(网站名)'链接中的<code>href</code></p><p>默认为<code class=\"default-value\">/</code></p></td></tr><tr><td><code>signin url</code> <code class=\"data-type\">String</code></td><td><p>当访问者没能通过默认的认证检查（比如没能登录）时弹出的<code>href</code></p><p>默认为<code class=\"default-value\">/keystone/signin</code>，只有<code>auth</code>被设为<code class=\"default-value\">true</code>时才用。</p></td></tr><tr><td><code>signin redirect</code> <code class=\"data-type\">String</code></td><td><p>访问者通过内置的登录路由成功登录后弹出的<code>href</code></p><p>默认为<code class=\"default-value\">/keystone</code></p></td></tr><tr><td><code>signout url</code> <code class=\"data-type\">String</code></td><td><p>界面右上角退出链接中的<code>href</code></p><p>如果<code>auth</code>设为<code class=\"default-value\">true</code>，默认为<code class=\"default-value\">/keystone/signout</code>。</p></td></tr><tr><td><code>signout redirect</code> <code class=\"data-type\">String</code></td><td><p>访问者通过内置的退出路由成功退出后弹出的<code>href</code></p><p>默认为<code class=\"default-value\">/keystone</code></p></td></tr></table><p>关于Keystone数据库模型设置和使用的更多信息，请参见<a href=\"/zh/docs/database\">数据库指南</a>。</p><a name=\"options-ui\"></a><h3>管理界面参数</h3><p>下面这些参数控制管理后台的一些界面选项：</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>wysiwyg images</code> <code class=\"data-type\">Boolean</code></td><td><p>添加一个图片按钮，从而使你可以在WYSIWYG编辑器中引入来自其它URL的图片。</p></td></tr><tr><td><code>wysiwyg cloudinary images</code> <code class=\"data-type\">Boolean</code></td><td><p>添加一个图片上传按钮，在你的WYSIWYG编辑器中直接启用cloudinary图片上传。</p></td></tr><tr><td><code>wysiwyg additional buttons</code> <code class=\"data-type\">String</code></td><td><p>允许添加额外功能按钮，比如<code>blockquote</code>。</p><p>可以添加的按钮完整清单请见： <a href=\"http://www.tinymce.com/wiki.php/Controls\">http://www.tinymce.com/wiki.php/Controls</a></p></td></tr><tr><td><code>wysiwyg additional plugins</code> <code class=\"data-type\">String</code></td><td><p>可以激活额外插件，插件清单请见： <a href=\"http://www.tinymce.com/wiki.php/Plugins\">http://www.tinymce.com/wiki.php/Plugins</a></p></td></tr><tr><td><code>wysiwyg additional options</code> <code class=\"data-type\">Object</code></td><td><p>可以修改额外TinyMCE参数，比如 <code>{ menubar: true }</code>。</p></td></tr><tr><td><code>wysiwyg override toolbar</code> <code class=\"data-type\">Boolean</code></td><td><p>这会去掉wysiwyg模式下的默认按钮组。这个参数应该跟<code>wysiwyg additional buttons</code>和<code>wysiwyg additional plugins</code>一起使用。默认为<code class=\"data-type\">false</code>。</p></td></tr><tr><td><code>wysiwyg menubar</code> <code class=\"data-type\">Boolean</code></td><td><p>显示wysiwyg编辑器的菜单栏。默认为<code class=\"data-type\">false</code>.</p><p>参见<a href=\"http://www.tinymce.com/wiki.php/Configuration:menubar\">http://www.tinymce.com/wiki.php/Configuration:menubar</a>了解详情。</p></td></tr><tr><td><code>wysiwyg skin</code> <code class=\"data-type\">String</code></td><td><p>可以修改皮肤。默认为<code class=\"data-type\">keystone</code>。</p><p>参见<a href=\"http://www.tinymce.com/wiki.php/Configuration:skin\">http://www.tinymce.com/wiki.php/Configuration:skin</a>了解详情。<div class=\"code-header\"><h4>wysiwyg参数范例</h4></div><pre><code class=\"language-javascript\">keystone.init({\n'wysiwyg override toolbar': false,\n'wysiwyg menubar': true,\n'wysiwyg skin': 'lightgray',\n'wysiwyg additional buttons': 'searchreplace visualchars,'\n + ' charmap ltr rtl pagebreak paste, forecolor backcolor,'\n +' emoticons media, preview print ',\n'wysiwyg additional plugins': 'example, table, advlist, anchor,'\n + ' autolink, autosave, bbcode, charmap, contextmenu, '\n + ' directionality, emoticons, fullpage, hr, media, pagebreak,'\n + ' paste, preview, print, searchreplace, textcolor,'\n + ' visualblocks, visualchars, wordcount',\n});</code></pre></p></td></tr></table><a name=\"services\"></a><h2>服务</h2><a name=\"services-google-analytics\"></a><h3>谷歌分析</h3><p>Keystone的管理界面中支持谷歌分析追踪。要启用追踪，设定下面这些配置参数：</p><table class=\"table\"><col width=\"270\"/><col/><tr><td><code>ga property</code> <code class=\"data-type\">String</code></td><td><p>你的谷歌分析属性</p><p>默认为<code class=\"default-value\">process.env.GA_PROPERTY</code></p></td></tr><tr><td><code>ga domain</code> <code class=\"data-type\">String</code></td><td><p>你的谷歌分析域</p><p>默认为<code class=\"default-value\">process.env.GA_DOMAIN</code></p></td></tr></table><p class=\"note\">注意，如果你只想在项目前端引入谷歌分析追踪，应该使用跟上面那些参数名称不同的名称。</p><a name=\"services-google-maps\"></a><h3>谷歌地图</h3><p>Keystone的<a href=\"/zh/docs/database#field_location\">Location域类型</a>可以集成<a href=\"http://www.morethanamap.com\" target=\"_blank\">谷歌地图API</a>，通过<a href=\"https://developers.google.com/places/documentation/autocomplete\" target=\"_blank\"> Places Autocomplete API</a>自动改进取值(包括发现经纬度)。</p><p>要启用这些功能，需要<a href=\"https://code.google.com/apis/console/\" target\"_blank\">从谷歌获取一个API秘钥</a> ，并为它启用Google Maps v3和Google Places API，然后设置下面这些参数：</p><table class=\"table\"><col width=\"270\"/><col/><tr><td><code>google api key</code> <code class=\"data-type\">String</code></td><td><p>你的谷歌API浏览器键，用于认证管理界面中的Javascript Maps API。</p><p>默认为<code class=\"default-value\">process.env.GOOGLE_BROWSER_KEY</code></p></td></tr><tr><td><code>google server api key</code> <code class=\"data-type\">String</code></td><td><p>你的谷歌API服务器键，用于认证从服务器端发送的Maps API请求。</p><p>默认为<code class=\"default-value\">process.env.GOOGLE_SERVER_KEY</code></p></td></tr><tr><td><code>default region</code> <code class=\"data-type\">String</code></td><td><p>为了将自动完成结果限制在指定区域的<strong>可选</strong>设置。</p><p>这个参数是一个区域码，指定为<a href=\"http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry\" target=\"_blank\">IANA语言区域</a>子标签。</p><p>每个<code>Location</code>输入域都可以在设定不同的<code>region</code>参数。 </p></td></tr></table><pre><code class=\"language-javascript\">keystone.set('google api key', 'your-browser-key');\nkeystone.set('google server api key', 'your-server-key');\nkeystone.set('default region', 'au'); // 可选，会将自动完成的结果限制在澳大利亚</code></pre><p class=\"note\">注意，Places Geocoding API的使用有每天2,500次geolocation请求的查询限制，除非你有企业版许可。</p><p class=\"note\">Places Geocoding API只能跟谷歌地图一起用；禁止不在地图上显示的地理编码结果。请确保你的Keystone程序符合谷歌地图API的许可。</p><a name=\"services-amazons3\"></a><h3>亚马逊S3</h3><p>KeystoneJS的域类型<a href=\"/zh/docs/database#field_s3file\">S3File</a>支持<a href=\"http://aws.amazon.com/s3/\" target=\"_blank\">亚马逊S3</a>的文件上传和托管。</p><p>要在你的程序中使用S3File域，需要<a href=\"https://portal.aws.amazon.com/gp/aws/developer/subscription/index.html?productCode=AmazonS3\" target=\"_blank\">注册一个账号</a>，创建一个<strong>S3桶</strong>，获取你的<strong>键</strong>和<strong>密码</strong>。</p><p>然后设定<code>s3 config</code>参数为包含你的配置的对象(见下文示例)。</p><p>另外还要设置环境变量<code class=\"default-value\">S3_BUCKET</code>、<code class=\"default-value\">S3_KEY</code>和<code class=\"default-value\">S3_SECRET</code></p><pre><code class=\"language-javascript\">keystone.set('s3 config', { bucket: 'my-bucket', key: 'my-key', secret: 'my-secret' });</code></pre><p>设置对象也可以包含 'default headers' 属性。 这个属性可以是 <code class=\"data-type\">Object</code> 类型或者是 <code class=\"data-type\">Array</code> 类型。</p><pre><code class=\"language-javascript\">keystone.set('s3 config', { \n\t bucket: 'my-bucket', \n\t key: 'my-key', \n\t secret: 'my-secret',\n\t 'default headers':  {\n\t 'x-amz-meta-X-Default-Header': 'Custom Default Value'\n\t }\n});</code></pre><a name=\"services-azure\"></a><h3>Windows Azure存储</h3><p>KeystoneJS的<a href=\"/zh/docs/database#field_azurefile\">AzureFile</a>域类型支持<a href=\"http://www.windowsazure.com/\" target=\"_blank\">Windows Azure存储</a>的文件上传和托管。</p><p>要在程序中使用AzureFile域，需要<a href=\"http://www.windowsazure.com/pricing/free-trial/\" target=\"_blank\">注册一个账号</a>，进入<a href=\"https://manage.windowsazure.com/\">Azure管理门户</a>。用新建(按钮)创建一个存储账号，数据服务，存储。在存储账号页面中用按钮“管理访问键”获取访问信息（账号名、键（有效的主键或二级键））。</p><p>然后将<code>azurefile config</code>参数设为包含你的配置的对象(见下文示例)。</p><p>另外还要设置环境变量<code class=\"default-value\">AZURE_STORAGE_ACCOUNT</code>和<code class=\"default-value\">AZURE_STORAGE_ACCESS_KEY</code>。</p><p>注意，<strong>account</strong>属性应该设成你的<strong>存储账号</strong>，<em>不是用户账号</em>。</p><pre><code class=\"language-javascript\">keystone.set('azurefile config', { account: 'my storage account', key: 'secret api key' });</code></pre><a name=\"services-cloudinary\"></a><h3>Cloudinary</h3><p><a href=\"http://cloudinary.com\" target=\"_blank\">Cloudinary</a>是一个图片上传/缩放/托管服务，让你在KeystoneJS程序中用<a href=\"/zh/docs/database#field_cloudinaryimage\">CloudinaryImage</a>和<a href=\"/zh/docs/database#field_cloudinaryimages\">CloudinaryImages</a>域类型轻松实现图片管理。</p><p>要在程序中使用Cloudinary Image域，需要<a href=\"https://cloudinary.com/users/register/free\" target=\"_blank\">注册一个账号</a> (Cloudinary提供的免费服务中包括500MB存储、50,000张图片和1GB数据传输)并获取你的<strong>云名称</strong>、<strong>api键</strong>和<strong>api密码</strong>。</p><p>然后将<code>cloudinary config</code>参数设为<ul><li>包含你的配置的对象(见下文示例)，或</li><li>Cloudinary给你的环境变量字符串(比如<code class=\"default-value\">cloudinary://api_key:api_secret@cloud_name</code>)</li></ul></p><p>这个参数默认为环境变量<code class=\"default-value\">CLOUDINARY_URL</code>，如果设了的话。</p><p>当通过管理界面或域方法把图片上传到Cloudinary中时，会自动给它们设一些标签。要用定制字符串作为这些标签的前缀，可以设置<code>cloudinary prefix</code>参数。</p><p>自动设定的内置标签包括：<ul><li><code class=\"default-value\">{list.path}_{field.path}</code></li><li><code class=\"default-value\">{list.path}_{field.path}_{item.id}</code></li><li><code class=\"default-value\">{prefix}</code> (如果设了)</li><li><code class=\"default-value\">dev</code> (如果参数<code>env</code>没有设成<code class=\"default-value\">production</code>)</li></ul></p><p>将Keystone <code>cloudinary folders</code>参数设为<code class=\"default-value\">true</code>还可以启用Cloudinary的上传文件夹选项。默认的Cloudinary文件夹会基于以下规则设置：<ul><li><code class=\"default-value\">{list.path}/{field.path}/</code> (当未设置<code>cloudinary prefix</code>时)</li><li><code class=\"default-value\">{prefix}/{list.path}/{field.path}/</code> (设置了<code>cloudinary prefix</code>时)</li></ul></p><p class=\"note\">你可以直接在<code>CloudinaryImage</code>域(参见<a href=\"/zh/docs/database#fieldtypes-cloudinaryimage\">CloudinaryImage</a> 参数) 或 <code>CloudinaryImages</code>域(参见 <a href=\"/zh/docs/database#fieldtypes-cloudinaryimages\">CloudinaryImages</a> 参数)上设置<code class=\"default-value\">folder</code>参数覆盖默认的 Cloudinary 文件夹。<br/><br/>如果你希望 Cloudinary 在 <code>cloudinary folders</code> 设置为 <code class=\"default-value\">true</code>  的时候自动创建文件夹， 确认已经在你的 Cloudinary 账户中启用 \"Auto-create folders\"。</p><p>如果你在使用HTTPS服务，并且确保cloudinary images也通过HTTPS传输, 设置<code>cloudinary secure</code>选项为<code class=\"default-value\">true</code>.</p><pre><code class=\"language-javascript\">keystone.set('cloudinary config', { cloud_name: 'my-cloud', api_key: 'abc', api_secret: '123' });\n// 或\nkeystone.set('cloudinary config', 'cloudinary://api_key:api_secret@cloud_name' );\n \n// 可选，会用'keystone_'作为所有内置标签的前缀\nkeystone.set('cloudinary prefix', 'keystone');\n \n// 可选，会用[{prefix}]/{list.path}/{field.path}/ 作为每个图片的public_id的前缀\nkeystone.set('cloudinary folders', true);\n \n// 可选, 将强制cloudinary服务通过HTTPS传输\nkeystone.set('cloudinary secure', true);</code></pre><a name=\"services-embedly\"></a><h3>Embed.ly</h3><p><a href=\"http://embed.ly\" target=\"_blank\">Embed.ly</a>是一个解析url (比如Youtube的嵌入链接)的服务，并且会返回很多有价值的信息，比如提供者名称，汇总元数据，视频的高度和宽度，以及可以潜在你的视图中的清爽链接。他们提供了每月不超过5,000个url的免费方案。</p><p><a href=\"/zh/docs/database#field_embedly\">Embedly域类型</a>在你的KeystoneJS程序中集成它们的API的便利方式。</p><p>配置KeystoneJS支持Embed.ly API，只需要<a href=\"https://app.embed.ly/signup\">注册一个账号</a>，获取你的API键，并设置<code>embedly api key</code>参数。</p><p>这个参数默认为环境变量<code class=\"default-value\">EMBEDLY_API_KEY</code>，如果设了的话。</p><pre><code class=\"language-javascript\">keystone.set('embedly api key', 'your-key');</code></pre><a name=\"services-mandrill\"></a><h3>Mandrill</h3><p><a href=\"http://mandrill.com\" target=\"_blank\">Mandrill</a>是一个可扩展又实惠的email基础设施服务，让你可以轻松地发送邮件。他们提供了每月不超过12,000封email的免费方案。</p><p>配置KeystoneJS支持Mandrill API，只需<a href=\"https://mandrill.com/signup/\">注册一个账号</a>，获取你的API键，并设置<code>mandrill api key</code>和<code>mandrill username</code>两个参数。</p><p>这些参数默认为环境变量<code class=\"default-value\">MANDRILL_API_KEY &amp; MANDRILL_USERNAME</code>，如果设了的话。</p><pre><code class=\"language-javascript\">keystone.set('mandrill api key', 'your-key');\nkeystone.set('mandrill username', 'your-username');</code></pre><a name=\"updates\"></a><h2>应用程序更新</h2><p>Keystone中有一个更新框架，将<code>auto update</code>参数设为<code class=\"default-value\">true</code>就可以启用。</p><p>使用更新框架可以轻松向数据库中植入数据，模型修改时转换数据，或者对数据库运行转换脚本。</p><p>更新文件应该按照语义版本命名，后面可以跟一个关键字，也可以不跟，比如<code>0.0.1-init.js</code>。版本号用来对更新脚本排序，关键字可以标示更新什么。</p><p>每个更新文件都应该输出单个函数，这个函数应该接受单个参数 - <code>next(err)</code> 回调，在更新完成时调用。</p><p>所有的更新文件都会在web服务器启动前执行(每个都等前一个更新完成后开始)。</p><p>如果<code>next</code>回调收到一个错误，它会报告给控制台，并且程序初始化会终止。</p><p>在开发时，你可以在输出的函数中将<code>__defer__</code>属性设为<code>true</code>来临时禁用更新。所有后续更新都会跳过，但程序会启动。</p><p>更新只会运行一次，并且每个已完成的更新都会记录在数据库里的<code>app_updates</code>集合中。</p><div class=\"code-header\"><h4>更新脚本示例</h4><p>创建一个新的管理员用户</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    User = keystone.list('User');\n \nexports = module.exports = function(done) {\n    new User.model({\n        name: { first: 'Admin', last: 'User' },\n        password: 'admin',\n        isAdmin: true\n    }).save(done);\n};</code></pre><a name=\"headless\"></a><h2>禁用管理界面</h2><p>你可以将<code>headless</code>参数设为<code class=\"default-value\">true</code>来禁用管理界面。</p><p>这样不用Keystone在<code class=\"default-value\">/keystone</code>下给管理界面创建路由绑定，你可以使用<code>keystone.start()</code>或<code>keystone.routes(app)</code>。</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"zh/pages/docs/database": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/zh/docs\" class=\"nav-heading\">欢迎</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
if ( docssection.value != 'introduction')
{
buf.push("<hr/><ul class=\"sidebar-nav\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>数据库</h1><p class=\"lead\">数据模型的设置及使用</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"concepts\"></a>概念</h2><div class=\"alert alert-warning\"><p>KeystoneJS 需要 MongoDB v2.4 或更高版本。</p></div><p>在KeystoneJS中，数据模式和模型是由<strong>列表</strong>控制的，并且数据库中的文档经常被称为<strong>条目</strong>。</p><p>要定义数据模型，你要创建一个<code>new keystone.List</code>，然后传给它<a href=\"#lists-options\">列表参数</a>。</p><p>然后向列表中<code>add</code>域。在底层，Keystone List会创建一个<a href=\"http://mongoosejs.com/docs/guide.html\" target=\"_blank\">mongoose模式</a>，并为你添加的域给它定义恰当的路径。</p><p>你可以访问<code>schema</code>，插入其它mongoose功能，比如虚拟域、方法和前置/后置钩子。</p><p>完成列表的设置后，调用<code>list.register()</code>初始化它，并用Keystone注册。</p><p>查询数据用<code>list.model</code> (这是一个<a href=\"http://mongoosejs.com/docs/models.html\" target=\"_blank\">mongoose 模型</a>)。</p><p>列表条目是<a href=\"http://mongoosejs.com/docs/documents.html\" target\"_blank\">mongoose 文档</a>。用<code>new list.model()</code>创建新条目，当准备好保存它时(或者将修改保存到已有条目上)调用<code>item.save()</code>。</p><a name=\"lists\"></a><h2>列表</h2><a name=\"lists-usage\"></a><h3>用法</h3><h4><code>new keystone.List(key[, options]);</code></h4><p>创建<strong>Keystone列表的语法</strong>跟创建Mongoose模式的语法非常像，只是构造器不一样，它是<code class='default-value'>var MyList = new keystone.List(key, options)</code>。</p><p>新列表创建好以后，可以用<code>MyList.add(fields)</code>添加域，域是一个包含键（域的路径）和值（域的类型或参数）的对象。</p><p>域是由带有<code>type</code>属性的对象定义的，这个<code>type</code>必须是有效的域类型或基本的数据类型。你可以用对象语法为域指定额外的参数。常用的域参数和域类型特定的参数在域文档中有详细介绍。</p><p>列表上的所有域和参数都设好之后，调用<code>MyList.register()</code>用Keystone注册列表，并最终确定它的配置。</p><a name=\"lists-example\"></a><h3>例子</h3><p>一个用于博客的简单Post模型可能会像下面这个：</p><div class=\"code-header\"><h4>Post.js</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Types = keystone.Field.Types;\n \nvar Post = new keystone.List('Post', {\n    autokey: { path: 'slug', from: 'title', unique: true },\n    map: { name: 'title' },\n    defaultSort: '-createdAt'\n});\n \nPost.add({\n    title: { type: String, required: true },\n    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },\n    author: { type: Types.Relationship, ref: 'User' },\n    createdAt: { type: Date, default: Date.now },\n    publishedAt: Date,\n    image: { type: Types.CloudinaryImage },\n    content: {\n        brief: { type: Types.Html, wysiwyg: true, height: 150 },\n        extended: { type: Types.Html, wysiwyg: true, height: 400 }\n    }\n});\n \nPost.defaultColumns = 'title, state|20%, author, publishedAt|15%'\nPost.register();</code></pre><p class=\"note\">这个例子使用了可选的<code>map</code>、<code>autokey</code>和<code>defaultSort</code>参数，描述见下文。</p><p class=\"note\">它还指定<code>title</code>、<code>state</code>、<code>author</code>和<code>publishedAt</code>作为管理界面中默认显示的列，state和publishedAt还给定了列宽度。</p><p class=\"note\"><code>author</code>域是<code>Post</code>跟<code>User</code>模型的关系，在<a href=\"/zh/guide#models_users\">入门指南</a>中介绍过。</p><a name=\"lists-options\"></a><h3>参数</h3><p>列表支持以下参数：</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>label</code> <code class=\"data-type\">String</code></td><td>列表在管理界面中用的标签。默认为<code class=\"default-value\">key</code>的友善格式。 </td></tr><tr><td><code>path</code> <code class=\"data-type\">String</code></td><td>列表在管理界面中的路径。默认为<code class=\"default-value\">key</code>的缩略名格式。</td></tr><t><td><code>singular</code> <code class=\"data-type\">String</code></td><td>列表中条目的单数标签。用在管理界面中，默认为<code class=\"default-value\">label</code>的单数格式。</td></t><tr><td><code>plural</code> <code class=\"data-type\">String</code></td><td>列表中条目的复数标签。用在管理界面中，默认为<code class=\"default-value\">label</code>的复数格式。</td></tr><tr><td><code>schema</code> <code class=\"data-type\">String</code></td><td><p>列表的Mongoose模式的参数。 除了其他方面外，这个参数可以给<strong>集合</strong>指定一个定制的名称。参见<a href=\"http://mongoosejs.com/docs/guide.html#options\" target=\"_blank\">mongoose模式的文档</a>查看可用参数的清单。</p><p><em>警告: 不要修改模式参数<code>id</code>或<code>_id</code>；这是Keystone要求的默认行为。</em></p></td></tr><tr><td><code>drilldown</code> <code class=\"data-type\">String</code></td><td>以空格分隔的关系清单，在管理界面中显示为下钻项。</td></tr><tr><td><code>sortable</code> <code class=\"data-type\">Boolean</code></td><td>给模式添加一个隐藏的<code>sortOrder</code>域，并在管理界面中启用拖拽式的排序。</td></tr><tr><td><code>sortContext</code> <code class=\"data-type\">String</code></td><td>管理界面中有拖拽式排序时用来控制的<code>List:relationship</code>对。</td></tr><tr><td><code>searchFields</code> <code class=\"data-type\">String</code></td><td>在管理界面中用于搜索的路径清单，用空格分隔。</td></tr><tr><td><code>defaultSort</code> <code class=\"data-type\">String</code></td><td>管理界面中用于排序的默认列或路径。</td></tr><tr><td><code>defaultColumns</code> <code class=\"data-type\">String</code></td><td>在管理界面的列表视图中默认显示的列清单，用逗号分隔。\n 你可以在管道符<code>|</code>后面用像素或百分比指定宽度。</td></tr><tr><td><code>map</code> <code class=\"data-type\">Object</code></td><td>将域映射到特定<strong>列表</strong>路径上的对象。如果添加了带那个键的域，则每个路径都默认为它的键。映射路径包括<ul class=\"options\"><li><code>name</code> - 包含条目名称的域，显示在管理界面中</li></ul></td></tr><tr><td><code>autokey</code> <code class=\"data-type\">Object</code></td><td>在列表上添加一个插件，文档保存时自动基于另一个域或路径为它生成一个键。这个参数的值应该是带有如下键的对象：<ul class=\"options\"><li><code>from</code> <code class=\"data-type\">String</code> - 用于生成键值的域或路径，可以是用空格分开的域清单</li><li><code>path</code> <code class=\"data-type\">String</code> - 存储键的路径</li><li><code>unique</code> <code class=\"data-type\">Boolean</code> - 键是否应该有唯一性</li><li><code>fixed</code> <code class=\"data-type\">Boolean</code> - 如果键存在并且非空，应该保留。默认为<code class=\"data-type\">false</code>。</li></ul><em>路径Autokey是自动索引的；你可能还想把它放在复合索引中。</em></td></tr><tr><td><code>track</code> <code class=\"data-type\">Boolean or Object</code></td><td> <p>在列表上添加一个插件，追踪谁在什么时候（比如哪个Keystone用户）创建和最后修改了一个条目。</p><p>设为<code class=\"data-type\">true</code>时，所有追踪域都是用它们的默认名称启用的。 </p><p>你也可以选择性地启用各个域，并且还可以通过将<code>track</code>设为一个带有下面任一或全部域的<code class=\"data-type\">object</code>来指定一个定制的域名：</p><ul class=\"options\"><li><code>createdAt</code> <code class=\"data-type\">Boolean/String</code> - 设为<code class=\"data-type\">true</code>时，追踪条目何时创建(使用默认的域名<em>createdAt</em>)。要使用定制的域名，用想要的名称设置<code class=\"data-type\">String</code>。默认为<code class=\"data-type\">false</code>。</li><li><code>createdBy</code> <code class=\"data-type\">Boolean/String</code> -设为<code class=\"data-type\">true</code>时，追踪哪个用户创建了条目(使用默认的域名<em>createdBy</em>)。要使用定制的域名，用想要的名称设置<code class=\"data-type\">String</code>。默认为<code class=\"data-type\">false</code>。</li><li><code>updatedAt</code> <code class=\"data-type\">Boolean/String</code> - 设为<code class=\"data-type\">true</code>时，追踪条目的最后更新时间(使用默认的域名<em>updatedAt</em>)。要使用定制的域名，用想要的名称设置<code class=\"data-type\">String</code>。默认为<code class=\"data-type\">false</code>。</li><li><code>updatedBy</code> <code class=\"data-type\">Boolean/String</code> - 设为<code class=\"data-type\">true</code>时，追踪是哪个用户最后更新了条目(使用默认的域名<em>updatedBy</em>)。要使用定制的域名，用想要的名称设置<code class=\"data-type\">String</code>。默认为<code class=\"data-type\">false</code>。</li></ul><p class=\"note\"><code>createdBy</code>和<code>updatedBy</code>域只有通过Keystone管理界面添加/修改条目时才能自动更新。然而，如果你想在自己的程序内添加/修改条目，则必须在保存条目之前手工将条目的<code>._req_user</code>属性设为当前登录的用户(<code>req.user</code>)，如下例所示。</p><pre><code class=\"language-javascript\">var item = new List.model();\nitem.set({ field1: 'value1', field2: 'value2' });\nitem._req_user = req.user;\nitem.save();</code></pre></td></tr><tr><td><code>noedit</code> <code class=\"data-type\">Boolean</code></td><td>禁止在Keystone管理界面中编辑列表中的条目。</td></tr><tr><td><code>nocreate</code> <code class=\"data-type\">Boolean</code></td><td>禁止在Keystone管理界面中创建列表的新条目。</td></tr><tr><td><code>nodelete</code> <code class=\"data-type\">Boolean</code></td><td>禁止在Keystone管理界面中删除列表中的条目。</td></tr><tr><td><code>hidden</code> <code class=\"data-type\">Boolean</code></td><td>在Keystone管理界面中隐藏这个列表。</td></tr></table><p class=\"note\">如果你想知道如何控制被分类列表在管理界面中的导航区域，请查看<a href=\"/zh/docs/configuration/#options-project\">KeystoneJS配置</a>文档中的<code>nav</code>参数。</p><h4>下钻示例</h4><p>下钻参数是提高管理界面可用性的好办法，为用户当前正在编辑的条目提供上下文。</p><p>默认情况下，下钻只会显示该条目所属的列表。</p><p>然而你可以将它设为模式中的<code>Relationship</code>域，它就会显示当前存储在那个关系域中的条目。</p><p>如果有几个要在下钻清单中显示的相关关系，可以用空格把它们分开。</p><div class=\"code-header\"><h4>例子：在帖子的下钻中包含作者</h4></div><pre><code class=\"language-javascript\">var Post = new keystone.List('Post', {\n    autokey: { path: 'slug', from: 'title', unique: true },\n    map: { name: 'title' },\n    defaultSort: '-createdAt',\n    drilldown: 'author' // 在上面的例子中，author被定义为一个Relationship域\n});</code></pre><a name=\"lists-plugins\"></a><h3>模式插件</h3><p>你可以用<code>schema</code>指定<strong>列表</strong>的<a href=\"http://mongoosejs.com/docs/guide.html\" target=\"_blank\"><strong>虚拟域</strong>、<strong>方法</strong>、<strong>静态域</strong></a>和<a href=\"http://mongoosejs.com/docs/middleware.html\" target=\"_blank\"><strong>前置</strong>和<strong>后置</strong>钩子</a>。你也可以用<a href=\"http://plugins.mongoosejs.com\" target=\"_blank\">插件网站</a>上的<a href=\"http://mongoosejs.com/docs/plugins.html\" target=\"_blank\">mongoose插件</a>。</p><p>比如说，在上面的<strong>Post</strong>列表中，我们可能想在<code>state</code>被改成<code>published</code>后自动设定<code>publishedAt</code>的值(但仅在它还没被设定过时)。</p><p>我们可能还想添加个方法用来检查Post是否发布了，而不是直接检查<code>state</code>域的值。</p><p>在调用<code>Post.register()</code>之前，我们先加上下面这段代码：</p><pre><code class=\"language-javascript\">Post.schema.methods.isPublished = function() {\n    return this.state == 'published';\n}\n \nPost.schema.pre('save', function(next) {\n    if (this.isModified('state') &amp;&amp; this.isPublished() &amp;&amp; !this.publishedAt) {\n        this.publishedAt = new Date();\n    }\n    next();\n});</code></pre><a name=\"lists-querying\"></a><h3>查询数据</h3><p>要查询数据，你可以在<code>list.model</code>上使用任何<a href=\"http://mongoosejs.com/docs/queries.html\" target=\"_blank\">mongoose查询</a>方法。</p><p><strong>比如说：</strong>要加载最新5条状态为<code>published</code>的<code>posts</code>，并组装可链接的<code>author</code>，按发布日期的降序排列：</p><div class=\"code-header\"><h4>加载Posts</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nPost.model.find()\n    .where('state', 'published')\n    .populate('author')\n    .sort('-publishedAt')\n    .limit(5)\n    .exec(function(err, posts) {\n        // 对帖子做些处理\n    });</code></pre><p><strong>Promises</strong></p><p>还有一种处理mongoose查询中的事件的方法。除了传给<a href=\"http://mongoosejs.com/docs/api.html#query_Query-exec\" target=\"_blank\">exec</a>方法一个<a href=\"http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/\" target=\"_blank\">回调函数</a>，我们还可以用它的返回结果：<a href=\"http://www.html5rocks.com/en/tutorials/es6/promises/\" target=\"_blank\">Promise</a>。对于带有错误传播的整洁事件链，Promise非常实用。</p><p><strong>比如说：</strong>加载100条 <code>posts</code>，然后异步做些处理，然后再对其结果做些处理：</p><div class=\"code-header\"><h4>加载Posts，异步做些处理，然后再做些处理：</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nPost.model.find()\n    .limit(100)\n    .exec()\n    .then(function (posts) { //第一个promise得到满足\n        //返回另一个异步promise\n    }, function (err) { //第一个promise被驳回\n        throw err;\n    }).then(function (result) { //第二个promise得到满足\n        //对最终结果做些处理\n    }, function (err) { //除了某些问题\n        //捕获错误，它可能是链中的任何promise抛出的\n        console.log(err);\n    });</code></pre><a name=\"lists-paginate\"></a><h3>分页查询</h3><p>你可以用<code>List.paginate()</code>进行分页查询，它会像<code>List.model.find()</code>一样返回一个查询对象，该方法支持下面这些参数：</p><ul><li><code>page</code> - 从哪一页开始</li><li><code>perPage</code> - 每页的记录条数</li><li><code>maxPages</code> - 可选参数，在计算页面时从开始/中间/末尾处省略页数（如果你有很多页，并且不想让它们显示时占好几行，就可以用这个参数）。</li></ul><p><strong>比如说：</strong> 要以<code>maxPages</code> 10 和<code>perPage</code> 10加载<code>posts</code>，并且要求其状态为<code>published</code>，同时组装出关联的<code>author</code>和<code>categories</code>，按发布时间的逆序排列：</p><div class=\"code-header\"><h4>分页加载Post</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \n Post.paginate({\n\t\tpage: req.query.page || 1,\n\t\tperPage: 10,\n\t\tmaxPages: 10\n\t})\n\t.where('state', 'published')\n\t.sort('-publishedDate')\n\t.populate('author categories')\n\t.exec(function(err, results) {\n\t\tlocals.data.posts = results;\n\t\tnext(err);\n\t});</code></pre><p>当你在分页查询上调用<code>exec</code>时，除了查询结果，它还会返回很多元数据：</p><ul><li><code>total</code>: 匹配结果的总数(不仅仅是这一页的)</li><li><code>results</code>: 这一页的结果集数组</li><li><code>currentPage</code>: 当前页的页码</li><li><code>totalPages</code>: 总页数</li><li><code>pages</code>: 要显示的页码的数组</li><li><code>previous</code>: 前一页的页码，如果当前页是第一页则为false</li><li><code>next</code>: 下一页的页码，如果当前页是最后一页则为false</li><li><code>first</code>: 包含第一条结果的页码</li><li><code>last</code>: 包含最后一条结果的页码</li></ul><a name=\"lists-creating\"></a><h3>创建条目</h3><p>要创建新条目，还是用<a href=\"http://mongoosejs.com/docs/models.html\" target\"_blank\">mongoose模型</a>：</p><div class=\"code-header\"><h4>创建Post</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nvar newPost = new Post.model({\n    title: 'New Post'\n});\n \nif (shouldBePublished) {\n    newPost.state = 'published';\n}\n \nnewPost.save(function(err) {\n    // post已保存\t\n});</code></pre><div class=\"contextual-note\"><h4>自动键</h4><p>因为我们在<code>Post</code>列表中设定了<code>autokey</code>参数，它会在post被保存到数据库中之前基于<code>title</code>生成一个唯一的键。</p><pre>newPost.slug == 'new-post';</pre></div><a name=\"lists-deleting\"></a><h3>删除条目</h3><p>要删除条目，首先加载那项数据，然后用它的<code>remove</code>方法：</p><div class=\"code-header\"><h4>删除一个Post</h4></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nPost.model.findById(postId)\n    .remove(function(err) {\n        // post已删除\n    });</code></pre><!-- TODO: Documentation for Schema features (virtuals, methods, statics and hooks)--><!-- TODO: Documentation for Update Handler--><a name=\"headings\"></a><h2>标题</h2><p>定义标题以区分文档流程。标题可以定义为 <code>String</code> 或者 <code>Object</code> 以及 <a href=\"#dependsOn\">依赖于</a> 其他域的值。</p><pre><code class=\"language-javascript\">Person.add(\n   'User', \n   { name: { type: Types.Name, required: true, index: true, initial: true } }, \n   'Permissions', \n   { isAdmin: { type: Boolean, label: 'Can access Keystone', index: true } },\n   // header object\n   { heading: 'Activities' }, \n   { place: { type: Types.Select, options: ['GT', 'UGA'] } },\n   // header with dependsOn\n   { heading: \"GT Activities\", dependsOn: { place: 'GT' } },\n   { type: { type: Types.Select, options: ['ZC', 'MP'], dependsOn: { place: 'GT'} }\n);</code></pre><div class=\"options\"><h5>参数</h5><p><code>heading</code> <code class=\"data-type\">String</code> -  标题显示的文字</p><p><code>dependsOn</code> <code class=\"data-type\">Object</code> - 标题只会在当前对象指定路径和数据项匹配时候显示。 <a href=\"#dependsOn\">dependsOn</a> </p></div><a name=\"fields\"></a><h2>域</h2><p>在向<strong>列表</strong>中添加<strong>域</strong>时，你既可以指定基本数据类型，也可以用Keystone域类型。</p><a name=\"fields-overview\"></a><h3>概述</h3><p>你可以用<strong>Keystone域</strong>轻松地向程序的模型中添加丰富的、功能化的域。它们不仅可以描述数据的<em>结构</em>，还可以描述数据的<em>意图</em>。它们提供了：</p><ul><li>Keystone管理界面中的丰富控件</li><li>复杂的数据类型；比如存储几个字符串和GeoJSON经纬度的<code>location</code>域</li><li>格式化和验证方法</li><li>额外的虚拟属性；比如<code>name</code>提供了一个虚拟的<code>name.full</code>，将实际存储的<code>name.first</code>和<code>name.last</code>合并起来。</li><li>Underscore方法；比如<code>password</code>域提供了一个<code>password.compare</code>方法， 用于比较加密的哈希值</li><li>域之间彼此关系如何的元数据；比如哪个域依赖于其它域中的某个值</li></ul><p>基本数据类型跟Keystone的域类型是一一对应的：</p><table style=\"width:200px\" class=\"table\"><col/><col/><thead><th>数据类型</th><th>域类型</th></thead><tr><td><code class=\"data-type\">String</code></td><td><code class=\"data-type\">Text</code></td></tr><tr><td><code class=\"data-type\">Number</code></td><td><code class=\"data-type\">Number</code></td></tr><tr><td><code class=\"data-type\">Date</code></td><td><code class=\"data-type\">DateTime</code></td></tr><tr><td><code class=\"data-type\">Boolean</code></td><td><code class=\"data-type\">Boolean</code></td></tr></table><a name=\"fields-options\"></a><h3>域参数</h3><p>所有域类型都支持几个通用的参数，可以指定数据库设置(比如<code>index</code>和<code>default</code>)，或者为Keystone的管理界面提供信息(比如 <code>label</code>)。</p><p class=\"note\">域在对象内部可以嵌入，就像在mongoose模式中一样。</p><p class=\"note\">所有的<a href=\"http://mongoosejs.com/docs/schematypes.html\" target=\"_blank\">mongoose模式类型参数</a> 都是传给<a href=\"http://mongoosejs.com/docs/guide.html\" target=\"_blank\">mongoose模式</a>的，所以你也可以用mongoose支持的任何参数。</p><p>常用的域参数有：</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>label</code> <code class=\"data-type\">String</code></td><td>每个域的标签都是由域路径生成的；设置这个参数会覆盖默认值。</td></tr><tr><td><code>required</code> <code class=\"data-type\">Boolean</code></td><td>在条目保存前验证这个域是有值的(<em>还会传给mongoose并强制使用数据库索引</em>)。</td></tr><tr><td><code>initial</code> <code class=\"data-type\">Boolean</code></td><td>让这个域出现在管理界面中的<strong>创建条目</strong>表单中。</td></tr><tr><td><code>noedit</code> <code class=\"data-type\">Boolean</code></td><td>在管理界面中将这个域渲染为只读域。</td></tr><tr><td><code>note</code> <code class=\"data-type\">String</code></td><td>在管理界面中跟着域显示。</td></tr><tr><td><code>hidden</code> <code class=\"data-type\">Boolean</code></td><td>如果设为<code class=\"default-value\">true</code>，则该域在管理界面中一直是隐藏域。</td></tr></table><h3>条件域</h3><p>为了提高管理界面的可用性，可以在某些域没有值时隐藏它们，或者根据其它域的取值隐藏。</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>collapse</code> <code class=\"data-type\">Boolean</code></td><td>该域没有值时在管理界面中显示一个<strong>+ <u>添加</u></strong>链接。当<code>noedit</code>也被设为<code class=\"default-value\">true</code>时，该域没值时则完全隐藏。</td></tr><tr><td><code>dependsOn</code> <code class=\"data-type\">Object</code></td><td><p>只有对象中指定的路径跟条目的当前数据匹配时才会显示<p>你可以在每个路径上用数组对准多个值。</p><div class=\"code-header\"><h4>示例</h4></div><pre><code class=\"language-javascript\">first: { type: String },\n// 如果first === \"value1\", \"1\" 或 \"2\" 时将会显示\nsecond: { type: String, dependsOn: { first: ['value1', '1', 2] } },\n// 如果 first == \"value1\" 时会显示\nthird: { type: String, dependsOn: { first: 'value1' } }</code></pre></p></td></tr></table><h3>生成的值及观测域</h3><p>Keystone的域可以用简单的语法配置动态更新的域。你可以将一个域设置为在下面这些情况下更新它的值：</p><ul><li>条目保存时</li><li>任何其它域的值发生变化时</li><li>任何其它域的值变成特定值时</li></ul><p>要使用观测功能，设置下面两个参数：</p><table class=\"table\"><col width=\"210\"/><col/><tr><td><code>watch</code> <code class=\"data-type\">Boolean</code>或<code class=\"data-type\">String</code> 或<code class=\"data-type\">Object</code>或<code class=\"data-type\">Function</code></td><td><p>为<code class=\"default-value\">true</code>时，每次保存条目都会重新计算这个域的值。 <br></p><p>提供一个用空格分隔的路径清单，其中任何一个发生变化时就重新计算这个域的值。 <br><strong>比如：</strong> <code class=\"default-value\">'author title state'</code></p><p>提供一个键/值对的对象，其中任何一个路径变成指定的值时就重新计算这个域的值。<br><strong>比如：</strong> <code class=\"default-value\">{'state': 'published', 'mainPost': true}</code></p><p>提供一个可以在需要时返回true/false的函数。<br><strong>比如：</strong> <code class=\"default-value\">function() { return this.author === this.editor; }</code></p></td></tr><tr><td><code>value</code> <code class=\"data-type\">Function</code></td><td><p>当所观测的路径发生变化时生成这个域的值的函数。必须返回新的值。</p><p>这个函数的<code>this</code>上下文是被保存的那个条目。</p><p><strong>比如：</strong></p><pre><code class=\"language-javascript\">function () {\n    return this.total<=this.totalreceived ? true:false;\n}</code></pre></td></tr></table><a name=\"fields-underscoremethods\"></a><h3>Underscore方法</h3><p>有些域类型包含辅助的<strong>underscore方法</strong>，在条目的域路径前面放一个下划线。</p><p><strong>比如</strong>: 像下面这样用上面那个Posts列表中的<code>createdAt</code> <code class=\"data-type\">DateTime</code>域的underscore方法<code>format</code> </p><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Post = keystone.list('Post');\n \nPost.model.findById(postId).exec(function(err, post) {\n   console.log(post._.createdAt.format('Do MMMM YYYY')); // 2013年8月25号\n});</code></pre><a name=\"relationships\"></a><h2>关系</h2><p>Keystone加强了MongoDB在域中存储相关文档的ObjectID的能力 (或者在数组中很多的ObjectID)，支持Relationship域和模型中的定义。</p><a name=\"relationship-fields\"></a><h3>关系域</h3><h4><code class=\"data-type\">ObjectId</code>或<code class=\"data-type\">Array</code> &mdash; 在管理界面中显示为带有自动提示功能的输入域</h4><p>将对另一个模型的ObjectID引用存到一个ObjectID域或数组中创建一对多或多对多关系。</p><p>用<code>ref</code>参数指定相关模型。对于多对多关系而言，将<code>many</code>参数设为<code class=\"default-value\">true</code>。</p><p>比如说，如果你想将<strong>Post</strong>模型链到一个<strong>Author</strong>和多个<strong>PostCategories</strong>上时，可以这样做：</p><pre><code class=\"language-javascript\">Post.add({\n    author: { type: Types.Relationship, ref: 'User' },\n    categories: { type: Types.Relationship, ref: 'PostCategory', many: true }\n});</code></pre><h5>关系过滤器</h5><p>你可以用<code>filters</code>参数过滤关系域。</p><p><code>filters</code>参数是一个键/值对对象，其中键对应要过滤的相关模型的域，其中的值或者是字面值，或者是当前模型的域名，值会用来过滤关系。</p><p>在下面的例子中，<code>author</code>域只允许选择<code>group</code>域等于'admin'的<code>User</code>。</p><pre><code class=\"language-javascript\">Post.add({\n    title: { type: String, required: true },\n    category: { type: Types.Select, options: 'user, editor, admin', default: 'user' },\n    author: { type: Types.Relationship, ref: 'User', filters: { group: 'admin' } }\n});</code></pre><p>你也可以用模型中其它域的值过滤。将过滤器的值设为那个域的名称，前面加上分号(:)。</p><p>在下例中，<code>author</code>域只能选择<code>group</code>域跟<code>Post</code>模型的<code>category</code>域的值相等的<code>User</code>。</p><pre><code class=\"language-javascript\">Post.add({\n    title: { type: String, required: true },\n    category: { type: Types.Select, options: 'user, editor, admin', default: 'user' },\n    author: { type: Types.Relationship, ref: 'User', filters: { group: ':category' } }\n});</code></pre><p>最后，你还可以用当前模型的<code>_id</code>域过滤。</p><p>在下例中，<code>bestPost</code>域只能选择<code>author</code>域等于当前文档的<code>_id</code>的<code>Post</code> 。</p><pre><code class=\"language-javascript\">User.add({\n    name: { type: String, required: true },\n    group: { type: Types.Select, options: 'user, editor, admin', default: 'user' },\n    bestPost: { type: Types.Relationship, ref: 'Post', filters: { author: ':_id' } }\n});</code></pre><p class=\"note\">你只能在一对多关系(即当<code>many</code>参数不为<code class=\"default-value\">true</code>时)中设置过滤器。</p><h5>在查询中组装相关数据</h5><p>感谢<a href=\"http://mongoosejs.com/docs/populate.html\" target=\"_blank\">Mongoose的组装功能</a>，你可以为关系域组装相关数据。想在加载上面例子中的Post时组装author和category文档，应该这样做：</p><pre><code class=\"language-javascript\">Post.model.findOne().populate('author categories').exec(function(err, post) {\n    // author是组装完整的User文档\n    console.log(post.author.name);\n});</code></pre><p class=\"note\">注意，如果没存ObjectId，或者保存的ObjectId无效(比如文档被删了)，上例中的<code>author</code>将变为<code class=\"data-type\">undefined</code>。</p><a name=\"relationship-definitions\"></a><h3>关系定义</h3><p>在上面的例子中，如果你想看到每位Author的Post清单该怎么做？因为关系域在Post上，你需要告诉Author（和PostCategory）模型它是被引用的。这样管理界面就可以从两个方向呈现这一关系。</p><p>你可以像下面这样在<code>Model</code>上调用<code>relationship</code>：</p><pre><code class=\"language-javascript\">User.relationship({ path: 'posts', ref: 'Post', refPath: 'author' });</code></pre><div class=\"options\"><h5>参数</h5><p><code>path</code> <code class=\"data-type\">String</code> - 模型上的关系引用路径</p><p><code>ref</code> <code class=\"data-type\">String</code> - 引用方模型的键 (有关系域的那一方)</p><p><code>refPath</code> <code class=\"data-type\">String</code> - 引用方模型上的关系引用路径</p></div><p>如你所见，提供给<code>relationship</code>方法的这些参数是对关系域的镜像。</p><p class=\"note\">关系定义是可选的；如果你不定义，只是关系的另一侧不会在管理界面中显示这一关系。关系域仍能如期工作。</p><a name=\"relationship-queries\"></a><h3>加载相关条目</h3><p>过滤一对多的相关条目很容易；只需要像其它任何值一样指定你希望过滤的条目的ID：</p><pre><code class=\"language-javascript\">Post.model.find().where('author', author.id).exec(function(err, posts) {\n    // ...\n});</code></pre><p>要过滤多对多的相关条目，用条件<code>in</code>，并用数组指定一个(或多个)ID：</p><pre><code class=\"language-javascript\">Post.model.find().where('categories').in([category.id]).exec(function(err, posts) {\n    // ...\n});</code></pre><a name=\"fieldtypes\"></a><h2>域类型</h2><a name=\"fieldtypes-boolean\"></a><h3><code>Boolean</code></h3><h4><code class=\"data-type\">Boolean</code> &mdash; 在管理界面中显示为一个检查框</h4><pre><code class=\"language-javascript\">{ type: Types.Boolean }</code></pre><a name=\"fieldtypes-text\"></a><h3><code>Text</code></h3><h4><code class=\"data-type\">String</code> &mdash; 在管理界面中显示为一个文本控件</h4><pre><code class=\"language-javascript\">{ type: Types.Text }</code></pre><a name=\"fieldtypes-textarea\"></a><h3><code>Textarea</code></h3><h4><code class=\"data-type\">String</code> &mdash; 在管理界面中显示为一个文本框</h4><pre><code class=\"language-javascript\">{ type: Types.Textarea }</code></pre><div class=\"options\"><h5>参数</h5><p><code>height</code> <code class=\"data-type\">Number</code> - 文本框的高度(以像素为单位)</p></div><a name=\"fieldtypes-email\"></a><h3><code>Email</code></h3><h4><code class=\"data-type\">String</code> &mdash; 在管理界面中显示为一个文本控件</h4><p class=\"note\">输入看起来必须像一个有效的email地址(如果不是必填项，可以为空)</p><pre><code class=\"language-javascript\">{ type: Types.Email, displayGravatar: true }</code></pre><div class=\"options\"><h5>参数</h5><p><code>displayGravatar</code> <code class=\"data-type\">Boolean</code> - 是否在管理界面中显示gravatar图片</p><h5>Underscore方法：</h5><p><code>gravatarUrl(input, size, defaultImage, rating)</code> - 生成一个gravatar图片的请求url</p><pre><code class=\"language-javascript\">item.email = \"demo@keystonejs.com\";\nitem._.email.gravatarUrl(); // \"//www.gravatar.com/avatar/74a0071e5f3a7107b570b7d4a1a7619d?s=80&d=identicon&r=g\"\nitem._.email.gravatarUrl(200,'mm','r'); // \"//www.gravatar.com/avatar/74a0071e5f3a7107b570b7d4a1a7619d?s=200&d=mm&r=r\"</code></pre></div><a name=\"fieldtypes-url\"></a><h3><code>Url</code></h3><h4><code class=\"data-type\">String</code> &mdash; 在管理界面中显示为一个文本控件</h4><pre><code class=\"language-javascript\">{ type: Types.Url }</code></pre><div class=\"options\"><h5>Underscore方法：</h5><p><code>format()</code> - 去掉存储的值前面的协议(如果有的话)</p><pre><code class=\"language-javascript\">item.url = \"http://keystonejs.com\";\nitem._.url.format(); // \"keystonejs.com\"</code></pre></div><a name=\"fieldtypes-html\"></a><h3><code>Html</code></h3><h4><code class=\"data-type\">String</code> &mdash; 在管理界面中显示为一个文本控件或WYSIWYG编辑器。</h4><pre><code class=\"language-javascript\">{ type: Types.Html, wysiwyg: true }</code></pre><div class=\"options\"><h5>参数</h5><p><code>wysiwyg</code> <code class=\"data-type\">Boolean</code> - 在管理界面中是否显示WYSIWYG编辑器 - 要定制编辑器请参见<a href=\"/zh/docs/configuration/#options-ui\">管理界面参数</a>。</p><p><code>height</code> <code class=\"data-type\">Number</code> - 输入域的高度(以像素为单位)</p></div><p>参见<a href=\"/zh/docs/configuration#options-ui\">管理界面参数</a>了解用于定制WYSIWYG编辑器的全局配置参数。</p><a name=\"fieldtypes-color\"></a><h3><code>Color</code></h3><h4><code class=\"data-type\">Color</code> &mdash; 显示为带有取色器的文本控件</h4><pre><code class=\"language-javascript\">{ type: Types.Color }</code></pre><a name=\"fieldtypes-date\"></a><h3><code>Date</code></h3><h4><code class=\"data-type\">Date</code> &mdash; 在管理界面中显示为日期选择控件</h4><p class=\"note\">输入或者是有效的<strong>Date</strong>，或者是格式为<strong>YYYY-MM-DD</strong>的字符串 (除非为必填项，否则可以为空)</p><p class=\"note\">要将Date域设为当前时间，需将<code>default</code>参数设为<code class=\"default-value\">Date.now</code></p><pre><code class=\"language-javascript\">{ type: Types.Date }</code></pre><div class=\"options\"><h5>参数</h5><p><code>format</code> <code class=\"data-type\">string</code> - 默认的格式模式，默认为<code class=\"default-value\">Do MMM YYYY</code></p><p>参见<a href=\"http://momentjs.com/docs/#/displaying/format/\" target=\"_blank\">momentjs格式文档</a>了解所支持的格式和参数。</p><h5>Underscore方法</h5><p><code>format(string)</code> - 用<a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a>格式化存储的值</p><p><code>moment()</code> - 返回一个用该域的值初始化的<a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a>对象</p><p><code>parse(input, format, ...)</code> - 用<a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a>解析input，将该域的值设为返回的moment对象</p><p>参见<a href=\"http://momentjs.com/docs/#/parsing/\" target=\"_blank\">momentjs解析文档</a>了解所支持的格式和<code>parse</code>方法的参数。</p><pre><code class=\"language-javascript\">item.createdDate = Date.now();\nitem._.createdDate.format(); // 用默认的格式字符串返回当天的date\nitem._.createdDate.parse('2013-12-04'); // 用被解析的日期返回一个moment对象\nitem._.createdDate.format('YYYY-MM-DD'); // 返回'2013-12-04'</code></pre></div><a name=\"fieldtypes-datetime\"></a><h3><code>Datetime</code></h3><h4><code class=\"data-type\">Datetime</code> &mdash; 在管理界面中显示为日期时间选择控件</h4><p class=\"note\">输入或者是有效的<strong>Date</strong>，或者是格式为<strong>YYYY-MM-DD</strong>的字符串 (除非为必填项，否则可以为空)</p><p class=\"note\">要将Date域设为当前时间，需将<code>default</code>参数设为<code class=\"default-value\">Date.now</code></p><pre><code class=\"language-javascript\">{ type: Types.Datetime, default: Date.now }</code></pre><div class=\"options\"><h5>参数：</h5><p><code>format</code> <code class=\"data-type\">string</code> - 默认的格式模式，默认为<code class=\"default-value\">Do MMM YYYY hh:mm:ss a</code></p><p>参见<a href=\"http://momentjs.com/docs/#/displaying/format/\" target=\"_blank\">momentjs格式文档</a>了解所支持的格式和参数。</p><h5>Underscore方法：</h5><p><code>format(string)</code> -  用<a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a>格式化存储的值</p><p><code>moment()</code> - 返回一个用该域的值初始化的<a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a>对象</p><p><code>parse(input, format, ...)</code> - 用<a href=\"http://momentjs.com\" target=\"_blank\">momentjs</a>解析input，将该域的值设为返回的moment对象</p><p>参见<a href=\"http://momentjs.com/docs/#/parsing/\" target=\"_blank\">momentjs解析文档</a>了解所支持的格式和<code>parse</code>方法的参数。</p></div><a name=\"fieldtypes-key\"></a><h3><code>Key</code></h3><h4><code class=\"data-type\">String</code> &mdash; 在管理界面中显示为一个文本输入域</h4><p>自动将输入转为有效的键(没有空格或特殊字符)。用分隔符替换空格。</p><pre><code class=\"language-javascript\">{ type: Types.Key }</code></pre><div class=\"options\"><h5>参数</h5><p><code>separator</code> <code class=\"data-type\">String</code> - 用来替换输入中空格的分隔符；默认为<code class=\"default-value\">-</code></p></div><a name=\"fieldtypes-number\"></a><h3><code>Number</code></h3><h4><code class=\"data-type\">Number</code> &mdash; 在管理界面中显示为一个数字输入控件</h4><p>输入或者是有效的<strong>Number</strong>，或者是可以转换为数字的字符串(除非为必填项，否则可以为空)</p><pre><code class=\"language-javascript\">{ type: Types.Number }</code></pre><div class=\"options\"><h5>Underscore方法：</h5><p><code>format(string)</code> - 用<a href=\"http://numeraljs.com\" target=\"_blank\">numeraljs</a>格式化存储的值。设为<code class=\"default-value\">false</code>可以禁用自动格式化。</p><p>格式化字符串默认为<code class=\"default-value\">0,0[.][000000000000]</code></p></div><a name=\"fieldtypes-money\"></a><h3><code>Money</code></h3><h4><code class=\"data-type\">Number</code> &mdash; 在管理界面中显示为一个数字输入控件</h4><p>输入或者是有效的<strong>Number</strong>，或者是可以转换为数字的字符串(可以有前置符号；除非为必填项，否则可以为空)。金额控件不能识别币种。</p><pre><code class=\"language-javascript\">{ type: Types.Money }</code></pre><div class=\"options\"><h5>Underscore方法：</h5><p><code>format(string)</code> - 用<a href=\"http://numeraljs.com\" target=\"_blank\">numeraljs</a>格式化存储的值。设为<code class=\"default-value\">false</code>可以禁用自动格式化。</p><p>格式化字符串默认为<code class=\"default-value\">$0,0.00</code></p></div><a name=\"fieldtypes-select\"></a><h3><code>Select</code></h3><h4><code class=\"data-type\">String</code>或<code class=\"data-type\">Number</code> &mdash; 在管理界面中显示为选择输入控件</h4><p class=\"note\">类似于其他框架中的 <code>Enum</code>.</p><pre><code class=\"language-javascript\">{ type: Types.Select, options: 'first, second, third' }</code></pre><div class=\"options\"><h5>参数</h5><p><code>numeric</code> <code class=\"data-type\">Boolean</code> 为<code class=\"default-value\">true</code>时，会将该域的值存为<code class=\"data-type\">Number</code>而不是<code class=\"data-type\">String</code></p><pre><code class=\"language-javascript\">{ type: Types.Select, numeric: true, options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }] }</code></pre><p><code>emptyOption</code> <code class=\"data-type\">Boolean</code> 为<code class=\"default-value\">undefined || true</code>时，会添加一个空白的选择项<code>&lt;select&gt;</code>作为输入控件中的第一项</p><pre><code class=\"language-javascript\">{ type: Types.Select, required: true, options: 'first, second', emptyOption: false }</code></pre><p><code>options</code> <code class=\"data-type\">String</code>或<code class=\"data-type\">Array</code> - 选择输入控件的选择项</p><p>选择项的值可以是用逗号分隔的<code class=\"data-type\">String</code>值列表，其中的字符串会被分割为<code class=\"data-type\">Array</code>。</p><p>对于选择项<code class=\"data-type\">Array</code>，每个选择项或者是</p><ul><li>表示选择项的<code>value</code>的<code class=\"data-type\">String</code>；<code>label</code>是自动生成的</li><li>带有<code>value</code>和<code>label</code> <code class=\"data-type\">String</code>属性的<code class=\"data-type\">Object</code></li></ul><p>你可以在<code>options</code> <code class=\"data-type\">Array</code>中混合<code class=\"data-type\">String</code>和<code class=\"data-type\">Object</code>条目：</p><pre><code class=\"language-javascript\">{ type: Types.Select, options: ['first', 'second', { value: 'third', label: 'The third one' }] }</code></pre><p><code class=\"data-type\">Object</code>选择项可以有额外的属性，可以在获取当前选择项的数据，或域参数时访问到。</p><pre><code class=\"language-javascript\">{ type: Types.Select, options: [\n    { value: 'first', label: 'The first option', custom: 'value' },\n    { value: 'second', label: 'Second' }\n]}</code></pre><h5>属性</h5><p><code>ops</code> <code class=\"data-type\">Array</code> - 输入控件的<strong>options</strong>数组</p><p><code>values</code> <code class=\"data-type\">Array</code> - 全部<code>option.value</code>属性</p><p><code>labels</code> <code class=\"data-type\">Object</code> - 全部<code>option.label</code>属性，以<code>option.value</code>为键</p><p><code>map</code> <code class=\"data-type\">Object</code> - options的映射，以<code>option.value</code>为键</p><h5>模式</h5><p>当前选择项的值会存在<code>{path}</code>上。此外还会提供这些虚拟域：</p><p><code>pathLabel</code> <code class=\"data-type\">String</code> - 当前选择的<strong>option</strong>的标签</p><p><code>pathData</code> <code class=\"data-type\">Object</code> - 当前选择的<strong>option</strong>，包含所有定制的属性</p><p><code>pathOptions</code> <code class=\"data-type\">Array</code> - 输入域的<strong>options</strong>数组</p><p><code>pathOptionsMap</code> <code class=\"data-type\">Object</code> - options的映射，以<code>option.value</code>为键</p><h5>Underscore方法：</h5><p><code>pluck(property, default)</code> - 返回当前选择的<strong>option</strong>的<code>property</code> 值，或者<code>default</code>。用于跟options的定制属性合并时。</p><pre><code class=\"language-javascript\">MyList.add({ state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' });\n \nMyList.fields.state.values == 'draft,published,archived';\nMyList.fields.state.labels == { draft: 'Draft', published: 'Published', archived: 'Archived' };\nMyList.fields.state.ops == [\n    { value: 'draft', label: 'Draft' },\n    { value: 'published', label: 'Published' },\n    { value: 'archived', label: 'Archived' }\n];\nMyList.fields.state.map == {\n    draft: { value: 'draft', label: 'Draft' },\n    published: { value: 'published', label: 'Published' },\n    archived: { value: 'archived', label: 'Archived' }\n};\n \nvar item = new MyList.model();\nitem.state == 'draft';\nitem.stateLabel == 'Draft';\nitem.stateData == { value: 'draft', label: 'Draft' };\nitem.stateOptions == MyList.fields.state.ops;\nitem.stateOptionsMap == MyList.fields.state.map;</code></pre></div><a name=\"fieldtypes-markdown\"></a><h3><code>Markdown</code></h3><h4><code class=\"data-type\">Object</code> &mdash; 在管理界面中显示为一个文本框</h4><pre><code class=\"language-javascript\">{ type: Types.Markdown }</code></pre><div class=\"options\"><h5>参数</h5><p><code>height</code> <code class=\"data-type\">Number</code> - 定义 markdown 编辑器高度；默认高度为 <code class=\"default-value\">90</code>.</p><pre><code class=\"language-javascript\">{ type: Types.Markdown, height: 200 }</code></pre><p><code>toolbarOptions</code> <code class=\"data-type\">Object</code> - 可以定制工具栏。</p><p><code>toolbarOptions.hiddenButtons</code> <code class=\"data-type\">String</code> - 要隐藏的按钮清单，用逗号分隔。</p><pre><code class=\"language-javascript\">{ type: Types.Markdown, toolbarOptions: { hiddenButtons: 'H1,H6,Code' } }</code></pre><h5>模式</h5><p>当<code>md</code>属性发生变化时，markdown输入域会自动将markdown转换为html，这是通过<code>md</code>路径上的设定器完成的。</p><p><code>md</code> <code class=\"data-type\">String</code> - markdown源文本</p><p><code>html</code> <code class=\"data-type\">String</code> - 生成的html代码</p><pre><code class=\"language-javascript\">Page.add({ content: Types.Markdown });\n \nvar page = new Page.model();\npage.content.md = \"# Hello World\";\npage.content.html == \"&lt;h1&gt;Hello World&lt;/h1&gt;\";\n \n// 或者...\n \nPage.fields.content.updateItem(page, \"* list item\");\npage.fields.content.format(page) == \"&lt;ul&gt;&lt;li&gt;list item&lt;/ul&gt;&lt;/li&gt;\";</code></pre></div><a name=\"fieldtypes-name\"></a><h3><code>Name</code></h3><h4><code class=\"data-type\">Object</code> &mdash; 在管理界面中显示为<strong>firstname</strong> <strong>lastname</strong>输入控件</h4><pre><code class=\"language-javascript\">{ type: Types.Name }</code></pre><div class=\"options\"><h5>模式</h5><p>name域在模式上添加了<code>first</code>和<code>last</code> <code class=\"data-type\">String</code>路径，还有虚拟域<code>full</code>的getter和setter。</p><p><code>first</code> <code class=\"data-type\">String</code> - 姓氏</p><p><code>last</code> <code class=\"data-type\">String</code> - 名字</p><h5>虚拟域</h5><p><code>full</code> <code class=\"data-type\">String</code> - 姓和名，中间加空格合并(如果两个都有值)。</p><p><code>name.full</code> setter在第一个空格处分割输入值。</p></div><a name=\"fieldtypes-password\"></a><h3><code>Password</code></h3><h4><code class=\"data-type\">String</code> &mdash; 在管理界面中显示为一个密码域，带有一个'修改'按钮。</h4><p>密码是自动用bcrypt加密的，并且会输出一个方法用于把一个字符串跟加密的哈希值进行比较。</p><p class=\"note\">加密是添加在<strong>模式</strong>上的一个<strong>保存前钩子</strong>完成的，所以密码直到条目保存到数据库中时才会加密。</p><pre><code class=\"language-javascript\">{ type: Types.Password }</code></pre><div class=\"options\"><h5>参数</h5><p><code>workFactor</code> <code class=\"data-type\">Number</code> - 生成哈希值时用的加密因子，数值越大越慢，但也更安全(默认为<code class=\"default-value\">10</code>)</p><h5>Underscore方法：</h5><p><code>compare(candidate, callback)</code> - 对候选值加密，并跟已加密的哈希值进行比较</p><ul><li><code>candidate</code> 要比较的<code class=\"data-type\">String</code></li><li><code>callback(err, result)</code> - 如果候选值跟保存的密码相配，则<strong>result</strong>为<code class=\"default-value\">true</code>，否则为<code class=\"default-value\">false</code>。</li></ul><h5>特殊路径</h5><p><code>{path}_compare</code> - 提供给<strong>updateHandler</strong>时，它会对照<code>{path}</code>进行检查，如果不匹配则验证会失败。</p></div><a name=\"fieldtypes-location\"></a><h3><code>Location</code></h3><h4><code class=\"data-type\">Object</code> &mdash; 在管理界面中显示为一组输入控件的组合</h4><p>包含一组标准的字符串，用于存储地址，带有<code class=\"data-type\">2dsphere</code>索引的经纬度。</p><p>还用谷歌的Places API提供输入自动补充功能 (需要提供谷歌地图API键，并且只能用于相应的谷歌服务条款)。</p><p>参见<a href=\"/zh/docs/configuration#services-google\">谷歌配置文档</a>了解如何在KeystoneJS中设置谷歌地图的详细介绍。</p><pre><code class=\"language-javascript\">{ type: Types.Location }</code></pre><p class=\"note\">注意：模式的路径是基于澳大利亚的地址格式，并且应该更新为其它更加国际化的格式。如果你有如何进行国际化结构的反馈，请开一个工单。</p><div class=\"options\"><h5>模式</h5><p><code>name</code> <code class=\"data-type\">String</code> - 建筑的名称</p><p><code>number</code> <code class=\"data-type\">String</code> - 单位或店铺号</p><p><code>street1</code> <code class=\"data-type\">String</code> - 街道地址</p><p><code>street2</code> <code class=\"data-type\">String</code> - 街道地址第2行</p><p><code>suburb</code> <code class=\"data-type\">String</code></p><p><code>state</code> <code class=\"data-type\">String</code></p><p><code>postcode</code> <code class=\"data-type\">String</code></p><p><code>country</code> <code class=\"data-type\">String</code></p><p><code>geo</code> <code class=\"data-type\">Array</code> <code class=\"default-value\">longitude, latitude</code></p><p class=\"note\"><strong>重要提示</strong>: 按照MongoDB的传统，<strong>geo</strong>数组的顺序必须是<code class=\"default-value\">lng, lat</code>，跟谷歌API所用的顺序相反。</p><h5>Underscore方法：</h5><p><code>googleLookup(region, update, callback)</code> - 从存储的值中自动检测完整的地址和经纬度。</p><ul><li><code>region</code> 为了进行区域性偏移和过滤而传给Places API的<code class=\"data-type\">String</code>。</li><li><code>update</code> <code class=\"data-type\">String</code>传给<code class=\"default-value\">\"overwrite\"</code>会自动用结果覆盖已有数据。<code class=\"default-value\">true</code>会在这个域上用结果设定空白属性。</li><li><code>callback(err, location, result)</code> - 传给解析过的<strong>location</strong>对象，以及来自谷歌的原始<strong>result</strong>。</li></ul><p>内部状态码模仿谷歌API的状态码。参见<a href=\"https://developers.google.com/maps/documentation/geocoding/\" target=\"_blank\">https://developers.google.com/maps/documentation/geocoding/</a>了解详情。</p><p>使用谷歌Geocoding API要受到每天不超过2,500 geolocation请求的限制，除非有企业许可。</p><p>Geocoding API只能用于谷歌地图；geocoding结果必须在地图上显示。请确保你的Keystone程序遵守谷歌地图API的许可。</p></div><a name=\"fieldtypes-cloudinaryimage\"></a><h3><code>CloudinaryImage</code></h3><h4><code class=\"data-type\">Object</code> &mdash; 在管理界面中显示为一个图片上传控件。</h4><p>自动管理存在<a href=\"http://cloudinary.com\" target=\"_blank\">Cloudinary</a>中的图片，包括上传、缩放和删除。</p><p>参见<a href=\"/zh/docs/configuration#services-cloudinary\">Cloudinary配置文档</a>了解如何在KeystoneJS中设置Cloudinary的细节。</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage }</code></pre><div class=\"options\"><h5>参数</h5><p><code>publicID</code> <code class=\"data-type\">String</code> 用作Cloudinary图片 <code class=\"data-type\">public_id</code>域的名称。</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, publicID: 'slug' }</code></pre><p><code>folder</code> <code class=\"data-type\">String</code> 当<code class=\"default-value\">cloudinary folders</code>设为<code class=\"default-value\">true</code>时，用来为Cloudinary图片<code class=\"data-type\">public_id</code>指定文件夹/前缀</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, folder: 'path/to/image' }</code></pre><p class=\"note\">如果你希望 Cloudinary 在 <code>cloudinary folders</code> 设置为 <code class=\"default-value\">true</code>  的时候自动创建文件夹， 确认已经在你的 Cloudinary 账户中启用 \"Auto-create folders\"。</p><p><code>autoCleanup</code> <code class=\"data-type\">Boolean</code> 为<code class=\"default-value\">true</code>时，会将Keystone的默认行为从<code class=\"default-value\">remove</code> (只是从数据库中去掉Cloudinary 图片)变成<code class=\"default-value\">delete</code> (会同时从数据库和Cloudinary存储中去掉图片)。此外，这个参数还会在上传时替换掉已有图片(如果图片已存在的话)。</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, autoCleanup : true }</code></pre><p><code>select</code> <code class=\"data-type\">Boolean</code> 为<code class=\"default-value\">true</code> 时，会显示一个下拉列表域，其中是当前保存在Cloudinary存储中的图片。当指定<code>selectPrefix</code>时，只有ID以<code>selectPrefix</code>开头的图片才会显示。否则，显示ID以<code>folder</code>开头的图片。如果既没有配置<code>selectPrefix</code>，也没配置<code>folder</code>，则只显示ID以<code class=\"data-type\">[{prefix}]/{list.path}/{field.path}/</code>开头的图片。</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, select : true }</code></pre><p><code>selectPrefix</code> <code class=\"data-type\">String</code> 当<code>select</code>参数为<code class=\"default-value\">true</code>时指定可供选择的图片的前缀。</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImage, select: true, selectPrefix: 'path/to/images' }</code></pre><h5>模式</h5><p><code>public_id</code> <code class=\"data-type\">String</code></p><p><code>version</code> <code class=\"data-type\">Number</code></p><p><code>signature</code> <code class=\"data-type\">String</code></p><p><code>format</code> <code class=\"data-type\">String</code></p><p><code>resource_type</code> <code class=\"data-type\">String</code></p><p><code>url</code> <code class=\"data-type\">String</code></p><p><code>width</code> <code class=\"data-type\">Number</code></p><p><code>height</code> <code class=\"data-type\">Number</code></p><p><code>secure_url</code> <code class=\"data-type\">String</code></p><h5>虚拟域</h5><code>exists</code> <code class=\"data-type\">Boolean</code> - 是否保存有图片<h5>特殊路径</h5><p><code>{path}_upload</code> - 当给<strong>updateHandler</strong>提供了<code class=\"data-type\">file</code>时，它会被上传到cloudinary，并且详细信息会存在该域中。</p><h5>Underscore方法：</h5><p><code>src(options)</code> <code class=\"data-type\">String</code> - 返回图片的url，接受cloudinary支持的所有参数</p><p><code>tag(options)</code> <code class=\"data-type\">String</code> - 返回一个<code class=\"default-value\">&lt;img&gt;</code>标签</p><p><code>scale(width, height, options)</code> <code class=\"data-type\">String</code> - 将图片缩放到恰当的宽度和高度，比例保持不变。</p><p><code>fit(width, height, options)</code> <code class=\"data-type\">String</code> - 在指定的宽度和高度内缩放图片，比例保持不变。</p><p><code>lfit(width, height, options)</code> <code class=\"data-type\">String</code> - 缩放图片以适应指定的宽度和高度，比例保持不变(不超出原始维度)</p><p><code>limit(width, height, options)</code> <code class=\"data-type\">String</code> - 缩放图片(仅向下)以适应指定的宽度和高度，比例保持不变</p><p><code>fill(width, height, options)</code> <code class=\"data-type\">String</code> - 缩放图片以填充指定的宽度和高度</p><p><code>crop(width, height, options)</code> <code class=\"data-type\">String</code> - 裁剪图片以填充指定的宽度和高度</p><p><code>pad(width, height, options)</code> <code class=\"data-type\">String</code> - 补白图片以填充指定的宽度和高度</p><p><code>lpad(width, height, options)</code> <code class=\"data-type\">String</code> - 补白图片以填充指定的宽度和高度(不超出原始维度)</p><p><code>thumbnail(width, height, options)</code> <code class=\"data-type\">String</code> - 裁剪图片以填充指定的宽度和高度</p><p>所有方法中的<code class=\"default-value\">options</code>都是可选的<code class=\"data-type\">Object</code>。 参见<a href=\"http://cloudinary.com/documentation/image_transformations\" target=\"_blank\">Cloudinary的转换文档</a>了解所支持的参数和转换。 </p></div><p class=\"note\">记住，如果用HTML表单上传图片到<code>CloudinaryImage</code>域，需要在<code>form</code>标签中指定<code>enctype=\"multipart/form-data\"</code>。</p><a name=\"fieldtypes-cloudinaryimages\"></a><h3><code>CloudinaryImages</code></h3><h4><code class=\"data-type\">Array</code> &mdash; 在管理界面中显示为一系列图片，以及一个上传控件。</h4><p>将数组中的多个图片存为嵌套的<code class=\"data-type\">Schema</code>，每个都会输出跟<code class=\"data-type\">cloudinaryimage</code>域一样的方法。</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImages }</code></pre><div class=\"options\"><h5>参数</h5><p><code>folder</code> <code class=\"data-type\">String</code> 当<code class=\"default-value\">cloudinary folders</code>设为<code class=\"default-value\">true</code>时，用来为Cloudinary图片<code class=\"data-type\">public_id</code>指定文件夹/前缀。</p><pre><code class=\"language-javascript\">{ type: Types.CloudinaryImages, folder: 'path/to/image' }</code></pre><p class=\"note\">如果你希望 Cloudinary 在 <code>cloudinary folders</code> 设置为 <code class=\"default-value\">true</code>  的时候自动创建文件夹， 确认已经在你的 Cloudinary 账户中启用 \"Auto-create folders\"。</p></div><a name=\"fieldtypes-localfile\"></a><h3><code>LocalFile</code></h3><div class=\"alert alert-warning\">这个域类型跟Heroku之类的PAAS Hosts不兼容，因为它要依赖本地文件系统。</div><h4><code class=\"data-type\">Object</code> &mdash; 在管理界面中显示为一个文件上传控件。 </h4><p>在本地文件系统中存放文件。</p><pre><code class=\"language-javascript\">{ type: Types.LocalFile }</code></pre><div class=\"options\"><h5>参数</h5><p><code>dest</code> <code class=\"data-type\">String</code> - 必填项，存放上传文件的路径。</p><p><code>prefix</code> <code class=\"data-type\">String</code> - 浏览器中的路径前缀，如果跟<code>dest</code>不同的话</p><p><code>datePrefix</code> <code class=\"data-type\">String</code> - 如果设了，以这种格式的当前日期作为文件名的前缀(参见 <a href=\"http://momentjs.com\" target=\"_blank\">moment.js</a>了解格式参数)</p><p><code>allowedTypes</code> 包含<code class=\"data-type\">String</code>的<code class=\"data-type\">Array</code>  - 可以上传的文件mime类型白名单</p><p><code>filename</code> <code class=\"data-type\">Function</code> - 以当前模型和客户端文件名为参数的函数，返回要上传文件的新文件名。</p><p><code>format</code> <code class=\"data-type\">Function</code> - 带两个参数的函数：当前模型和文件对象，返回这个文件在管理界面中的表示。<pre><code class=\"language-javascript\">{\n\ttype: Types.LocalFile,\n\tdest: '/data/files',\n\tprefix: '/files/',\n\tformat: function(item, file){\n\t\treturn '&lt;img src=\"/files/'+file.filename+'\" style=\"max-width: 300px\"&gt;'\n\t}\n}\n</code></pre></p><h5>模式</h5><p><code>filename</code> <code class=\"data-type\">String</code></p><p><code>path</code> <code class=\"data-type\">String</code></p><p><code>size</code> <code class=\"data-type\">Number</code></p><p><code>filetype</code> <code class=\"data-type\">String</code></p><h5>虚拟域</h5><code>exists</code> <code class=\"data-type\">Boolean</code> - 是否保存了这样一个文件<h5>Underscore方法：</h5><p><code>uploadFile(file, update, callback)</code> - 将文件上传到本地存储，在该域中保存文件细节信息，并将文件数据提供给回调函数。</p><ul><li><code>file</code> <code class=\"data-type\">File</code> 文件上传时应该是由express提供的文件，即<code class=\"default-value\">req.files.path</code></li><li><code>update</code> <code class=\"data-type\">Boolean</code> 文件上传完后是否用文件的细节信息更新该域。</li><li><code>callback(err, fileData)</code> - 传递将会存储在该域中的对象(见上面的模式)</li></ul></div><a name=\"fieldtypes-s3file\"></a><h3><code>S3 File</code></h3><h4><code class=\"data-type\">Object</code> &mdash; 在管理界面中显示为一个文件上传控件。</h4><p> 自动管理存在<a href=\"http://aws.amazon.com/s3\" target=\"_blank\">亚马逊S3</a>上的文件，包括上传和删除。</p><pre><code class=\"language-javascript\">{ type: Types.S3File }</code></pre><div class=\"options\"><h5>参数</h5><p><code>s3path</code> <code class=\"data-type\">String</code> - 在S3的桶中存放上传文件的路径。</p><p><code>datePrefix</code> <code class=\"data-type\">String</code> - 如果设了，以这种格式的当前日期作为文件名的前缀(参见 <a href=\"http://momentjs.com\" target=\"_blank\">moment.js</a>了解格式参数)</p><p><code>allowedTypes</code> 包含<code class=\"data-type\">String</code>的<code class=\"data-type\">Array</code>  - 可以上传的文件mime类型白名单</p><p><code>filename</code> <code class=\"data-type\">Function</code> - 以当前模型和客户端文件名为参数的函数，返回要上传文件的新文件名。<pre><code class=\"language-javascript\">{\n\ttype: Types.S3File,\n\tfilename: function(item, filename){\n\t\t// 用object id作为文件名的前缀\n\t\treturn item._id + '-' + filename;\n\t}\n}</code></pre></p><p><code>headers</code> <code class=\"data-type\">Object</code>，<code class=\"data-type\">Array</code> 或者 <code class=\"data-type\">Function</code> - 设置 S3 对象请求头</p><p>请求头可以提供 <code class=\"data-type\">Object</code> 类型， 键值对的键被用来定义请求头名称，值用来设置请求头的值。<pre><code class=\"language-javascript\">{\n\ttype: Types.S3File, \n\t\theaders: {\n\t\t'x-amz-meta-Cache-Control' : 'max-age=' + (60 * 15),\n\t\t'x-amz-meta-X-Custom-Header' : 'Object Option'\n\t} \n}</code></pre></p><p>当用 <code class=\"data-type\">Array</code> 设置请求头， 数组内的每一个请求头元素应该是一个 <code class=\"data-type\">Object</code> 类型包含 <code>name</code>和 <code>value</code> <code class=\"data-type\">String</code> 属性。<pre><code class=\"language-javascript\">{ \n\ttype: Types.S3File, \n\t\theaders: [\n\t\t{ name: 'x-amz-meta-Cache-Control', value: 'max-age=' + (60 * 15) },\n\t\t{ name: 'x-amz-meta-X-Custom-Header', value: 'Array Option' }\n\t]\n}</code></pre></p><p>当用 <code class=\"data-type\">Function</code> 设置请求头，以当前模型和客户端文件名为参数的函数；该函数返回一个有效的请求头对象或者一个简单 <code class=\"data-type\">Object</code> 类型对象。<pre><code class=\"language-javascript\">{ \n\ttype: Types.S3File, \n\t\theaders: function (item, file){\n\t\tvar headers = [];\n\t\theaders.push({ name: 'x-amz-meta-Cache-Control', value: 'max-age=' + item.maxAge });\n\t\theaders.push({ name: 'x-amz-meta-X-Custom-Header', value: 'Computed Option (Array)' });\n\t\treturn headers;\n\t}\n}\n// 或 \n{\n\ttype: Types.S3File,\n\t\theaders: function (item, file){\n\t\tvar headers = {};\n\t\theaders['x-amz-meta-Cache-Control'] = 'max-age=' + item.maxAge;\n\t\theaders['x-amz-meta-X-Custom-Header'] = 'Computed Option (Object)';\n\t\treturn headers;\n\t}\n}\t</code></pre></p><p><code>format</code> <code class=\"data-type\">Function</code> - 以当前模型和客户端文件名为参数的函数，返回要上传文件的新文件名。<pre><code class=\"language-javascript\">{\n\ttype: Types.S3File,\n\tformat: function(item, file){\n\t\treturn '&lt;pre&gt;'+JSON.stringify(file, false, 2)+'&lt;/pre&gt;'+\n\t\t\t\t\t'&lt;img src=\"'+file.url+'\" style=\"max-width: 300px\"&gt;'\n\t}\n}\n</code></pre></p><h5>模式</h5><p><code>filename</code> <code class=\"data-type\">String</code></p><p><code>type</code> <code class=\"data-type\">String</code></p><p><code>filesize</code> <code class=\"data-type\">Number</code></p><p><code>url</code> <code class=\"data-type\">String</code></p><h5>虚拟域</h5><code>exists</code> <code class=\"data-type\">Boolean</code> - 是否保存了这样一个文件<h5>特殊路径</h5><p><code>{path}_upload</code> - 当提供给<strong>updateHandler</strong>一个<code class=\"data-type\">file</code>时，这个文件将会被上传到s3上，并且其细节信息会保存在该域中。</p><h5>Underscore方法：</h5><p><code>uploadFile(file, update, callback)</code> - 将文件上传到s3的桶中，在该域中保存文件细节信息，并将文件数据提供给回调函数。</p><ul><li><code>file</code> <code class=\"data-type\">File</code> 文件上传时应该是由express提供的文件，即<code class=\"default-value\">req.files.path</code></li><li><code>update</code> <code class=\"data-type\">Boolean</code> 文件上传完后是否用文件的细节信息更新该域。</li><li><code>callback(err, fileData)</code> - 传递将会存储在该域中的对象(见上面的模式)</li></ul></div><a name=\"fieldtypes-azurefile\"></a><h3><code>AzureFile</code></h3><h4><code class=\"data-type\">Object</code> &mdash; 在管理界面中显示为一个文件上传控件。</h4><p>自动管理存在<a href=\"http://www.windowsazure.com/\" target=\"_blank\">Windows Azure Storage</a>中的文件，包括上传和删除。</p><pre><code class=\"language-javascript\">{ type: Types.AzureFile }</code></pre><div class=\"options\"><h5>参数</h5><p><code>filenameFormatter</code> <code class=\"data-type\">Callback</code> - 以当前模型和客户端文件名为参数的函数，返回要上传文件的新文件名。</p><pre><code class=\"language-javascript\">{ type: Types.AzureFile, filenameFormatter: function(item, filename) {\n\treturn item._id + require('path').extname(filename);\n} }</code></pre><p><code>containerFormatter</code> <code class=\"data-type\">Callback</code> - 以当前模型和客户端文件名为参数的函数，返回新的容器名(容器是Azure存储账号中的根文件夹)。</p><pre><code class=\"language-javascript\">{ type: Types.AzureFile, containerFormatter: containerFormatter: function(item, filename) {\n\treturn item.modelProperty;\n} }</code></pre><h5>模式</h5><p><code>filename</code> <code class=\"data-type\">String</code></p><p><code>type</code> <code class=\"data-type\">String</code></p><p><code>filesize</code> <code class=\"data-type\">Number</code></p><p><code>url</code> <code class=\"data-type\">String</code></p><p><code>etag</code> <code class=\"data-type\">String</code></p><h5>虚拟域</h5><code>exists</code> <code class=\"data-type\">Boolean</code> - 是否保存了这样一个文件<h5>Underscore方法：</h5><p><code>uploadFile(file, update, callback)</code> - 将文件上传到Azure存储账号，在该域中保存文件细节信息，并将文件数据提供给回调函数。</p><ul><li><code>file</code> <code class=\"data-type\">File</code> 文件上传时应该是由express提供的文件，即<code class=\"default-value\">req.files.path</code></li><li><code>update</code> <code class=\"data-type\">Boolean</code> 文件上传完后是否用文件的细节信息更新该域。</li><li><code>callback(err, fileData)</code> - 传递将会存储在该域中的对象(见上面的模式)</li></ul></div><a name=\"fieldtypes-embedly\"></a><h3><code>Embedly</code></h3><h4><code class=\"data-type\">Object</code> &mdash; 在管理界面中显示为只读数据。</h4><p>自动从<a href=\"http://embed.ly\" target=\"_blank\">Embedly</a> API获取跟另一个域的值相关的信息(由<code>from</code> 参数指定)。</p><p>它存储获取的数据(包括提供者、媒体类型、完整的URL、HTML嵌入代码、宽度、高度、缩略图及更多信息)。</p><p>获取数据的api调用是作为保存前置钩子实现的，并且只在<strong>from路径</strong>的值发生变化时才会触发。</p><p>参见<a href=\"/zh/docs/configuration#services-embedly\">Embed.ly配置文档</a>了解如何在KeystoneJS中设置Embed.ly的详细介绍。 </p><pre><code class=\"language-javascript\">{ type: Types.Embedly, from: 'path' }</code></pre><div class=\"options\"><h5>参数</h5><p><code>from</code> <code class=\"data-type\">String</code> - 模式中传给Embedly API的另一个域的路径。另一个域中必须包含一个<code class=\"data-type\">String</code>值。</p><p><code>options</code> <code class=\"data-type\">Object</code> (optional) - 跟<code>from</code>域的值一起作为参数传给embedly API。</p><p>参见<a href=\"http://embed.ly/docs/embed/api/endpoints/1/oembed\" target=\"_blank\">Embedly的oEmbed API 文档</a>了解参数及返回数据的更多信息。</p><h5>模式</h5><p><code>exists</code> <code class=\"data-type\">Boolean</code></p><p><code>type</code> <code class=\"data-type\">String</code></p><p><code>title</code> <code class=\"data-type\">String</code></p><p><code>url</code> <code class=\"data-type\">String</code></p><p><code>width</code> <code class=\"data-type\">Number</code></p><p><code>height</code> <code class=\"data-type\">Number</code></p><p><code>version</code> <code class=\"data-type\">String</code></p><p><code>description</code> <code class=\"data-type\">String</code></p><p><code>html</code> <code class=\"data-type\">String</code></p><p><code>authorName</code> <code class=\"data-type\">String</code></p><p><code>authorUrl</code> <code class=\"data-type\">String</code></p><p><code>providerName</code> <code class=\"data-type\">String</code></p><p><code>providerUrl</code> <code class=\"data-type\">String</code></p><p><code>thumbnailUrl</code> <code class=\"data-type\">String</code></p><p><code>thumbnailWidth</code> <code class=\"data-type\">Number</code></p><p><code>thumbnailHeight</code> <code class=\"data-type\">Number</code></p></div><h2>更多范例</h2><p>参见项目的<a href=\"/zh/examples\">范例</a>页面，了解各种列表参数和域类型的真实用法。</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"zh/pages/docs/getting-started": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/zh/docs\" class=\"nav-heading\">欢迎</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
if ( docssection.value != 'introduction')
{
buf.push("<hr/><ul class=\"sidebar-nav\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>入门指南</h1><p class=\"lead\">这个指南会逐步指导你如何构建KeystoneJS网站。<a href=\"/zh/getting-started\">这里还有个生成器。</a></p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"introduction\"></a>简介</h2><div class=\"alert alert-warning\">这个指南目前正在更新中，以体现新的Yeoman生成器。</div><p>KeystoneJS使得在node.js中搭建数据库驱动的网站、应用程序和API变得容易了。</p><p>KeystoneJS在底层使用了<a href=\"http://expressjs.com\" target=\"_blank\">express.js</a> web服务器框架，并通过对象建模框架<a href=\"mongoosejs.com\" target=\"_blank\">mongoose</a>使用<a href=\"http://mongodb.com\" target=\"_blank\">MongoDB</a>数据库。</p><div class=\"contextual-note\"><h4>简单 vs. 灵活</h4><p>设计Keystone的目的是要把复杂的事情变简单，不会限制node.js或以其为基础的框架的能量或灵活性。</p><p>这个指南会告诉你如何用默认的项目结构及选项搭建一个KeystoneJS网站。 </p><p>要想深入了解底层的运行机制，以及如何扩展或替换某些功能，我们强烈建议你读一读<a href=\"https://github.com/keystonejs/keystone\" target=\"_blank\">源码</a>。</p></div><a name=\"introduction-prerequisites\"></a><h3>前提条件</h3><ol class=\"fancy-list\"><li>开始之前，先确保你装了<a href=\"http://nodejs.org/download\" target=\"_blank\">Node.js</a>和<a href=\"http://www.mongodb.org/downloads\" target=\"_blank\">MongoDB</a>。</li><li>要使用KeystoneJS，你需要掌握合理的Javascript知识，并熟悉数据库概念之类的基础知识，会用 node / npm 等。</li><li>这个指南中还会用<a href=\"http://jade-lang.com\" target=\"_blank\">Jade</a>作为视图模板，<a href=\"http://lesscss.org\" target=\"_blank\">LESS</a>作CSS模板。你可以在自己的项目中使用任何模板语言；参阅<a href=\"#templates_other\">使用其它模板语言</a> (下面)了解详情。</li></ol><a name=\"introduction-productionvsdevelopment\"></a><h3>生产 vs. 开发</h3><p>Keystone在生产和开发模式下会使用不同的设定。默认环境为<code>development</code>，为了提升性能，你应该在生产服务器上将环境变量<code>NODE_ENV</code>设为<code>production</code>。</p><p>调用<code>keystone.get('env')</code>可以检测出程序运行在哪种环境下。</p><a name=\"gettingstarted\"></a><h2>入门</h2><a name=\"gettingstarted-usingyeoman\"></a><h3>使用Yeoman生成器</h3><p>开始KeystoneJS之旅最容易的方式是使用我们新的Yeoman生成器。</p><p>我们仍在更新这个入门指南，以体现这个生成器的用法；现在请到<a href=\"https://github.com/keystonejs/generator-keystone\" target=\"_blank\">KeystoneJS Yeoman生成器</a>页面遵照那里的指示行事。</p><p>运行<code>yo keystone</code>会做好下面所讲的全部工作，所以你一旦得到自己的新项目，请继续读下去以便了解它做了什么。</p><a name=\"gettingstarted-startinganewproject\"></a><h3>开始一个新项目</h3><p>给你的项目创建一个新目录，然后添加下面两个文件，它们要负责项目的设置和启动你的web服务器。</p><div class=\"code-header\"><h4>package.json</h4><p>这是给npm的项目描述文件，包括它基于<code>keystone</code>这个事实。</p></div><pre><code class=\"language-javascript\">{\n  \"name\": \"my-project\",\n  \"version\": \"0.0.1\",\n  \"private\": true,\n  \"dependencies\": {\n    \"keystone\": \"latest\",\n    \"underscore\": \"latest\"\n  },\n  \"engines\": {\n    \"node\": \"0.10.x\",\n    \"npm\": \"1.3.x\"\n  },\n  \"scripts\": {\n    \"start\": \"web.js\"\n  }\n}</code></pre><p class=\"note\">注意，我们还引入了<a href=\"http://underscorejs.org\">underscore库</a>，因为稍后会用到它的一些功能。你可以将<a href=\"https://npmjs.org\">npm</a>中的任何包添加到<code>package.json</code>中使用它们。</p><div class=\"code-header\"><h4>web.js</h4><p>这是运行我们的keystone网站的脚本。</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone');\nkeystone.init({\n  \n  'name': 'My Project',\n  \n  'favicon': 'public/favicon.ico',\n  'less': 'public',\n  'static': ['public'],\n  \n  'views': 'templates/views',\n  'view engine': 'jade',\n  \n  'auto update': true,\n  'mongo': 'mongodb://localhost/my-project',\n  \n  'session': true,\n  'auth': true,\n  'user model': 'User',\n  'cookie secret': '(your secret here)'\n  \n});\n \nrequire('./models');\n \nkeystone.set('routes', require('./routes'));\n \nkeystone.start();</code></pre><p>现在在你的控制台中进入项目根目录（package.json所在的位置），运行<code>npm install</code>来安装Keystone。</p><p class=\"note\">要了解Keystone支持的更多选项，请参见<a href=\"/zh/docs/configuration\">配置指南</a>。</p><p class=\"note\">注意：你的web脚本还不能运行，因为其中包含的模型和路由都还没做好。它假定你会遵照这个指南中的指示。</p><div class=\"contextual-note\"><h4>自带Express和Mongoose</h4><p>如果你想在项目中引入Express或Mongoose，不用完全由Keystone提供和配置的，也可以。</p><p>把它们放在项目的dependencies列表中，然后分别用 <code>app</code> 和 <code>mongoose</code> 参数提供给Keystone。</p><pre>var express = require('express'),\n    mongoose = require('mongoose'),\n    app = express(),\n    keystone = require('keystone');\n    \n    keystone.set('app', app);\n    keystone.set('mongoose', mongoose);</pre></div><p class=\"note\">之前用来设置自带Express和Mongoose的 <code>keystone.connect()</code> 方法，现已过期并且会在未来的Keystone版本中移除。由于升级至Express 4，`keystone.connect()` 不再如预期般工作。 请使用Keystone中的 <code>app</code> 和 <code>mongoose</code> 参数来替代。</p><a name=\"gettingstarted-projectstructure\"></a><h3>项目结构</h3><p>在包和web脚本到位后，可以开始架构程序剩余部分的容器。创建下面这个目录结构：</p><pre>|--lib\n|  <span>定制的库和代码</span>\n|--models\n|  <span>程序的数据库模型</span>\n|--public\n|  <span>公开的静态文件 (css、js、images等)</span>\n|--routes\n|  |--api\n|  |  <span>程序的api控制器</span>\n|  |--views\n|  |  <span>程序的视图控制器</span>\n|  |--index.js\n|  |  <span>初始化程序的路由和视图</span>\n|  |--middleware.js\n|  |  <span>为路由定制的中间件</span>\n|--templates\n|  |--includes\n|  |  <span>通用的 .jade 组件放这里</span>\n|  |--layouts\n|  |  <span>基础 .jade 布局放这里</span>\n|  |--mixins\n|  |  <span>通用的 .jade mixins放这里</span>\n|  |--views\n|  |  <span>程序的视图模板</span>\n|--updates\n|  <span>数据组装和迁移脚本</span>\n|--package.json\n|  <span>给npm的项目配置</span>\n|--web.js\n|  <span>启动程序的主脚本</span></pre><p>我们建议尽可能地将<code>routes/views</code>和<code>templates/views</code>目录的内部结构做镜像式的对应，这样程序的搭建和维护会更简单。</p><div class=\"contextual-note\"><h4>结构</h4><p>该指南假定你会遵守上面的建议，然而Keystone实际上对结构没有任何强制性的要求，所以你可以随意修改，使其更加适合你的项目。</p></div><a name=\"models\"></a><h2>模型</h2><p>在可以启动Keystone程序之前，你需要一些数据模型。</p><p>我们准备从<code>User</code>模型开始，它很特别 - 有了它Keystone才能做认证和会话管理。</p><p>在<code>/models</code>文件夹下创建下面这两个文件：</p><div class=\"code-header\"><h4>models/index.js</h4><p>在这个脚本里包含你的模型。它不需要输出任何东西。</p></div><pre><code class=\"language-javascript\">require('./users.js');</code></pre><div class=\"code-header\"><h4>models/users.js</h4><p>这个脚本初始化<code>User</code>模型。它不需要输出任何东西，但模型<em>必须</em>用Keystone注册。</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    Types = keystone.Field.Types;\n \nvar User = new keystone.List('User');\n \nUser.add({\n    name: { type: Types.Name, required: true, index: true },\n    email: { type: Types.Email, initial: true, required: true, index: true },\n    password: { type: Types.Password, initial: true },\n    canAccessKeystone: { type: Boolean, initial: true }\n});\n \nUser.register();</code></pre><a name=\"models-authentication\"></a><h3>认证和会话管理</h3><p>要让Keystone为程序提供认证和会话管理，它需要知道几件事情（我们现在要配置的）</p><p>概括一下：</p><ul class=\"list\"><li>参数<code>user model</code>必须是Keystone在其中查找用户的模型名称。如果你的模型用了其它名称，一定确保正确设定这个参数。</li><li>如果你的程序要支持会话管理，将参数<code>session</code>设为<strong>true</strong>。加载会话会有点小开销，所以如果你的程序不需要会话，可以把这个关了。</li><li>Keystone有内置的登录和退出视图。可以将参数<code>auth</code>设为<strong>true</strong>启用它们。你也可以在程序视图中定制登录和退出界面。</li><li>会话是用存有用户ID的加密cookie持久化的。一定要将参数<code>cookie secret</code>设成一个长长的随机字符串。</li><li>用户模型必须有个<code>canAccessKeystone</code>属性（可以是虚拟方法或存储的boolean型域）指出用户是否可以访问Keystone的管理界面。</li></ul><h4>再谈数据模型</h4><p>要学习如何设置程序的模型，以及列表和域的完整文档，请参见<a href=\"/zh/docs/database\">数据库指南</a>。</p><a name=\"routesviews\"></a><h2>路由 &amp; 视图</h2><p>一般来说，在配置程序中的不同路由（或视图）时，应该把所有绑定放在一个文件中，然后通用逻辑（或中间件）放在另一个文件中，这是最容易也是最清爽的方式。</p><p>然后，给每个路由绑定的控制器在各自的文件中，跟组织渲染视图的模板的方式类似。</p><p>Keystone的<code>importer</code>和Express中间件的支持使得这很容易设置。</p><a name=\"routesviews-settingup\"></a><h3>设置路由和中间件</h3><h4>index路由控制器</h4><p>首先创建一个<code>routes/index.js</code>文件。我们在这里将程序的URL模式绑定到控制器上，从而在收到请求后让控制器加载和处理数据，并渲染相应的模板。</p><div class=\"code-header\"><h4>routes/index.js</h4><p>这段脚本引入路由控制器，并将它们绑定到URL上。</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    middleware = require('./middleware'),\n    importRoutes = keystone.importer(__dirname);\n \n// 常用中间件\nkeystone.pre('routes', middleware.initErrorHandlers);\nkeystone.pre('routes', middleware.initLocals);\nkeystone.pre('render', middleware.flashMessages);\n \n// 处理404错误\nkeystone.set('404', function(req, res, next) {\n    res.notfound();\n});\n \n// 处理其它错误\nkeystone.set('500', function(err, req, res, next) {\n    var title, message;\n    if (err instanceof Error) {\n        message = err.message;\n        err = err.stack;\n    }\n    res.err(err, title, message);\n});\n \n// 加载路由\nvar routes = {\n    views: importRoutes('./views')\n};\n \n// 绑定路由\nexports = module.exports = function(app) {\n    \n    app.get('/', routes.views.index);\n    \n}</code></pre><h4>逐步解释index路由控制器</h4><ul><li>加载<code>keystone</code>、<code>middleware.js</code> 文件 (见下方)，并为当前目录创建一个<code>importer</code></li><li>绑定中间件 (见下方) <ul><li>初始化基本的错误处理器</li><li>为视图模板初始化通用的local变量</li><li>在视图目标渲染之前从会话中获取提示消息</li></ul></li><li>告诉Keystone如何处理<code>404</code>和<code>500</code>错误</li><li>用importer加载<code>/routes/views</code>目录中的所有路由控制器</li><li>输出一个方法，将index路由控制器绑定到根url‘<code>/</code>’的<code>GET</code>请求上<ul><li>这个方法中的参数<code>app</code>就是express的app，所以在express中绑定路由能做的事情，在这里都可以做。</li></ul></li></ul><p>应该在根控制器下面用<code>app.get</code>、<code>app.post</code> 或 <code>app.all</code> 将其它路由控制器添加到程序中。</p><a name=\"routesviews-middleware\"></a><h3>通用路由中间件</h3><p>把你的通用路由中间件放在单独的<code>routes/middleware.js</code>文件中，以保持路由index的干净整洁。 如果中间件文件太大，最好把所有重大功能重构到定制的模块中，放在项目的<code>/lib</code>文件夹下。</p><p>现在我们要添加基本的中间件，在程序启动后运行默认的行为：</p><div class=\"code-header\"><h4>routes/middleware.js</h4><p>这个脚本应该包含程序路由的通用中间件</p></div><pre><code class=\"language-javascript\">var _ = require('underscore'),\n    keystone = require('keystone');\n \n/**\n    初始化标准的视图locals。\n    包含应该在路由控制器执行之前初始化的所有东西。\n*/\nexports.initLocals = function(req, res, next) {\n    \n    var locals = res.locals;\n    \n    locals.user = req.user;\n    \n    // 在这里添加你自己的local变量\n    \n    next();\n    \n};\n \n/**\n    初始化错误处理函数到`res`中\n*/\nexports.initErrorHandlers = function(req, res, next) {\n    \n    res.err = function(err, title, message) {\n        res.status(500).render('errors/500', {\n            err: err,\n            errorTitle: title,\n            errorMsg: message\n        });\n    }\n    \n    res.notfound = function(title, message) {\n        res.status(404).render('errors/404', {\n            errorTitle: title,\n            errorMsg: message\n        });\n    }\n    \n    next();\n    \n};\n \n/**\n    在视图渲染之前获取并清理flashMessages\n*/\nexports.flashMessages = function(req, res, next) {\n    \n    var flashMessages = {\n        info: req.flash('info'),\n        success: req.flash('success'),\n        warning: req.flash('warning'),\n        error: req.flash('error')\n    };\n    \n    res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length }) ? flashMessages : false;\n    \n    next();\n    \n};</code></pre><h4>中间件函数</h4><p>Keystone希望中间件函数接受下面这些参数：</p><ul class=\"options\"><li><code>req</code> - express请求对象</li><li><code>res</code> - express响应对象</li><li><code>next</code> - 中间件结束运行时调用的方法 (包括任何内部回调)</li></ul><h4>支持提示消息（Flash Messages） (不, 不是那个flash)</h4><p>Keystone通过会话支持给访问者的'flashing'消息。上面的默认设置支持4种消息，全都可以做成不同的样式：</p><ul class=\"options\"><li><code>info</code></li><li><code>success</code></li><li><code>warning</code></li><li><code>error</code></li></ul><p>你可以通过更新中间件和渲染它们的.jade模板轻松支持其它类型的消息。(下面会讲到)。</p><p>要在路由控制器中使用提示消息，可以这样做：</p><p><code>req.flash('info', 'Some information!');</code></p><p>消息使用会话，所以在转发后它们也能留存下来，并且只会显示给用户一次，特别适合用来做状态消息 (比如 \"您的修改已经保存\") 或表单校验 (比如 \"请输入有效的email地址\")。</p><p>一些Keystone功能(比如更新处理器)可以自动生成提示消息， 并期望有上面的那些类别。</p><a name=\"routesviews-firstview\"></a><h3>你的第一个视图</h3><p>现在我们准备设置你的第一个路由控制器 (给index页面)，以及它要渲染的模板。</p><p>importer (上面那个) 期望你提供给它的目录中包含的 <code>.js</code> 或 <code>.coffee</code> 文件输出的单个方法接受下面这些参数：</p><ul class=\"options\"><li><code>req</code> - express请求对象</li><li><code>res</code> - express响应对象</li></ul><p>我们的第一个视图控制器非常简单 - 只是渲染一个模板。创建像下面这样的<code>routes/views/index.js</code>文件：</p><div class=\"code-header\"><h4>routes/views/index.js</h4><p>home页面视图的路由控制器</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone');\n \nexports = module.exports = function(req, res) {\n    \n    var view = new keystone.View(req, res);\n    \n    view.render('index');\n    \n}</code></pre><a name=\"routesviews-templates\"></a><h3>模板</h3><p>现在做路由要渲染的模板。<code>render</code>方法会在<code>web.js</code>中指定的<code>views</code>目录下找寻模板，我们将其设为了<code>/templates/views</code>。</p><p>在这个指南中，我们准备用<strong>Jade</strong> 作为模板引擎。要了解Jade，请访问<a href=\"http://jade-lang.com\" target=\"_blank\">jade-lang.org</a>，或者检出优秀的<a href=\"http://naltatis.github.io/jade-syntax-docs/\" target=\"_blank\">活的语法文档</a>通过例子学习。</p><p>先来创建<code>templates/views/index.jade</code>：</p><div class=\"code-header\"><h4>templates/views/index.jade</h4><p>home页面视图的模板</p></div><pre>extends ../layouts/base\n \nblock content\n    h1 Hello World</pre><p>Jade有些很棒的功能可以简化模板 - 包括用布局定义区域。我们准备用一个<code>../common/templates/layout/base.jade</code>布局，在上面那个文件中的第一行里：</p><div class=\"code-header\"><h4>templates/layouts/base.jade</h4><p>视图模板的基本布局</p></div><pre><code>include ../mixins/flash-messages\n \ndoctype html\nhtml\n    head\n        meta(charset=\"utf-8\")\n        meta(name=\"viewport\", content=\"initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width\")\n        \n        title= title || 'My Keystone Website'\n        link(rel=\"shortcut icon\", href=\"/favicon.ico\", type=\"image/x-icon\")\n        link(href=\"/styles/site.min.css\", rel=\"stylesheet\")\n        \n        block css\n        block head\n    body\n        \n        #header My Keystone Website\n        \n        #body\n            \n            block intro\n            \n            +flash-messages(messages)\n            \n            block content\n        \n        #footer Powered by &lt;a href='http://keystonejs.com', target='_blank'&gt;KeystoneJS&lt;/a&gt;.\n    \n    script(src='/js/lib/jquery/jquery-1.10.2.min.js')\n    \n    block js</code></pre><p>我们还要创建一个包含mixin <code>flash-messages</code>的模板<code>templates/mixins/flash-messages.jade</code>。在布局或视图模板中包含mixins可以保持布局和视图文件的整洁，并且mixin可以在多个视图中重用。</p><div class=\"code-header\"><h4>templates/mixins/flash-messages.jade</h4><p>我们的flash-messages mixin</p></div><pre><code>mixin flash-messages(messages)\n    if messages\n        #flash-messages.container\n            each message in messages.info\n                +flash-message(message, 'info')\n            each message in messages.success\n                +flash-message(message, 'success')\n            each message in messages.warning\n                +flash-message(message, 'warning')\n            each message in messages.error\n                +flash-message(message, 'danger')\n                \nmixin flash-message(message, type)\n    div(class='alert alert-' + type)\n        if utils.isObject(message)\n            if message.title\n                h4= message.title\n            if message.detail\n                p= message.detail\n            if message.list\n                ul\n                    each item in message.list\n                        li= item\n        else\n            = message</code></pre><a name=\"templates_other\"></a><div class=\"contextual-note\"><h4>使用其它模板语言</h4><p>KeystoneJS支持<a href='http://expressjs.com/api.html#app.engine', target='_blank'>express支持的所有模板语言</a>。</p><p>用参数<code>view engine</code>指明你要用的模板语言(默认为 <code class=\"data-type\">jade</code>)。</p><p>如果你想用定制的模板引擎，也要设定<code>custom engine</code> 参数。比如说，express是支持<a href=\"http://embeddedjs.com/\">ejs</a>的， 但你可能想用<a href=\"https://github.com/RandomEtc/ejs-locals\">ejs.locals</a> 作为模板引擎，以利用其扩展的功能。</p><pre><code class=\"language-javascript\">// 修改 web.js 使用定制的模板引擎ejs-locals。\nvar keystone = require('keystone');\nvar engine   = require('ejs-locals');\nkeystone.init({\n  ...\n  'custom engine': engine,\n  'view engine': 'ejs',\n  ...\n});</code></pre></div><a name=\"routesviews-publicassets\"></a><h3>公共资产</h3><p>你想添加自己的css、javascript、图片和其它文件到项目中。在上面的例子中，我们引入了<code>/styles/site.min.css</code>和<code>/js/lib/jquery-1.10.2.min.js</code>。</p><p>Keystone可以对外提供所有放在<code>public</code>目录下的静态资源。这个路径是在<code>web.js</code>中由<code>static</code>参数指定的。</p><p>如果在<code>public</code>文件夹下有<code>.less</code>文件，它还会自动生成相应的<code>.css</code>或缩小化的<code>.min.css</code>文件， 这个在<code>web.js</code>中由<code>less</code>参数指定。要深入了解LESS，请参见<a href=\"http://lesscss.org\" target=\"_blank\">lesscss.org</a>。</p><a name=\"runningyourapp\"></a><h2>运行程序</h2><p>现在(几乎)已经准备好运行你的程序了！然而在运行之前，我们应该添加一个<strong>User</strong>，以便可以登录到Keystone的管理界面中。</p><a name=\"runningyourapp-writingupdates\"></a><h3>编写更新</h3><p>为此我们将要创建一个更新脚本，Keystone会在启动web服务器之前自动运行它。</p><p>在<code>web.js</code>中设定参数<code>auto update</code>就可以启用Keystone的自动更新功能。</p><p>当这个参数被设为<code>true</code>时，Keystone会扫描<code>updates</code>目录寻找<code>.js</code>文件，每个文件都应该输出一个单参方法：</p><ul><li><code>next</code> - 更新结束后调用的方法 (包括所有内部调用)</li></ul><p>更新是用<a href=\"http://semver.org\" target=\"_blank\">语义版本</a>排序的，并且Keystone只会运行它们一次 (成功执行的更新会存在你的数据库里，一个名为<code>app_updates</code>的集合中)。</p><p>更新文件名应该符合<code>x.x.x-description.js</code>的模式 - 所有跟在第一个连字符之后的字符串都会被忽略，所以你可以在那里描述这个更新。</p><p>所以，为了在程序第一次启用时自动添加一个新的管理员用户，我们要创建一个<code>updates/0.0.1-admin.js</code>文件：</p><div class=\"code-header\"><h4>updates/0.0.1-admin.js</h4><p>添加第一个管理员的更新脚本 (改成你自己的用户名、email和密码)</p></div><pre><code class=\"language-javascript\">var keystone = require('keystone'),\n    User = keystone.list('User');\n \nexports = module.exports = function(done) {\n    \n    new User.model({\n        name: { first: 'Admin', last: 'User' },\n        email: 'admin@keystonejs.com',\n        password: 'admin',\n        canAccessKeystone: true\n    }).save(done);\n    \n};</code></pre><p class=\"note\">你可能不想把真实密码放在代码中，所以最好将默认密码设的简单点，然后在启动程序后登录到Keystone的管理界面中去修改密码。</p><a name=\"runningyourapp-startingkeystone\"></a><h3>启动Keystone</h3><p>现在已经准备好了，在项目主文件夹下执行这个命令运行你的程序吧：</p><p><code>node web</code></p><p>Keystone会自动应用这些更新，然后在默认端口3000上启动web服务器。</p><p>打开浏览器访问你的首页<a href=\"http://localhost:3000\" target=\"_blank\">localhost:3000</a>。你应该能看到我们的<strong>Hello World!</strong>消息。</p><p>要登录Keystone的管理界面，请访问<a href=\"http://localhost:3000/keystone\" target=\"_blank\">localhost:3000/keystone</a>。用你放在上面的更新脚本里的email和密码登录，你就能进入Keystone管理界面的首页了。</p><a name=\"runningyourapp-nextstep\"></a><h3>下一步</h3><p>... 搞定了！好吧，实际上还没有。现在该开始搭建你的程序了。要了解Keystone支持的列表参数和域类型，请访问<a href=\"/zh/docs/database\">数据库指南</a>。</p><p>你还应该<a href=\"https://twitter.com/keystonejs\" target=\"_blank\">在Twitter上关注@KeystoneJS</a>，以便及时了解相关新闻和更新，<a href=\"https://github.com/keystonejs/keystone/\" target=\"_blank\">在GitHub标记 KeystoneJS</a>，并在<a href=\"https://groups.google.com/d/forum/keystonejs\" target=\"_blank\">KeystoneJS谷歌群组</a>讨论这个指南(或者与KeystoneJS有关的一切)。</p><p>在范例页面上还有更多的<a href=\"/zh/examples\">范例和样本代码</a>。</p><p>享受使用KeystoneJS的过程吧！</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"zh/pages/docs/index": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/zh/docs\" class=\"nav-heading\">欢迎</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
if ( docssection.value != 'introduction')
{
buf.push("<hr/><ul class=\"sidebar-nav\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>文档</h1><p class=\"lead\">学习如何在Node.js中搭建数据库驱动的网站、应用程序和API。</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2>欢迎</h2><h3>我们开始吧</h3><p class=\"lead text-muted\">用左侧的导航栏选择文档的三个主要部分：入门、配置和数据库。</p><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4><a href=\"/zh/docs/getting-started\">入门</a></h4><p>入门指南会逐步介绍如何手动搭建一个KeystoneJS网站。这里是很好的起点。</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4><a href=\"/zh/docs/configuration\">配置</a></h4><p>在你熟悉了KeystoneJS之后，可以开始配置了。有很多可能的设定和服务让你搭建自己的应用或网站。</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4><a href=\"/zh/docs/database\">数据库</a></h4><p>KeystoneJS以Mongoose的模式为基础创建了\"列表\"，其中包含条目。在管理界面中可以访问到列表。</p></div></div></div></div></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"zh/pages/docs/views": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/zh/docs\" class=\"nav-heading\">欢迎</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
if ( docssection.value != 'introduction')
{
buf.push("<hr/><ul class=\"sidebar-nav\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">介绍</a></li><li><a href=\"#introduction-prerequisites\">前提条件</a></li><li><a href=\"#introduction-productionvsdevelopment\">生产 vs 开发</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">入门</a></li><li><a href=\"#gettingstarted-usingyeoman\">使用Yeoman生成器</a></li><li><a href=\"#gettingstarted-startinganewproject\">开始一个新项目</a></li><li><a href=\"#gettingstarted-projectstructure\">项目结构</a></li><li class=\"nav-label\"><a href=\"#models\">模型</a></li><li><a href=\"#models-authentication\">认证与会话管理</a></li><li class=\"nav-label\"><a href=\"#routesviews\">路由 &amp; 视图</a></li><li><a href=\"#routesviews-settingup\">设置路由和中间件</a></li><li><a href=\"#routesviews-middleware\">常用路由中间件</a></li><li><a href=\"#routesviews-firstview\">你的第一个视图</a></li><li><a href=\"#routesviews-templates\">模板</a></li><li><a href=\"#routesviews-publicassets\">公共资产</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">运行App</a></li><li><a href=\"#runningyourapp-writingupdates\">编写更新</a></li><li><a href=\"#runningyourapp-startingkeystone\">启动Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">下一步</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone 参数</a></li><li><a href=\"#options-concepts\">设置参数</a></li><li><a href=\"#options-project\">项目参数</a></li><li><a href=\"#options-server\">Web服务器参数</a></li><li><a href=\"#options-ssl\">SSL参数</a></li><li><a href=\"#options-database\">数据库与用户认证参数</a></li><li><a href=\"#options-unix-socket\">Unix Socket参数</a></li><li><a href=\"#options-ui\">管理员界面参数</a></li><li class=\"nav-label\"><a href=\"#services\">服务</a></li><li><a href=\"#services-google-analytics\">谷歌分析</a></li><li><a href=\"#services-google-maps\">谷歌地图</a></li><li><a href=\"#services-amazons3\">亚马逊 S3</a></li><li><a href=\"#services-azure\">微软Azure存储</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">应用程序更新</a></li><li class=\"nav-label\"><a href=\"#headless\">禁用管理员界面</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">概念</a></li><li class=\"nav-label\"><a href=\"#lists\">列表</a></li><li><a href=\"#lists-usage\">用法</a></li><li><a href=\"#lists-example\">示例</a></li><li><a href=\"#lists-options\">List参数</a></li><li><a href=\"#lists-plugins\">Schema插件</a></li><li><a href=\"#lists-querying\">查询数据</a></li><li><a href=\"#lists-paginate\">分页查询</a></li><li><a href=\"#lists-creating\">创建条目</a></li><li><a href=\"#lists-deleting\">删除条目</a></li><li class=\"nav-label\"><a href=\"#headings\">标题</a></li><li class=\"nav-label\"><a href=\"#fields\">域</a></li><li><a href=\"#fields-overview\">概览</a></li><li><a href=\"#fields-options\">域参数</a></li><li><a href=\"#fields-conditional\">域条件</a></li><li><a href=\"#fields-watching\">域监听</a></li><li><a href=\"#fields-underscoremethods\">Underscore方法</a></li><li class=\"nav-label\"><a href=\"#relationships\">关系</a></li><li><a href=\"#relationship-fields\">关系域</a></li><li><a href=\"#relationship-definitions\">关系定义</a></li><li><a href=\"#relationship-queries\">加载相关条目</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">域类型</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>视图</h1><p class=\"lead\">使用keystone应用程序的视图</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"concepts\"></a>概念</h2><p>借助View类，你不用过于担心异步代码，可以更轻松地编写出描述性的路由处理器。由于node.js的异步性，在处理几个不同的分支时，Express的路由可能会变得像一团乱麻一样。</p><a name=\"queues\"></a><h2>队列</h2><a name=\"queue-init\"></a><h3>Init</h3><p>注册首先运行的回调函数。</p><a name=\"queue-action\"></a><h3>Action</h3><p>`view.on('{REST verb}', callback)`</p><p>这个方法跟express中间件有异曲同工之妙。我们也可以提供一个中间参数跟on匹配。</p><div class=\"code-header\"><h4>/views/form.js</h4></div><pre><code class=\"language-javascript\">view.on('post', { action: 'contact' }, function() {\n     //处理contact表单的提交\n});\nview.on('post', { action: 'comment' }, function() {\n    // 让用户发评论\n});</code></pre><p>对于比较复杂的情况，比如同一页面中有多个表单时，这个比较实用。每个表单都会POST到同一个url上，但其中都会有一个名为action的隐藏域。</p><a name=\"queue-render\"></a><h3>Render</h3><p>最后执行的队列。</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"zh/templates/mixins/docsnav": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;


























































;return buf.join("");
},
"en/pages/docs/learn/code": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Code</h1><p class=\"lead\">.learn(how to use KeystoneJS)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><ul><h3><a href=\"/fetch\">Fetch Examples</a></h3></ul></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/learn/es2015": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:ES2015  </h1><p class=\"lead\">.using(system.js and babel to build a new KeystoneJS.com SPA with React)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content jl-guide\"><div class=\"jl-guide-section\"><div class=\"jl-guide__header\"><div class=\"p lead\">Our SPA creation guide <div class=\"jl-guide__title-info\"> rundown of our requirements for a complete project    </div></div></div><p>The goal of this guide will be to take a current ExpressJS website built with Jade templates and convert it into a React based SPA integrated with Keystone. The current jade templates will remain and be included via plugin. A route config file will be used to designate the process for compiling each page.</p><p> We will perform this excercise with source code from the current website for <a href=\"https://github.com/keystonejs/keystonejs-site\">KeystoneJS.com</a>.  Since the final output will need to be a <code>gh-pages</code> deployment, this guide will also document that process as well.  </p><p>In place of webpack / browserify we will use <a href=\"https://github.com/systemjs/systemjs\">System.js</a> and build based on ES6 making use of <a href=\"http://babeljs.io\">babel</a></p><Rundown></Rundown><ul><li>ES6 with System.js and babel</li><li>SPA using React and React-Router</li><li>Add Keystone to current express setup</li><li>Build process to deploy static version to  <code>gh-pages</code> branch</li></ul></div><!-- prepare--><div class=\"jl-guide-section\"><div class=\"jl-guide__header\"><h2 class=\"jl-guide__title\"><div class=\"jl-guide__title-label\"> <div class=\"jl-guide__title-count\"><span class=\"jl-guide__title-count\">1</span></div> Prepare <div class=\"jl-guide__title-info\"> get your code base ready  </div></div></h2></div><p>We will start by cloning our repo and creating a new branch <b>spa</b>.  Pick a unique branch for you if working from a current local repo.  </p><pre class=\"line-numbers language-javascript\">git clone git@github.com:keystonejs/keystonejs-site.git  \ncd keystonejs-site \ngit checkout -b spa  </pre><p>Create a new folder for our client files.  We will serve this as a static just like public.  </p><pre class=\"command-line\"><code class=\"language-javascript\">mkdir client </code></pre><p>Install and save our new dependencies.  </p><pre class=\"command-line\"><code class=\"language-javascript\">npm i --save systemjs babel typescript keystone react react-router  </code></pre></div><div class=\"jl-guide-section\">\t\t\t\t<div class=\"jl-guide__header\"><h2 class=\"jl-guide__title\"><div class=\"jl-guide__title-label\"> <div class=\"jl-guide__title-count\"><span class=\"jl-guide__title-count\">2</span></div>Client Files<div class=\"jl-guide__title-info\">create your new client app </div></div></h2></div><h3>Rework our jade files</h3><p>We still like using jade.  It is quick, good for large blocks of html, and having seperate files is easier for multiple parties to maintain.  </p><p>For our SPA we only need an index file.  We will create a new base file and remove the template include lines from each of the content files. The old base file can eventually be removed.  </p><p class=\"note\">You do not have to remove all of the template includes from your content files.  Instead, rename each appropriate template file and replace it with a blank one.</p><div class=\"code-header\"><h4> Create your SPA index file. </h4><p>Copy <code>content/common/templates/layout/base.jade</code> to <code>content/common/templates/layout/spa_base.jade</code> and add a named div.</p><p>Replace the old javascript with the system.js tag.  We will add our app later.  </p></div><pre class=\"language-javascript\"><code class=\"language-markup\">\n\t// old code\n\t\t.docs-body\n\t\t\tblock content\n\t\t\n\t// replace with\n\t\t.docs-body\n\t\t\t#keystonejs-spa\n\t\t\n\t/* javascript tag */\n\t// old code\n\t\tscript(src=\"/js/lib/jquery/jquery-1.10.2.min.js\")\n\t\tscript(src='/js/lib/bootstrap/collapse.js')\n\t\t//- script(src='/js/lib/bootstrap/dropdown.js')\n\t\tscript(src='/js/lib/prism/prism.min.js')\n\t\tscript(src='/js/anchor-links.js')\n\t\tscript(src='/js/api-code.js')\n\t\n\t// replace with\n\t\tscript(src=\"system.js\")\n\t\n</code>\n\n</pre><h3>Create a folder for your project</h3><p>Create your project wherever you want:</p><pre class=\"command-line\">mkdir my-test-project</pre><p>Than make sure you're in your new project:</p><pre class=\"command-line\">cd my-test-project</pre><h3>Run the generator</h3><pre class=\"command-line\">yo keystone</pre><p>The generator will ask you a few questions about what features you'd like to include, then configure and copy all the files you'll need into your project.</p><p>It will also install dependencies from npm so you're ready to go.</p></div><div class=\"jl-guide-figure jl-guide-figure--commands hidden-xs\"><div class=\"window safari\"><img src=\"/images/getting-started/commands-safari.png\" alt=\"Safari window\" width=\"942\" height=\"616\"/></div><div class=\"window terminal\"><div class=\"terminal-cursor\"></div><img src=\"/images/getting-started/commands-terminal.png\" alt=\"Terminal window\" width=\"650\" height=\"437\"/></div><div class=\"figure-shadow\"></div></div><div class=\"jl-guide-section\"><div class=\"jl-guide__header\"><h2 class=\"jl-guide__title\"><span class=\"jl-guide__title-count\">3</span><div class=\"jl-guide__title-label\">You're Done!</div></h2><p class=\"jl-guide__subtitle\">So you just created your first KeystoneJS project, congrats!</p><p class=\"jl-guide__subtitle\">Run it in your command line like this:</p><pre class=\"command-line\">node keystone</pre><p class=\"jl-guide__subtitle\">Then open <a href=\"http://localhost:3000\" target=\"_blank\">http://localhost:3000</a> to view it in your browser.</p><p class=\"jl-guide__subtitle\">If you want to see what the generator actually did take a look at our getting started guide, it'll walk you through the manual setup process. This is particularly helpful if you're new to Node.js.</p><p class=\"jl-guide__subtitle\"><a href=\"/docs/getting-started\">View the getting started guide &rarr;</a></p></div></div><div class=\"jl-guide-figure jl-guide-figure--finished wow-much-find hidden-xs\"><img src=\"/images/getting-started/commands-safari.png\" alt=\"Safari window\" width=\"1680\" height=\"600\" class=\"sr-only\"/></div><div class=\"jl-guide-section\"><div><div class=\"jl-guide__header\"><h2 class=\"jl-guide__title\"><span class=\"jl-guide__title-count\">?</span><div class=\"jl-guide__title-label\">Problems</div></h2><p class=\"jl-guide__subtitle\">Something went wrong? Hopefully these tips will help.</p><h3>ERR! Please try running this command again as root/Administrator.</h3><p>When running npm install -g generator-keystone, you may get an EACCES error asking you to run the command again as root/Administrator. This indicates that there is a permissions issue.</p><p>On your development system you can change directory ownership to the current $USER so you do not have to run sudo while installing untrusted code:</p><pre>sudo chown -R $USER /usr/local\n \n# Other directories may be required depending on your O/S\nsudo chown -R $USER /usr/lib/node_modules/</pre><p>For a production/shared environment you may wish to re-run the npm command with the sudo prefix:</p><pre>sudo npm install -g generator-keystone</pre><p>For more information, see the <a href='http://foohack.com/2010/08/intro-to-npm/#what_no_sudo', target='_blank'>\"What, no sudo?\"</a> of the Intro to npm by Isaac Schulueter.</p><h3>What do you mean it couldn't find my Database?</h3><p>By default, KeystoneJS will look for a MongoDB server running on localhost on the default port, and connect to it. If you're getting errors related to the MongoDB connection, make sure your MongoDB server is running.</p><p>If you haven't installed MongoDB yet, follow <a href=\"https://www.mongodb.org/downloads\" target=\"_blank\">the official instructions.</a></p><p>To connect to a server other than localhost, add a MONGO_URI setting to the .env file in your Keystone project directory:</p><pre>MONGO_URI=mongodb://your-server/database-name</pre><h3>Something else?</h3><p class=\"jl-guide__subtitle\">If your issue still isn't resolved, reach out to us on the <a href=\"https://groups.google.com/d/forum/keystonejs\" target=\"_blank\">KeystoneJS Google Group</a>.</p></div></div></div></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/learn/fetch": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"contextual-note\"><h4>Note</h4><p>This section is a complete react page that uses fetch to render the content.  This home page is a jade file.  The others a noted by their name. </p></div><h3><a href=\"/fetch\">Fetch Examples</a></h3><p><a href=\"/fetch/noscript\">noscript</a></p><p><a href=\"/fetch/body\">body noscript</a></p><p><a href=\"/fetch/text\">clean text</a></p><p><a href=\"/fetch/json/code\">json code</a></p><p><a href=\"/fetch/markdown\">markdown </a></p><p><a href=\"/fetch/fail\">failure </a></p><p><a href=\"/fetch/lost-link\">should 404  </a></p><p><a href=\"/docs/learn\" class=\"notspa\">should reload</a></p><p><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></p>");;return buf.join("");
},
"en/pages/docs/learn/heroku": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Deploy</h1><p class=\"lead\">.deploy(your app to Heroku)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"faqs\"></a>Deploying to Heroku</h2><h3>Description</h3><p>This section describes the steps required to deploy your KeystoneJS application to Heroku. </p><h3>Prerequisites</h3><ol class=\"fancy-list\"><li>Sign up for a Heroku account and install the <a href=\"https://toolbelt.heroku.com/\">Heroku Toolbelt</a></li><li>In this section, we will be using Git and Github so make sure you are appropriately set up with both</li><li>Create a Keystone application, Github repository and clone the repository locally</li></ol><h3>Steps</h3><p class=\"lead\">Create the heroku application</p><p>Run the following command <code>heroku create</code> from your terminal and within your Keystone applications root directory. Heroku will generate an app name for you (i.e. beautiful-island-4327) and set up a git remote called Heroku to use for identification</p><p class=\"lead\">If you wish to rename your application</p><p>Run the command <code>heroku apps:rename your-new-app-name --app current-name-of-your-app</code> in order to change your applications name</p><p class=\"lead\">Add your new Heroku remotes.</p><p>Run the command <code>heroku git:remote --app your-new-app-name</code> in order to add the appropriate Heroku remotes</p><p class=\"lead\">Include Heroku add-ons</p><p>Firstly, you'll need a database. There are a few providers you can choose from in Heroku's add-ons directory. For the purpose of this walk-through we'll be using Mongolab. Secondly, let's add a logging system. Again, there are a few to choose from but we'll be using Papertrail. This gives you a nice web UI to your application logs and lets you set up alerts for errors, etc. The basic plan for papertrail is also free. </p><ol> <li>Adding MongoLab</li><p>Run the command <code>heroku addons:add mongolab:sandbox</code></p><i class=\"mt-2\">N.B: You can point your Keystone site at any database provider by customising the MONGO_URI environment variable (make sure to remove the mongolab addon first!)</i><li class=\"mt-2\">Adding Papertrail</li><p>Run the command <code>heroku addons:add papertrail:choklad</code> </p></ol><p class=\"lead\">Adding environment variables for 3rd party service providers</p><p>You can do this yourself (the dashboard gives you the ENV variable set up) or you can add it as an add-on to your Heroku account like Mongolab and Papertrail. We recommend you do this manually as you'll probably want to use the account in development and staging as well, rather than having it tied to as single Heroku app.</p><p class=\"lead\">Deployment</p><p>Once you've created your Keystone application and got the database configured, commit all your code to git and run the following command to make your site go live <code>git push heroku master</code></p><p class=\"lead\">View your live site</p><p>Now that you have deployed your application you can enter the command <code>heroku open</code> or simply navigate to http://your-new-app-name.herokapp.com</p><p class=\"lead\">Adding a custom domain</p><p>Login to your Heroku account and add a real domain for your application. Following this, point your DNS at Heroku and you're off. You can also set up SSL and whatever else you need. </p><i>N.B: Heroku doesn't keep any changes to the local file system so you can't keep user-uploaded files without putting them on a 3rd party service, hence the Cloudinary/Azure/S3 integration.</i><p class=\"mt-2\">Make sure to checkout <a href=\"https://devcenter.heroku.com/articles/getting-started-with-nodejs\">Heroku's getting started docs for Node.js </a> if you hit any hurdles.</p></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/learn/resources": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (docsnav, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\">");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.labelsm) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs\"><ul class=\"sidebar-nav\"><li" + (jade.cls([docssection.value == 'introduction' ? 'active' : null], [true])) + "><a href=\"/docs\" class=\"nav-heading\">Welcome</a></li>");
// iterate docsnav
;(function(){
  var $$obj = docsnav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.cls([docssection.value == item.value ? 'active' : null], [true])) + "><a" + (jade.attr("href", item.path, true, false)) + " class=\"nav-heading\">" + (jade.escape(null == (jade_interp = item.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul><hr/>");
if ( docssection.value != 'introduction')
{
buf.push("<ul class=\"sidebar-nav\">");
// iterate docsnav						
;(function(){
  var $$obj = docsnav						;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if ( (item.value == docssection.value ) && docssection.override == 'fetch')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/fetch\">Fetch Examples</a></li><li><a href=\"/fetch/noscript\">noscript</a></li><li><a href=\"/fetch/body\">body noscript</a></li><li><a href=\"/fetch/text\">clean text</a></li><li><a href=\"/fetch/json/code\">json code</a></li><li><a href=\"/fetch/fail\">failure </a></li><li><a href=\"/fetch/lost-link\">should 404  </a></li><li><a href=\"/docs/learn/reference\" class=\"notspa\">should reload</a></li><li><a href=\"https://github.com/snowkeeper/keystonejs-site/blob/qstart/content/en/pages/docs/getting-started.jade\">should leave</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'learn')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"/docs/learn\">Learn</a></li><li><a href=\"/docs/learn/es2015\">ES2015 App</a></li><li><a href=\"/docs/learn/code\">Code Examples</a></li><li><a href=\"/docs/learn/resources\">Resources</a></li><li><a href=\"/docs/learn/kb\">Knowledge Base</a></li><li><a href=\"/docs/learn/heroku\">Deploy to Heroku</a></li><li class=\"nav-label\"><a href=\"/docs/learn/reference/readme\">Reference Materials</a></li><li><a href=\"/docs/learn/reference/readme\">README  </a></li><li><a href=\"/docs/learn/reference/roadmap\">Roadmap   </a></li><li><a href=\"/docs/learn/reference/history\">History   </a></li><li><a href=\"/docs/learn/reference/contributing\">Contributing</a></li><li><a href=\"/docs/learn/reference/coding-standards\">Coding Standards</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'getting-started')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#introduction\">Introduction</a></li><li><a href=\"#introduction-prerequisites\">Prerequisites</a></li><li><a href=\"#introduction-productionvsdevelopment\">Production vs Development</a></li><li class=\"nav-label\"><a href=\"#gettingstarted\">Getting Started</a></li><li><a href=\"#gettingstarted-usingyeoman\">Using the Yeoman Generator</a></li><li><a href=\"#gettingstarted-startinganewproject\">Starting a new project</a></li><li><a href=\"#gettingstarted-projectstructure\">Project Structure</a></li><li class=\"nav-label\"><a href=\"#models\">Models</a></li><li><a href=\"#models-authentication\">Authentication and Session Management</a></li><li class=\"nav-label\"><a href=\"#routesviews\">Routes &amp; Views</a></li><li><a href=\"#routesviews-settingup\">Setting up your Routes and Middleware</a></li><li><a href=\"#routesviews-middleware\">Common Route Middleware</a></li><li><a href=\"#routesviews-firstview\">Your first View</a></li><li><a href=\"#routesviews-templates\">Templates</a></li><li><a href=\"#routesviews-publicassets\">Public Assets</a></li><li class=\"nav-label\"><a href=\"#runningyourapp\">Running your App</a></li><li><a href=\"#runningyourapp-writingupdates\">Writing Updates</a></li><li><a href=\"#runningyourapp-startingkeystone\">Starting Keystone</a></li><li><a href=\"#runningyourapp-nextstep\">Next Steps</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'configuration')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#options\">Keystone Options</a></li><li><a href=\"#options-concepts\">Setting Options</a></li><li><a href=\"#options-project\">Project Options</a></li><li><a href=\"#options-server\">Web Server Options</a></li><li><a href=\"#options-ssl\">SSL Options</a></li><li><a href=\"#options-unix-socket\">Unix Socket Options</a></li><li><a href=\"#options-database\">Database and User Auth Options</a></li><li><a href=\"#options-ui\">Admin UI Options</a></li><li class=\"nav-label\"><a href=\"#services\">Services</a></li><li><a href=\"#services-google-analytics\">Google Analytics</a></li><li><a href=\"#services-google-maps\">Google Maps</a></li><li><a href=\"#services-amazons3\">Amazon S3</a></li><li><a href=\"#services-azure\">Windows Azure Storage</a></li><li><a href=\"#services-cloudinary\">Cloudinary</a></li><li><a href=\"#services-embedly\">Embed.ly</a></li><li><a href=\"#services-mandrill\">Mandrill</a></li><li class=\"nav-label\"><a href=\"#updates\">Application Updates</a></li><li class=\"nav-label\"><a href=\"#headless\">Disabling the Admin UI</a></li></ul>");
}
if ( (item.value == docssection.value ) && item.value == 'database')
{
buf.push("<ul><li class=\"nav-label\"><a href=\"#concepts\">Concepts</a></li><li class=\"nav-label\"><a href=\"#lists\">Lists</a></li><li><a href=\"#lists-usage\">Usage</a></li><li><a href=\"#lists-example\">Example</a></li><li><a href=\"#lists-options\">List Options</a></li><li><a href=\"#lists-plugins\">Schema Plugins</a></li><li><a href=\"#lists-querying\">Querying Data</a></li><li><a href=\"#lists-paginate\">Pagination Querying</a></li><li><a href=\"#lists-creating\">Creating Items</a></li><li><a href=\"#lists-deleting\">Deleting Items</a></li><li class=\"nav-label\"><a href=\"#headings\">Headings</a></li><li class=\"nav-label\"><a href=\"#fields\">Fields</a></li><li><a href=\"#fields-overview\">Overview</a></li><li><a href=\"#fields-options\">Field Options</a></li><li><a href=\"#fields-conditional\">Field Conditionals</a></li><li><a href=\"#fields-watching\">Field Watching</a></li><li><a href=\"#fields-underscoremethods\">Underscore Methods</a></li><li class=\"nav-label\"><a href=\"#relationships\">Relationships</a></li><li><a href=\"#relationship-fields\">Relationship Fields</a></li><li><a href=\"#relationship-definitions\">Relationship Definitions</a></li><li><a href=\"#relationship-queries\">Loading related items</a></li><li class=\"nav-label\"><a href=\"#fieldtypes\">Field Types</a></li><li><a href=\"#fieldtypes-boolean\">Boolean</a></li><li><a href=\"#fieldtypes-code\">Code</a></li><li><a href=\"#fieldtypes-color\">Color</a></li><li><a href=\"#fieldtypes-date\">Date</a></li><li><a href=\"#fieldtypes-datetime\">Datetime</a></li><li><a href=\"#fieldtypes-email\">Email</a></li><li><a href=\"#fieldtypes-html\">Html</a></li><li><a href=\"#fieldtypes-key\">Key</a></li><li><a href=\"#fieldtypes-location\">Location</a></li><li><a href=\"#fieldtypes-markdown\">Markdown</a></li><li><a href=\"#fieldtypes-money\">Money</a></li><li><a href=\"#fieldtypes-name\">Name</a></li><li><a href=\"#fieldtypes-number\">Number</a></li><li><a href=\"#fieldtypes-numberarray\">Numberarray</a></li><li><a href=\"#fieldtypes-password\">Password</a></li><li><a href=\"#fieldtypes-select\">Select</a></li><li><a href=\"#fieldtypes-text\">Text</a></li><li><a href=\"#fieldtypes-textarea\">Textarea</a></li><li><a href=\"#fieldtypes-textarray\">Textarray</a></li><li><a href=\"#fieldtypes-url\">Url</a></li><li><a href=\"#fieldtypes-azurefile\">AzureFile</a></li><li><a href=\"#fieldtypes-cloudinaryimage\">CloudinaryImage</a></li><li><a href=\"#fieldtypes-cloudinaryimages\">CloudinaryImages</a></li><li><a href=\"#fieldtypes-embedly\">Embedly</a></li><li><a href=\"#fieldtypes-localfile\">LocalFile</a></li><li><a href=\"#fieldtypes-s3file\">S3 File</a></li></ul>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Implement</h1><p class=\"lead\">.tour(the web; learn something new)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><p class=\"lead\">Explore some tools we use in Node.js</p><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Babel</h4><p class=\"link-context\"><a href=\"http://babeljs.io\" target=\"_blank\">http://babeljs.io</a></p><p>Babel is a JavaScript compiler.  Use it to write ES2015 code today.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>React</h4><p class=\"link-contex\"><a href=\"https://facebook.github.io/react/\" target=\"_blank\">https://facebook.github.io/react/</a></p><p class=\"link-contex\">A javascript library for building user interfaces</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Express</h4><p class=\"link-contex\"><a href=\"http://expressjs.com\" target=\"_blank\">http://expressjs.com</a></p><p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications</p></div></div></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>MongoDB</h4><p class=\"link-context\"><a href=\"https://www.mongodb.org\" target=\"_blank\">https://www.mongodb.org</a></p><p><a href=\"https://docs.mongodb.org/manual/\" target=\"_blank\">Manual</a></p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Mongoose</h4><p class=\"link-context\"><a href=\"http://mongoosejs.com\" target=\"_blank\">http://mongoosejs.com</a></p><p>elegant mongodb object modeling for node.js</p><p><a href=\"http://mongoosejs.com/docs/guide.html\" target=\"_blank\">User Guide</a></p><p><a href=\"http://mongoosejs.com/docs/api.html\" target=\"_blank\">Api Docs</a></p><p><a href=\"http://mongoosejs.com/docs/index.html\" target=\"_blank\">Quick Start</a></p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Redis</h4><p class=\"link-context\"><a href=\"http://redis.io\" target=\"_blank\">http://redis.io</a></p><p>Redis is an open source (BSD licensed), in-memory data structure store, used as database, cache and message broker.</p><p><a href=\"http://redis.io/documentation\" target=\"_blank\">Documentation</a></p><p><a href=\"http://try.redis.io/\" target=\"_blank\">Tutorial</a></p></div></div></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Socket.io</h4><p class=\"link-context\"><a href=\"http://socket.io\" target=\"_blank\">http://socket.io</a></p><p>Socket.IO enables real-time bidirectional event-based communication.  It works on every platform, browser or device, focusing equally on reliability and speed.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Primus</h4><p class=\"link-context\"><a href=\"https://github.com/primus/primus\" target=\"_blank\">https://github.com/primus/primus</a></p><p>Primus provides a common low level interface to communicate in real-time using various real-time frameworks.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>SockJS</h4><p class=\"link-context\"><a href=\"https://github.com/sockjs/sockjs-node\" target=\"_blank\">https://github.com/sockjs/sockjs-node</a></p><p>SockJS gives you a coherent, cross-browser, Javascript API which creates a low latency, full duplex, cross-domain communication channel between the browser and the web server, with WebSockets or without.</p><p><a href=\"https://github.com/sockjs/sockjs-client\" target=\"_blank\">SockJS Client</a></p></div></div></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>NPM</h4><p class=\"context\"><a href=\"https://docs.npmjs.com\" target=\"_blank\">https://docs.npmjs.com</a></p><p>node package manager</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>GitHub</h4><p class=\"link-context\"><a href=\"http://github.com\" target=\"_blank\">http://github.com</a></p><p>public and private repositories</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>JSPM</h4><p class=\"link-context\"><a href=\"http://jspm.io\" target=\"_blank\">http://jspm.io</a></p><p>system.js package manager for browsers</p></div></div></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Browserify</h4><p class=\"context\"><a href=\"http://browserify.org\" target=\"_blank\">http://browserify.org</a></p><p>Browserify lets you require('modules') in the browser by bundling up all of your dependencies.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Webpack</h4><p class=\"link-context\"><a href=\"http://webpack.github.io/docs/\" target=\"_blank\">http://webpack.github.io/docs/</a></p><p>webpack takes modules with dependencies and generates static assets representing those modules.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>System.js</h4><p class=\"link-context\"><a href=\"https://github.com/systemjs/systemjs\" target=\"_blank\">https://github.com/systemjs/systemjs</a></p><p>Universal dynamic module loader - loads ES6 modules, AMD, CommonJS and global scripts in the browser and NodeJS. Works with both Traceur and Babel.</p></div></div></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div style=\"overflow:hidden\" class=\"feature-content\"><h4>Gulp</h4><p class=\"context\"><a href=\"https://github.com/gulpjs/gulp/tree/master/docs\" target=\"_blank\">github.com/gulpjs/gulp/tree/master/docs</a></p><p>gulp is a toolkit that will help you automate painful or time-consuming tasks in your development workflow.</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>Grunt</h4><p class=\"link-context\"><a href=\"http://gruntjs.com\" target=\"_blank\">http://gruntjs.com</a></p><p>the JavaScript Task Runner</p></div></div></div><div class=\"col-sm-12 col-md-4\"><div class=\"feature-panel\"><div class=\"feature-content\"><h4>YO</h4><p class=\"link-context\"><a href=\"http://yeoman.io/generators/\" target=\"_blank\">http://yeoman.io/generators/</a></p><p>Yeoman helps you to kickstart new projects, prescribing best practices and tools to help you stay productive.</p></div></div></div></div></div></div></div></div>");}.call(this,"docsnav" in locals_for_with?locals_for_with.docsnav:typeof docsnav!=="undefined"?docsnav:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
"en/pages/docs/api/0.2.x/class": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (_version, api, apidocs, branch, docssection, path, undefined) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\"><li><a href=\"/docs\" class=\"nav-heading\">Docs</a></li>");
if ( (docssection.value == 'classapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.3.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/class\" class=\"nav-heading\">Current</a></li><li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/incoming/class\" class=\"nav-heading\">Incoming</a></li><li" + (jade.cls([docssection.version == '0.2.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/0.2.x/class\" class=\"nav-heading\">0.2.x\t</a></li>");
if ( docssection.version == '0.4.x')
{
buf.push("<li><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">Api</a></li>");
}
}
if ( (docssection.value == 'endpointapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">0.4.x</a></li><li><a href=\"/docs/api/current/class\" class=\"nav-heading\">Reference</a></li>");
}
buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs stickyMenu\"><ul class=\"sidebar-nav\"><li><a href=\"/docs\" class=\"nav-heading\">Docs Home</a></li>");
if ( (docssection.value == 'classapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.3.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/class\" class=\"nav-heading\">Current</a></li><li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/incoming/class\" class=\"nav-heading\">Incoming</a></li><li" + (jade.cls([docssection.version == '0.2.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/0.2.x/class\" class=\"nav-heading\">0.2.x</a></li>");
if ( docssection.version == '0.4.x'	)
{
buf.push("<li><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">Endpoint Api</a></li>");
}
}
if ( (docssection.value == 'endpointapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">0.4.x</a></li><li><a href=\"/docs/api/current/class\" class=\"nav-heading\">Class Reference</a></li>");
}
buf.push("</ul><hr/><ul class=\"sidebar-nav\">");
if ( docssection.version == '0.4.x' )
{
buf.push("<li class=\"nav-label\"><a href=\"#changelog\">0.3.x to 0.4.x Changes</a></li>");
}
if ( docssection.version == '0.3.x' )
{
buf.push("<li class=\"nav-label\"><a href=\"#changelog\">0.2.x to 0.3.x Changes</a></li>");
}
// iterate apidocs
;(function(){
  var $$obj = apidocs;
  if ('number' == typeof $$obj.length) {

    for (var ref = 0, $$l = $$obj.length; ref < $$l; ref++) {
      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var ref in $$obj) {
      $$l++;      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("</ul></nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Class</h1><p class=\"lead\">.legacy(" + (jade.escape((jade_interp = branch) == null ? '' : jade_interp)) + ")</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"methods\"></a>" + (jade.escape((jade_interp = api) == null ? '' : jade_interp)) + " complete reference</h2>");
// iterate apidocs
;(function(){
  var $$obj = apidocs;
  if ('number' == typeof $$obj.length) {

    for (var ref = 0, $$l = $$obj.length; ref < $$l; ref++) {
      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var ref in $$obj) {
      $$l++;      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("<input type=\"hidden\" id=\"_version\"" + (jade.attr("value", "" + (_version) + "", true, false)) + "/><input type=\"hidden\" id=\"_path\"" + (jade.attr("value", "" + (path) + "", true, false)) + "/><input type=\"hidden\" id=\"_api\"" + (jade.attr("value", "" + (api) + "", true, false)) + "/><input type=\"hidden\" id=\"_branch\"" + (jade.attr("value", "" + (branch) + "", true, false)) + "/></div></div></div></div>");}.call(this,"_version" in locals_for_with?locals_for_with._version:typeof _version!=="undefined"?_version:undefined,"api" in locals_for_with?locals_for_with.api:typeof api!=="undefined"?api:undefined,"apidocs" in locals_for_with?locals_for_with.apidocs:typeof apidocs!=="undefined"?apidocs:undefined,"branch" in locals_for_with?locals_for_with.branch:typeof branch!=="undefined"?branch:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined,"path" in locals_for_with?locals_for_with.path:typeof path!=="undefined"?path:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
},
"en/pages/docs/api/0.3.x/class": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (_version, api, apidocs, branch, docssection, path, undefined, version) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\"><li><a href=\"/docs\" class=\"nav-heading\">Docs</a></li>");
if ( (docssection.value == 'classapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.3.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/class\" class=\"nav-heading\">Current</a></li><li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/incoming/class\" class=\"nav-heading\">Incoming</a></li><li" + (jade.cls([docssection.version == '0.2.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/0.2.x/class\" class=\"nav-heading\">0.2.x\t</a></li>");
if ( docssection.version == '0.4.x')
{
buf.push("<li><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">Api</a></li>");
}
}
if ( (docssection.value == 'endpointapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">0.4.x</a></li><li><a href=\"/docs/api/current/class\" class=\"nav-heading\">Reference</a></li>");
}
buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs stickyMenu\"><ul class=\"sidebar-nav\"><li><a href=\"/docs\" class=\"nav-heading\">Docs Home</a></li>");
if ( (docssection.value == 'classapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.3.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/class\" class=\"nav-heading\">Current</a></li><li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/incoming/class\" class=\"nav-heading\">Incoming</a></li><li" + (jade.cls([docssection.version == '0.2.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/0.2.x/class\" class=\"nav-heading\">0.2.x</a></li>");
if ( docssection.version == '0.4.x'	)
{
buf.push("<li><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">Endpoint Api</a></li>");
}
}
if ( (docssection.value == 'endpointapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">0.4.x</a></li><li><a href=\"/docs/api/current/class\" class=\"nav-heading\">Class Reference</a></li>");
}
buf.push("</ul><hr/><ul class=\"sidebar-nav\">");
if ( docssection.version == '0.4.x' )
{
buf.push("<li class=\"nav-label\"><a href=\"#changelog\">0.3.x to 0.4.x Changes</a></li>");
}
if ( docssection.version == '0.3.x' )
{
buf.push("<li class=\"nav-label\"><a href=\"#changelog\">0.2.x to 0.3.x Changes</a></li>");
}
// iterate apidocs
;(function(){
  var $$obj = apidocs;
  if ('number' == typeof $$obj.length) {

    for (var ref = 0, $$l = $$obj.length; ref < $$l; ref++) {
      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var ref in $$obj) {
      $$l++;      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("</ul></nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Class</h1><p class=\"lead\">.current(" + (jade.escape((jade_interp = branch) == null ? '' : jade_interp)) + ")</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"methods\"></a>" + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + " complete reference</h2><a name=\"changelog\"></a><h3> 0.2.x to 0.3.x Changes</h3><h4 id=\"core\">Core</h4>\n<ul>\n<li>Bundled middleware has been nested under <code>keystone.middleware</code> instead of being included on the <code>keystone</code> object.</li>\n<li><code>keystone.initAPI</code> =&gt; <code>keystone.middleware.api</code></li>\n<li><code>keystone.cors</code> =&gt; <code>keystone.middleware.cors</code></li>\n<li><code>List.addPattern(&quot;standard meta&quot;)</code> (deprecated since v0.2.26) has been removed. Use the <a href=\"http://keystonejs.com/docs/database/#lists-options\">list tracking feature</a> to automatically add created / modified metadata to lists.</li>\n<li>Deprecation of <code>keystone.connect</code>.  <strong>Express</strong> and <strong> Mongoose</strong> instances are now set during <code>keystone.init</code> where you can pass custom Express/Mongoose instances.<pre><code class=\"lang-javascript\">  keystone.init({\n      mongoose: mongoose,\n      app: app\n  });\n</code></pre>\n</li>\n</ul>\n<h4 id=\"express-4\">Express 4</h4>\n<p>Express 3 has been upgraded to Express 4. Please review the <a href=\"http://expressjs.com/guide/migrating-4.html\" target=\"_blank\" >Moving to Express 4 Guide</a> for more information.</p>\n<h4 id=\"react-admin-ui\">React Admin UI</h4>\n<p>The first part of the port of the Admin UI to React has been completed, meaning forms are now rendered client-side by React instead of server-side from Jade templates.</p>\n<p>The Admin UI should, by and large, work as before - this is just groundwork for more improvements to come.</p>\n<h4 id=\"fields\">Fields</h4>\n<p><code>field.width</code> has been deprecated in favor of <code>field.size</code>. Fields (some, not all) can be set to <code>small</code>, <code>medium</code>, <code>large</code> or <code>full</code> (see <a href=\"/docs/database#fieldtypes\" >field docs</a> for support). The CSS and HTML structure has been significantly cleaned up over the 0.2.x version, and should result in a cleaner, more consistent UI.</p>\n<p>The default field size has changed from <code>full</code> to <code>large</code> because most fields don&#39;t need to stretch all the way across the screen.</p>\n<h4 id=\"code\">Code</h4>\n<p><code>options.lang</code> became <code>options.language</code></p>\n<hr/>");
// iterate apidocs
;(function(){
  var $$obj = apidocs;
  if ('number' == typeof $$obj.length) {

    for (var ref = 0, $$l = $$obj.length; ref < $$l; ref++) {
      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var ref in $$obj) {
      $$l++;      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("<input type=\"hidden\" id=\"_version\"" + (jade.attr("value", "" + (_version) + "", true, false)) + "/><input type=\"hidden\" id=\"_path\"" + (jade.attr("value", "" + (path) + "", true, false)) + "/><input type=\"hidden\" id=\"_api\"" + (jade.attr("value", "" + (api) + "", true, false)) + "/><input type=\"hidden\" id=\"_branch\"" + (jade.attr("value", "" + (branch) + "", true, false)) + "/></div></div></div></div>");}.call(this,"_version" in locals_for_with?locals_for_with._version:typeof _version!=="undefined"?_version:undefined,"api" in locals_for_with?locals_for_with.api:typeof api!=="undefined"?api:undefined,"apidocs" in locals_for_with?locals_for_with.apidocs:typeof apidocs!=="undefined"?apidocs:undefined,"branch" in locals_for_with?locals_for_with.branch:typeof branch!=="undefined"?branch:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined,"path" in locals_for_with?locals_for_with.path:typeof path!=="undefined"?path:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
},
"en/pages/docs/api/0.4.x/class": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (_version, api, apidocs, branch, docssection, path, undefined) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\"><li><a href=\"/docs\" class=\"nav-heading\">Docs</a></li>");
if ( (docssection.value == 'classapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.3.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/class\" class=\"nav-heading\">Current</a></li><li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/incoming/class\" class=\"nav-heading\">Incoming</a></li><li" + (jade.cls([docssection.version == '0.2.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/0.2.x/class\" class=\"nav-heading\">0.2.x\t</a></li>");
if ( docssection.version == '0.4.x')
{
buf.push("<li><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">Api</a></li>");
}
}
if ( (docssection.value == 'endpointapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">0.4.x</a></li><li><a href=\"/docs/api/current/class\" class=\"nav-heading\">Reference</a></li>");
}
buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs stickyMenu\"><ul class=\"sidebar-nav\"><li><a href=\"/docs\" class=\"nav-heading\">Docs Home</a></li>");
if ( (docssection.value == 'classapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.3.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/class\" class=\"nav-heading\">Current</a></li><li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/incoming/class\" class=\"nav-heading\">Incoming</a></li><li" + (jade.cls([docssection.version == '0.2.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/0.2.x/class\" class=\"nav-heading\">0.2.x</a></li>");
if ( docssection.version == '0.4.x'	)
{
buf.push("<li><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">Endpoint Api</a></li>");
}
}
if ( (docssection.value == 'endpointapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">0.4.x</a></li><li><a href=\"/docs/api/current/class\" class=\"nav-heading\">Class Reference</a></li>");
}
buf.push("</ul><hr/><ul class=\"sidebar-nav\">");
if ( docssection.version == '0.4.x' )
{
buf.push("<li class=\"nav-label\"><a href=\"#changelog\">0.3.x to 0.4.x Changes</a></li>");
}
if ( docssection.version == '0.3.x' )
{
buf.push("<li class=\"nav-label\"><a href=\"#changelog\">0.2.x to 0.3.x Changes</a></li>");
}
// iterate apidocs
;(function(){
  var $$obj = apidocs;
  if ('number' == typeof $$obj.length) {

    for (var ref = 0, $$l = $$obj.length; ref < $$l; ref++) {
      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var ref in $$obj) {
      $$l++;      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("</ul></nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Class</h1><p class=\"lead\">.incoming(" + (jade.escape((jade_interp = branch) == null ? '' : jade_interp)) + ")</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"methods\"></a>" + (jade.escape((jade_interp = api) == null ? '' : jade_interp)) + "  reference</h2><a name=\"changelog\"></a><h3> 0.3.x to 0.4.x Changes</h3><h4 id=\"core\">Core</h4>\n<ul>\n<li>Removal of <code>keystone.connect</code>.  <strong>Express</strong> and <strong> Mongoose</strong> instances are now set during <code>keystone.init</code> where you can pass custom Express/Mongoose instances.  </li>\n</ul>\n<h4 id=\"list-class\">List Class</h4>\n<ul>\n<li>Removal of <code>List.processFilters</code>.</li>\n<li>Removal of <code>List.getSearchFilters</code>.</li>\n</ul>\n<h4 id=\"react-admin-ui\">React Admin UI</h4>\n<h4 id=\"fields\">Fields</h4>\n<h4 id=\"code\">Code</h4>\n<h4 id=\"endpoint-api\">Endpoint Api</h4>\n");
// iterate apidocs
;(function(){
  var $$obj = apidocs;
  if ('number' == typeof $$obj.length) {

    for (var ref = 0, $$l = $$obj.length; ref < $$l; ref++) {
      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var ref in $$obj) {
      $$l++;      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<a" + (jade.attr("name", 'main-' + (item.keys) + '', true, false)) + "></a><h3>" + (((jade_interp = item.header) == null ? '' : jade_interp)) + "</h3>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
if (!( item.main))
{
buf.push("<a" + (jade.attr("name", '' + (item.keys) + '-' + (item.name) + '', true, false)) + "></a>" + (null == (jade_interp = item.html) ? "" : jade_interp) + "<hr/>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("<input type=\"hidden\" id=\"_version\"" + (jade.attr("value", "" + (_version) + "", true, false)) + "/><input type=\"hidden\" id=\"_path\"" + (jade.attr("value", "" + (path) + "", true, false)) + "/><input type=\"hidden\" id=\"_api\"" + (jade.attr("value", "" + (api) + "", true, false)) + "/><input type=\"hidden\" id=\"_branch\"" + (jade.attr("value", "" + (branch) + "", true, false)) + "/></div></div></div></div>");}.call(this,"_version" in locals_for_with?locals_for_with._version:typeof _version!=="undefined"?_version:undefined,"api" in locals_for_with?locals_for_with.api:typeof api!=="undefined"?api:undefined,"apidocs" in locals_for_with?locals_for_with.apidocs:typeof apidocs!=="undefined"?apidocs:undefined,"branch" in locals_for_with?locals_for_with.branch:typeof branch!=="undefined"?branch:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined,"path" in locals_for_with?locals_for_with.path:typeof path!=="undefined"?path:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
},
"en/pages/docs/api/0.4.x/endpoint": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (apidocs, docssection) {
jade_mixins["docsnav"] = jade_interp = function(docssection){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"visible-xs\"><ul class=\"nav-toggle\"><li><a href=\"/docs\" class=\"nav-heading\">Docs</a></li>");
if ( (docssection.value == 'classapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.3.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/class\" class=\"nav-heading\">Current</a></li><li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/incoming/class\" class=\"nav-heading\">Incoming</a></li><li" + (jade.cls([docssection.version == '0.2.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/0.2.x/class\" class=\"nav-heading\">0.2.x\t</a></li>");
if ( docssection.version == '0.4.x')
{
buf.push("<li><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">Api</a></li>");
}
}
if ( (docssection.value == 'endpointapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">0.4.x</a></li><li><a href=\"/docs/api/current/class\" class=\"nav-heading\">Reference</a></li>");
}
buf.push("</ul></div><nav class=\"docs-sidebar hidden-xs stickyMenu\"><ul class=\"sidebar-nav\"><li><a href=\"/docs\" class=\"nav-heading\">Docs Home</a></li>");
if ( (docssection.value == 'classapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.3.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/class\" class=\"nav-heading\">Current</a></li><li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/incoming/class\" class=\"nav-heading\">Incoming</a></li><li" + (jade.cls([docssection.version == '0.2.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/0.2.x/class\" class=\"nav-heading\">0.2.x</a></li>");
if ( docssection.version == '0.4.x'	)
{
buf.push("<li><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">Endpoint Api</a></li>");
}
}
if ( (docssection.value == 'endpointapi' ))
{
buf.push("<li" + (jade.cls([docssection.version == '0.4.x' ? 'active' : null], [true])) + "><a href=\"/docs/api/current/endpoint\" class=\"nav-heading\">0.4.x</a></li><li><a href=\"/docs/api/current/class\" class=\"nav-heading\">Class Reference</a></li>");
}
buf.push("</ul><hr/><ul class=\"sidebar-nav\">");
if ( docssection.version == '0.4.x' )
{
buf.push("<li class=\"nav-label\"><a href=\"#changelog\">0.3.x to 0.4.x Changes</a></li>");
}
if ( docssection.version == '0.3.x' )
{
buf.push("<li class=\"nav-label\"><a href=\"#changelog\">0.2.x to 0.3.x Changes</a></li>");
}
// iterate apidocs
;(function(){
  var $$obj = apidocs;
  if ('number' == typeof $$obj.length) {

    for (var ref = 0, $$l = $$obj.length; ref < $$l; ref++) {
      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var ref in $$obj) {
      $$l++;      var val = $$obj[ref];

// iterate val.list
;(function(){
  var $$obj = val.list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

if (!( item.name))
{
buf.push("<li class=\"nav-label\"><a" + (jade.attr("href", '#main-' + (item.keys) + '', true, false)) + ">" + (((jade_interp = item.menuHeader) == null ? '' : jade_interp)) + "</a></li>");
}
if (!( item.main))
{
buf.push("<li><a" + (jade.attr("href", '#' + (item.keys) + '-' + (item.name) + '', true, false)) + ">." + (((jade_interp = item.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("</ul></nav>");
};
buf.push("<div class=\"page-header\"><div class=\"container\"><h1>Ref:Endpoint</h1><p class=\"lead\">.incoming(version 0.4.x)</p></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-sm-3\">");
jade_mixins["docsnav"](docssection);
buf.push("</div><div class=\"col-sm-9\"><div class=\"docs-content\"><h2><a name=\"methods\"></a>in development</h2></div></div></div></div>");}.call(this,"apidocs" in locals_for_with?locals_for_with.apidocs:typeof apidocs!=="undefined"?apidocs:undefined,"docssection" in locals_for_with?locals_for_with.docssection:typeof docssection!=="undefined"?docssection:undefined));;return buf.join("");
},
}