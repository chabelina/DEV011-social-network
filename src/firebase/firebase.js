import {
  getAuth, signOut, signInWithPopup, GoogleAuthProvider,
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
} from 'firebase/auth';
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
  deleteDoc,
} from 'firebase/firestore';

import { app } from './firebase-config';

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// export const addDocMock = addDoc;

export {
  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, app, getFirestore,
  collection, getDocs, onSnapshot, query,
  orderBy, doc, updateDoc, deleteDoc, addDoc,
};
