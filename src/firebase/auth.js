import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut,
} from 'firebase/auth';
import { app } from './firebase-config.js';

export const auth = getAuth(app);
console.log(auth);
const provider = new GoogleAuthProvider();
auth.languageCode = 'es';

export async function login() {
  try {
    const response = await signInWithPopup(auth, provider);
    const user = response.user;
    console.log(response);
    return user;
  } catch (error) {
    throw new Error(error);
  }
}

export async function logout() {
  await signOut(auth);
}
