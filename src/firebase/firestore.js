import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { app } from './firebase-config.js';
// import { addDoc, doc, setDoc } from "firebase/firestore";

export const db = getFirestore(app);

// ------ Información de los post
export const allPosts = collection(db, 'posts');

// función que guarda el post
export async function insertPostDB(userID, nameUser, inputLogin, datePost, allPostsDB = allPosts) {
  await addDoc(allPostsDB, {
    user: userID,
    name: nameUser,
    textPost: inputLogin,
    likes: [],
    date: datePost,
  });
}

export async function editPostDB(postId, editedContent) {
  // Almacenamos la referencia de datos del post en cuestion
  // const postRef = collection('posts').doc(postId);
  // const postRef = doc(db, 'posts', postId);

  // Actualizamos el documento con el contenido editado (editedContent)
  // await postRef.update({
  //   textPost: editedContent,
  // });
  return 'temporal'
}

// export const querySnapshot = getDocs(collection(db, 'posts'));
const allPostsSorted = query(allPosts, orderBy('date', 'desc'));

export function queryOnRealTime(render) {
  // console.log(allPostsSorted);
  onSnapshot(allPostsSorted, render);
}

// ------ Información de los usuarios
export const allUsers = collection(db, 'users');

export async function insertNewUserDB(nickname, uid, allUsersDB = allUsers) {
  await addDoc(allUsersDB, {
    name: nickname,
    id: uid,
  });
}

export const queryNameUsers = getDocs(collection(db, 'users'));

/* // función que garda el post
export async function insertPostDB(userID, nameUser, inputLogin, datePost, allPostsDB = allPosts) {
  await addDoc(allPostsDB, {
    user: userID,
    name: nameUser,
    textPost: inputLogin,
    likes: [],
    date: datePost,
  });
} */

// funcion para actualizar los likes
export async function updateLikes(updatedLikes, idPost) {
  const docRef = doc(db, 'posts', idPost);
  await updateDoc(docRef, { likes: [...updatedLikes] });
}

// Agregar un nuevo documento a la colección
/* const postsElements = await addDoc(allPosts, { /* datos del documento  });

await setDoc(doc(db, "posts", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });

  const cityRef = doc(db, 'cities', 'BJ');
  setDoc(cityRef, { capital: true }, { merge: true });
   */

/* async function insertDB(item){
    try{
        const response = await db.collection('Users').add(item);
        return response;
    }catch(error){
        throw new Error(error);
    }
}

export async function insertInfoNewUserDB (alias, email, password){
    try{
        const newUser = {
            'alias': alias,
            'email': email,
            'password': password,
        }
        return response = await insertDB(newUser)
    }catch(error){}
}
*/
