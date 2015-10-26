import App from './render';
import Jade from './pages/fetch/jade';
import Learn from './pages/learning'; // page
import Example from './pages/example'; // page for Fetch example -- hidden --
import Code from './pages/code-examples'; // page
import Fetch from './pages/component/generic-fetch'; // function > component
import KbPage from './pages/kb-page'; // page
import KbContent from './pages/component/kb'; // function > component
import {languages, routes} from './config';

let Routes = []

for (let value of routes) {
	if(!value.skip) {
		let component = value.fetch ?  Example(value.fetch, value.returnTypes) : Jade(value.path); 
		Routes.push({ path: value.path, component: component })
	}
}

const main = Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/README.md', 'markdown');

Routes.push({ 
	path: '/docs/learn/reference', 
	component: Learn,
	indexRoute: { component: main },
    catchAll: { component: main },
    childRoutes: [
		{ path: 'readme', component: Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/README.md', 'markdown') },
		{ path: 'roadmap', component: Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/ROADMAP.md', 'markdown') },
		{ path: 'history', component: Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/HISTORY.md', 'markdown') },
		{ path: 'contributing', component: Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/CONTRIBUTING.md', 'markdown') },
		{ path: 'coding-standards', component: Fetch('https://raw.githubusercontent.com/wiki/keystonejs/keystone/Knowledge-Base/Coding-Standards.md', 'markdown') },

    ]
})


// redirect the Home link
function sendToLearn(nextState, replaceState) {
	if (nextState.location.pathname === '/docs/learn/kb/Home' || nextState.location.pathname === '/docs/learn/Home') {
		replaceState({ nextPathname: nextState.location.pathname }, '/docs/learn')
	}	
}
function sendToLearnNow(nextState, replaceState) {
	replaceState({ nextPathname: nextState.location.pathname }, '/docs/learn')
}
Routes.push({ path: '/docs/learn/Home', onEnter: sendToLearn })

// knowledge base
const kbmain = Fetch('https://raw.githubusercontent.com/wiki/snowkeeper/keystone/Knowledge-Base.md', ['markdown','wikiindexpage']);
Routes.push({ 
	path: '/docs/learn/kb', 
	component: KbPage,
	indexRoute: { component: kbmain },
    catchAll: { component: KbContent() },
    childRoutes: [
		{ path: '*', component: KbContent(), onEnter: sendToLearn  }
	]
})


// code examples
Routes.push({ path: '/docs/learn/code/Home', onEnter: sendToLearnNow })
const codemain = Fetch('https://raw.githubusercontent.com/wiki/snowkeeper/keystone/Code-Examples.md', ['markdown','wikiindexpage'], {path: '/docs/learn/code'});
Routes.push({ 
	path: '/docs/learn/code', 
	component: Code,
	indexRoute: { component: codemain },
    catchAll: { component: KbContent('/docs/learn/code', '/Code-Examples') },
    childRoutes: [
		{ path: '*', component: KbContent('/docs/learn/code', '/Code-Examples'), onEnter: sendToLearn  }
	]
})


Routes.push({ 
	path: '/fetch', 
	component: Example,
	indexRoute: { component: Jade('en/pages/docs/learn/fetch') },
    catchAll: { component: Jade('en/pages/docs/learn/fetch') },
    childRoutes: [
		{ path: 'text', component: Fetch('https://developer.mozilla.org/en-US/docs/Web/API/Body', ['body','noscript','clean']) },
		{ path: 'body', component: Fetch('https://developer.mozilla.org/en-US/docs/Web/API/Body', ['body','noscript']) },
		{ path: 'noscript', component: Fetch('https://developer.mozilla.org/en-US/docs/Web/API/Body', ['noscript']) },
		{ path: 'json/code', component: Fetch('https://www.reddit.com/search.json?q=keystonejs', ['json','code']) },
		{ path: 'fail', component: Fetch('https://www.npmjs.com/package/keystone', ['body','noscript']) }
    ]
})

Routes.push({ path: '*', component: Jade('/404') })

const home = Jade('/home');

const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: home },
    catchAll: { component: home },
    childRoutes: Routes
  }
]

export default routeConfig
