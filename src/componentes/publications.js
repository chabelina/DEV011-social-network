/* buttonLogin.addEventListener('click', async() => {
  await guardarPost(allPosts, inputEmail.value)
}) */
import { logout, auth } from '../firebase/auth';

// función que crea un articulo para cada post
function renderPost() {
  // Sección donde se guardaran las publicaciones
  const post = document.createElement('article');
  post.id = 'postArticle';
  // ----- style
  //post.style.border = '3px solid violet';
  //post.style.backgroundColor = '#FFFFFF';
  //post.style.width = '800px';

  // ----- Contenedor del header ----- //
  const headPost = document.createElement('header');
  headPost.id = 'postHeader';
  // ----- style
/*   headPost.style.height = '60px';
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
/*   profilePicture.style.height = '35px';
  profilePicture.style.border = '3px solid green'; */

  // Nombre del Usuario
  const nameUser = document.createElement('p');
  nameUser.id = 'nameUser';
  nameUser.innerText = 'Pepita';
  headPost.appendChild(nameUser);
  // ----- style
  //nameUser.style.height = '35px';
  //nameUser.style.border = '3px solid pink';

  // Boton editar
  const penIcon = document.createElement('img');
  penIcon.src = '../img/pen.svg';
  penIcon.className = 'editor';
  headPost.appendChild(penIcon);
  // ----- style
  //penIcon.style.height = '35px';
  //penIcon.style.border = '3px solid blue';

  // Boton eliminar
  const trashIcon = document.createElement('img');
  trashIcon.src = '../img/litter.svg';
  trashIcon.className = 'editor';
  headPost.appendChild(trashIcon);
  // ----- style
  //trashIcon.style.height = '35px';
  //trashIcon.style.border = '3px solid yellow';

  // ----- Cuerpo de la publicación ----- //
  const bodyPost = document.createElement('section');
  bodyPost.id = 'bodyPost'
  const textPost = document.createElement('p');
  textPost.innerText = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.';
  bodyPost.appendChild(textPost);
  // ----- style
  //bodyPost.style.border = '3px solid orange';
  //bodyPost.style.backgroundColor = '#F4F4FC';

  // ----- Pie de la publicación ----- //
  const footerPost = document.createElement('footer');
  footerPost.id = 'footerPost';
  // ----- style
  //footerPost.style = 'border:3px solid black; height:100px';

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
    //elementGenre.style = 'display: flexbox; list-style-type: none; background-color: #BDB5FD;border-radius: 6px;color:#11035A; display: inline-block;';
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
  //likeButton.style = 'border:0px; background-color:#FFFFFF; align-self: flex-end; margin-left: 740px';
  likeButton.addEventListener('click', () => {
    const isLiked = filledLikeImg.style.display === 'none';
    unfilledLikeImg.style.display = isLiked ? 'none' : 'flex';
    filledLikeImg.style.display = isLiked ? 'flex' : 'none';
  });
  // ----- style
  //filledLikeImg.style.width = '30px';
  //unfilledLikeImg.style.width = '30px';
  // console.log(filledLikeImg.style.display);

  post.append(headPost, bodyPost, footerPost);
  return post;
}

function newPost() {
  // console.log(currentUser);
  // Sección donde se guardaran las publicaciones
  const modalNewPost = document.createElement('article');
  modalNewPost.id = 'postArticle';
  // ----- style
  modalNewPost.style.border = '3px solid violet';
  modalNewPost.style.backgroundColor = '#FFFFFF';
  modalNewPost.style.width = '800px';

  // ----- Cuerpo de la publicación ----- //
  const bodyPost = document.createElement('section');
  bodyPost.innerText = 'Recomendación:';
  const inputTextPost = document.createElement('textarea');
  inputTextPost.id = 'textNewPost';
  bodyPost.appendChild(inputTextPost);
  // ----- style
  bodyPost.style.border = '3px solid orange';
  inputTextPost.style.backgroundColor = '#F4F4FC';

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
  /* buttonSaveNewPost.addEventListener('click', async() => {
      await guardarPost(inputTextPost.value,allPosts)
  }) */

  modalNewPost.append(bodyPost, footerPost);
  return modalNewPost;
}

export const publications = (navigateTo) => {
  // Contenedor de todas las publicaciones
  const containerAll = document.createElement('div');
  containerAll.className = 'containerAll';
  // ----- style
  //containerAll.style = 'border: 3px solid blue; height: 600px;display: flex;flex-direction:column;justify-content:space-between; align-items:center';

  // Pie de página para los botones de crar post y cerrar sesión
  const footerPublications = document.createElement('footer');
  footerPublications.id = 'footerPublications';
  // ----- style
  //footerPublications.style = 'width:800px; border: 3px solid darkred; display: flex; justify-content :space-around';

  // Botón para crear nuevo post
  const newPostIcon = document.createElement('img');
  newPostIcon.src = '../img/newPost.svg';
  newPostIcon.addEventListener('click', async () => {
    // console.log('.....', currentUser);
    containerAll.appendChild(newPost());
  });
  // ----- style
  newPostIcon.style = 'width: 40px';

  // Boton de cerrar sesión  const buttonLogOut = document.createElement('button');
  const logoutIcon = document.createElement('img');
  logoutIcon.src = '../img/logout.svg';
  logoutIcon.addEventListener('click', async () => {
    const currentUser = await logout();
    // console.log('.....', currentUser);
    navigateTo('/');
    return currentUser;
  });
  // ----- style
  logoutIcon.style = 'width: 20px';

  footerPublications.append(newPostIcon, logoutIcon);

  containerAll.append(renderPost(), renderPost());
  containerAll.appendChild(footerPublications);

  return containerAll;
};
