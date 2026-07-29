import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function loadHomeReviews() {

  const rating = document.getElementById("homeRating");
  const reviewCount = document.getElementById("homeReviewCount");

  const snapshot = await getDocs(collection(db, "reviews"));

  let totalRating = 0;
  let count = 0;

  snapshot.forEach((doc) => {
    const review = doc.data();

    if (!review.approved) return;

    totalRating += Number(review.rating);
    count++;
  });

  if (count === 0) {
    rating.textContent = "5.0";
    reviewCount.textContent = "0";
    return;
  }

  rating.textContent = (totalRating / count).toFixed(1);
  reviewCount.textContent = count;
}

loadHomeReviews();
