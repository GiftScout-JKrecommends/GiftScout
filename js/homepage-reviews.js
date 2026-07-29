import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const container = document.getElementById("homeReviews");

async function loadHomeReviews() {

    const snapshot = await getDocs(collection(db, "reviews"));

    let html = "";

    snapshot.forEach((doc) => {

        const r = doc.data();

        if (!r.approved) return;

        html += `
        <div class="home-review-card">
            <div class="stars">
                ${"⭐".repeat(Number(r.rating))}
            </div>

            <h3>${r.name} ✔</h3>

            <small>Verified Customer</small>

            <p>${r.review}</p>
        </div>
        `;
    });

    if(html===""){
        container.innerHTML="<p>No reviews yet.</p>";
        return;
    }

    // duplicate for infinite scrolling
    container.innerHTML = html + html;

}

loadHomeReviews();
