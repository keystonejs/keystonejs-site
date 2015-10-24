import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import {routes, config} from 'config';
import {baseRoute, cleanPath, getFileName} from 'common/util';
import Debug from 'debug'
import Gab from 'common/gab'

let debug = Debug('keystone:app:common:listen');

let Routes = routes.map(v => {
	return v.path;
});

export default (Component) => {
		
	class Listeners extends React.Component {
		constructor(props){
			super(props)
			this.displayName = 'Page Template'
			const clean = getFileName(props.location.pathname)
			this.state = { 
				route: clean.clean,
				prev: clean.clean,
				paths: clean
			}
			this._update = false
			this._limiters = {}
		}
		render() {
			// return React.cloneElement(Component, this.props)
			return  <Component {...this.props} {...this.state} />
		}
		componentWillReceiveProps(props) {
			const clean = getFileName(props.location.pathname).clean
			if(clean !== this.state.route) {
				this.setState({
					route: clean,
					prev: this.state.route
				});
				this._update = true;
			}
		}
		componentDidUpdate() {
			if(this._update) {
				this.onUpdate();
			}
		}
		componentDidMount() {
			this.onMount();
			this.onUpdate();
		}
		onUpdate() {
			let thisComponent = this;
			this._update = false;
			//debug('update listeners')
			window.scrollTo(0,0);
			// scroll to anchor
			// *only* if we have anchor on the url
			if(thisComponent.props.location.hash) {
				
				// smooth scroll to the anchor id
				const $anchor = $('a[name="' + thisComponent.props.location.hash.slice(1) + '"]');
				if($anchor.length === 1) {
					$('html, body').animate({
						scrollTop: $anchor.offset().top + 'px'
					}, 100, 'swing');
				}
			}
							
			// add anchor links and version switcher to certain elements
			$(".docs-content a[name]").each(function() {
				let $anchor = $(this),
					name = $anchor.attr("name")
				let link = '<a class="anchor" href="#' + name + '"><i class="entypo entypo-link"></i></a><a class="anchor" href="#top"><i class="entypo entypo-up"></i></a>'
				const $next = $anchor.next();
				const version = $('#_version').val()
				const path = $('#_path').val()

				if(path) {
					link += '<i class="anchor" style="padding-right: 0px;"><span>switch to:</span></i>';
					config.versions.forEach(function(v) {
						if(v !== version) {
							const newpath = path.replace(version, v);
							link += '<a style="padding-left: 8px;padding-right: 8px;"class="anchor" href="' + newpath + '/#' + name + '"><span>' + v + '</span></a>';
						}
					});
				}	
				
				const $link = $(link);
				
				// only append links to H2/H3/H4 tags
				if (["H2", "H3", "H4"].indexOf($next.prop("tagName")) > -1) {
					$next.append($link);
				}
			});
			
			// add code links and dropdown html
			$(".docs-content .addGitHubLink").each(function(e) {
				const $this = $(this);
				const file = $this.data("file");
				const branch = $('#_branch').val();
				const append = '<div style="float:right" > /' + file + ' <a href="http://github.com/keystonejs/keystone/blob/' + branch + '/' + file + '" target="_blank"><i class="entypo entypo-social entypo-github"></i></a></div>';
				$this.append(append);
			});
			
			
			// sticky menu
			const $stickyMenu = $('.stickyMenu');
			const $docsFooter = $('.docs-footer');
			if (!!$stickyMenu.offset()) { 
				const stickyTop = $stickyMenu.offset().top;  
				$(window).scroll(function() { 
					const windowTop = $(window).scrollTop(); 
					if (stickyTop-40 < windowTop){
						const docFooterView = $docsFooter[0].getBoundingClientRect();
						const height = (($(window).height() - docFooterView.top) < 0) ? '100%' : docFooterView.top + 'px';
						const width = $stickyMenu.parent().width()
						$stickyMenu.css({ direction: 'ltr', position: 'fixed', overflowY: 'auto', top: 0,  marginTop: '0', paddingBottom: '80px',  'height': height, 'width': width });
					} else {
						$stickyMenu.css({ position:'static'});
					}
				});
			}
			
			// Run Prism highlighting
			// weird error on api pages needs a second run
			if(location.pathname.search('api') > -1) {
				debug('highlight again', location.pathname.search('api'))
				setTimeout(Prism.highlightAll,1000)
			}
			Prism.highlightAll()
			 		
		} // end onUpdate
		onMount() {
			let thisComponent = this;
			let _cached = {}
			let create_cached = function(version) {
				if(!_.isObject(_cached[version])) {
					_cached[version] = {}
				}
			}
			// catch code view click
			$(document).on('click', '.loadCode', function(e) {
				e.preventDefault()
				const $this = $(this)
				const target = $this.parent().data()
				const $pre = $this.parent().next()
				let pass = (go=true) => {
					if(go) {
						$pre.slideToggle();
					}
				}
				const branch = $('#_branch').val();
				create_cached(branch);
				if($pre.css('display') === 'block') {
					// just toggle close
					pass()
				} else if(_cached[branch][target.file]) {
					// cached results so just toggle open
					pass()
				} else if(target.file) {
					const url = 'https://raw.githubusercontent.com/keystonejs/keystone/BRANCH/FILE'.replace('BRANCH',branch).replace('FILE', target.file);
					debug('github code cache',_cached, target.file)
					fetch(url)
						.then(r => r.text())
						.then(results => {
							_cached[branch][target.file] = Prism.highlight(results, Prism.languages.js);
							debug(_cached)
							$pre.html(_cached[branch][target.file])
							pass()
						})
					.catch(e => debug('Fetch error',page,e))	
				} else {
					pass(false)
				}				
			});			
			
			// catch clicks for react-router
			// to add links that bypass this measure add class '.notspa' or '.uselink'
			$(document).on('click', 'a:not(.uselink, .notspa, .catchMenuClick, .loadCode)', function(event) {
			
				const $url = $(this)[0]
				const myLocation = getFileName($url.href)
				
				const filename = myLocation.clean
				const url = $url.pathname + $url.search + myLocation.hash
				
				debug('click information', location, myLocation, 'url', url, '$url', $url.hostname)
				
				if(location.hostname !== $url.hostname) {
					// not our link 
					return
				}
				
				// is this a routed link
				if(myLocation.route.section !== '404' && (!$url.hash || thisComponent.state.route !== filename)) {
					event.preventDefault()
					debug('push history known route',  url)
					thisComponent.props.history.pushState(null, url)
					return
				}
				// should this be a 404?
				if(!myLocation.hash && $url.host === location.host) {
					// this app is entirely SPA with defined routes, so this page is probably a 404, but also could be a development, dynamic or hidden page
					event.preventDefault()
					debug('push history unknown route', url)
					thisComponent.props.history.pushState(null, url)
					return
				}
				if(myLocation.hash && thisComponent.state.route === filename) {
					// react-router has a bug that triggers a render on same page anchor links
					// this should catch that and fake the move
					event.preventDefault()
					debug('fake scroll', url)
					let $goto = $('a[name="' + myLocation.hashless + '"]')
					if($goto.length) {
						$(document).scrollTop($goto.offset().top)
					}
					return
				}
				
				debug('not our link so send away')
			})	
			
			// x for clear
			function tog(v){
				return v ? 'addClass' : 'removeClass'
			} 
			$(document).on('#searchBar input', '.clearable', function(){
				$(this)[tog(this.value)]('x');
			}).on('mousemove', '.x', function( e ){
				$(this)[tog(this.offsetWidth-22 < e.clientX-this.getBoundingClientRect().left)]('onX');   
			}).on('touchstart click', '.onX', function( ev ){
				ev.preventDefault();
				$(this).removeClass('x onX').val('').change();
			})
				
		} // end onMount		
	}

	Listeners.propTypes = {};

	return Listeners
}



