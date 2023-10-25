// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
import { loginGoogle, logout } from '../firebase/auth.js';

export const loginView = (navigateTo) => {
  let currentUser;

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

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Alias o correo');
  inputEmail.id = 'inputEmail';
  containerHome.appendChild(inputEmail);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Constraseña');
  inputPassword.id = 'inputPassword';
  containerHome.appendChild(inputPassword);

  const buttonInfoLogin = document.createElement('button');
  buttonInfoLogin.setAttribute('type', 'button');
  buttonInfoLogin.setAttribute('value', 'buttonInfoLogin');
  buttonInfoLogin.innerText = 'Ingresar';
  containerHome.appendChild(buttonInfoLogin);
  buttonInfoLogin.addEventListener('click', async(e)=>{
    try{
      currentUser = await loginEmail(inputEmail,inputPassword);
      console.log('%%%%%%%%%%%',currentUser);
    } catch (error){
      console.log('---error')
    }
  });

  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.setAttribute('type', 'button');
  buttonLoginGoogle.setAttribute('value', 'buttonLoginGoogle');
  buttonLoginGoogle.innerText = 'Inicia sesión con Google';
  containerHome.appendChild(buttonLoginGoogle);

  buttonLoginGoogle.addEventListener('click', async (e) => {
    try {
      //login().then( res =>console.log(res));
      currentUser = await loginGoogle()
      console.log('++++',currentUser );
    } catch (error) {
      console.log('---error');
    }
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
  buttonNewAccount.id = buttonNewAccount;
  buttonNewAccount.innerText = 'Crear cuenta';
  containerHome.appendChild(buttonNewAccount);
  buttonNewAccount.addEventListener('click',()=>{
    navigateTo('/NewAccount')
  })

  return containerHome;
};