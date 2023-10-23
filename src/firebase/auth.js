import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './firebase-config.js';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = 'es';

export async function login() {
  try {
    const response = await signInWithPopup(provider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
}

export function logout() {
  auth.signOut();
}
