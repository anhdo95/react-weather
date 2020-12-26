import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

firebase.initializeApp(config)
firebase.database()

const auth = firebase.auth

export function subscribeAuthChanged(
  callback: (a: firebase.User | null) => any
): firebase.Unsubscribe {
  return auth().onAuthStateChanged(callback)
}

export function signin(email: string, password: string) {
  return auth().signInWithEmailAndPassword(email, password)
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider()
  return auth().signInWithPopup(provider)
}
