import React from 'react';
import jade from 'app/html/templates'
import api from 'app/html/markedApi'
import _ from 'lodash'
import {languages, routes, getFileName, config} from 'config';
import SearchTags from 'tag-search'

let routeObj = {}
for (let v of routes) {
  routeObj[v.path] = v
}

export default (page, addLocals, inheritPropsFrom) => {
	
	class Jade extends React.Component {
		constructor(props) {
			super(props)
			this.displayName = 'Jade ' + page
			let readyJade = pageOptions(page, addLocals, inheritPropsFrom);
			this.state = { html: readyJade.render(readyJade.locals) }
		}
		render() {
			let anchorOpts = {
				useLocation: false,
				nostyles: true,
				noclasses: false,
				searchBar: 'searchBar',
				searchList: 'searchList',
				tagSelector: '.docs-content a[name]',
				classes: {
					'searchBar': ' col-sm-offset-3 col-sm-9 ',
					'input': ' form-control clearable',
					'ul': ' sidebar-nav ',
					'searchList': ' docs-sidebar ',
					'context': ' context ',
					'li:heading': ' nav-heading '
				}
			}
			let anchor = (('object' === typeof routeObj[location.pathname]) && routeObj[location.pathname]["anchor-search"] !== 'true') ? <span /> : <SearchTags  options={anchorOpts}   {...this.props}   />
			
			return (<div>
				<div dangerouslySetInnerHTML={{ __html: this.state.html }} />
				{anchor}
			</div>)
		}
	}
	return Jade
	/*
	return new Promise((resolve, reject) => {
        resolve(Jade)
    })
    * */
}

function pageOptions(page, addlocals, inherit) {
	let options = {	}
	if(!_.isObject(addlocals)) {
		addlocals = {}
	}
	routes.forEach(v => {
		if(page === v.path) {
			options.local = v;
		}
		if(inherit === v.path) {
			options.inherit = v;
		}
	})
	let locals = options.local || options.inherit || {};
	if(!_.isObject(locals)) {
		locals = routes[0];
	}
	if(options.inherit) {
		locals.section = options.inherit.section
		locals.language = options.inherit.language
	}
	if(!locals.language) {
		locals.language = config.language || "en"
	}
	locals.languages = languages;
	locals.pretty = true;
	locals.prefix = (locals.language === 'en') ? '/' : '/' + locals.language + '/';
	
	_.extend(locals, languages[locals.language]);
	_.extend(locals, addlocals);
	
	if(locals.api) {
		locals.apidocs = api[locals.language][locals.api]
	}
	if(locals.template) {
		locals.filename = locals.language + '/pages/' + locals.template
	} else if(locals.partial) {
		locals.filename = locals.partial
	} else{
		locals.filename = page
	}
	let sendBack = {
		locals: locals,
		render: jade[locals.filename]
	}
	if('function' !== typeof sendBack.render) {
		throw new Error('failed to find jade template function for ' + page);
	} else {
		return sendBack;
	}
	
}
