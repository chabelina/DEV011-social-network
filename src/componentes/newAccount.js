// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
import mostrar from '../img/mostrar.svg';
import noMostrar from '../img/no-mostrar.svg';
import mostrar from '../img/mostrar.svg';
import noMostrar from '../img/no-mostrar.svg';
import { createUser } from '../firebase/auth.js';
import { inputsFormats } from '../validations/validLogin';
// import { async } from 'regenerator-runtime'reset;
// import { insertInfoNewUserDB } from '../firebase/firestore';

// Función que renderea la vista de inicio de sesión
export const newAccount = (navigateTo) => {
  let currentUser; // inicializamos un usuario

  // Contenedor general
  const containerAll = document.createElement('div');
  containerAll.className = 'containerAll';

  // from que contiene los inputs y submits necesarios para crear una cuenta nueva
  const formInputCreateAccount = document.createElement('form');
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

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Correo');
  inputEmail.id = 'inputEmail';
  inputEmail.autocomplete = 'inputEmail';  
  formInputCreateAccount.appendChild(inputEmail);

  const passwordContainer = document.createElement('div');
  //passwordContainer.id = 'inputPasswordContainer'; // Agrega una clase para contener los elementos
  passwordContainer.classList.add('inputs');
  formInputCreateAccount.appendChild(passwordContainer);

  // Caja de ingreso de contraseña  
  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('placeholder', 'Contraseña');
  passwordInput.type = 'password';
  passwordInput.id = 'inputPassword';
  inputPassword.autocomplete = 'current-password';  
  passwordContainer.appendChild(passwordInput);
   // Mensaje de error al ingresar con email
  const errorInvalidPassword = document.createElement('p');
  errorInvalidPassword.id = 'errorMessage';
  formInputCreateAccount.append(inputPassword, errorInvalidPassword); 

  // Check para mostrar contraseña
  const showPasswordContainer = document.createElement('div');
  showPasswordContainer.classList.add('show-password-container'); // Agrega una clase para contener los elementos
  passwordContainer.appendChild(showPasswordContainer);
  
  const showPassword = document.createElement('button'); // Cambiado de input a button para que no saliera un espacio en blanco
  showPassword.type = 'button'; // Cambiado de 'checkbox' a 'button'
  showPassword.id = 'showPassword';
  showPassword.classList.add('show-password-button'); // Agrega una clase para estilizar el botón
  passwordInput.appendChild(showPassword)
  showPasswordContainer.appendChild(showPassword);
  
  const hidePasswordIcon = document.createElement('img');
  hidePasswordIcon.src = noMostrar;
  // Reemplaza 'ruta_de_icono_no_mostrar' con la ruta real del icono de "no mostrar"
  hidePasswordIcon.alt = 'Ocultar contrase;a'
  hidePasswordIcon.classList.add('hide-password-icon'); // Agrega una clase para estilizar el icono
  hidePasswordIcon.style.display = 'none'
  showPassword.appendChild(hidePasswordIcon);

  const showPasswordIcon = document.createElement('img');
  showPasswordIcon.src = mostrar; // Reemplaza 'ruta_de_icono_mostrar' con la ruta real del icono de "mostrar"
  showPasswordIcon.alt = 'Mostrar contrase;a'
  showPasswordIcon.classList.add('show-password-icon'); // Agrega una clase para estilizar el icono
  showPassword.appendChild(showPasswordIcon);

  showPassword.addEventListener('click', () => {
    const isPasswordVisible = passwordInput.type === 'text';
    
    passwordInput.type = isPasswordVisible ? 'password' : 'text';
    hidePasswordIcon.style.display = isPasswordVisible ? 'none' : 'flex';
    showPasswordIcon.style.display = isPasswordVisible ? 'flex' : 'none';
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
