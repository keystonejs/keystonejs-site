import React from 'react'
import $ from 'jquery'
import {routes, cleanPath, getFileName, config} from 'config';

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
			this.props = props;
			this._update = false
		}
		render() {
			return <Component {...this.props} {...this.state} />
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
			const _this = this;
			this.onMount();
			this.onUpdate();
		}
		onUpdate() {
			const _this = this;
			this._update = false;
			console.log('update listeners')
			scroll(0,0);
			// scroll to anchor
			// *only* if we have anchor on the url
			if(this.props.location.hash) {
				
				// smooth scroll to the anchor id
				var $anchor = $('a[name="' + this.props.location.hash.slice(1) + '"]');
				if($anchor.length === 1) {
					$('html, body').animate({
						scrollTop: $anchor.offset().top + 'px'
					}, 100, 'swing');
				}
			}
							
			// add anchor links and version switcher to certain elements
			$(".docs-content a[name]").each(function() {
				var $anchor = $(this),
					name = $anchor.attr("name"),
					link = '<a class="anchor" href="#' + name + '"><i class="entypo entypo-link"></i></a><a class="anchor" href="#top"><i class="entypo entypo-up"></i></a>',
					$next = $anchor.next();
				
				var version = $('#_version').val(),
					path = $('#_path').val();

				if(path) {
					link += '<i class="anchor" style="padding-right: 0px;"><span>switch to:</span></i>';
					config.versions.forEach(function(v) {
						if(v !== version) {
							var newpath = path.replace(version, v);
							link += '<a style="padding-left: 8px;padding-right: 8px;"class="anchor" href="' + newpath + '/#' + name + '"><span>' + v + '</span></a>';
						}
					});
				}	
				var $link = $(link);
				
				// only append links to H2/H3/H4 tags
				if (["H2", "H3", "H4"].indexOf($next.prop("tagName")) > -1) {
					$next.append($link);
				}
			});
			
			// add code links and dropdown html
			$(".docs-content .addGitHubLink").each(function() {
				var $this = $(this);
				var file = $this.data("file");
				var branch = $('#_branch').val();
				var append = '<div style="float:right" > /' + file + ' <a href="http://github.com/keystonejs/keystone/blob/' + branch + '/' + file + '" target="_blank"><i class="entypo entypo-social entypo-github"></i></a></div>';
				$this.append(append);
			});
			
			
			// sticky menu
			var $stickyMenu = $('.stickyMenu');
			var $docsFooter = $('.docs-footer');
			if (!!$stickyMenu.offset()) { 
				var stickyTop = $stickyMenu.offset().top;  
				$(window).scroll(function(){ 
					var windowTop = $(window).scrollTop(); 
					if (stickyTop-40 < windowTop){
						var docFooterView = $docsFooter[0].getBoundingClientRect();
						var height = (($(window).height() - docFooterView.top) < 0) ? '100%' : docFooterView.top + 'px';
						var width = $stickyMenu.parent().width()
						$stickyMenu.css({ direction: 'ltr', position: 'fixed', overflowY: 'auto', top: 0,  marginTop: '0', paddingBottom: '80px',  'height': height, 'width': width });
					} else {
						$stickyMenu.css({ position:'static'});
					}
				});
			}
					
		} // end onUpdate
		onMount() {
			const _this = this;
			var _cached = {}
			var create_cached = function(version) {
				if(typeof _cached[version] !== 'Object') {
					_cached[version] = {}
				}
			}
			// catch code view click
			$(document).on('click', '.loadCode', function(e) {
				e.preventDefault();
				var $this = $(this);
				var target = $this.parent().data();
				
				if(target.file) {
					var branch = $('#_branch').val();
					create_cached(branch);
					var url = 'https://raw.githubusercontent.com/keystonejs/keystone/BRANCH/FILE'.replace('BRANCH',branch).replace('FILE', target.file);
					var $pre = $this.parent().next();
					if(_cached[branch][target.file]) {
						$pre.text(_cached[branch][target.file]);
					} else {
						fetch(url)
							.then(r => r.text())
							.then(results => {
								_cached[branch][target.file] = results;
								$pre.text(results);
							})
						.catch(e => console.log('Fetch error',page,e))
					}
					$pre.slideToggle();
							
				}
			});
			
			// catch clicks for react-router
			// to add links that bypass this measure add class '.notspa' or '.uselink'
			$(document).on('click', 'a:not(.uselink, .notspa)', function(event) {
				
				const $url = $(this)[0]
				const filename = cleanPath($url.pathname)
				const url = $url.pathname + $url.search + $url.hash
				// is this a routed link
				if(Routes.indexOf(filename) > -1 && (!$url.hash || _this.state.route !== filename)) {
					event.preventDefault()
					console.log('push history',  url)
					return _this.props.history.pushState(null, url)
					
				}
				// should this be a 404?
				if(!$url.hash && $url.host === config.location.host) {
					// this app is entirely SPA, so this page is probably a 404, but might be a dev  or hidden page
					event.preventDefault()
					console.log('push history unknown ', url)
					return _this.props.history.pushState(null, url)
				}
				console.log('allowed default link', url)
			});
			
			
			
		}
		
	}

	Listeners.propTypes = {};

	return Listeners
}



