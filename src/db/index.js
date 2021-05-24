import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

const db = firebase
  .initializeApp({
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  })
  .firestore();

export default db;

export const { Timestamp } = firebase.firestore;
