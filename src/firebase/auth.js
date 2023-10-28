import { getAuth } from 'firebase/auth';
import { app } from './firebase-config.js';

export const auth = getAuth(app);
