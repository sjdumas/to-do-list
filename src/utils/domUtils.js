export const createDisablerButton = (buttonClass, inputClass) => {
	const button = document.querySelector(buttonClass);
	const input = document.querySelector(inputClass);
	const disableByLength = () => {
		if (input.value.length > 2) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
	};

	input.addEventListener("input", disableByLength);
};

export const setNumberOfTaskInButton = (buttonClass, tasks) => {
	const todayButtonCounterDiv = document.querySelector(buttonClass);
	todayButtonCounterDiv.textContent = tasks;
};

export const setButtonActive = (buttonClass) => {
	removeActiveButton();
	const button = document.querySelector(buttonClass);
	button.classList.add("active");
};

export const removeActiveButton = () => {
	if (document.querySelector(".active")) {
		const alreadyActiveButton = document.querySelector(".active");
		alreadyActiveButton.classList.toggle("active");
	}
};

export const createCounterInput = (inputClass, showClass, limit) => {
	const input = document.querySelector(inputClass);
	const text = document.querySelector(showClass);
	input.addEventListener("input", (event) => {
		text.textContent = `${event.target.value.length}/${limit}`;
	});
};

export const dynamicallyIncreaseHeightTextArea = (classTextArea) => {
	const textArea = document.querySelector(classTextArea);
	textArea.addEventListener("input", () => {
		textArea.style.height = `auto`;
		textArea.style.height = `${textArea.scrollHeight}px`;
	});
};

export const cleanForm = (formClass) => {
	const mainAddTaskForm = document.querySelector(formClass);
	mainAddTaskForm.elements[0].style.height = "auto";
	mainAddTaskForm.elements[1].style.height = "auto";
	mainAddTaskForm.reset();
};

export const getRandomMixedString = (length) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let result = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * alphabet.length);
		result += alphabet[randomIndex];
	}
	return result;
};
