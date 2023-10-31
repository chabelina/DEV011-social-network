// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
import  mostrar  from '../img/mostrar.svg';
import  noMostrar  from '../img/no-mostrar.svg';
import { createUser } from '../firebase/auth.js';
import { emailFormat } from '../validations/validLogin';
// import { insertInfoNewUserDB } from '../firebase/firestore';

export const newAccount = () => {
  let currentUser;

  const containerAll = document.createElement('div');
  containerAll.className = 'containerAll';
  const containerHome = document.createElement('section');
  containerHome.className = 'registryContainer';
  containerAll.appendChild(containerHome);

  const imgLogo = document.createElement('img');
  imgLogo.alt = 'B-Music';
  imgLogo.setAttribute('src', logo);
  imgLogo.className = 'logo';
  containerHome.appendChild(imgLogo);

  const formInputCreateAccount = document.createElement('form');
  formInputCreateAccount.id = 'registerForm';
  formInputCreateAccount.method = 'get';

  const inputNickname = document.createElement('input');
  inputNickname.setAttribute('placeholder', 'Alias');
  inputNickname.id = 'inputNickname';
  formInputCreateAccount.appendChild(inputNickname);

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Correo');
  inputEmail.id = 'inputEmail';
  formInputCreateAccount.appendChild(inputEmail);

  const passwordContainer = document.createElement('div');
  passwordContainer.classList.add('password-container'); // Agrega una clase para contener los elementos
  formInputCreateAccount.appendChild(passwordContainer);
  
  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('placeholder', 'Contraseña');
  passwordInput.type = 'password';
  passwordInput.id = 'inputPassword';
  passwordContainer.appendChild(passwordInput);
  
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
  hidePasswordIcon.src = noMostrar; // Reemplaza 'ruta_de_icono_no_mostrar' con la ruta real del icono de "no mostrar"
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
    showPasswordIcon.style.display = isPasswordVisible ? 'flex' : 'none'
  });
  

  const buttonCreateNewAccount = document.createElement('button');
  buttonCreateNewAccount.setAttribute('type', 'button');
  buttonCreateNewAccount.setAttribute('value', 'buttonCreateNewAccount');
  buttonCreateNewAccount.innerText = 'Crear cuenta';
  buttonCreateNewAccount.classList.add('ingresar');
  formInputCreateAccount.appendChild(buttonCreateNewAccount);
  buttonCreateNewAccount.addEventListener('click', async (e) => {
    // if (inputEmail.value !== '' && passwordContainer.value !== ''){
    currentUser = await createUser(inputEmail.value, inputPassword.value);
    console.log(inputEmail.value, inputPassword.value, currentUser);

    //  insertInfoNewUserDB(inputNickname.value, inputEmail.value, inputPassword.value).then(()=>console.log('Welcome'))
    // }else{
    //  const insertInfo = document.createElement('p');
    //  insertInfo.textContent = 'Inserte la información solicitada';
    //  containerHome.appendChild(insertInfo);
    // }
  });
  /* buttonCreateNewAccount.addEventListener('click',(e)=>{
    if (!emailFotmat(inputEmail.value)){
      inputEmail.style.border ='3px solid red';
    } else {
      inputEmail.style.border ='1px solid rgb(28, 28, 28)';
    }

  }); */

  /*     if (!passwordFormat(inputPassword.value)){ // Primero valida si el formato del password es invalido...
      inputPassword.style.border ='3px solid red'; // en ese caso pone la caja en rojo
    } else { // en caso contrario...
      inputPassword.style.border ='1px solid rgb(28, 28, 28)'; // la regresa a su formato original
    //console.log(inputPassword.value);
    }  */

  if (!emailFormat(inputEmail.value)) {
    // Valida si el formato del correo es incorrecto...
    inputEmail.style.border = '3px solid red'; // y pone el cuadro en rojo
  } else {
    // en caso contrario lo regresa al formato original
    inputEmail.style.border = '1px solid rgb(28, 28, 28)';
  }

  /*     loginEmail(inputEmail.value, inputPassword.value).then((res)=>res).catch((e)=>console.log('123456',e.message.substring(
      e.message.indexOf('/') + 1,e.message.lastIndexOf(')')),'---'))
 */

  containerHome.appendChild(formInputCreateAccount);

  return containerAll;
};
