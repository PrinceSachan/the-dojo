import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBG4oGWy36-0PVuP7Z-VA46aac_iMFHmqw",
    authDomain: "thedojosite-d6942.firebaseapp.com",
    projectId: "thedojosite-d6942",
    storageBucket: "thedojosite-d6942.appspot.com",
    messagingSenderId: "695129420958",
    appId: "1:695129420958:web:96a16d16ff6847a7aef78f"
};

//init firebase 
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore() //database service
const projectAuth = firebase.auth() //auth service
const projectStorage = firebase.storage() //storage service

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }