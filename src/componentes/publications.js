import { onAuthStateChanged } from 'firebase/auth';
import { logout, auth } from '../firebase/auth';
import { queryOnRealTime, queryNameUsers } from '../firebase/firestore';
import { newPost } from './newPost';
import { pupUpDelete } from './deletePost.js';

// const pupUpDelete = document.getElementById('popUp');
// const deleteButton = document.getElementById('deleteButton');

/* queryNameUsers.then((users)=>{
  users.
}) */

// función que crea un articulo para cada post
function renderPost(idPostDb, isLoggedUser, userNameDB, textPostDB, likesDB) { // likeNumDB
  // Sección donde se guardaran las publicaciones
  const idPost = idPostDb;
  const post = document.createElement('article');
  post.id = 'postArticle';

  // ----- Contenedor del header ----- //
  const headPost = document.createElement('header');
  headPost.id = 'postHeader';

  // Elementos del encabezado del post

  // Imagen de perfil
  const profilePicture = document.createElement('img');
  profilePicture.src = `../img/perfil/${(Math.round(Math.random() * 20)).toString()}.svg`;
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
    trashIcon.src = '../img/litter.svg';
    trashIcon.className = 'delete';
    headPost.appendChild(trashIcon);
    const deleteContainer = pupUpDelete();
    document.body.appendChild(deleteContainer);
    trashIcon.addEventListener('click', () => {
      deleteContainer.style.display = 'flex';
    });

    // Boton editar
    const penIcon = document.createElement('img');
    penIcon.src = '../img/pen.svg';
    penIcon.className = 'editor';
    headPost.appendChild(penIcon);
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
  filledLikeImg.style.display = 'none';
  filledLikeImg.src = '../img/fillStart.svg';
  // Imagen del like sin rellenar
  const unfilledLikeImg = document.createElement('img');
  unfilledLikeImg.className = 'likeImg';
  unfilledLikeImg.src = '../img/unfillStart.svg';
  unfilledLikeImg.style.display = 'flex';

  likeButton.append(filledLikeImg, unfilledLikeImg);
  footerPost.appendChild(likeButton);
  likeButton.addEventListener('click', () => {
    console.log('id del post: ', idPost);
    const isLiked = filledLikeImg.style.display === 'none';
    unfilledLikeImg.style.display = isLiked ? 'none' : 'flex';
    filledLikeImg.style.display = isLiked ? 'flex' : 'none';
  });

  // Número de likes
  const likesNumber = document.createElement('p');
  likesNumber.innerHTML = likesDB;
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
  newPostIcon.src = '../img/newPost.svg';
  newPostIcon.addEventListener('click', async () => {
    // console.log('.....', currentUser);
    containerAll.appendChild(newPost(userID, nameUser));
  });
  newPostIcon.style = 'display: flex; position: relative; width: 40px; grid-column: 2; left: 40%;';

  // Boton de cerrar sesión  const buttonLogOut = document.createElement('button');
  const logoutIcon = document.createElement('img');
  logoutIcon.src = '../img/logout.svg';
  logoutIcon.addEventListener('click', async () => {
    const currentUser = await logout();
    navigateTo('/');
    return currentUser;
  });
  // ----- style
  logoutIcon.style = 'width: 20px';

  footerPublications.append(logoutIcon, newPostIcon);

  queryOnRealTime((posts) => {
    containerAll.innerHTML = '';
    containerAll.appendChild(footerPublications);
    posts.forEach((doc) => {
      console.log(doc.id);
      containerAll.append(renderPost(
        userID === doc.data().user,
        doc.data().name,
        doc.data().textPost,
        doc.data().likes.length,
      ));
    });
  });

  return containerAll;
};
