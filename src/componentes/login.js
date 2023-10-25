// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
// import fondo from '../img/fondo.png';
import { login, logout } from '../firebase/auth.js';


export const loginView = () => {
  const containerAll = document.createElement('div');
    containerAll.className = 'containerAll';
    const containerHome = document.createElement('section');
    containerHome.className = 'LoginContainer';
    containerAll.appendChild(containerHome);

  const imgLogo = document.createElement('img');
  imgLogo.alt = 'B-Music';
  imgLogo.src = logo;
  imgLogo.className = 'logo';
  containerHome.appendChild(imgLogo);

  // const imgFondo = document.createElement('img');
  // imgFondo.alt = 'Fondo';
  // imgFondo.src = fondo;
  // imgFondo.className = 'fondo';
  // containerHome.appendChild(imgFondo);

  const titleLogin = document.createElement('h2');
  titleLogin.textContent = 'Inicio de sesión';
  containerHome.appendChild(titleLogin);

  const inputMail = document.createElement('input');
  inputMail.setAttribute('placeholder', 'Alias o correo');
  inputMail.id = 'inputMail';
  containerHome.appendChild(inputMail);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Constraseña');
  inputPassword.id = 'inputPassword';
  containerHome.appendChild(inputPassword);

  const submitInfoLogin = document.createElement('button');
  submitInfoLogin.setAttribute('type', 'button');
  submitInfoLogin.setAttribute('value', 'submitInfoLogin');
  submitInfoLogin.innerText = 'Ingresar';
  submitInfoLogin.classList.add('ingresar');
  containerHome.appendChild(submitInfoLogin);

  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.setAttribute('type', 'button');
  buttonLoginGoogle.setAttribute('value', 'buttonLoginGoogle');
  buttonLoginGoogle.innerText = 'Inicia sesión con Google';
  buttonLoginGoogle.classList.add('google');
  containerHome.appendChild(buttonLoginGoogle);

  let currentUser;
  buttonLoginGoogle.addEventListener('click', async (e) => {
    try {
      login().then( res =>console.log(res));
      console.log('++++',currentUser );
    } catch (error) {console.log('---error')}
    ;
  });
  const buttonLogOut = document.createElement('button');
  buttonLogOut.setAttribute('type', 'button');
  buttonLogOut.setAttribute('value', 'buttonLogout');
  buttonLogOut.innerText = 'Cerrar sesión';
  buttonLogOut.classList.add('cerrar');
  containerHome.appendChild(buttonLogOut);
  buttonLogOut.addEventListener('click', (e) => {
    logout();
  });

  const askAccount = document.createElement('p');
  askAccount.textContent = '¿No tienes cuenta aún?';
  containerHome.appendChild(askAccount);

  const buttonNewAccount = document.createElement('button');
  buttonNewAccount.setAttribute('type', 'button');
  buttonNewAccount.setAttribute('value', 'buttonNewAccount');
  buttonNewAccount.innerText = 'Crear cuenta';
  buttonNewAccount.classList.add('crear');
  containerHome.appendChild(buttonNewAccount);

  return containerAll;
};
