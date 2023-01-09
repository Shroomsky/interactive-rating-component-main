const span = document.querySelector("#display_rate");
const thankYouCard = document.querySelector(".thankYou");
const rates = document.querySelector(".rates");
const headerP = document.querySelector("#p");
let rate;

const componentReset = () => {
	thankYouCard.classList.add("notActive");
	rates.classList.remove("notActive");
    error.remove();
};

let error = document.createElement("p");
		error.classList.add("error");
		error.innerHTML = "Please select rate before submit";

const ratesCheck = (e) => {
	e.preventDefault();
	rate = document.querySelector('input[name="rate"]:checked');
	if (rate !== null) {
		span.innerHTML = rate.value;
		thankYouCard.classList.remove("notActive");
		rates.classList.add("notActive");
		setTimeout(componentReset, 2000);
	} else {
		
		headerP.append(error);
		setTimeout(componentReset, 2000);
	}
};

document.addEventListener("submit", ratesCheck);
