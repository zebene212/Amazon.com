/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBE3IFztU8T3ZgLyaDQ8FLXdeWFMLXqKwI",
  authDomain: "fir-fe4cf.firebaseapp.com",
  projectId: "fir-fe4cf",
  storageBucket: "fir-fe4cf.appspot.com",
  messagingSenderId: "24618086596",
  appId: "1:24618086596:web:edec435e86a9c408665991",
  measurementId: "G-TY544YN8VQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
