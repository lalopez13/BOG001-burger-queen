import firebase from 'firebase'
//import 'firebase/firestore'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCb1nKXYDdLynUjgXBIHkQlV8qVbDxQ_mQ",
    authDomain: "bqueen-app.firebaseapp.com",
    databaseURL: "https://bqueen-app.firebaseio.com",
    projectId: "bqueen-app",
    storageBucket: "bqueen-app.appspot.com",
    messagingSenderId: "1051333716802",
    appId: "1:1051333716802:web:8eaae2ffe0862a4163b6db",
    measurementId: "G-FMCPZ746CN"
  };

  firebase.initializeApp(firebaseConfig);

  if(process.env.NODE_ENV !== 'test')firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully

  export const db = firebase.firestore()


  export default firebase;