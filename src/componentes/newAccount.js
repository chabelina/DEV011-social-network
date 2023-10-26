// aqui exportaras las funciones que necesites
import logo from '../img/logo.png'
import { loginEmail } from '../firebase/auth.js';
// import { insertInfoNewUserDB } from '../firebase/firestore';
import { emailFotmat } from '../validations/validLogin';

export const newAccount = () => {
  let currentUser; 
  const containerAll = document.createElement('div');
  containerAll.className = 'containerAll';
  const containerHome = document.createElement('section');
  containerHome.className = 'LoginContainer';
  containerAll.appendChild(containerHome);


  const imgLogo = document.createElement('img');
  imgLogo.alt = "B-Music"
  imgLogo.setAttribute('src',logo)
  imgLogo.className = 'logo'
  containerHome.appendChild(imgLogo)

  const inputNickname = document.createElement('input');
  inputNickname.setAttribute('placeholder', 'Alias');
  inputNickname.id ='inputNickname'
  containerHome.appendChild(inputNickname);

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Correo');
  inputEmail.id = 'inputEmail'
  containerHome.appendChild(inputEmail);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Constraseña');
  inputPassword.type = "password"
  inputPassword.id = 'inputPassword'
  containerHome.appendChild(inputPassword);

  const showPassword = document.createElement('input')
  showPassword.type = 'checkbox';
  showPassword.id = 'showPassword'
  const showPasswordText = document.createElement('label') 
  showPasswordText.for = 'showPassword'
  showPasswordText.innerHTML = 'Mostrar contraseña'
  containerHome.appendChild(showPassword)
  containerHome.appendChild(showPasswordText)
  showPassword.addEventListener('click',()=>{
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
    } else {
      inputPassword.type = "password";
    }
  });

  const buttonCreateNewAccount = document.createElement('button');
  buttonCreateNewAccount.setAttribute('type', 'button');
  buttonCreateNewAccount.setAttribute('value', 'buttonCreateNewAccount');
  buttonCreateNewAccount.innerText = 'Crear cuenta';
  containerHome.appendChild(buttonCreateNewAccount);
 /*  buttonCreateNewAccount.addEventListener('click', async(e) => {
    //if (inputEmail.value !== '' && inputPassword.value !== ''){
      currentUser = await loginEmail(inputEmail.value, inputPassword.value)
      console.log(inputEmail.value, inputPassword.value,currentUser);
    //  insertInfoNewUserDB(inputNickname.value, inputEmail.value, inputPassword.value).then(()=>console.log('Welcome'))
    //}else{
    //  const insertInfo = document.createElement('p');
    //  insertInfo.textContent = 'Inserte la información solicitada';
    //  containerHome.appendChild(insertInfo);
    //}
  }); */
  buttonCreateNewAccount.addEventListener('click',(e)=>{
    if (!emailFotmat(inputEmail.value)){
      inputEmail.style.border ="3px solid red";
    } else {
      inputEmail.style.border ="1px solid rgb(28, 28, 28)";
    }
    
  });

  return containerHome;
};


