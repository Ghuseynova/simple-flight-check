import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCDcmRWGTtQ-sVev-vWP266Ffc5MS82of8',
  authDomain: 'auth-flight-ab4ef.firebaseapp.com',
  projectId: 'auth-flight-ab4ef',
  storageBucket: 'auth-flight-ab4ef.appspot.com',
  messagingSenderId: '13405257120',
  appId: '1:13405257120:web:af4b49094fba58230278c5',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
