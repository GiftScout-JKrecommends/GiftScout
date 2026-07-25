document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("giftForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const inputs = form.querySelectorAll("input, textarea");

const name = inputs[0].value;
const giftFor = inputs[1].value;
const occasion = inputs[2].value;
const budget = inputs[3].value;
const interests = inputs[4].value;
const date = inputs[5].value;

const message =
`🎁 Hello GiftScout!

I'd like personalized gift recommendations.

👤 Name: ${name}

🎁 Gift For: ${giftFor}

🎉 Occasion: ${occasion}

💰 Budget: ${budget}

❤️ Interests: ${interests}

📅 Required By: ${date}

Thank you!`;

window.open(
`https://wa.me/917470713973?text=${encodeURIComponent(message)}`,
"_blank"
);

});

}

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all .7s ease";

observer.observe(card);

});

});
