// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase Config
const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain: "giftscout-20f08.firebaseapp.com",

  projectId: "giftscout-20f08",

  storageBucket: "giftscout-20f08.appspot.com",

  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",

  appId: "YOUR_APP_ID"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
