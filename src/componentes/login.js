// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
import { login, logout } from '../firebase/auth.js';

export const loginView = () => {
  const containerHome = document.createElement('section');
  containerHome.className = 'LoginContainer';

  const imgLogo = document.createElement('img');
  imgLogo.alt = 'B-Music';
  imgLogo.src = logo;
  imgLogo.className = 'logo';
  containerHome.appendChild(imgLogo);

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
  containerHome.appendChild(submitInfoLogin);

  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.setAttribute('type', 'button');
  buttonLoginGoogle.setAttribute('value', 'buttonLoginGoogle');
  buttonLoginGoogle.innerText = 'Inicia sesión con Google';
  containerHome.appendChild(buttonLoginGoogle);

  let currentUser;
  buttonLoginGoogle.addEventListener('click', async (e) => {
    try {
      //login().then( res =>console.log(res));
      currentUser = await login()
      console.log('++++',currentUser );
    } catch (error) {console.log('---error')}
    ;
  });

  const buttonLogOut = document.createElement('button');
  buttonLogOut.setAttribute('type', 'button');
  buttonLogOut.setAttribute('value', 'buttonLogout');
  buttonLogOut.innerText = 'Cerrar sesión';
  containerHome.appendChild(buttonLogOut);
  buttonLogOut.addEventListener('click', async(e) => {
    currentUser = await logout();
    console.log('.....',currentUser );
  });

  const askAccount = document.createElement('p');
  askAccount.textContent = '¿No tienes cuenta aún?';
  containerHome.appendChild(askAccount);

  const buttonNewAccount = document.createElement('button');
  buttonNewAccount.setAttribute('type', 'button');
  buttonNewAccount.setAttribute('value', 'buttonNewAccount');
  buttonNewAccount.innerText = 'Crear cuenta';
  containerHome.appendChild(buttonNewAccount);
  buttonNewAccount.addEventListener('click', ()=>{
    console.log('.....',currentUser );
  });

  return containerHome;
};