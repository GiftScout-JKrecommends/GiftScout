import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjwSFPpydcJwcFu53Ec6NQKgh0dXCf9DQ",
  authDomain: "giftscout-20f08.firebaseapp.com",
  projectId: "giftscout-20f08",
  storageBucket: "giftscout-20f08.firebasestorage.app",
  messagingSenderId: "954886811619",
  appId: "1:954886811619:web:59837b53d457a882503ad6",
  measurementId: "G-7XMBHS3DQ0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
