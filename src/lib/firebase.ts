// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'gatherwell-tq4sv',
  appId: '1:466061765036:web:738b2c08466bf90dacf209',
  storageBucket: 'gatherwell-tq4sv.firebasestorage.app',
  apiKey: 'AIzaSyD1Vkad02L9I33F0f0i04RIHxMk2ydsZoM',
  authDomain: 'gatherwell-tq4sv.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '466061765036',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
