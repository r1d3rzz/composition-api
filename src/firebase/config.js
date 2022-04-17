import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVD3sLqR3nblnqAAKABfN-A1FhHOcrWTw",
  authDomain: "vue-blog-system-b7d42.firebaseapp.com",
  projectId: "vue-blog-system-b7d42",
  storageBucket: "vue-blog-system-b7d42.appspot.com",
  messagingSenderId: "313586366947",
  appId: "1:313586366947:web:47496bff3952ce577c88d6",
};

//inti fireBase
firebase.initializeApp(firebaseConfig);

//database setup
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
