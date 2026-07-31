document.addEventListener("DOMContentLoaded", () => {
          const form = document.getElementById("giftForm");

            if (!form) return;

              form.addEventListener("submit", async (e) => {
                  e.preventDefault();

                      const name = form.querySelector('input[placeholder="Your Name"]').value;
                          const giftFor = form.querySelector('input[placeholder="Gift For"]').value;
                              const occasion = form.querySelector('input[placeholder="Occasion"]').value;
                                  const budget = form.querySelector('input[placeholder="Budget"]').value;
                                      const interests = form.querySelector("textarea").value;

                                          try {
                                                const response = await fetch("https://createorder-jyq6dpob2q-uc.a.run.app", {
                                                        method: "POST",
                                                                headers: {
                                                                          "Content-Type": "application/json"
                                                                                  },
                                                                                          body: JSON.stringify({
                                                                                                    amount: 19900
                                                                                                            })
                                                                                                                  });

                                                                                                                        const data = await response.json();

                                                                                                                              if (!data.success) {
                                                                                                                                      alert("Unable to create payment order.");
                                                                                                                                              return;
                                                                                                                                                    }

                                                                                                                                                          const options = {
                                                                                                                                                                  key: data.key
                                                                                                                                                                          amount: data.order.amount,
                                                                                                                                                                                  currency: data.order.currency,
                                                                                                                                                                                          name: "GiftScout",
                                                                                                                                                                                                  description: "Personalized Gift Recommendation",
                                                                                                                                                                                                          order_id: data.order.id,

                                                                                                                                                                                                                  handler: function () {

                                                                                                                                                                                                                            const message =
                                                                                                                                                                                                                            `🎁 Hi GiftScout!

                                                                                                                                                                                                                            I'd like personalized gift recommendations.

                                                                                                                                                                                                                            👤 Name: ${name}
                                                                                                                                                                                                                            🎁 Gift For: ${giftFor}
                                                                                                                                                                                                                            🎉 Occasion: ${occasion}
                                                                                                                                                                                                                            💰 Budget: Rs. ${budget}
                                                                                                                                                                                                                            ❤️ Interests: ${interests}`;

                                                                                                                                                                                                                                      window.location.href =
                                                                                                                                                                                                                                                  `https://wa.me/917470713973?text=${encodeURIComponent(message)}`;
                                                                                                                                                                                                                                                          },

                                                                                                                                                                                                                                                                  theme: {
                                                                                                                                                                                                                                                                            color: "#6C63FF"
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                                                                                const rzp = new Razorpay(options);
                                                                                                                                                                                                                                                                                                      rzp.open();

                                                                                                                                                                                                                                                                                                          } catch (err) {
                                                                                                                                                                                                                                                                                                                console.error(err);
                                                                                                                                                                                                                                                                                                                      alert("Something went wrong.");
                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                            
})