import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// initialize firebase app using .env variables for security
const app = firebase.initializeApp ({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain:  process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,  
});

// class Firebase {
//   constructor() {
//     firebase.initializeApp(config);
//     this.auth = firebase.auth();
//     this.db = firebase.firestore();
//   }

//   //signup
//   async signUp(email, password) {
//     const user = await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         console.log(err);
//       });

//     return user;
//   }

//   //login in
//   async login(email, password) {
//     const user = await firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch((err) => {
//         console.log(err);
//       });
//     return user;
//   }

//   //logout
//   async logout() {
//     const logout = await firebase
//       .auth()
//       .signOut()
//       .catch((err) => {
//         console.log(err);
//       });
//     return logout;
//   }
// }

export default app;
