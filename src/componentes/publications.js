import { logout, auth } from '../firebase/auth';
import { onAuthStateChanged } from '..firebase/auth';
import {
  insertPostDB,
  allPosts,
  querySnapshot,
  queryNameUsers,
} from '../firebase/firestore';

/* queryNameUsers.then((users)=>{
  users.
}) */

// función que crea un articulo para cada post
function renderPost(userNameDB, textPostDB, likeNumDB) {
  // Sección donde se guardaran las publicaciones
  const post = document.createElement('article');
  post.id = 'postArticle';
  // ----- style
  // post.style.border = '3px solid violet';
  // post.style.backgroundColor = '#FFFFFF';
  // post.style.width = '800px';

  // ----- Contenedor del header ----- //
  const headPost = document.createElement('header');
  headPost.id = 'postHeader';
  // ----- style
  /* headPost.style.height = '60px';
  headPost.style.border = '3px solid red';
  headPost.style.display = 'grid';
  headPost.style.gridTemplateColumns = '1fr 8fr 1fr 1fr'; */

  // Elementos del encabezado del post

  // Imagen de perfil
  const profilePicture = document.createElement('img');
  profilePicture.src = `../img/perfil/${(Math.round(Math.random() * 20)).toString()}.svg`;
  profilePicture.id = 'profilePicture';
  headPost.appendChild(profilePicture);
  // ----- style
  /* profilePicture.style.height = '35px';
  profilePicture.style.border = '3px solid green'; */

  // Nombre del Usuario
  const nameUser = document.createElement('p');
  nameUser.id = 'nameUser';
  nameUser.innerText = userNameDB;
  headPost.appendChild(nameUser);
  // ----- style
  // nameUser.style.height = '35px';
  // nameUser.style.border = '3px solid pink';

  // Boton editar
  const penIcon = document.createElement('img');
  penIcon.src = '../img/pen.svg';
  penIcon.className = 'editor';
  headPost.appendChild(penIcon);
  // ----- style
  // penIcon.style.height = '35px';
  // penIcon.style.border = '3px solid blue';

  // Boton eliminar
  const trashIcon = document.createElement('img');
  trashIcon.src = '../img/litter.svg';
  trashIcon.className = 'editor';
  headPost.appendChild(trashIcon);
  // ----- style
  // trashIcon.style.height = '35px';
  // trashIcon.style.border = '3px solid yellow';

  // ----- Cuerpo de la publicación ----- //
  const bodyPost = document.createElement('section');
  bodyPost.id = 'bodyPost';
  const textPost = document.createElement('p');
  textPost.innerText = textPostDB;
  bodyPost.appendChild(textPost);
  // ----- style
  // bodyPost.style.border = '3px solid orange';
  // bodyPost.style.backgroundColor = '#F4F4FC';

  // ----- Pie de la publicación ----- //
  const footerPost = document.createElement('footer');
  footerPost.id = 'footerPost';
  // ----- style
  // footerPost.style = 'border:3px solid black; height:100px';

  // Elementos del pie de página del post

  // Etiqueta del género
  const listGenre = document.createElement('ul');
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
  footerPost.appendChild(listGenre);

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
  // likeButton.style = 'border:0px; background-color:#FFFFFF;
  // align-self: flex-end; margin-left: 740px';
  likeButton.addEventListener('click', () => {
    const isLiked = filledLikeImg.style.display === 'none';
    unfilledLikeImg.style.display = isLiked ? 'none' : 'flex';
    filledLikeImg.style.display = isLiked ? 'flex' : 'none';
  });
  // console.log(likeNumDB);
  // ----- style
  // filledLikeImg.style.width = '30px';
  // unfilledLikeImg.style.width = '30px';
  // console.log(filledLikeImg.style.display);

  post.append(headPost, bodyPost, footerPost);
  return post;
}

// función para crear un nevo post
function newPost(userID) {
  // console.log(currentUser);

  // Ventana que se sobrepone a la vista de publications
  const modalNewPost = document.createElement('div');
  modalNewPost.style = 'position: fixed;  width: 100%;  height: 100%;  background-color: rgba(0, 0, 0, 0.5)';

  // Alert donde se guardaran las publicaciones
  const alertNewPost = document.createElement('article');
  alertNewPost.id = 'alertNewPost';
  // ----- style
  alertNewPost.style = 'width: 80%;align-items: center;border-radius: 1rem;position: absolute;  top: 50%;  left: 50%;  transform: translate(-50%, -50%);  background-color: #F4F4FC;  padding: 20px;  z-index: 2;';

  // ----- Cuerpo de la publicación ----- //
  const bodyPost = document.createElement('section');
  bodyPost.innerText = 'Recomendación:\n';
  const inputTextPost = document.createElement('textarea');
  inputTextPost.id = 'textNewPost';
  bodyPost.appendChild(inputTextPost);
  // ----- style
  bodyPost.style = 'border:3px solid orange; backgroundColor:#ffffff; width 95%';
  inputTextPost.style = 'border:3px solid orange; backgroundColor:#ffffff; width: 95%;';

  // ----- Pie de la publicación ----- //
  const footerPost = document.createElement('footer');
  // ----- style
  footerPost.style = 'border:3px solid black; height:100px';

  // Elementos del pie de página del post

  // Enviar post
  const buttonSaveNewPost = document.createElement('button');
  buttonSaveNewPost.innerText = 'Recomentar';
  footerPost.appendChild(buttonSaveNewPost);
  // console.log(inputTextPost.value);
  buttonSaveNewPost.addEventListener('click', async () => {
    // console.log(userID, inputTextPost.value, new Date(), allPosts);
    // console.log('444444444444',userID);
    await insertPostDB(userID, inputTextPost.value, new Date(), allPosts);
    modalNewPost.style.display = 'none';
  });

  alertNewPost.append(bodyPost, footerPost);

  modalNewPost.appendChild(alertNewPost);

  return modalNewPost;
}

// función que renderea el muro
export const publications = (navigateTo) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // El usuario está autenticado
      // console.log('1111111111111111',user);
      // console.log('2222222222222222',user.uid);
      // localStorage.setItem ('userID', user.uid)
    } else {
      return 'userID return';
      // El usuario no está autenticado
      return navigateTo('/');
    }
  });

  // ID del usuario
  const userID = localStorage.getItem('userID');
  console.log('3333333', userID);
  // Contenedor de todas las publicaciones
  const containerAll = document.createElement('div');
  containerAll.className = 'containerAll';
  // ----- style
  // containerAll.style = 'border: 3px solid blue; height: 600px;display:
  // flex;flex-direction:column;justify-content:space-between; align-items:center';

  // Pie de página para los botones de crar post y cerrar sesión
  const footerPublications = document.createElement('footer');
  footerPublications.id = 'footerPublications';
  // ----- style
  // footerPublications.style = 'width:800px; border: 3px solid darkred;
  // display: flex; justify-content :space-around';

  // Botón para crear nuevo post
  const newPostIcon = document.createElement('img');
  newPostIcon.src = '../img/newPost.svg';
  newPostIcon.addEventListener('click', async () => {
    // console.log('.....', currentUser);
    containerAll.appendChild(newPost(userID));
  });
  // ----- style
  newPostIcon.style = 'width: 40px';

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

  footerPublications.append(newPostIcon, logoutIcon);
  // console.log('maya')
  querySnapshot.then((docs) => {
    docs.forEach((doc) => {
      containerAll.append(renderPost(doc.data().user, doc.data().textPost, doc.data().likes.length));
    });
  });
  containerAll.appendChild(footerPublications);

  return containerAll;
};
