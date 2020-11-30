const firebasemock = require('firebase-mock');

const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();


const firebase = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  // use null if your code does not use AUTHENTICATION
  () => null,
  // use null if your code does not use FIRESTORE
  () => {
    return mockfirestore;
  },
);



export default firebase;
