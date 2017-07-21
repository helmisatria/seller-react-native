import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA3Xgablep_EERD8c1p37qD8Ijpqk4p7ZE',
  authDomain: 'bakmijawa232.firebaseapp.com',
  databaseURL: 'https://bakmijawa232.firebaseio.com',
  projectId: 'bakmijawa232',
  storageBucket: '',
  messagingSenderId: '360044495248'
};

let firebaseApp = firebase.initializeApp(config);

export default firebaseApp = firebaseApp.database();
