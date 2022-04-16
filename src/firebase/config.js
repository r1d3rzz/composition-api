import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADmrQCEI_DYPcYzxmUiZ7NOc25kBOll-I",
  authDomain: "vue-blog-system-39310.firebaseapp.com",
  projectId: "vue-blog-system-39310",
  storageBucket: "vue-blog-system-39310.appspot.com",
  messagingSenderId: "281594139533",
  appId: "1:281594139533:web:377fcc63603605af2ae3c4",
};

//inti fireBase
firebase.initializeApp(firebaseConfig);

//database setup
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
