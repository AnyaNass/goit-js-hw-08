import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[type="email"]');
const message = document.querySelector('textarea')

const LOCALSTORAGE_FEEDBACK_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onInput, 500))
form.addEventListener('submit', onSubmit)

const formInfo = {};

function onInput(event) {
	formInfo[event.target.name] = event.target.value;

	const formInfoJSON = JSON.stringify(formInfo);

	localStorage.setItem(LOCALSTORAGE_FEEDBACK_KEY, formInfoJSON);
}

savedFormValues();

function savedFormValues() {
	const savedValues = localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY);
	const values = JSON.parse(savedValues);

	if (savedValues) {
		message.value = values.message || "";
		email.value = values.email || "";
	}
}

function onSubmit(event) {
	event.preventDefault();

	event.currentTarget.reset();

	console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY)));

	localStorage.removeItem(LOCALSTORAGE_FEEDBACK_KEY);
}