// aqui exportaras las funciones que necesites
import logo from '../img/logo.png'

export const newAccount = () => {
  const containerHome = document.createElement('section');
  containerHome.className = 'LoginContainer';

  const imgLogo = document.createElement('img');
  imgLogo.alt = "B-Music"
  imgLogo.setAttribute('src',logo)
  imgLogo.className = 'logo'
  containerHome.appendChild(imgLogo)

  const inputNickname = document.createElement('input');
  inputNickname.setAttribute('placeholder', 'Alias');
  inputNickname.id ='inputNickname'
  containerHome.appendChild(inputNickname);

  const inputMail = document.createElement('input');
  inputMail.setAttribute('placeholder', 'Correo');
  inputMail.id = 'inputMail'
  containerHome.appendChild(inputMail);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Constraseña');
  inputPassword.id = 'inputPassword'
  containerHome.appendChild(inputPassword);

  const buttonNewAccount = document.createElement('button');
  buttonNewAccount.setAttribute('type', 'button');
  buttonNewAccount.setAttribute('value', 'buttonNewAccount');
  buttonNewAccount.innerText = 'Crear cuanta';
  containerHome.appendChild(buttonNewAccount);

  return containerHome;
};
