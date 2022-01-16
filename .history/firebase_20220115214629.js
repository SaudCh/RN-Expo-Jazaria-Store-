import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyC6mOVdwu-bW83CZcZWQD53325ndNsUBrA",
    authDomain: "fyp-project-16067.firebaseapp.com",
    projectId: "fyp-project-16067",
    storageBucket: "fyp-project-16067.appspot.com",
    messagingSenderId: "641507773249",
    appId: "1:641507773249:web:b845ff51ca69d605d92fc0"
};

let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }