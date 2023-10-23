// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD_UxhD_bFrHamWl41O1uLctTEi6LMxANE',
  authDomain: 'bmusic-social-network.firebaseapp.com',
  projectId: 'bmusic-social-network',
  storageBucket: 'bmusic-social-network.appspot.com',
  messagingSenderId: '980840353303',
  appId: '1:980840353303:web:e4ad8d6cbafb844fe5d652',
  measurementId: 'G-L597S8W8SD',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
