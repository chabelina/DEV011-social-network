// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
import { loginEmail, loginGoogle, logout } from '../firebase/auth.js';
import { emailFormat } from '../validations/validLogin'; //passwordFormat
import { allPosts, guardarPost } from '../firebase/firestore.js';
import { async } from 'regenerator-runtime';

export const loginView = (navigateTo) => {
  // Función que renderea la vista de inicio de sesión
  let currentUser = {email : ''}; // inicializamos un usuario vacio

  // Contenedor general
  const containerAll = document.createElement('div');
  containerAll.className = 'containerAll';

  // from que contiene los inputs y submits necesarios para iniciar sesión
  const formInputLogin = document.createElement('form');
  formInputLogin.method = 'get';
  formInputLogin.className = 'formLogin';

  // Logo de B-Music
  const imgLogo = document.createElement('img');
  imgLogo.alt = 'B-Music';
  imgLogo.src = logo;
  imgLogo.className = 'logo';
  formInputLogin.appendChild(imgLogo);

  // Título de inicio de sesión
  const titleLogin = document.createElement('h2');
  titleLogin.textContent = 'Inicio de sesión';
  formInputLogin.appendChild(titleLogin);

  // Caja de ingreso de correo
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Correo');// Texto que se muestra en la caja para indicar qué deben ingresar
  inputEmail.id = 'inputEmail';
  inputEmail.autocomplete = 'inputEmail';
  formInputLogin.appendChild(inputEmail);

  // Caja de ingreso de contraseña
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Constraseña'); // Texto que se muestra en la caja para indicar qué deben ingresar
  inputPassword.type = 'password'; // con este tipo oculta en automático el contenido de la caja
  inputPassword.id = 'inputPassword';
  inputPassword.autocomplete = 'current-password';
  formInputLogin.appendChild(inputPassword);

  // Check para mostrar contraseña
  const showPassword = document.createElement('input');
  showPassword.type = 'checkbox';
  showPassword.id = 'showPassword';
  const showPasswordText = document.createElement('label'); //etiqueta asociada al check showPassword
  showPasswordText.for = 'showPassword';
  showPasswordText.innerHTML = 'Mostrar contraseña';
  formInputLogin.append(showPassword, showPasswordText);
  showPassword.addEventListener('click', () => { // cuando da click cambia su tipo a text para que se muestre
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password'; // En caso de que su tipo sea text, lo regresa a password
    }
  });

  // Botón de inicio de sesión con Email
  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('type', 'button');
  buttonLogin.setAttribute('value', 'buttonInfoLogin');
  buttonLogin.innerText = 'Iniciar sesión';
  buttonLogin.classList.add('ingresar');
  // Mensaje de error al ingresar con email
  const errorMessage = document.createElement('p');
  errorMessage.id = 'errorMessage';
  formInputLogin.append(buttonLogin, errorMessage);
  // Definimos la funcionalidad al hacer click con una función asincrona, porque usamos funciones asincronas adentro
  buttonLogin.addEventListener('click', async () => { 
    try {
      currentUser = await loginEmail(inputEmail, inputPassword); // inicia sesión con la función asincrona loginEmail
      // console.log(currentUser, '--------');
      return currentUser;
    } catch(e) {
      errorMessage.innerText = e.message;  // si no logra inicar sesión muestra el msj de error en pantalla
      // console.log(e.message,"....");
      return new Error(e.message);
    }
  });

  // Botón para loguerase con Google
  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.setAttribute('type', 'button');
  buttonLoginGoogle.setAttribute('value', 'buttonLoginGoogle');
  buttonLoginGoogle.innerText = 'Inicia sesión con Google';
  buttonLoginGoogle.classList.add('google');
  formInputLogin.appendChild(buttonLoginGoogle);
  buttonLoginGoogle.addEventListener('click', async (e) => { // se declara una funcion asincrona porque loginGoogle es promesa
    try {
      currentUser = await loginGoogle(); // intenta ingresar
    } catch (error) {
      return new Error(error) // si no logra ingresar manda un error
    }
  });

  // Boton de cerrar sesión: SE TIENE QUE MOVER A LA VISTA CORRESPONDIENTE CUANDO SE TENGA!!!
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

  // Pregunta sobre si tiene una cuenta
  const askAccount = document.createElement('p');
  askAccount.textContent = '¿No tienes cuenta aún?';
  formInputLogin.appendChild(askAccount);

  // Boton para mover a vista 'nueva cuenta'
  const buttonNewAccount = document.createElement('button');
  buttonNewAccount.setAttribute('type', 'button');
  buttonNewAccount.setAttribute('value', 'buttonNewAccount');
  buttonNewAccount.innerText = 'Crear cuenta';
  buttonNewAccount.classList.add('crear');
  formInputLogin.appendChild(buttonNewAccount);
  buttonNewAccount.addEventListener('click', () => { // al hacer click se renderea la vista del archivo NewAccount
    navigateTo('/NewAccount');
  });

  containerAll.appendChild(formInputLogin); //Se guarda todo el form dentro del container general

  return containerAll;
};
