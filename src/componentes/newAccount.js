// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
import { createUser } from '../firebase/auth.js';
import { inputsFormats } from '../validations/validLogin';
//import { async } from 'regenerator-runtime';
// import { insertInfoNewUserDB } from '../firebase/firestore';

// Función que renderea la vista de inicio de sesión
export const newAccount = (navigateTo) => {
  let currentUser; // inicializamos un usuario
  
  // Contenedor general
  const containerAll = document.createElement('div');
  containerAll.className = 'containerAll';

  // from que contiene los inputs y submits necesarios para crear una cuenta nueva
  const formInputCreateAccount = document.createElement('form')
  formInputCreateAccount.method = 'get';
  formInputCreateAccount.className = 'formLogin';

  // Logo de B-Music
  const imgLogo = document.createElement('img');
  imgLogo.alt = "B-Music"
  imgLogo.setAttribute('src',logo)
  imgLogo.className = 'logo'
  formInputCreateAccount.appendChild(imgLogo)

  // Caja de ingreso de Alias
  const inputNickname = document.createElement('input');
  inputNickname.setAttribute('placeholder', 'Alias');
  inputNickname.id = 'inputNickname';
  formInputCreateAccount.appendChild(inputNickname);

  // Caja de ingreso de correo
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Correo');
  inputEmail.id = 'inputEmail'
  inputEmail.autocomplete = 'inputEmail';
  formInputCreateAccount.appendChild(inputEmail);

  // Caja de ingreso de contraseña
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Constraseña');
  inputPassword.type = "password"
  inputPassword.id = 'inputPassword'
  inputPassword.autocomplete = 'current-password';
  formInputCreateAccount.appendChild(inputPassword);
  // Mensaje de error al ingresar datos incorrectos
  const errorInvalidInput = document.createElement('p');
  errorInvalidInput.class = 'errorMessage';
  formInputCreateAccount.append(inputPassword, errorInvalidInput);

  // Check para mostrar contraseña
  const showPasswordContainer = document.createElement('div');
  showPasswordContainer.id = 'showPasswordContainer';
  const showPassword = document.createElement('input');
  showPassword.type = 'checkbox';
  showPassword.id = 'showPassword';
  const showPasswordText = document.createElement('label'); // etiqueta asociada al check showPassword
  showPasswordText.for = 'showPassword';
  showPasswordText.innerHTML = 'Mostrar contraseña';
  showPasswordContainer.appendChild(showPassword);
  showPasswordContainer.appendChild(showPasswordText);
  formInputCreateAccount.appendChild(showPasswordContainer);
  showPassword.addEventListener('click', () => { // cuando da click cambia su tipo a text para que se muestre
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password'; // En caso de que su tipo sea text, lo regresa a password
    }
  });

  // Botón para crear cuenta
  const buttonCreateNewAccount = document.createElement('button');
  buttonCreateNewAccount.setAttribute('type', 'button');
  buttonCreateNewAccount.setAttribute('value', 'buttonCreateNewAccount');
  buttonCreateNewAccount.innerText = 'Crear cuenta';
  buttonCreateNewAccount.classList.add('ingresar');
  formInputCreateAccount.appendChild(buttonCreateNewAccount);
  buttonCreateNewAccount.addEventListener('click', async(e) => {
    try{  
      inputsFormats(inputEmail, inputPassword); // valida que las entradas sean correctas...
      currentUser = await createUser(inputEmail.value, inputPassword.value)  //Crea el usuario e ingresa
      navigateTo('/publications'); // Se mueve a la vista de publicaciones
    }catch(e){
      errorInvalidInput.innerText = e.message;  // si las entradas son malas, muestra el msj de error en pantalla
    }
  });

  containerAll.appendChild(formInputCreateAccount); //Se guarda todo el form dentro del container general

  return containerAll;
};
