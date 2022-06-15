// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfvBq-jMcKxSHHJE-q614rrfSDRdvFe2Y",
  authDomain: "fir-auth-3424c.firebaseapp.com",
  projectId: "fir-auth-3424c",
  storageBucket: "fir-auth-3424c.appspot.com",
  messagingSenderId: "183953211254",
  appId: "1:183953211254:web:3a6cf6762bd822d2050457"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };