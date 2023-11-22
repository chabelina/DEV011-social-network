import {
  getAuth, signOut, signInWithPopup, GoogleAuthProvider,
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
} from 'firebase/auth';

import { app } from '../firebase/firebase-config';

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export {
  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut,
};
