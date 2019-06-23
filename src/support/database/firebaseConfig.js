import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD4iscTbuXCkzVC33TEtj_z5UjFNtcQq3M",
    authDomain: "",
    databaseURL: "https://see-you-later.firebaseio.com/",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();