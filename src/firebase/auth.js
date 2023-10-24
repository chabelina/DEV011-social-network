import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { app } from './firebase-config.js';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = 'es';

export async function login() {
  try {
    const response = await signInWithPopup(auth,provider);
    console.log('-+-+-+-',response);
    return response.user;
  } catch (error) {
    return new Error(error);
  }
}

export async function logout() {
  await signOut(auth)
}
