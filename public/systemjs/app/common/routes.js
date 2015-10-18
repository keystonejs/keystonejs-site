import App from 'common/render';
import Jade from 'pages/jade';
import Page from 'pages/learn';
import Page2 from 'pages/example';
import Fetch from 'pages/example/example';
import {languages, routes} from 'config';

let Routes = []

for (let value of routes) {
   let component = value.fetch ?  Page2(value.fetch, value.returnTypes) : Jade(value.path); 
   Routes.push({ path: value.path, component: component })
}

const main = Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/README.md', 'markdown');

Routes.push({ 
	path: '/docs/learn/reference', 
	component: Page,
	indexRoute: { component: main },
    catchAll: { component: main },
    childRoutes: [
		{ path: 'readme', component: Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/README.md', 'markdown') },
		{ path: 'roadmap', component: Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/ROADMAP.md', 'markdown') },
		{ path: 'history', component: Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/HISTORY.md', 'markdown') },
		{ path: 'contributing', component: Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/CONTRIBUTING.md', 'markdown') },
		{ path: 'text', component: Fetch('https://developer.mozilla.org/en-US/docs/Web/API/Body', ['body','noscript','clean']) },
		{ path: 'body', component: Fetch('https://developer.mozilla.org/en-US/docs/Web/API/Body', ['body','noscript']) },
		{ path: 'noscript', component: Fetch('https://developer.mozilla.org/en-US/docs/Web/API/Body', ['noscript']) },
		{ path: 'json/code', component: Fetch('https://www.reddit.com/search.json?q=keystonejs', ['json','code']) },
		{ path: 'fail', component: Fetch('https://www.npmjs.com/package/keystone', ['body','noscript']) }
    ]
})
Routes.push({ 
	path: '/fetch', 
	component: Page2,
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

Routes.push({ path: '*', component: Jade('404') })

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
