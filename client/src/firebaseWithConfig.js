import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCA9ua6MLgqAZe3Ti7Lu2_0TNxZXyKpvvc",
  authDomain: "kashitaru-434fb.firebaseapp.com",
  databaseURL: "https://kashitaru-434fb.firebaseio.com",
  projectId: "kashitaru-434fb",
  storageBucket: "",
  messagingSenderId: "251783530100",
  appId: "1:251783530100:web:94a00e196d2df8f4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
