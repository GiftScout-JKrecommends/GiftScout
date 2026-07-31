document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("giftForm");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
    const giftFor = form.querySelector('input[placeholder="Gift For"]').value.trim();
    const occasion = form.querySelector('input[placeholder="Occasion"]').value.trim();
    const budget = Number(
      form.querySelector('input[placeholder="Budget"]').value
    );
    const interests = form.querySelector("textarea").value.trim();

    // Calculate GiftScout fee
    let fee = Math.round(budget * 0.10);

    if (fee < 10) fee = 10;
    if (fee > 999) fee = 999;

    try {
      const response = await fetch(
        "https://createorder-jyq6dpob2q-uc.a.run.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: fee * 100,
            receipt: `gift_${Date.now()}`,
          }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        alert("Unable to create payment order.");
        return;
      }

      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "GiftScout",
        description: "Personalized Gift Recommendation",
        order_id: data.order.id,

        prefill: {
          name: name,
        },

        theme: {
          color: "#6C63FF",
        },

        handler: function () {
          const message = `🎁 Hi GiftScout!

I'd like personalized gift recommendations.

👤 Name: ${name}
🎁 Gift For: ${giftFor}
🎉 Occasion: ${occasion}
💰 Budget: ₹${budget}
💳 Paid: ₹${fee}
❤️ Interests: ${interests}`;

          window.location.href =
            `https://wa.me/917470713973?text=${encodeURIComponent(message)}`;
        },
      };

      const rzp = new Razorpay(options);

      rzp.on("payment.failed", function (response) {
        alert(
          "Payment failed.\n\nReason: " +
            response.error.description
        );
      });

      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  });
});
