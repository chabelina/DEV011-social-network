import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth'; // createUserWithEmailAndPassword
import { app } from './firebase-config.js';

export const auth = getAuth(app);
console.log(auth);
const provider = new GoogleAuthProvider();
auth.languageCode = 'es';

export async function loginGoogle() {
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    const response = await signInWithPopup(auth, provider);
    // console.log('-+-+-+-', response);
    return response.user;
  } catch (error) {
    return new Error(error);
  }
}

export async function logout() {
  await signOut(auth);
}

export async function loginEmail(email, password) {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
    return user;
  } catch (error) {
    return new Error(error);
  }
}

/* export async function createUser(email, password) {
  try{
    const response = await createUserWithEmailAndPassword(auth, email, password,);
    const user = response.user;
    return user
  } catch (error){
    return new Error(error);
  }
} */
