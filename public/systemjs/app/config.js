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
			{ "value": "learn", "path": "/docs/learn", "label": "Learn", "labelsm": "Learn" },
			{ "value": "classapi", "path": "/docs/api/current/class", "label": "Class Reference", "labelsm": "Api" },
			
			/*{ "value": "faqs", "path": "/docs/faqs", "label": "FAQ's", "labelsm": "FAQ" }*/
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
		"title": ''
	},
	{
		"path": "/header",
		"partial": "common/templates/layout/header"
	},
	{
		"path": "/footer",
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
		"title": "Getting Started",
		"anchor-search": "true"
	},
	{
		"path": "/docs/configuration",
		"language": "en",
		"template": "docs/configuration",
		"section": "docs",
		"docssection": { "value": "configuration", "path": "/docs/configuration", "label": "Configuration" },
		"title": "Configuration",
		"anchor-search": "true"
	},
	{
		"path": "/docs/database",
		"language": "en",
		"template": "docs/database",
		"section": "docs",
		"docssection": { "value": "database", "path": "/docs/database", "label": "Database" },
		"title": "Setting up and using Data Models",
		"anchor-search": "true"
	},
	{
		"path": "/docs/learn",
		"language": "en",
		"template": "docs/learn",
		"section": "docs",
		"dynamic": "true",
		"docssection": { "value": "learn", "path": "/docs/learn", "label": "Learn" },
		"title": "Learn"
	},
	{
		"path": "/docs/learn/heroku",
		"language": "en",
		"template": "docs/learn/heroku",
		"section": "docs",
		"docssection": { "value": "learn", "path": "/docs/learn/heroku", "label": "Heroku deployment" },
		"title": "Learn: deploying your app to Heroku"
	},
	{
		"path": "/docs/learn/ES2015",
		"language": "en",
		"template": "docs/learn/ES2015",
		"section": "docs",
		"docssection": { "value": "learn", "path": "/docs/learn/es2015", "label": "ES2015" },
		"title": "System.js, Babel and React",
		"anchor-search": "true"
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
		"section": "docs",
		"skip": "true",
		"dynamic": "true",
		"anchor-search": "true",
		"docssection": { "value": "learn", "path": "/docs/learn/code", "label": "Code" },
		"title": "Code Examples"
	},
	{
		"path": "/docs/learn/kb",
		"language": "en",
		"section": "docs",
		"skip": "true",
		"dynamic": "true",
		"anchor-search": "true",
		"docssection": { "value": "learn", "path": "/docs/learn/kb", "label": "Knowledge Base" },
		"title": "Knowledge Base"
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
		"title": "Class Reference",
		"anchor-search": "true"
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
		"title": "Class Reference",
		"anchor-search": "true"
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
		"title": "Class Reference",
		"anchor-search": "true"
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
		"title": "Class Reference",
		"anchor-search": "true"
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
		"title": "Class Api",
		"anchor-search": "true"
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
		"title": "Keystone Class Reference",
		"anchor-search": "true"
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
		"title": "Keystone Class Reference",
		"anchor-search": "true"
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
		"title": "Endpoint Api",
		"anchor-search": "true"
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
		"title": "Keystone Class Reference",
		"anchor-search": "true"
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
		"title": "Keystone Class Reference",
		"anchor-search": "true"
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
		"title": "Keystone Class Reference",
		"anchor-search": "true"
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
		"title": "Class Reference 0.2.x",
		"anchor-search": "true"
	},
	/*
	 {
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

exports.config = {
	versions: ['0.2.x', 'current', 'incoming'],
}
