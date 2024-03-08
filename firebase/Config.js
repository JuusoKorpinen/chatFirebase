import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: "chat-8de5f.firebaseapp.com",
  projectId: "chat-8de5f",
  storageBucket: "chat-8de5f.appspot.com",
  messagingSenderId: "954476536895",
  appId: "1:954476536895:web:d240003b0ccd54be44448a"
};

initializeApp(firebaseConfig)

const firestore = getFirestore()

const MESSAGES = 'messages'

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
}