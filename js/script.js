document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll("input, textarea");

      const name = inputs[0].value;
      const giftFor = inputs[1].value;
      const occasion = inputs[2].value;
      const budget = inputs[3].value;
      const interests = inputs[4].value;

      const message =
`🎁 Hi GiftScout!

I'd like personalized gift recommendations.

👤 Name: ${name}
🎁 Gift For: ${giftFor}
🎉 Occasion: ${occasion}
💰 Budget: ${budget}
❤️ Interests: ${interests}

Presented by JK Recommends`;

      const url =
        "https://wa.me/917470713973?text=" +
        encodeURIComponent(message);

      window.open(url, "_blank");
    });
  }
});
import { db } from "./firebase-config.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function loadHomepageReviews(){

const rating=document.getElementById("homeRating");
const reviewCount=document.getElementById("homeReviewCount");

if(!rating || !reviewCount) return;

const snapshot=await getDocs(collection(db,"reviews"));

let total=0;
let count=0;

snapshot.forEach((doc)=>{

const data=doc.data();

if(data.approved===true){

count++;
total+=Number(data.rating);

}

});

reviewCount.textContent=count;

rating.textContent=
count>0 ? (total/count).toFixed(1) : "0.0";

}

loadHomepageReviews();
