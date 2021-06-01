import firebase from "firebase"

const Config = {
  apiKey: "AIzaSyCGfgQuRCFrbyhi9zvhJhoMnU3wTolvVIw",
  authDomain: "ms-academy-1016d.firebaseapp.com",
  projectId: "ms-academy-1016d",
  storageBucket: "ms-academy-1016d.appspot.com",
  messagingSenderId: "158457717062",
  appId: "1:158457717062:web:1a9937afa7f7227d47c547",
  measurementId: "G-Z9C467SWEW"
  };

firebase.initializeApp(Config);
firebase.analytics();
export default firebase;