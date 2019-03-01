import { initializeApp } from 'firebase'
import store from './state/store'

const firebase = initializeApp({
  apiKey: "AIzaSyDOZEuK__KG0sNTl2q1ug_nHKyi2t7eKn8",
  authDomain: "character-builder-5e.firebaseapp.com",
  databaseURL: "https://character-builder-5e.firebaseio.com",
  projectId: "character-builder-5e",
  storageBucket: "character-builder-5e.appspot.com",
  messagingSenderId: "849989419879"
})

export const db = firebase.database()
export const entries = db.ref('entries')

entries.on('child_added', (e) => {
  store.dispatch({type: 'entryRetrieved', payload: e.val()})
})
