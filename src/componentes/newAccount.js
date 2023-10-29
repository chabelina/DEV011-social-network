// aqui exportaras las funciones que necesites
import logo from '../img/logo.png';
import { createUser } from '../firebase/auth.js';
import { emailFormat } from '../validations/validLogin';
// import { insertInfoNewUserDB } from '../firebase/firestore';

export const newAccount = () => {
  let currentUser;

  const containerAll = document.createElement('div');
  containerAll.className = 'containerAll';
  const containerHome = document.createElement('section');
  containerHome.className = 'LoginContainer';
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

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Constraseña');
  inputPassword.type = 'password';
  inputPassword.id = 'inputPassword';
  formInputCreateAccount.appendChild(inputPassword);

  const showPasswordContainer = document.createElement('div');
  showPasswordContainer.id = "showPasswordContainer";
  const showPassword = document.createElement('input');
  showPassword.type = 'checkbox';
  showPassword.id = 'showPassword';
  const showPasswordText = document.createElement('label');
  showPasswordText.for = 'showPassword';
  showPasswordText.innerHTML = 'Mostrar contraseña';
  showPasswordContainer.appendChild(showPassword);
  showPasswordContainer.appendChild(showPasswordText);
  formInputCreateAccount.appendChild(showPasswordContainer);
  showPassword.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });

  const buttonCreateNewAccount = document.createElement('button');
  buttonCreateNewAccount.setAttribute('type', 'button');
  buttonCreateNewAccount.setAttribute('value', 'buttonCreateNewAccount');
  buttonCreateNewAccount.innerText = 'Crear cuenta';
  buttonCreateNewAccount.classList.add('ingresar');
  formInputCreateAccount.appendChild(buttonCreateNewAccount);
  buttonCreateNewAccount.addEventListener('click', async (e) => {
    // if (inputEmail.value !== '' && inputPassword.value !== ''){
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
