import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
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
			this._limiters = {}
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
			this.onUpdate();
			this.onMount();
		}
		onUpdate() {
			let thisComponent = this;
			this._update = false;
			console.log('update listeners')
			scroll(0,0);
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
				
				const version = $('#_version').val(),
					path = $('#_path').val();

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
			
			/**
			 * set some values on mount and update
			 * instead of on every listen event
			 * **/
			 thisComponent.setVars()
			 		
		} // end onUpdate
		setVars() {
			let thisComponent = this
			thisComponent.$list = $('#searchBar .searchList')
			thisComponent.$searchDiv = $('#searchBar');
			thisComponent.$searchBar = thisComponent.$searchDiv.find('input');
			thisComponent.$allAnchors = $(".docs-content a[name]")
			return true;
		}
		onMount() {
			let thisComponent = this;
			let _cached = {}
			let create_cached = function(version) {
				if(typeof _cached[version] !== 'Object') {
					_cached[version] = {}
				}
			}
			// catch code view click
			$(document).on('click', '.loadCode', function(e) {
				e.preventDefault();
				let $this = $(this);
				let target = $this.parent().data();
				
				if(target.file) {
					const branch = $('#_branch').val();
					create_cached(branch);
					const url = 'https://raw.githubusercontent.com/keystonejs/keystone/BRANCH/FILE'.replace('BRANCH',branch).replace('FILE', target.file);
					const $pre = $this.parent().next();
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
			
			/**
			 * Search Bar
			 * takes the value from input and first searches for 
			 * a match in anchor names then a full text search
			 * */			
			// catch menu clicks
			$(document).on('click', '.catchMenuClick a', function(e) {
				thisComponent.catchMenuClick(e);
			});
			
			// hide the results when clicked outside
			$(document).on('mouseup','body', function (e)
			{
				let $list = thisComponent.$list
				let $searchDiv = thisComponent.$searchDiv
				
				if ( (!$list.is(e.target) // if the target of the click isn't the container...
					&& $list.has(e.target).length === 0) // ... nor a descendant of the container
					&& (!$searchDiv.is(e.target) // if the target of the click isn't the main div...
					&& $searchDiv.has(e.target).length === 0) // if the target of the click isn't the input...
				) {
					$list.hide();
					$('#searchBar input').removeClass('active caution')
					return;
				}
			})
			
			// jump to first anchor on page that matches and give a list of matches
			$(document).on('input focus', '#searchBar input', function(e) {
				/**
				 * until someone optimizes this for me
				 * we will rate limit and only run 
				 * 1 time every second
				 * */
				if(thisComponent.rateLimited('searchBar', 500)) {
					return true
				} 
				let $list = thisComponent.$list
				let $searchBar = thisComponent.$searchBar
				let $allAnchors = thisComponent.$allAnchors
				let searchAnchors = {}
				let isWide = (document.body.clientWidth > 480)
				
				let searchedFor = e.target.value.replace('.', ' ').replace('-', ' ').toLowerCase()
				let $firstAnchor = false
				
				let aBit = false // bit for anchor presence
				let bBit = false // bit for blob search results presence
				
				$list.html('');
				
				// set display names
				let mainHeader;
				if(thisComponent.props.location.pathname.search('api') > -1) {
					mainHeader = 'Method'
				} else {
					mainHeader = 'Anchor'
				}
					
				// create the method ul
				let $ul = $(document.createElement("ul")).addClass('sidebar-nav').addClass('catchMenuClick')
				$ul.append('<li class="nav-heading">' + mainHeader + ' Matches</li>');
				
				// create the search blob ui
				let $ul2 = $(document.createElement("ul")).addClass('sidebar-nav').addClass('catchMenuClick')
				$ul2.append('<li class="nav-heading">Search Matches</li>');
				
				// store all li in case of no matches
				let allAnchors = $(document.createElement("ul")).addClass('sidebar-nav').addClass('catchMenuClick')
				allAnchors.append('<li class="nav-heading">' + mainHeader + 's</li>');
				
				// create search lists
				_.forEach($allAnchors, function(v) {
					const $anchor = $(v);
					const text = $anchor.nextUntil("a[name]").andSelf().text()
					
					// set display names
					let name = $anchor[0].name || '';
					let displayName = $anchor[0].name || '';
					const $next = $anchor.next();
					if (["H2", "H3", "H4"].indexOf($next.prop("tagName")) > -1) {
						displayName = $next.clone().children(':not("em, code")').remove().end().text();
					}
					
					const itemDesc = '<li><a href="#' + name + '" >' + displayName + '</a><div class="context">' + _.trunc(text, {'length': 150,'separator': ' '}) + '</div></li>'
					const item = '<li><a href="#' + name + '" >' + displayName + '</a><div class="context">' + _.trunc(text, {'length': 100,'separator': ' '}) + '</div></li>'

					// full text search
					if(searchedFor && text !== '') {
						if(text.toLowerCase().search(searchedFor) > -1) {
							$ul2.append(itemDesc);	
						}
					}
					
					// console.log(searchedFor, name.replace('-', ' ').replace(/([a-z])([A-Z])/g, '$1 $2'), name.replace('-', ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().search(searchedFor))
					
					// populate method list
					if(searchedFor !== '' && name.replace('-', ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().search(searchedFor) > -1) {
						$ul.append(item)
						if(!$firstAnchor) {
							$firstAnchor = $anchor
						}
					}
					
					allAnchors.append(item)
					
				})
				
				// set blob bit
				bBit = ($ul2[0].childElementCount > 1)
				// set method bit
				aBit = ($ul[0].childElementCount > 1)
				
				if(aBit) {
					
					const goTo = location.pathname + '#' + $firstAnchor[0].name
					//console.log('push anchor', goTo)
					
					// push the anchot to history and goto
					$(document).scrollTop($firstAnchor.offset().top)
					//window.location.href = goTo;
					thisComponent.props.history.pushState(null, goTo)
					
					// set background to normal
					$searchBar.removeClass('caution').addClass('active')
					
				} else if(!bBit) {					
					aBit = true
					$ul = allAnchors
					$searchBar.addClass('caution').removeClass('active')
				}
					
				if(!isWide || (!bBit || !aBit)) {
					if(aBit) {
						$list.append($ul)
					}
					if(bBit) {
						$list.append($ul2)
					}
				} else {
					// float left methods
					$list.append($(document.createElement("div")).css({float:'left',width:'50%'}).append($ul))
					// float left blob search
					$list.append($(document.createElement("div")).css({float:'left',width:'50%'}).append($ul2))
				}
				
				$list.show()
				
			});
			
			// catch clicks for react-router
			// to add links that bypass this measure add class '.notspa' or '.uselink'
			$(document).on('click', 'a:not(.uselink, .notspa, .catchMenuClick)', function(event) {
				
				const $url = $(this)[0]
				const filename = cleanPath($url.pathname)
				const url = $url.pathname + $url.search + $url.hash
				//console.log(Routes.indexOf(filename) > -1, (!$url.hash || _this.state.route !== filename), $url.hash , _this.state.route )
				// is this a routed link
				if(Routes.indexOf(filename) > -1 && (!$url.hash || thisComponent.state.route !== filename)) {
					event.preventDefault()
					console.log('push history',  url)
					return thisComponent.props.history.pushState(null, url)
					
				}
				// should this be a 404?
				//console.log('check for spa 404');
				//console.log('$url.host',$url.host, 'location.host:',location.host)
				if(!$url.hash && $url.host === location.host) {
					// this app is entirely SPA with defined routes, so this page is probably a 404, but also could be a development, dynamic or hidden page
					event.preventDefault()
					console.log('push history unknown ', url)
					return thisComponent.props.history.pushState(null, url)
				}
				console.log('allowed default link', url)
			})
			
			// CLEARABLE INPUT
			function tog(v){
				return v ? 'addClass' : 'removeClass'
			} 
			$(document).on('input', '.clearable', function(){
				$(this)[tog(this.value)]('x');
			}).on('mousemove', '.x', function( e ){
				$(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');   
			}).on('touchstart click', '.onX', function( ev ){
				ev.preventDefault();
				$(this).removeClass('x onX').val('').change();
			})
			
			
		} // end onMount
		catchMenuClick (e) {
			console.log('catchMenuClick', e)
			// catch a menu click and close any menus
			let $list = $('#searchBar .searchList')
			$list.hide()
			
			// clean search bar status
			$('#searchBar input').removeClass('active caution')
		}
		rateLimited(id, time) {
			/**
			 * keeps a timer per id
			 * returns true if rate limited
			 * returns false if ok to run or new
			 * **/
			let timer = new Date().getTime();
			if(_.isNumber(this._limiters[id] )) {
				if( (timer - this._limiters[id] ) < time ) {
					return true
				} else {
					this._limiters[id]  = timer
					return false
				}
			} else {
				this._limiters[id] = timer
				return false
			}
		}
		
	}

	Listeners.propTypes = {};

	return Listeners
}



