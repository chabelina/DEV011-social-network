import { onAuthStateChanged } from 'firebase/auth';
import { logout } from '../firebase/auth';
import { auth } from '../firebase/firebase.js';
import { queryOnRealTime, queryNameUsers, updateLikes } from '../firebase/firestore';
import { newPost } from './newPost';
import { pupUpDelete } from './deletePost.js';
import { editPostModalRender } from './editPost.js';
import unfillStart from '../img/unfillStart.svg';
import fillStart from '../img/fillStart.svg';
import pen from '../img/pen.svg';
import trash from '../img/trash.svg';
import newPostImg from '../img/newPostImg.svg';
import logOutImg from '../img/logOutImg.svg';
import seven from '../img/perfil/7.svg';

// const pupUpDelete = document.getElementById('popUp');
// const deleteButton = document.getElementById('deleteButton');

/* queryNameUsers.then((users)=>{
  users.
}) */

// función que crea un articulo para cada post

function renderPost(container, userID, idPostDB, isLoggedUser, userNameDB, textPostDB, likesDB) {
  // Id del post
  const idPost = idPostDB;
  const initialContent = textPostDB;

  const post = document.createElement('article');
  post.id = 'postArticle';

  // ----- Contenedor del header ----- //
  const headPost = document.createElement('header');
  headPost.id = 'postHeader';

  // Elementos del encabezado del post

  // Imagen de perfil
  const profilePicture = document.createElement('img');
  // profilePicture.src = `../img/perfil/${(Math.round(Math.random() * 20)).toString()}.svg`;
  profilePicture.src = seven;
  profilePicture.id = 'profilePicture';
  headPost.appendChild(profilePicture);

  // Nombre del Usuario
  const nameUser = document.createElement('p');
  nameUser.id = 'nameUser';
  nameUser.innerText = userNameDB;
  headPost.appendChild(nameUser);

  if (isLoggedUser) {
    // Boton eliminar
    const trashIcon = document.createElement('img');
    trashIcon.src = trash;
    trashIcon.className = 'delete';
    headPost.appendChild(trashIcon);
    const deleteContainer = pupUpDelete();
    trashIcon.addEventListener('click', () => {
      container.appendChild(deleteContainer);
      deleteContainer.style.display = 'flex';
    });

    // Boton editar
    const penIcon = document.createElement('img');
    penIcon.src = pen;
    penIcon.className = 'editor';
    headPost.appendChild(penIcon);
    const editContainer = editPostModalRender(idPost, initialContent);

    penIcon.addEventListener('click', () => {
      container.appendChild(editContainer);
      editContainer.style.display = 'flex';
    });
  }

  // ----- Cuerpo de la publicación ----- //
  const bodyPost = document.createElement('section');
  bodyPost.id = 'bodyPost';
  const textPost = document.createElement('p');
  textPost.innerText = textPostDB;
  bodyPost.appendChild(textPost);

  // ----- Pie de la publicación ----- //
  const footerPost = document.createElement('footer');
  footerPost.id = 'footerPost';

  // Elementos del pie de página del post

  // Etiqueta del género
  /* const listGenre = document.createElement('ul');
  const selectedGenre = ['Indie', 'Rock', 'Blues'];
  selectedGenre.forEach((element) => {
    const elementGenre = document.createElement('li');
    elementGenre.innerText = element;
    elementGenre.class = 'typeGenre';
    listGenre.appendChild(elementGenre);
    // ----- style
    // elementGenre.style = 'display: flexbox; list-style-type:
    // none; background-color: #BDB5FD;border-radius: 6px;color:#11035A; display: inline-block;';
  });
  footerPost.appendChild(listGenre); */

  // Botón de me gusta
  const likeButton = document.createElement('button');
  likeButton.id = 'likeButton';
  // Imagen del like rellena
  const filledLikeImg = document.createElement('img');
  filledLikeImg.className = 'likeImg';
  filledLikeImg.src = fillStart;
  // Imagen del like sin rellenar
  const unfilledLikeImg = document.createElement('img');
  unfilledLikeImg.className = 'likeImg';
  unfilledLikeImg.src = unfillStart;

  if (likesDB.includes(userID)) {
    filledLikeImg.style.display = 'flex';
    unfilledLikeImg.style.display = 'none';
  } else {
    filledLikeImg.style.display = 'none';
    unfilledLikeImg.style.display = 'flex';
  }

  likeButton.append(filledLikeImg, unfilledLikeImg);
  footerPost.appendChild(likeButton);

  let likes = [...likesDB];
  likeButton.addEventListener('click', async () => {
    const isLiked = filledLikeImg.style.display === 'flex';
    if (!isLiked && !likes.includes(userID)) {
      likes.push(userID);
      unfilledLikeImg.style.display = 'none';
      filledLikeImg.style.display = 'flex';
    } else {
      likes = likes.filter((user) => user !== userID);
      unfilledLikeImg.style.display = 'flex';
      filledLikeImg.style.display = 'none';
    }
    await updateLikes(likes, idPost);
  });

  // Número de likes
  const likesNumber = document.createElement('p');
  likesNumber.innerHTML = likesDB.length;
  likesNumber.id = 'likesCounter';
  footerPost.appendChild(likesNumber);

  post.append(headPost, bodyPost, footerPost);
  return post;
}

// función que renderea el muro
export const publications = (navigateTo) => {
  // Extracción de la información del usuario

  // ------ ID
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // El usuario está autenticado
      localStorage.setItem('userID', user.uid);
      return 'userID return';
    }
    // El usuario no está autenticado
    return navigateTo('/');
  });

  // ID del usuario:
  const userID = localStorage.getItem('userID');

  // ------ Name
  queryNameUsers.then((docs) => {
    docs.forEach((us) => {
      if (us.data().id === userID) {
        // localStorage.removeItem('nameUser')
        localStorage.setItem('nameUser', us.data().name);
        return 'nameUser return';
      }
      return 'not user';
    });
  });

  // Nombre del usuario:
  const nameUser = localStorage.getItem('nameUser');

  // Contenedor de todas las publicaciones
  const containerAll = document.createElement('div');
  containerAll.className = 'containerAllPublications';

  // Pie de página para los botones de crear post y cerrar sesión
  const footerPublications = document.createElement('footer');
  footerPublications.id = 'footerPublications';

  // Botón para crear nuevo post
  const newPostIcon = document.createElement('img');
  newPostIcon.src = newPostImg;
  const newPostContainer = newPost(userID);
  newPostIcon.addEventListener('click', async () => {
    containerAll.appendChild(newPostContainer);
    // console.log('.....', currentUser);
    newPostContainer.style.display = 'flex';
  });
  newPostIcon.style = 'display: flex; position: relative; width: 40px; grid-column: 2; left: 40%;';

  // Boton de cerrar sesión  const buttonLogOut = document.createElement('button');
  const logoutIcon = document.createElement('img');
  logoutIcon.src = logOutImg;
  logoutIcon.addEventListener('click', async () => {
    const currentUser = await logout();
    localStorage.clear();
    navigateTo('/');
    // localStorage.removeItem('nameUser');
    return currentUser;
  });
  // ----- style
  logoutIcon.style = 'width: 20px';

  footerPublications.append(logoutIcon, newPostIcon);

  queryOnRealTime((posts) => {
    containerAll.innerHTML = '';
    containerAll.appendChild(footerPublications);
    posts.forEach((doc) => {
      containerAll.append(renderPost(
        containerAll,
        userID,
        doc.id,
        userID === doc.data().user,
        doc.data().name,
        doc.data().textPost,
        doc.data().likes,
      ));
    });
  });

  return containerAll;
};
