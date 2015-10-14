import App from 'common/render';
import Jade from 'pages/jade';
import Page from 'pages/example';
import Fetch from 'pages/example/example';
import {languages, routes} from 'config';

let Routes = []

for (let value of routes) {
   let component = value.fetch ?  Page(value.fetch, value.returnTypes) : Jade(value.path); 
   Routes.push({ path: value.path, component: component })
}

const main = Fetch('https://developer.mozilla.org/en-US/docs/Web/API/Body', 'noscript');

Routes.push({ 
	path: '/fetch', 
	component: Page,
	indexRoute: { component: main },
    catchAll: { component: main },
    childRoutes: [
		{ path: '/text', component: Fetch('https://developer.mozilla.org/en-US/docs/Web/API/Body', ['body','noscript','clean']) },
		{ path: '/body', component: Fetch('https://developer.mozilla.org/en-US/docs/Web/API/Body', ['body','noscript']) },
		{ path: '/json/code', component: Fetch('https://www.reddit.com/search.json?q=keystonejs', ['json','code']) },
		{ path: '/markdown', component: Fetch('https://raw.githubusercontent.com/keystonejs/keystone/master/README.md', 'markdown') },
		{ path: '/fail', component: Fetch('https://www.npmjs.com/package/keystone', ['body','noscript']) }
    ]
})
https://raw.githubusercontent.com/keystonejs/keystone/master/README.md
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
