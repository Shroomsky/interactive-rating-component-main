const submitBtn = document.querySelector(".submit");
const rating = document.querySelector(".rating");
const thankYou = document.querySelector(".thankYou");
const rates = document.querySelectorAll("button.cyrcle");
const span = document.querySelector("h3 span");

const cardSwith = () => {
	rating.classList.toggle("notActive");
	thankYou.classList.toggle("notActive");
};

const rateListener = () => {
	for (let f of rates) {
		f.addEventListener("click", rateToSpan);
	}
};
const rateToSpan = (e) => {
	span.innerHTML = e.srcElement.innerHTML;
};
const submitFn = () => {
	cardSwith();
	setTimeout(cardSwith, 3000);
};

rateListener();
submitBtn.addEventListener("click", submitFn);
