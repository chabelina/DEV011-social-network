// Este es el punto de entrada de tu aplicacion

// import {myFunction} from './lib/index.js';
import { loginView } from './componentes/login.js';
import { newAccount } from './componentes/newAccount.js';
import { error } from './componentes/error.js';

const routes = [
  { 
    path: '/', 
    component: loginView 
  },
  { 
    path: '/error', 
    component: error 
  },  
  { 
    path: '/NewAccount', 
    component: newAccount 
  },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  //console.log(route);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    //console.log(root.firstChild);
    if (root.firstChild != null) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
    // myFunction();
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  //console.log('--------------');
  document.addEventListener("DOMContentLoaded", function (){
    navigateTo(window.location.pathname);
  });
};

//console.log('--------------', window.location.pathname || defaultRoute);
document.addEventListener("DOMContentLoaded", function (){
  navigateTo(window.location.pathname || defaultRoute)
});
