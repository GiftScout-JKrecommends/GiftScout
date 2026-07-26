import { db } from "./firebase-config.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function loadHomeReviews() {

    const snapshot = await getDocs(collection(db, "reviews"));

    let total = 0;
    let ratingSum = 0;

    snapshot.forEach(doc => {
        const review = doc.data();

        if (review.approved === true) {
            total++;
            ratingSum += review.rating;
        }
    });

    if (total > 0) {
        document.getElementById("homeReviewCount").textContent = total;
        document.getElementById("homeRating").textContent =
            (ratingSum / total).toFixed(1);
    }
}

loadHomeReviews();
