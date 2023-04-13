document.addEventListener('DOMContentLoaded', () => {
	const minusBtn = document.querySelector('#Minus_Btn');
	const plusBtn = document.querySelector('#Plus_Btn');
	const numberDisplay = document.querySelector('#Number_Display');
	let number = 0;
  
	numberDisplay.textContent = number;
  
	minusBtn.addEventListener('click', () => {
	  if (number > 0) {
		number--;
		numberDisplay.textContent = number;
	  }
	});
  
	plusBtn.addEventListener('click', () => {
	  if (number < 1000) {
		number++;
		numberDisplay.textContent = number;
	  }
	});
  });
