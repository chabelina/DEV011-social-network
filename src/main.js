// Este es el punto de entrada de tu aplicacion

// import {myFunction} from './lib/index.js';
import { login } from './componentes/login.js';
import { error } from './componentes/error.js';
import { publications } from './componentes/publications.js';

const routes = [
  { path: '/', component: login },
  { path: '/error', component: error },
  { path: '/publications', component: publications },
];

const defaultRoute = '/lib/login';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  console.log(route);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    console.log(root.firstChild);
    if (root.firstChild != null) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
    // myFunction();
  } else {
    navigateTo('/lib/error');
  }
}

window.onpopstate = () => {
  console.log('--------------');
  navigateTo(window.location.pathname);
};

console.log('--------------', window.location.pathname || defaultRoute);
navigateTo(window.location.pathname || defaultRoute);
