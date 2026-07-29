import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function loadHomeReviews() {

  try {

    const rating = document.getElementById("homeRating");
    const reviewCount = document.getElementById("homeReviewCount");

    const snapshot = await getDocs(collection(db, "reviews"));

    console.log("Documents:", snapshot.size);

    let totalRating = 0;
    let count = 0;

    snapshot.forEach((doc) => {
      const review = doc.data();
      console.log(review);

      if (review.approved === true) {
        totalRating += Number(review.rating);
        count++;
      }
    });

    reviewCount.textContent = count;
    rating.textContent = count > 0
      ? (totalRating / count).toFixed(1)
      : "5.0";

  } catch (error) {
    console.error("Home Reviews Error:", error);
    alert(error.message);
  }

}

loadHomeReviews();
