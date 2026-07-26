import { db } from "./firebase-config.js";

import {
addDoc,
collection,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("reviewForm");

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const name = document.getElementById("name").value;

const occasion = document.getElementById("occasion").value;

const review = document.getElementById("review").value;

const rating = document.querySelector('input[name="rating"]:checked').value;

try{

await addDoc(collection(db,"reviews"),{

name:name,

occasion:occasion,

review:review,

rating:Number(rating),

approved:false,

createdAt:serverTimestamp()

});

alert("🎉 Thank you! Your review has been submitted successfully and will appear after approval by Team GiftScout.");

form.reset();

}catch(err){

console.error(err);

alert("Something went wrong. Please try again.");

}

});
