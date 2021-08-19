import firebase from 'firebase'
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyCF3Gwqp5jukLqUWGSu3OGoGseSYDnnyFo",
    authDomain: "willey-38a14.firebaseapp.com",
    projectId: "willey-38a14",
    storageBucket: "willey-38a14.appspot.com",
    messagingSenderId: "617769955874",
    appId: "1:617769955874:web:e9c6887d92234dc8b2907b"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();