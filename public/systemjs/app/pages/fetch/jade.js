import React from 'react'
import jade from 'jade/lib/runtime'
import jadeTemplates from '../../html/templates'
import api from '../../html/markedApi'
import _ from 'lodash'
import {languages, routes, config} from '../../config'
import {baseRoute, cleanPath, getFileName} from '../../common/util'
import Debug from 'debug'

let debug = Debug('keystone:app:pages:fetch:jade');

export default (page, addLocals, inheritPropsFrom, useLocals) => {
	
	class Jade extends React.Component {
		constructor(props) {
			super(props)
			this.displayName = 'Jade ' + page
			let readyJade = pageOptions(page, addLocals, inheritPropsFrom, useLocals);
			this.state = { html: readyJade.render(readyJade.locals) }
		}
		render() {
			return <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
		}
	}
	return Jade
	/*
	return new Promise((resolve, reject) => {
        resolve(Jade)
    })
    * */
}

function pageOptions(page, addlocals, inherit, uselocals) {
	let locals = {}
	if(_.isObject(uselocals)) {
		// use locals passed in
		locals = uselocals
	
	} else {
		
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
		locals = options.local || options.inherit || {};
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
		
		
	}
	
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
		render: jadeTemplates[locals.filename]
	}
	if('function' !== typeof sendBack.render) {
		debug('failed to find jade function', sendBack, page)
		throw new Error('failed to find jade template function for ' + page);
	} else {
		return sendBack;
	}
	
}
