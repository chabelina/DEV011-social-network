// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
import { 
  loginEmail, 
  loginGoogle, 
  logout
} from '../firebase/auth.js';
import { emailFotmat } from '../validations/validLogin';

// import fondo from '../img/fondo.png';
export const loginView = (navigateTo) => {
  let currentUser;

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

  const formInputLogin = document.createElement('form')
  formInputLogin.method = 'get';

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Alias o correo');
  inputEmail.id = 'inputEmail';
  formInputLogin.appendChild(inputEmail);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Constraseña');
  inputPassword.type = 'password';
  inputPassword.id = 'inputPassword';
  formInputLogin.appendChild(inputPassword);

  const showPassword = document.createElement('input')
  showPassword.type = 'checkbox';
  showPassword.id = 'showPassword'
  const showPasswordText = document.createElement('label') 
  showPasswordText.for = 'showPassword'
  showPasswordText.innerHTML = 'Mostrar contraseña'
  formInputLogin.appendChild(showPassword)
  formInputLogin.appendChild(showPasswordText)
  showPassword.addEventListener('click',()=>{
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
    } else {
      inputPassword.type = "password";
    }
  })
  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('type', 'button');
  buttonLogin.setAttribute('value', 'buttonInfoLogin');
  buttonLogin.innerText = 'Ingresar';
  buttonLogin.classList.add('ingresar');
  formInputLogin.appendChild(buttonLogin);
/*   buttonLogin.addEventListener('click', async (e) => {
    try {
      currentUser = await loginEmail(inputEmail, inputPassword);
      console.log('%%%%%%%%%%%', currentUser);
    } catch (error) {
      console.log('---error');
    }
  }); */
  
  buttonLogin.addEventListener('click',(e)=>{
    if (inputEmail.value.match('@') && !emailFotmat(inputEmail.value)){
      inputEmail.style.border ="3px solid red";
    } else {
      inputEmail.style.border ="1px solid rgb(28, 28, 28)";
    }
    
  })

  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.setAttribute('type', 'button');
  buttonLoginGoogle.setAttribute('value', 'buttonLoginGoogle');
  buttonLoginGoogle.innerText = 'Inicia sesión con Google';
  buttonLoginGoogle.classList.add('google');
  formInputLogin.appendChild(buttonLoginGoogle);
  buttonLoginGoogle.addEventListener('click', async (e) => {
    try {
      // login().then( res =>console.log(res));
      currentUser = await loginGoogle();
      console.log('++++', currentUser);
    } catch (error) {
      console.log('---error');
    }
  });

  const buttonLogOut = document.createElement('button');
  buttonLogOut.setAttribute('type', 'button');
  buttonLogOut.setAttribute('value', 'buttonLogout');
  buttonLogOut.innerText = 'Cerrar sesión';
  buttonLogOut.classList.add('cerrar');
  formInputLogin.appendChild(buttonLogOut);
  buttonLogOut.addEventListener('click', async (e) => {
    currentUser = await logout();
    console.log('.....', currentUser);
  });

  const askAccount = document.createElement('p');
  askAccount.textContent = '¿No tienes cuenta aún?';
  formInputLogin.appendChild(askAccount);

  const buttonNewAccount = document.createElement('button');
  buttonNewAccount.setAttribute('type', 'button');
  buttonNewAccount.setAttribute('value', 'buttonNewAccount');

  buttonNewAccount.innerText = 'Crear cuenta';
  buttonNewAccount.classList.add('crear');

  formInputLogin.appendChild(buttonNewAccount);
  buttonNewAccount.addEventListener('click', () => {
    navigateTo('/NewAccount');
  });

  containerHome.appendChild(formInputLogin)

  return containerAll;
};