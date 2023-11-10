import { updateEditedPostDB } from "../firebase/firestore";

export const editPostModalRender = (postId, initialContent) => {
  // Ventana que se sobrepone a la vista de publications
  const modalEditPost = document.createElement('div');
  modalEditPost.className = 'newPostPopup';
  modalEditPost.style =
    'position: fixed;  width: 100%;  height: 100%;  background-color: rgba(0, 0, 0, 0.7);  z-index: 1;';

  // Alert donde se guardaran las publicaciones
  const alertEditPost = document.createElement('article');
  alertEditPost.id = 'alertNewPost';
  // ----- style

  // Eventos para el control de la viusalizacion o cierre del popup
  modalEditPost.addEventListener('click', () => {
    modalEditPost.style.display = 'none';
  });
  alertEditPost.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // ----- Cuerpo de la publicación ----- //
  const bodyPost = document.createElement('section');
  bodyPost.id = 'alertMainSection';

  const inputTextLabel = document.createElement('label');
  inputTextLabel.setAttribute('for', 'textNewPost');
  inputTextLabel.textContent = 'Recomendacion';
  inputTextLabel.id = 'alertInputLabel';

  const inputTextPost = document.createElement('textarea');
  inputTextPost.id = 'alertInput';
  inputTextPost.value = initialContent;
  bodyPost.appendChild(inputTextLabel);
  bodyPost.appendChild(inputTextPost);
  // ----- style
  // bodyPost.style = 'border:3px solid orange; backgroundColor:#ffffff; width 95%';

  // ----- Pie de la publicación ----- //
  const footerPost = document.createElement('footer');
  // ----- style
  footerPost.id = 'alertFooter';

  // Elementos del pie de página del post

  // Enviar post
  const buttonSaveEditedPost = document.createElement('button');
  buttonSaveEditedPost.innerText = 'Actualizar';
  buttonSaveEditedPost.id = 'alertFooterSaveButton';

  buttonSaveEditedPost.addEventListener('click', () => {
    updateEditedPostDB(postId, inputTextPost.value);
  });

  const msjEmptyPost = document.createElement('p');
  msjEmptyPost.className = 'errorMessage';
  msjEmptyPost.style = 'text-align: center;';
  footerPost.append(buttonSaveEditedPost, msjEmptyPost);
  // console.log(inputTextPost.value);
  // buttonSaveNewPost.addEventListener('click', async () => {
  //   if (inputTextPost.value.replace(' ', '').length > 2) {
  //     msjEmptyPost.innerText = '';
  //     await insertPostDB(
  //       userID,
  //       nameUser,
  //       inputTextPost.value,
  //       new Date(),
  //       allPosts
  //     );
  //     modalNewPost.style.display = 'none';
  //   } else {
  //     msjEmptyPost.innerText = 'Necesitas insertar texto en tu recomendación';
  //   }
  // });

  alertEditPost.append(bodyPost, footerPost);

  modalEditPost.appendChild(alertEditPost);

  return modalEditPost;
};
