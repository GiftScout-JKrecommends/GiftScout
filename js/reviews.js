import { db } from "./firebase-config.js";

import {
    collection,
    addDoc,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviewsContainer");
const averageRating = document.getElementById("averageRating");
const totalReviews = document.getElementById("totalReviews");

document.getElementById("successModal").style.display = "none";

// Load Approved Reviews
async function loadReviews() {

    reviewsContainer.innerHTML = "";

    const snapshot = await getDocs(collection(db, "reviews"));

    let total = 0;
    let count = 0;

    snapshot.forEach((doc) => {

        const r = doc.data();

        if (!r.approved) return;

        total += Number(r.rating);
        count++;

        reviewsContainer.innerHTML += `
            <div class="review-card">

                <h3>
                    ${r.name}
                    <span style="color:#ff8800;">✔ Verified Customer</span>
                </h3>

                <small>${r.occasion}</small>

                <p style="font-size:22px;">
                    ${"⭐".repeat(Number(r.rating))}
                </p>

                <p>${r.review}</p>

            </div>
        `;

    });

    if (count === 0) {

        reviewsContainer.innerHTML = "<p>No reviews yet.</p>";
        averageRating.innerHTML = "⭐ 0.0";
        totalReviews.innerHTML = "0";

        return;
    }

    averageRating.innerHTML = "⭐ " + (total / count).toFixed(1);
    totalReviews.innerHTML = count;
}

loadReviews();

// Submit Review
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

        await addDoc(collection(db, "reviews"), {

            name: document.getElementById("name").value,
            occasion: document.getElementById("occasion").value,
            review: document.getElementById("review").value,
            rating: Number(document.querySelector('input[name="rating"]:checked').value),
            approved: false,
            createdAt: serverTimestamp()

        });

        // Show Success Popup
        document.getElementById("successModal").style.display = "flex";

        form.reset();

        loadReviews();

    } catch (error) {

        console.error(error);

        alert("❌ Review submission failed.\n\nPlease try again.");

    }

});

// Close Success Popup
window.closeModal = function () {

    document.getElementById("successModal").style.display = "none";

};
