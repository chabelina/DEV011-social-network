// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
import mostrar from '../img/mostrar.svg';
import noMostrar from '../img/no-mostrar.svg';
import { createUser } from '../firebase/auth.js';
import { inputsFormats } from '../validations/validLogin';
import { allUsers, insertNewUserDB } from '../firebase/firestore';

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
  imgLogo.alt = 'B-Music';
  imgLogo.setAttribute('src', logo);
  imgLogo.className = 'logo';
  formInputCreateAccount.appendChild(imgLogo);

  // Caja de ingreso de Alias
  const inputNickname = document.createElement('input');
  inputNickname.setAttribute('placeholder', 'Alias');
  inputNickname.maxLength = 15;
  inputNickname.id = 'inputNickname';
  formInputCreateAccount.appendChild(inputNickname);

  // Caja de ingreso de correo
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Correo');

  inputEmail.id = 'inputEmail';
  inputEmail.autocomplete = 'inputEmail';
  formInputCreateAccount.appendChild(inputEmail);

  const passwordContainer = document.createElement('div');
  // passwordContainer.id = 'inputPasswordContainer';
  // Agrega una clase para contener los elementos
  passwordContainer.classList.add('passwordContainer');
  formInputCreateAccount.appendChild(passwordContainer);

  // Caja de ingreso de contraseña
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.type = 'password';
  inputPassword.classList.add('inputPassword');
  inputPassword.autocomplete = 'current-password';
  passwordContainer.appendChild(inputPassword);
  // Mensaje de error al ingresar con email
  const errorInvalidPassword = document.createElement('p');
  errorInvalidPassword.id = 'errorMessage';
  formInputCreateAccount.append(errorInvalidPassword);

  // Check para mostrar contraseña
  /* const showPasswordContainer = document.createElement('div');
  showPasswordContainer.id = 'showPasswordContainer';
  // Agrega una clase para contener los elementos
  passwordContainer.appendChild(showPasswordContainer); */

  const showPassword = document.createElement('button'); // Cambiado de input a button para que no saliera un espacio en blanco
  showPassword.type = 'button'; // Cambiado de 'checkbox' a 'button'
  showPassword.id = 'showPassword';

  passwordContainer.appendChild(inputPassword);
  passwordContainer.appendChild(showPassword);

  const hidePasswordIcon = document.createElement('img');
  hidePasswordIcon.src = noMostrar;
  // Reemplaza 'ruta_de_icono_no_mostrar' con la ruta real del icono de 'no mostrar'
  hidePasswordIcon.alt = 'Ocultar contraseña';
  hidePasswordIcon.classList.add('hide-password-icon'); // Agrega una clase para estilizar el icono
  hidePasswordIcon.style.display = 'none';
  showPassword.appendChild(hidePasswordIcon);

  const showPasswordIcon = document.createElement('img');
  showPasswordIcon.src = mostrar;
  // Reemplaza 'ruta_de_icono_mostrar' con la ruta real del icono de 'mostrar'
  showPasswordIcon.alt = 'Mostrar contrase;a';
  showPasswordIcon.classList.add('show-password-icon'); // Agrega una clase para estilizar el icono
  showPasswordIcon.style.display = 'flex';
  showPassword.appendChild(showPasswordIcon);

  showPassword.addEventListener('click', () => {
    const isPasswordVisible = inputPassword.type === 'text';

    inputPassword.type = isPasswordVisible ? 'password' : 'text';
    hidePasswordIcon.style.display = isPasswordVisible ? 'none' : 'flex';
    showPasswordIcon.style.display = isPasswordVisible ? 'flex' : 'none';
  });

  // Botón para crear cuenta
  const buttonCreateNewAccount = document.createElement('button');
  buttonCreateNewAccount.id = 'newAccountButton';
  buttonCreateNewAccount.setAttribute('type', 'button');
  buttonCreateNewAccount.setAttribute('value', 'buttonCreateNewAccount');
  buttonCreateNewAccount.innerText = 'Crear cuenta';
  buttonCreateNewAccount.classList.add('standarButton');
  formInputCreateAccount.appendChild(buttonCreateNewAccount);

  buttonCreateNewAccount.addEventListener('click', async () => {
    try {
      inputsFormats(inputEmail, passwordContainer); // valida que las entradas sean correctas...
      currentUser = await createUser(inputEmail.value, inputPassword.value);
      // console.log(currentUser);
      await insertNewUserDB(inputNickname.value, currentUser.uid, allUsers);
      // Crea el usuario e ingresa
      navigateTo('/publications'); // Se mueve a la vista de publicaciones
      return currentUser;
    } catch (e) {
      errorInvalidPassword.innerText = e.message;
      return errorInvalidPassword;
      // si las entradas son malas, muestra el msj de error en pantalla
    }
  });

  containerAll.appendChild(formInputCreateAccount);
  // Se guarda todo el form dentro del container general

  return containerAll;
};
