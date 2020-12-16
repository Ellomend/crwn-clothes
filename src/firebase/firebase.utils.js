import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyCuYchdDkAQBgGB7ZIJdD2IaRRu6nuW_rY",
  authDomain: "crwn-clothes-89263.firebaseapp.com",
  projectId: "crwn-clothes-89263",
  storageBucket: "crwn-clothes-89263.appspot.com",
  messagingSenderId: "241917784484",
  appId: "1:241917784484:web:32a047ea836cac49255131"
}

/**
 * Create new user and return reference
 * @param userAuth
 * @param additionalData
 * @returns {Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>>}
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message)
    }
  }

  return userRef
}


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
