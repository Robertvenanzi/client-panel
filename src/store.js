import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
//reducers
//#todo

const firebaseConfig = {
    apiKey: "AIzaSyBwD732AX_WK0YXpqvZSxrp_CgpcDefFAw",
    authDomain: "react-client-manager-61751.firebaseapp.com",
    databaseURL: "https://react-client-manager-61751.firebaseio.com",
    projectId: "react-client-manager-61751",
    storageBucket: "react-client-manager-61751.appspot.com",
    messagingSenderId: "1001801960860"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfiles: true // Firestore for Profile instead of Realtime DB
}

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();