import {
  insertPostDB,
  allPosts,
  /* queryNameUsers, */
} from '../firebase/firestore';

// función para crear un nevo post
export function newPost(userID) {
  // console.log(currentUser);

  // Ventana que se sobrepone a la vista de publications
  const modalNewPost = document.createElement('div');
  modalNewPost.className = 'pupUp';

  // Alert donde se guardaran las publicaciones
  const alertNewPost = document.createElement('article');
  alertNewPost.className = 'alertPopUp';
  // ----- style

  // Eventos para el control de la viusalizacion o cierre del popup
  modalNewPost.addEventListener('click', () => {
    modalNewPost.style.display = 'none';
  });
  alertNewPost.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // ----- Cuerpo de la publicación ----- //
  const bodyPost = document.createElement('section');
  bodyPost.className = 'alertMainSection';

  const inputTextLabel = document.createElement('label');
  inputTextLabel.setAttribute('for', 'alertInput');
  inputTextLabel.textContent = 'Recomendacion';
  inputTextLabel.className = 'alertInputLabel';

  const inputTextPost = document.createElement('textarea');
  inputTextPost.id = 'alertInput';
  inputTextPost.classList.add('alertInput');
  inputTextPost.placeholder = 'Ingresa tu increible recomendación aquí!';
  bodyPost.appendChild(inputTextLabel);
  bodyPost.appendChild(inputTextPost);
  // ----- style
  // bodyPost.style = 'border:3px solid orange; backgroundColor:#ffffff; width 95%';

  // ----- Pie de la publicación ----- //
  const footerPost = document.createElement('footer');
  // ----- style
  footerPost.className = 'alertFooter';

  // Elementos del pie de página del post

  // Enviar post
  const buttonSaveNewPost = document.createElement('button');
  buttonSaveNewPost.innerText = 'Publicar';
  buttonSaveNewPost.className = 'standarButton';
  buttonSaveNewPost.id = 'buttonSaveNewPost';

  const msjEmptyPost = document.createElement('p');
  msjEmptyPost.className = 'errorMessage';
  msjEmptyPost.id = 'errorMessage';
  msjEmptyPost.style = 'text-align: center;';
  footerPost.append(buttonSaveNewPost, msjEmptyPost);
  // console.log(inputTextPost.value);
  buttonSaveNewPost.addEventListener('click', async () => {
    const strText = inputTextPost.value.replaceAll(' ', '');
    if (strText.length > 2) {
      msjEmptyPost.innerText = '';
      await insertPostDB(userID, inputTextPost.value, new Date(), allPosts);
      modalNewPost.style.display = 'none';
      inputTextPost.value = '';
    } else {
      msjEmptyPost.innerText = 'Necesitas insertar texto en tu recomendación';
    }
  });

  alertNewPost.append(bodyPost, footerPost);

  modalNewPost.appendChild(alertNewPost);

  return modalNewPost;
}
