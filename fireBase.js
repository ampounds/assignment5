var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyDp-tGnT4o6UXLHDYcfErSyU47m6TXqmh4",
  authDomain: "assignment5-ae6ef.firebaseapp.com",
  projectId: "assignment5-ae6ef",
  storageBucket: "assignment5-ae6ef.appspot.com",
  messagingSenderId: "165956499851",
  appId: "1:165956499851:web:e93bf57f4d192681a4178e",
  measurementId: "G-BSDQSDJFVE"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


