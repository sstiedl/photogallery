import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_YbY0JGV9uRrXtgee-k8Zqfr9J-GYpyE",
  authDomain: "vuex-blog-7e396.firebaseapp.com",
  projectId: "vuex-blog-7e396",
  storageBucket: "vuex-blog-7e396.appspot.com",
  messagingSenderId: "611692087623",
  appId: "1:611692087623:web:d10485474b5fe7e1d32462"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectAuth, projectFirestore, timestamp }