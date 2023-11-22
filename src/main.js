// Este es el punto de entrada de tu aplicacion

// import {myFunction} from './lib/index.js';
import { loginView } from './componentes/login.js';
import { newAccount } from './componentes/newAccount.js';
import { error } from './componentes/error.js';
import { publications } from './componentes/publications.js';

const routes = [
  {
    path: '/',
    component: loginView,
  },
  {
    path: '/error',
    component: error,
  },
  {
    path: '/NewAccount',
    component: newAccount,
  },
  {
    path: '/publications',
    component: publications,
  },
];

const defaultRoute = '/';
const root = document.getElementById('root');

export function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  // console.log(route);
  // console.log(window.history.state);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (root.firstChild != null) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
    window.history.forward();
    window.history.back();
  } else {
    navigateTo('/error');
  }
  // console.log(window.history.state);
}

window.onpopstate = () => {
  // console.log('--------------');
  document.addEventListener('DOMContentLoaded', () => {
    navigateTo(window.location.pathname);
  });
};

// console.log('--------------', window.location.pathname || defaultRoute);
document.addEventListener('DOMContentLoaded', () => {
  navigateTo(window.location.pathname || defaultRoute);
});
