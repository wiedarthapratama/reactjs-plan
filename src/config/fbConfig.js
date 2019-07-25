import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAV_aFv1bCdqmkcElfeJCTAk9F-iL0BwP0",
    authDomain: "react-plan-7a349.firebaseapp.com",
    databaseURL: "https://react-plan-7a349.firebaseio.com",
    projectId: "react-plan-7a349",
    storageBucket: "",
    messagingSenderId: "100941551608",
    appId: "1:100941551608:web:017d5b056650a01d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;