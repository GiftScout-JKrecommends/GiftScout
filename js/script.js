document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("giftForm");

    if (!form) return;

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = form.querySelector('input[placeholder="Your Name"]').value;
        const giftFor = form.querySelector('input[placeholder="Gift For"]').value;
        const occasion = form.querySelector('input[placeholder="Occasion"]').value;
        const budget = form.querySelector('input[placeholder="Budget"]').value;
        const interests = form.querySelector("textarea").value;

        const message = `🎁 Hi GiftScout!

I'd like personalized gift recommendations.

👤 Name: ${name}
🎁 Gift For: ${giftFor}
🎉 Occasion: ${occasion}
💰 Budget: Rs. ${budget}
❤️ Interests: ${interests}`;

        const url = `https://wa.me/917470713973?text=${encodeURIComponent(message)}`;

        window.location.href = url;

    });

});
