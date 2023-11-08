import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'firebase/firestore';
import { app } from './firebase-config.js';
// import { addDoc, doc, setDoc } from "firebase/firestore";

export const db = getFirestore(app);

// Información de los post
export const allPosts = collection(db, 'posts');

export async function insertPostDB(userID, inputLogin, datePost, allPosts) {
  // función que garda el post
  await addDoc(allPosts, {
    user: userID,
    textPost: inputLogin,
    likes: [],
    date: datePost,
  });
}

export const querySnapshot = getDocs(collection(db, 'posts'));

// Información de los usuarios
export const allUsers = collection(db, 'users');

export async function insertNewUserDB(nickname, uid, allUsers) {
  await addDoc(allUsers, {
    name: nickname,
    id: uid,
  });
}

export const queryNameUsers = getDocs(collection(db, 'users'));

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
