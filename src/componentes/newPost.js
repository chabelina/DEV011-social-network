import {
  insertPostDB,
  allPosts,
  /* queryNameUsers, */
} from '../firebase/firestore';

// función para crear un nevo post
export function newPost(userID, nameUser) {
  // console.log(currentUser);

  // Ventana que se sobrepone a la vista de publications
  const modalNewPost = document.createElement('div');
  modalNewPost.className = 'newPostPopup';
  modalNewPost.style = 'position: fixed;  width: 100%;  height: 100%;  background-color: rgba(0, 0, 0, 0.7);  z-index: 1;';

  // Alert donde se guardaran las publicaciones
  const alertNewPost = document.createElement('article');
  alertNewPost.id = 'alertNewPost';
  // ----- style
  alertNewPost.style = 'width: 50%;align-items: center;border-radius: 1rem;position: absolute;  top: 50%;  left: 50%;  transform: translate(-50%, -50%);  background-color: #F4F4FC;  padding: 20px;  z-index: 2;';

  // Eventos para el control de la viusalizacion o cierre del popup
  modalNewPost.addEventListener('click', () => {
    modalNewPost.style.display = 'none';
  });
  alertNewPost.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // ----- Cuerpo de la publicación ----- //
  const bodyPost = document.createElement('section');
  bodyPost.innerText = 'Recomendación:\n';
  const inputTextPost = document.createElement('textarea');
  inputTextPost.id = 'textNewPost';
  inputTextPost.placeholder = 'Ingresa tu increible recomendación aquí!';
  bodyPost.appendChild(inputTextPost);
  // ----- style
  bodyPost.style = 'border:3px solid orange; backgroundColor:#ffffff; width 95%';
  inputTextPost.style = 'Color:#ffffff; width: 95%;';

  // ----- Pie de la publicación ----- //
  const footerPost = document.createElement('footer');
  // ----- style
  footerPost.style = 'border:3px solid black; height:100px';

  // Elementos del pie de página del post

  // Enviar post
  const buttonSaveNewPost = document.createElement('button');
  buttonSaveNewPost.innerText = 'Recomentar';
  const msjEmptyPost = document.createElement('p');
  footerPost.append(buttonSaveNewPost, msjEmptyPost);
  // console.log(inputTextPost.value);
  buttonSaveNewPost.addEventListener('click', async () => {
    if (inputTextPost.value.replace(' ', '').length > 2) {
      msjEmptyPost.innerText = '';
      await insertPostDB(userID, nameUser, inputTextPost.value, new Date(), allPosts);
      modalNewPost.style.display = 'none';
    } else {
      msjEmptyPost.innerText = 'Necesitas insertar texto en tu recomendación';
    }
  });

  alertNewPost.append(bodyPost, footerPost);

  modalNewPost.appendChild(alertNewPost);

  return modalNewPost;
}
