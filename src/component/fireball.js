import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBOTuJ8DEZSIS_OWSBriqNmJr7s_jUrNbo",
    authDomain: "firstymfirebase.firebaseapp.com",
    databaseURL: "https://firstymfirebase.firebaseio.com",
    projectId: "firstymfirebase",
    storageBucket: "firstymfirebase.appspot.com",
    messagingSenderId: "520359052936"
  };
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;