exports.languages = {
	"en": {
		"content": {
			"toggle_navigation": "Toggle navigation"
		},
		"links": {
			"home": "/",
			"starting": "/quick-start",
			"docs": "/docs",
			"examples": "/examples"
		},
		"primarynav": [
			{ "section": "home",                "path": "/",                      "label": "Home" },
			{ "section": "starting",            "path": "/quick-start",       "label": "Quick Start" },
			{ "section": "docs",                "path": "/docs",                  "label": "Documentation" },
			{ "section": "examples",            "path": "/examples",              "label": "Examples" }
		],
		"docsnav": [
			{ "value": "getting-started", "path": "/docs/getting-started", "label": "Getting Started", "labelsm": "Start" },
			{ "value": "configuration", "path": "/docs/configuration", "label": "Configuration", "labelsm": "Config" },
			{ "value": "database", "path": "/docs/database", "label": "Database", "labelsm": "Lists" },
			{ "value": "classapi", "path": "/docs/api/current/class", "label": "Class Reference", "labelsm": "Api" },
			{ "value": "learn", "path": "/docs/learn", "label": "Learn", "labelsm": "Learn" },
			{ "value": "faqs", "path": "/docs/faqs", "label": "FAQ's", "labelsm": "FAQ" }
		],
	},
	"zh": {
		"content": {
			"toggle_navigation": "锁定导航栏"
		},
		"links": {
			"home": "/zh",
			"starting": "/zh/getting-started",
			"docs": "/zh/docs",
			"examples": "/zh/examples"
		},
		"primarynav": [
			{ "section": "home",                "path": "/zh",                       "label": "首页" },
			{ "section": "starting",            "path": "/zh/getting-started",       "label": "入门指南" },
			{ "section": "docs",                "path": "/zh/docs",                  "label": "文档" },
			{ "section": "examples",            "path": "/zh/examples",              "label": "范例" }
		],
		"docsnav": [
			{ "value": "getting-started",       "path": "/zh/docs/getting-started",  "label": "入门指南",         "labelsm": "入门" },
			{ "value": "configuration",         "path": "/zh/docs/configuration",    "label": "配置",             "labelsm": "配置" },
			{ "value": "database",              "path": "/zh/docs/database",         "label": "数据库",           "labelsm": "数据库" },
			/*{ "value": "views",                 "path": "/zh/docs/views",            "label": "视图",             "labelsm": "视图" }*/
		]
	}
}
exports.routes = [
	// Language: en
	{
		"path": "/404",
		"language": "en",
		"template": "404",
		"section": "404",
		"title": 'Lost?'
	},
	{
		"path": "/header",
		"partial": "common/templates/layout/header"
	},
	{
		"path": "/footer",
		"language": "en",
		"partial": "common/templates/layout/footer"
	},
	{
		"path": "",
		"language": "en",
		"template": "home",
		"section": "home",
		"title": "Node.js cms and web application platform built on Express and MongoDB"
	},
	{
		"path": "/",
		"language": "en",
		"template": "home",
		"section": "home",
		"title": "Node.js cms and web application platform built on Express and MongoDB"
	},
	{
		"path": "/home",
		"language": "en",
		"template": "home",
		"section": "home",
		"title": "Node.js cms and web application platform built on Express and MongoDB"
	},
	{
		"path": "/quick-start",
		"language": "en",
		"template": "starting",
		"section": "starting",
		"title": "Quick Start"
	},
	{
		"path": "/getting-started",
		"language": "en",
		"template": "starting",
		"section": "starting",
		"title": "Quick Start"
	},
	{
		"path": "/examples",
		"language": "en",
		"template": "examples",
		"section": "examples",
		"title": "Sample applications"
	},
	{
		"path": "/docs",
		"language": "en",
		"template": "docs/index",
		"section": "docs",
		"docssection": { "value": "introduction", "path": "/docs", "label": "Introduction" },
		"title": "KeystoneJS Documentation"
	},
	{
		"path": "/docs/getting-started",
		"language": "en",
		"template": "docs/getting-started",
		"section": "docs",
		"docssection": { "value": "getting-started", "path": "/docs/guides", "label": "Guides" },
		"title": "Getting Started"
	},
	{
		"path": "/docs/configuration",
		"language": "en",
		"template": "docs/configuration",
		"section": "docs",
		"docssection": { "value": "configuration", "path": "/docs/configuration", "label": "Configuration" },
		"title": "Configuration"
	},
	{
		"path": "/docs/database",
		"language": "en",
		"template": "docs/database",
		"section": "docs",
		"docssection": { "value": "database", "path": "/docs/database", "label": "Database" },
		"title": "Setting up and using Data Models"
	},
	{
		"path": "/docs/learn",
		"language": "en",
		"template": "docs/learn",
		"section": "docs",
		"docssection": { "value": "learn", "path": "/docs/learn", "label": "Learn" },
		"title": "Learn"
	},
	{
		"path": "/docs/learn/es6",
		"language": "en",
		"template": "docs/learn/es6",
		"section": "docs",
		"docssection": { "value": "learn", "path": "/docs/learn/es6", "label": "ES6" },
		"title": "System.js, Babel and React"
	},
	{
		"path": "/docs/learn/resources",
		"language": "en",
		"template": "docs/learn/resources",
		"section": "docs",
		"docssection": { "value": "learn", "path": "/docs/learn/resources", "label": "Resources" },
		"title": "Resources"
	},
	{
		"path": "/docs/learn/code",
		"language": "en",
		"template": "docs/learn/code",
		"section": "docs",
		"docssection": { "value": "learn", "path": "/docs/learn/code", "label": "Code" },
		"title": "Code Examples"
	},
	{
		"path": "/docs/api",
		"language": "en",
		"template": "docs/api",
		"section": "docs",
		"docssection": { "value": "api", "path": "/docs/api", "label": "Keystone Api" },
		"title": "Keystone Api"
	},
	{
		"path": "/docs/api/current",
		"language": "en",
		"template": "docs/api/0.3.x/class",
		"section": "docs",
		"api": '0.3.x',
		"branch": 'v0.3.x',
		"_version": "current",
		"docssection": { "version": "0.3.x", "value": "classapi", "path": "/docs/api/current/class", "label": "Class Reference" },
		"title": "Class Reference"
	},
	{
		"path": "/docs/api/current/class",
		"language": "en",
		"template": "docs/api/0.3.x/class",
		"section": "docs",
		"api": '0.3.x',
		"branch": 'v0.3.x',
		"_version": "current",
		"docssection": { "version": "0.3.x", "value": "classapi", "path": "/docs/api/current/class", "label": "Class Reference" },
		"title": "Class Reference"
	},
	{
		"path": "/docs/api/incoming",
		"language": "en",
		"template": "docs/api/0.4.x/class",
		"section": "docs",
		"api": '0.4.x',
		"_version": "incoming",
		"branch": 'master',
		"docssection": { "version": "0.4.x", "value": "classapi", "path": "/docs/api/incoming/class", "label": "Class Reference" },
		"title": "Class Reference"
	},
	{
		"path": "/docs/api/incoming/class",
		"language": "en",
		"template": "docs/api/0.4.x/class",
		"section": "docs",
		"api": '0.4.x',
		"branch": 'master',
		"_version": "incoming",
		"docssection": { "version": "0.4.x", "value": "classapi", "path": "/docs/api/incoming/class", "label": "Class Reference" },
		"title": "Class Reference"
	},
	{
		"path": "/docs/api/current/endpoint",
		"language": "en",
		"template": "docs/api/0.4.x/endpoint",
		"section": "docs",
		"api": '0.4.x',
		"branch": 'master',
		"_version": "incoming",
		"docssection": { "version": "0.4.x", "value": "endpointapi", "path": "/docs/api/current/class", "label": "Class Api" },
		"title": "Class Api"
	},
	{
		"path": "/docs/api/0.4.x",
		"language": "en",
		"template": "docs/api/0.4.x/class",
		"section": "docs",
		"api": '0.4.x',
		"branch": 'master',
		"_version": "incoming",
		"docssection": { "version": "0.4.x", "value": "classapi", "path": "/docs/api/0.4.x/class", "label": "Keystone Class Reference" },
		"title": "Keystone Class Reference"
	},
	{
		"path": "/docs/api/0.4.x/class",
		"language": "en",
		"template": "docs/api/0.4.x/class",
		"section": "docs",
		"api": '0.4.x',
		"branch": 'master',
		"_version": "incoming",
		"docssection": { "version": "0.4.x", "value": "classapi", "path": "/docs/api/0.4.x/class", "label": "Keystone Class Reference" },
		"title": "Keystone Class Reference"
	},
	{
		"path": "/docs/api/0.4.x/endpoint",
		"language": "en",
		"template": "docs/api/0.4.x/endpoint",
		"section": "docs",
		"api": '0.4.x',
		"branch": 'master',
		"_version": "incoming",
		"docssection": { "version": "0.4.x", "value": "endpointapi", "path": "/docs/api/current/endpoint", "label": "Class Reference" },
		"title": "Class Reference"
	},
	{
		"path": "/docs/api/0.3.x",
		"language": "en",
		"template": "docs/api/0.3.x/class",
		"section": "docs",
		"api": '0.3.x',
		"branch": 'v0.3.x',
		"_version": "current",
		"docssection": { "version": "0.3.x", "value": "classapi", "path": "/docs/api", "label": "Keystone Class Reference" },
		"title": "Keystone Class Reference"
	},
	{
		"path": "/docs/api/0.3.x/class",
		"language": "en",
		"template": "docs/api/0.3.x/class",
		"section": "docs",
		"api": '0.3.x',
		"branch": 'v0.3.x',
		"_version": "current",
		"docssection": { "version": "0.3.x", "value": "classapi", "path": "/docs/api", "label": "Keystone Class Reference" },
		"title": "Keystone Class Reference"
	},
	{
		"path": "/docs/api/0.2.x",
		"language": "en",
		"template": "docs/api/0.2.x/class",
		"section": "docs",
		"api": '0.2.x',
		"branch": '0.2.x',
		"_version": "0.2.x",
		"docssection": { "version": "0.2.x", "value": "classapi", "path": "/docs/api", "label": "Keystone Class Reference" },
		"title": "Keystone Class Reference"
	},
	{
		"path": "/docs/api/0.2.x/class",
		"language": "en",
		"template": "docs/api/0.2.x/class",
		"section": "docs",
		"api": '0.2.x',
		"branch": '0.2.x',
		"_version": "0.2.x",
		"docssection": { "version": "0.2.x", "value": "classapi", "path": "/docs/api/0.2.x/class", "label": "Class Reference 0.2.x" },
		"title": "Class Reference 0.2.x"
	},
	{
		"path": "/docs/faqs",
		"language": "en",
		"template": "docs/faqs",
		"section": "docs",
		"docssection": { "value": "faqs", "path": "/docs/faqs", "label": "FAQs" },
		"title": "Frequently Asked Questions"
	},
	/* {
		"path": "/docs/views",
		"template": "docs/views",
		"section": "docs",
		"docssection": { "value": "views", "path": "/docs/views", "label": "Views" },
		"title": "Using Views in your application"
	},*/
	
	// Language: zh
	{
		"path": "/zh",
		"language": "zh",
		"template": "home",
		"section": "home",
		"title": "基于Express和MongoDB搭建的Node.js cms和web应用程序平台"
	},
	{
		"path": "/zh/getting-started",
		"language": "zh",
		"template": "starting",
		"section": "starting",
		"title": "入门"
	},
	{
		"path": "/zh/examples",
		"language": "zh",
		"template": "examples",
		"section": "examples",
		"title": "范例程序"
	},
	{
		"path": "/zh/docs",
		"language": "zh",
		"template": "docs/index",
		"section": "docs",
		"docssection": { "value": "introduction", "path": "/zh/docs", "label": "Introduction" },
		"title": "KeystoneJS文档"
	},
	{
		"path": "/zh/docs/getting-started",
		"language": "zh",
		"template": "docs/getting-started",
		"section": "docs",
		"docssection": { "value": "getting-started", "path": "/zh/docs/guides", "label": "Guides" },
		"title": "入门"
	},
	{
		"path": "/zh/docs/configuration",
		"language": "zh",
		"template": "docs/configuration",
		"section": "docs",
		"docssection": { "value": "configuration", "path": "/zh/docs/configuration", "label": "Configuration" },
		"title": "配置"
	},
	{
		"path": "/zh/docs/database",
		"language": "zh",
		"template": "docs/database",
		"section": "docs",
		"docssection": { "value": "database", "path": "/zh/docs/database", "label": "Database" },
		"title": "设置和使用数据模型"
	},
	/* {
		"path": "/zh/docs/views",
		"language": "zh",
		"template": "docs/views",
		"section": "docs",
		"docssection": { "value": "views", "path": "//zhdocs/views", "label": "Views" },
		"title": "在你的应用程序中使用Views"
	},*/
]

exports.getFileName = function getFileName(url){
	var urls = {}
	urls.segments = url.split('/');
	//remove the protocol
	url = url.replace(/.*?:\/\//g, "");
	urls.host = url;
	//this removes everything before the first slash in the path (host:port)
	url = url.substring(url.indexOf("/"), url.length);
	urls.anchor = url;
	//this removes the anchor at the end, if there is one
	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
	urls.query = url;
	//this removes the query after the file name, if there is one
	url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
	urls.final = url;
	// remove a trailing slash
	url = url[url.length-1] === '/' ? url.substring(url.lastIndexOf("/"), -1) : url;
	urls.clean = url.trim();
	//return
	return urls;
}
exports.cleanPath = function(path) {
	return path[path.length-1] === '/' ? path.slice(0,-1) : path;
}

exports.config = {
	location: {},
	versions: ['0.2.x', 'current', 'incoming'],
	language: "en"
}
