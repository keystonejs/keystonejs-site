/* */ 
import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import styles,{defaultStyles} from './styles'
import defaultClasses from './classes'
import {EventEmitter} from 'events'
import Debug from 'debug'

let debug = Debug('tag-search');

class Tagged extends React.Component {
	constructor(props){
		super(props)
		this.displayName = 'anchorSearch'
		
		this.state = {}
		
		// private vars
		this._limiters = false
		this._typingBit = false
		this._menuBit = false
		this._tagCache = []
		this._searchTermCache = ''
		this._events = false
		
		let opts = ('object' === $.type(props.options)) ? props.options : {}
		
		// Anchored props
		this.state.Anchored = this.setAnchored(opts)
				
		this.state.__ANCHOREDr =  location.pathname
		this.state.AnchorSearch =  this.setTagComponent(this.state.Anchored)
		
		$.extend(true, this.state, props)
		
		this._eventTag = this._eventTag.bind(this)
		this._eventUpdate = this._eventUpdate.bind(this)
		this._eventConfig = this._eventConfig.bind(this)
		this.updateConfig = this.updateConfig.bind(this)
		
		// mount flag
		this._mounted = false
		
	}
	setAnchored(opts) {
		// set the config parameters
		let state = {
			searchBar: opts.searchBar || 'searchBar',
			placeholder: opts.placeholder || "quick find",
			searchList: opts.searchList || 'searchList',
			tagSelector: opts.tagSelector || 'a[name]',
			topLink: opts.topLink || false,
			topLinkAnchor: opts.topLinkAnchor || 'top',
			topLinkText: opts.topLinkText || 'Top',
			nameFromTagAttr: opts.nameFromTagAttr || 'name',
			linkFromTagAttr: opts.linkFromTagAttr || 'name',
			contextTextUntilTag: opts.contextTextUntilTag || "a[name]",
			nameFromNextTag: opts.nameFromNextTag ? true : false,
			nameFromPrevTag: opts.nameFromPrevTag ? true : false,
			nameFromTag: opts.nameFromTag || ["H2", "H3", "H4", "H5"],
			nameFromTagSaveChildren: opts.nameFromTagSaveChildren || ':not("em, code")',
			useLocation: opts.useLocation ? true : false,
			noclasses: opts.noclasses ? true : false,
			nostyles: opts.nostyles ? true : false,
			forceSearch: opts.forceSearch || 2000,
			wrapperLeftText: opts.wrapperLeftText || 'menu',
			wrapperRightText: opts.wrapperRightText || 'search',
			mainHeader: opts. mainHeader || 'Anchor',
			apiHeader: opts.apiHeader || 'Method',
			skipHistory: opts.skipHistory || false
		}
		debug('Anchored', state, opts)
		// classes
		state.classes = state.noclasses ? defaultClasses : _.defaults(opts.classes || {}, defaultClasses)
		// styles
		state.styles = state.nostyles ? defaultStyles :  _.defaults(opts.styles || {}, styles)
		debug('Anchored', state)
		return state
	}
	componentWillUnmount() {
		this._mounted = false
		debug('unmount',this)
	}
	componentWillReceiveProps(props) {
		const clean = location.pathname
		debug('got props',this)
		// reset the events to pick up the new component
		if(props.events) {
			this.useEvents(props.events)
		}
		this.setState({
			__ANCHOREDr: clean,
			Anchored: props.reset ? this.setAnchored(props.options) : _.merge(this.state.Anchored, props.options)
		});
		if(clean !== this.state.__ANCHOREDr) {
			this._update = true;
			debug('props run onUpdate',this)
		}
	}
	componentDidUpdate() {
		debug('didupdate',this)
		// only run once. bit set in onUpdate,WillReceiveProps, constructor
		if(this._update) {
			debug('run onUpdate from DidUpdate',this)
			this.onUpdate();
		}
	}
	componentDidMount() {
		this._mounted = true
		debug('mount',this)
		// add tags
		if(this.props.tag) {
			this.addAnchors(this.props.tag)
		}
		
		// add listeners
		this.onUpdate();
		this.onMount();
		
		// add events
		if(this.props.events) {
			this.useEvents(this.props.events)
		}
	}
	render() {
		// return React.cloneElement(Component, this.props)
		return  this.state.AnchorSearch
	}
	setTagComponent(options) {
		return (
			<div id={options.searchBar} style={options.styles.searchBar}  className={options.classes.searchBar}  >
				<div id="TSWrapper"  style={options.styles.wrapper}>
					<div id="TSWrapperLeft"  style={options.styles.wrapperLeft}>
						<h4>{options.wrapperLeftText}</h4>
					</div>
					<div id="TSWrapperRight"  style={options.styles.wrapperRight}>
						<h4>{options.wrapperRightText}</h4>
					</div>
				</div>
				<div className={options.classes.inputDiv}  style={options.styles.inputDiv}>
					<input style={options.styles.input} type="text" placeholder={options.placeholder} className={options.classes.input} />
					<nav  style={options.styles.searchList} id={options.searchList} className={options.classes.searchList}></nav>
				</div>
				
			</div>
		)
	}
	useEvents(events) {
		this._events = true
		let thisComponent = this
		
		// remove listeners
		// i could not get removeListener to work so do it manually
		if(events._events['tag-search:update']) delete events._events['tag-search:update'];	
		if(events._events['tag-search:config']) delete events._events['tag-search:config'];
		if(events._events['tag-search:tag']) delete events._events['tag-search:tag'];
		
		// add new listeners
		events.on('tag-search:update', thisComponent._eventUpdate);	
		events.on('tag-search:config', thisComponent._eventConfig);
		events.on('tag-search:tag', thisComponent._eventTag);
		debug('Gab after add ', events, thisComponent)		
	}
	// event functions
	_eventUpdate(cfg) {
		this.updateConfig(cfg, (options) => {
			this.props.events.emit('tag-search:options', options)
		});
	}
	_eventConfig() {
		this.props.events.emit('tag-search:options', thisComponent.state.Anchored)
	}
	_eventTag(add) {
		this.addAnchors(add);
	}
	updateConfig(cfg, callback) {
		debug('update config',cfg, this)
		let anchored = cfg.reset ? this.setAnchored(cfg) : _.merge(this.state.Anchored, cfg)
		this._update = true;
		if(this._mounted) {
			this.setState({
				Anchored: anchored,
				AnchorSearch: this.setTagComponent(anchored)
			})
		} else {
			debug('not mounted', this)
		}
		if($.isFunction(callback)) {
			callback(anchored)
		}
	}
	addAnchors(add) {
		let tags,where,top,clas;
		debug('add anchors')
		if(_.isObject(add)) {
			tags = add.tags
			where = add.where || 'before'
			top = add.top || ''
			clas = add.class || ''
		} else {
			tags = add
			where = 'before'
			top = ''
			clas = ''
		}
		
		let $hs = $(tags);
		
		// create anchor links from <H(n)> elements
		let addAnchors = function() {
			let addtop = top ? '<a class="' + clas + '"  href="#top">top</a>' : ''
			return top + '<a class="' + clas + '" name="' + $(this)[0].id + '" ></a>'
		}
		
		debug('add anchors', tags, where, $hs, this)
				
		// add the anchors
		if($hs.length) {
			$hs[where](addAnchors)
			if(this._events) {
				this.props.events.emit('tag-search:tagged', {
					success: true,
					tags: $hs
				});
			}
		} else {
			if(this._events) {
				this.props.events.emit('tag-search:tagged', {
					success: false,
					tags: $hs
				});
			}
		}
	}
	onUpdate() {
		let thisComponent = this;
		this._update = false;
		/**
		 * set some values on mount and update
		 * instead of on every listen event
		 * **/
		 thisComponent.setVars()
				
	}
	onMount() {
		let thisComponent = this;
		/**
		 * Search Bar
		 * takes the value from input and first searches for 
		 * a match in anchor names then a full text search
		 * */			
		// catch menu clicks
		$(document).on('click', '.catchMenuClick a', function(e) {
			thisComponent.catchMenuClick(e)
		});
		
		// hide the results when clicked outside
		$(document).on('mouseup','body', function (e)
		{
			thisComponent.hideSearchList(e)
		})
		
		// jump to first anchor on page that matches and give a list of matches
		$(document).on('click input focus', '#' + thisComponent.state.Anchored.searchBar + ' input', function(e) {
			thisComponent.wordWait(e.target.value);		
		});
		// open menu on single click
		$(document).on('click', '#TSWrapperLeft', function(e) {
				thisComponent.checkMenu()	
		});
		// show search on click
		$(document).on('click', '#TSWrapperRight', function(e) {
			thisComponent.checkTyping()			
		});
		
	}
	setVars(options) {
		let thisComponent = this
		let config = this.state.Anchored
		let i = 0
		let isWide = (document.body.clientWidth > 480)
		
		// jquery
		thisComponent.$list = $('#' + this.state.Anchored.searchBar + ' #' + this.state.Anchored.searchList)
		thisComponent.$searchDiv = $('#' + this.state.Anchored.searchBar)
		thisComponent.$searchInput = thisComponent.$searchDiv.find('input')
		thisComponent.$allAnchors = $(thisComponent.state.Anchored.tagSelector)
		thisComponent.$wrapper = $('#TSWrapper');
		
		// calsses and styles
		thisComponent.listyle = thisComponent.stringClassFromObject(config.styles['li'])
		thisComponent.liclass = config.classes['li'] 
		thisComponent.astyle = thisComponent.stringClassFromObject(config.styles['li:a'])
		thisComponent.aclass = config.classes['li:a'] 
		thisComponent.cstyle = thisComponent.stringClassFromObject(config.styles['context'])
		thisComponent.cclass = config.classes['context'] 
		// header li
		thisComponent.ustyle = thisComponent.stringClassFromObject(config.styles['li:heading'])
		thisComponent.uclass = config.classes['li:heading'] 
		
		// create page searchable array and map
		thisComponent.anchorText = []
		thisComponent.contextText = []
		thisComponent.anchorMap = {}
		thisComponent.$allAnchors.each(function(k, v) {
			const $anchor = $(v);
			
			let A = thisComponent.anchorMap[i] = {}
			// set display names
			A.name = $anchor[0][config.linkFromTagAttr] || '';
			thisComponent.anchorText[i] = A.name
			A.nameFromTag = $anchor[0][config.nameFromTagAttr] || ''
			
			// is the displayed name from the next tag
			let $next = $anchor
			if(config.nameFromNextTag) {
				$next = $anchor.next()
			} else if(config.nameFromPrevTag) {
				$next = $anchor.prev()
			}
						
			if ($.isArray(config.nameFromTag) && config.nameFromTag.indexOf($next.prop("tagName")) > -1) {
				A.nameFromTag = $next.clone().children(config.nameFromTagSaveChildren).remove().end()[0][config.nameFromTagAttr]
			} 
			
			if(A.nameFromTag == '') {
				A.nameFromTag = A.name || 'link'
			}
			
			// create context blurb
			function elementsWithSpaces(elements) {
				let ret = []
				elements.each((k, element) => {
					if(k>0)ret.push(element.innerText)
				})
				return ret.join(' ')
			}
			const $context = $anchor.nextUntil(config.contextTextUntilTag) 
			thisComponent.contextText[i] = elementsWithSpaces($context)
			A.context = thisComponent.contextText[i]
			const big = isWide ? 150 : 110
			A.li = '<li class="' + thisComponent.liclass + '" style="' + thisComponent.listyle + '"><a  class="' + thisComponent.aclass + '" style="' + thisComponent.astyle + '"href="#' + A.name + '" >' + A.nameFromTag + '</a><div class="' + thisComponent.cclass + '" style="' + thisComponent.cstyle + '">' + _.trunc(A.context, {'length': big,'separator': ' '}) + '</div></li>'
			i++
		})
		
		
		return true;
	}
	checkTyping() {
		if(this._typingBit) {
			this.disAllowTyping()
		} else {
			this.allowTyping()
		}
	}
	allowTyping() {
		this._typingBit = true
		this.$wrapper.hide()
		this.$searchInput.focus()
	}
	disAllowTyping() {
		this._typingBit = false
		this.$wrapper.show()
		
	}
	checkMenu() {
		if(this._menuBit) {
			this.hideMenu()
		} else {
			this.showMenu()
		}
	}
	showMenu() {
		debug('open menu')
		this._menuBit = true
		this.searchTags(this.$searchInput.val())
	}
	hideMenu() {
		debug('close menu')
		this._menuBit = false
		this.$list.hide();
	}
	catchMenuClick (e) {
		const thisComponent = this
		// catch a menu click and close any menus
		thisComponent.hideMenu();
		thisComponent.disAllowTyping()
		
		// clean search bar status
		thisComponent.$searchInput.css('background-color', styles.input.backgroundColor)
	}
	hideSearchList(e) {
		const thisComponent = this
		const $list = thisComponent.$list
		const $searchDiv = thisComponent.$searchDiv
		
		if ( (!$list.is(e.target) // if the target of the click isn't the container...
			&& $list.has(e.target).length === 0) // ... nor a descendant of the container
			&& (!$searchDiv.is(e.target) // if the target of the click isn't the main div...
			&& $searchDiv.has(e.target).length === 0) // if the target of the click isn't the input...
		) {
			thisComponent.hideMenu();
			$('#' + thisComponent.state.Anchored.searchBar + ' input').css('background-color', styles.input.backgroundColor)
			thisComponent.disAllowTyping()
			return;
		}
	}
	wordWait(entry) {
		const thisComponent = this
		if(!thisComponent._limiters) {
			thisComponent._limiters = {
				typed: entry,
			}
			// open the list
			debug('entry search')
			return thisComponent.searchTags(entry)
		}
		let useMe = thisComponent._limiters;
		let now = new Date().getTime();
		
		// save the search term until done typing
		useMe.typed = entry
		
		// kill the current interval
		clearTimeout(thisComponent._limiters.interval)
		
		// force search after specified time
		if(useMe.force < now) {
			//debug('force search')
			useMe.force = new Date().getTime() + this.state.Anchored.forceSearch
			thisComponent.searchTags(entry)
			return false
		}
		
		// update the forced search
		useMe.force = new Date().getTime() + this.state.Anchored.forceSearch
		
		// set the interval to run the search
		useMe.interval = setTimeout(function() {
			//debug('interval search')
			thisComponent.searchTags(useMe.typed)
			clearTimeout(thisComponent._limiters.interval)
		},  250)
	}
	searchTags(search) {
		//debug('search tags', search , this)
		const thisComponent = this
		let $list = thisComponent.$list
		let $searchInput = thisComponent.$searchInput
		let searchAnchors = {}
		let isWide = (document.body.clientWidth > 480)
		let config = thisComponent.state.Anchored
		// our search term fixed up
		let searchedFor = search.replace('.', ' ').replace('-', ' ').toLowerCase()
		
		let $firstAnchor = false
		
		let aBit = false // bit for anchor presence
		let bBit = false // bit for blob search results presence
		
		$list.html('');
		
		// set display names
		let mainHeader = config.mainHeader;
		if(location.pathname.search('api') > -1) {
			mainHeader = config.apiHeader
		} 
		
		// create the method ul
		let $ul = $(document.createElement("ul")).css(config.styles.ul).addClass('catchMenuClick ' + config.classes.ul)
		$ul.append('<li class="' + thisComponent.uclass + '" style="' + thisComponent.ustyle + '">' + mainHeader + ' Matches</li>');
		
		// create the search blob ui
		let $ul2 = $(document.createElement("ul")).css(config.styles.ul).addClass('catchMenuClick ' + config.classes.ul)
		$ul2.append('<li class="' + thisComponent.uclass + '" style="' + thisComponent.ustyle + '">Search Matches</li>');
		
		// store all li in case of no matches
		let allAnchors = $(document.createElement("ul")).css(config.styles.ul).addClass('catchMenuClick ' + config.classes.ul)
		allAnchors.append('<li class="' + thisComponent.uclass + '" style="' + thisComponent.ustyle + '">' + mainHeader + 's</li>');
		
		// add top links
		if(config.topLink) {
			$ul.append('<li class="' + thisComponent.liclass + '" style="' + thisComponent.listyle + '"><a  class="' + thisComponent.aclass + '" style="' + thisComponent.astyle + '"href="#' + config.topLinkAnchor + '" >' + config.topLinkText + '</a></li>');
			$ul2.append('<li class="' + thisComponent.liclass + '" style="' + thisComponent.listyle + '"><a  class="' + thisComponent.aclass + '" style="' + thisComponent.astyle + '"href="#' + config.topLinkAnchor + '" >' + config.topLinkText + '</a></li>');
			allAnchors.append('<li class="' + thisComponent.liclass + '" style="' + thisComponent.listyle + '"><a  class="' + thisComponent.aclass + '" style="' + thisComponent.astyle + '"href="#' + config.topLinkAnchor + '" >' + config.topLinkText + '</a></li>');	
		}
		
		// create search lists		
		if(searchedFor !== '') {
			// create the anchor lis
			thisComponent.anchorText.filter((name,k) => {
				allAnchors.append(thisComponent.anchorMap[k].li)
				if(searchedFor !== '' && name.replace('-', ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().search(searchedFor) > -1) {
					$ul.append(thisComponent.anchorMap[k].li)
					return true;
				}
				return false
			});			
			// create the search lis
			thisComponent.contextText.filter((text,k) => {
				let searchArray = searchedFor.split(' ');
				let wordy = false
				if(!Array.isArray(searchArray)) {
					return false
				}
				// loop over the split search text and return as soon as a match is found
				wordy = searchArray.some(function(word) {
					if(text.toLowerCase().search(word) > -1) {
						$ul2.append(thisComponent.anchorMap[k].li)
						return true
					}
					return false
				})
			})
			
		} else {
			let len = thisComponent.anchorText.length
			for(let k=0;k<len;k++) {
				allAnchors.append(thisComponent.anchorMap[k].li)
			}
			
		}
		
		let num = config.topLink ? 2 : 1
		// set blob bit
		bBit = ($ul2[0].childElementCount > num)
		// set method bit
		aBit = ($ul[0].childElementCount > num)
		
		if(aBit && $firstAnchor) {
			
			const goTo = location.pathname + '#' + $firstAnchor
			
			// do we have history?	
			let pushHistory
			let replaceHistory
			let _history = false
			
			if(!config.skipHistory && 'object' === $.type(thisComponent.props.history)) {
				if($.isFunction(thisComponent.props.history.pushState)) {
					pushHistory = function() {
						thisComponent.props.history.pushState(null, goTo)
					}
					replaceHistory = function() {
						thisComponent.props.history.replaceState(null, goTo)
					}
					_history = true
				}
			}
			
			// push the anchor 
			if(!isWide || config.useLocation === false ) {
				// mobiles loses focus on history & location so just move with scrollTop
				$(document).scrollTop($firstAnchor.offset().top)
				if(_history) {
					replaceHistory()
				}
				
			} else {
				// use window and send to history if requested
				window.location.href = goTo;
				if(_history) {
					replaceHistory()
				}
			}
			
			// set background to normal
			$searchInput.css('background-color', styles.active.backgroundColor)
			
		} else if(!bBit) {					
			aBit = true
			$ul = allAnchors
			$searchInput.css('background-color', styles.caution.backgroundColor)
		}
		
		// reset the list so scroll goes to top
		$list[0].innerHTML = ''
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
		
	}
	stringClassFromObject(cobj) {
		let str = '';
		$.each(cobj,function(k,v) {
			if(k) str += _.kebabCase(k) + ':' + v + '; '
		});
		return str
	}
	rateLimited(id, time) {
		/**
		 * keeps a timer per id
		 * returns true if rate limited
		 * returns false if ok to run or new
		 * **/
		let timer = new Date().getTime();
		if('number' === $.type(this._limiters[id] )) {
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
export default Tagged
