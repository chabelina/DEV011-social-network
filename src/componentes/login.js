// aqui exportaras las funciones que necesites

export const login = () => {
  const containerHome = document.createElement('section');
  containerHome.className = 'LoginContainer';

  const title = document.createElement('h2');
  title.textContent = 'Inicio de sesión';
  containerHome.appendChild(title);

  const inputNickname = document.createElement('input');
  inputNickname.setAttribute('placeholder', 'Nickname');
  containerHome.appendChild(inputNickname);

  const inputMail = document.createElement('input');
  inputMail.setAttribute('placeholder', 'Correo');
  containerHome.appendChild(inputMail);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Constraseña');
  containerHome.appendChild(inputPassword);

  const submitInfoLogin = document.createElement('button');
  submitInfoLogin.setAttribute('type', 'button');
  submitInfoLogin.setAttribute('value', 'submitInfoLogin');
  submitInfoLogin.innerText = 'Inicia sesión';
  containerHome.appendChild(submitInfoLogin);

  const loginGoogle = document.createElement('button');
  loginGoogle.setAttribute('type', 'button');
  loginGoogle.setAttribute('value', 'submitInfoLogin');
  loginGoogle.innerText = 'Inicia sesión con Google';
  containerHome.appendChild(loginGoogle);

  return containerHome;
};
