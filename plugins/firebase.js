import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import "firebase/auth";


  const config = {
  apiKey: "AIzaSyACsN8-PKN98bOXnB2j3597SRkcRYPPfrA",
  authDomain: "nuxt-41e2b.firebaseapp.com",
  databaseURL: "https://nuxt-41e2b-default-rtdb.firebaseio.com",
  projectId: "nuxt-41e2b",
  storageBucket: "nuxt-41e2b.appspot.com",
  messagingSenderId: "1024883968397",
  appId: "1:1024883968397:web:7366559f0381d86f9a15c4",
  measurementId: "G-76SW31HLL2"
    }
    if (!firebase.apps.length) {
    firebase.initializeApp(config)
}
const StoreDB = firebase.firestore().settings({timestampsInSnapshots: true})
const DB = firebase.database()
const auth = firebase.auth()
export {StoreDB,DB,auth}
