import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import "regenerator-runtime/runtime";

const firebaseConfig = {
  apiKey: "AIzaSyBk3jVmeG97VsrfwJBGkr6ad22ao-GpDX8",
  authDomain: "amaznclone-v1.firebaseapp.com",
  projectId: "amaznclone-v1",
  storageBucket: "amaznclone-v1.appspot.com",
  messagingSenderId: "271279434053",
  appId: "1:271279434053:web:da06abdd2b4c11403e362c",
  measurementId: "G-41JSRQJFDW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
