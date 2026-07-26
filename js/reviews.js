import { db } from "./firebase-config.js";

import {
collection,
addDoc,
query,
where,
getDocs,
serverTimestamp

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form=document.getElementById("reviewForm");
const reviewsContainer=document.getElementById("reviewsContainer");

async function loadReviews(){

reviewsContainer.innerHTML="Loading reviews...";

const q=query(
collection(db,"reviews"),
where("approved","==",true)
);

const snapshot=await getDocs(q);

reviewsContainer.innerHTML="";

if(snapshot.empty){

reviewsContainer.innerHTML="<p>No reviews yet.</p>";

return;

}

snapshot.forEach((doc)=>{

const r=doc.data();

reviewsContainer.innerHTML+=`

<div class="review-card">

<h3>${r.name}</h3>

<p>${"⭐".repeat(r.rating)}</p>

<small>${r.occasion}</small>

<p>${r.review}</p>

</div>

`;

});

}

loadReviews();

form.addEventListener("submit",async(e)=>{

e.preventDefault();

await addDoc(collection(db,"reviews"),{

name:document.getElementById("name").value,

occasion:document.getElementById("occasion").value,

review:document.getElementById("review").value,

rating:Number(document.querySelector('input[name="rating"]:checked').value),

approved:false,

createdAt:serverTimestamp()

});

alert("🎉 Thank you! Your review has been submitted.");

form.reset();

loadReviews();

});
