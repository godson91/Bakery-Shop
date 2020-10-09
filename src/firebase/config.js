import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyALuQoBxdMojdTahl3SOWDxopEPEYJkbxw',
  authDomain: 'bakery-dev-server-d76b2.firebaseapp.com',
  databaseURL: 'https://bakery-dev-server-d76b2.firebaseio.com',
  projectId: 'bakery-dev-server-d76b2',
  storageBucket: 'bakery-dev-server-d76b2.appspot.com',
  messagingSenderId: '162835995325',
  appId: '1:162835995325:web:fd643f9f401b98019b75d4',
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  //signin
  async signin(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }

  //login in
  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }

  //logout
  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch((err) => {
        console.log(err);
      });
    return logout;
  }

  // async getUserState() {
  //   return new Promise((resolve) => {
  //     this.auth.onAuthStateChanged(resolved);
  //   });
  // }
}

export default new Firebase();
