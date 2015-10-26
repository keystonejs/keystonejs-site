import {routes as routeArray} from '../config'
import React from 'react'
import Debug from 'debug'

let debug = Debug('keystone:pages:component:util');

// build a route object
let routes = {}
for (let v of routeArray) {
  routes[v.path] = v
}

export function getFileName(url) {
	/**
	 * return an object with filename properties
	 * provides location like has and search
	 * location.hash apparently is unrealiable with how it populates
	 * 
	 * as a convienience run baseRoute on the clean path as well
	 * 
	 * */
	var myLocation = {}
	myLocation.segments = url.split('/');
	myLocation.original = url;
	
	// remove the protocol
	url = url.replace(/.*?:\/\//g, "");
	myLocation.host = url;
	
	// this removes everything before the first slash in the path (host:port)
	url = url.substring(url.indexOf("/"), url.length);
	myLocation.anchor = url;
	// save the hash parameter like location
	myLocation.hashless = url.split('#')[1] || false
	myLocation.hash = (myLocation.hashless) ? '#' + myLocation.hashless : ''
	
	// this removes the anchor at the end, if there is one
	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
	myLocation.query = url;
	// save the query parameter like location
	myLocation.searchless = url.split('?')[1] || false
	myLocation.search = (myLocation.searchless) ? '?' + myLocation.searchless : ''
	
	// this removes the query after the file name, if there is one
	url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
	myLocation.final = url;
	
	// remove a trailing slash
	url = url[url.length-1] === '/' ? url.substring(url.lastIndexOf("/"), -1) : url;
	myLocation.clean = url.trim();
	
	myLocation.route = baseRoute(myLocation.clean) || {}
	return myLocation;
}

export function cleanPath(path) {
	return path[path.length-1] === '/' ? path.slice(0,-1) : path;
}
// get the base path for some dynamics
export function baseRoute(usepath) {
	usepath = usepath || location.pathname
	//  start with a split of pathname
	let paths = usepath.split('/');
	let path = "";
	let lastpath = false;
	for (let v of paths) {
	  if(v)path = path + '/' + v
	  if(routes[path]) {
		  lastpath = path
	  } 
	}
	
	if(!lastpath) {
		debug('!lastpath', lastpath, routes['/404'])
		return routes['/404']
	} else if(lastpath === usepath) {
		debug('lastpath === usepath', lastpath, usepath, routes[lastpath])
		return routes[lastpath]
	} else if(routes[lastpath].dynamic) {
		debug('lastpath', lastpath, routes[lastpath])
		return routes[lastpath]
	} else {
		debug('lastpath no match', lastpath, routes[lastpath], '404', routes['/404'])
		return routes['/404']
	}
}
