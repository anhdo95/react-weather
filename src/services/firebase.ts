import firebase from 'firebase'
import api from './api'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

firebase.initializeApp(config)

const db = firebase.database()
const auth = firebase.auth
// const baseUrl = 'https://react-weather-9fd6d-default-rtdb.firebaseio.com'

export function subscribeAuthChanged(
  callback: (a: firebase.User | null) => any
): firebase.Unsubscribe {
  return auth().onAuthStateChanged(callback)
}

export function signUp(email: string, password: string) {
  return auth().createUserWithEmailAndPassword(email, password)
}

export function signIn(email: string, password: string) {
  return auth().signInWithEmailAndPassword(email, password)
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider()
  return auth().signInWithPopup(provider)
}

export function signOut() {
  return auth().signOut()
}

export function addCity(params: { city: string; userId: string }) {
  return db.ref(`${params.userId}/${params.city}`).set({
    name: params.city,
    createdAt: new Date().toISOString()
  })
}
