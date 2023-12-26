const closeSuccessButton = document.querySelectorAll('.overlay__button_success')
let inputPhoneNumber = ''
document.querySelectorAll('#phone').forEach((el) => {
	el.addEventListener('input', () => {
		let input = el.querySelector('input')

		let value = input.value.replace(/\D/g, '');

		if (value.length > 11) {
			value = value.slice(0, 11);
		}

		let formattedNumber;

		if (input.value == "+") {
			input.value = formattedNumber = ""
		} else {
			formattedNumber = '+';
		}
		for (let i = 0; i < value.length; i++) {
			if (i === 1) {
				formattedNumber += ' ';
			} else if (i === 4 || i === 7) {
				formattedNumber += ' ';
			} else if (i === 9) {
				formattedNumber += ' ';
			}
			formattedNumber += value.charAt(i);
		}

		input.value = formattedNumber;
		inputPhoneNumber = formattedNumber

	})
})

const overlayBox = document.querySelector('.overlay-box')
overlayBox.style.display = 'none'

function validateName(input) {
	return input !== '' ? input : '';
}

function validateEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function validatePhoneNumber(phoneNumber) {
	return phoneNumber.length === 16;
}

document.querySelectorAll('form').forEach(form => {
	form.addEventListener('submit', e => {
		e.preventDefault();

		const inputRequestName = form.querySelector('#name');
		const inputRequestEmail = form.querySelector('#email');
		const inputRequestPhone = form.querySelector('#phone');

		inputRequestName.classList.remove('error');
		inputRequestPhone.classList.remove('error');
		let email;
		if (inputRequestEmail) {
			inputRequestEmail.classList.remove('error');
			email = inputRequestEmail.querySelector('input').value
		}

		const name = validateName(inputRequestName.querySelector('input').value);
		const phone = inputRequestPhone.querySelector('input').value

		if (!name) {
			inputRequestName.classList.add('error');
		}

		if (inputRequestEmail && (!email || !validateEmail(email))) {
			inputRequestEmail.classList.add('error');
		}

		if (!phone || !validatePhoneNumber(phone)) {
			inputRequestPhone.classList.add('error');
		}

		let emailValidation = email ? true : inputRequestEmail ? false : true

		if (name && emailValidation && phone && validatePhoneNumber(phone)) {
			inputRequestName.querySelector('input').value = '';
			if (inputRequestEmail) {
				inputRequestEmail.querySelector('input').value = '';
				inputRequestEmail.classList.remove('error');
			}
			inputRequestPhone.querySelector('input').value = '';

			const overlay = document.getElementById('success-overlay');
			if (document.getElementById('consultation-overlay')) {
				const consultationOverlay = document.getElementById('consultation-overlay')
				consultationOverlay.style.display = "none"
			}
			if (document.getElementById('project-overlay')) {
				const consultationOverlay = document.getElementById('project-overlay')
				consultationOverlay.style.display = "none"
			}
			if (document.getElementById('header-overlay')) {
				const consultationOverlay = document.getElementById('header-overlay')
				consultationOverlay.style.display = "none"
			}
			overlay.style.display = 'flex';
			overlayBox.style.display = 'unset';
			document.body.style.overflow = 'hidden';
			document.querySelector('.header').style.filter = "blur(4px)";
			document.querySelector('.main').style.filter = "blur(4px)";
			document.querySelector('.footer').style.filter = "blur(4px)";
			document.querySelector('.navigation').style.filter = "blur(4px)";

			overlay.addEventListener('click', (event) => {
				if (event.target === overlay) {
					overlay.style.display = 'none';
					overlayBox.style.display = 'none';
					document.body.style.overflow = 'unset';
					document.querySelector('.header').style.filter = "unset";
					document.querySelector('.main').style.filter = "unset";
					document.querySelector('.footer').style.filter = "unset";
					document.querySelector('.navigation').style.filter = "unset";
				}
			});
		}
	});
});

closeSuccessButton.forEach((el) => {
	el.addEventListener('click', (event) => {

		document.querySelectorAll('.overlay').forEach((el) => {
			el.style.display = 'none';
		})
		overlayBox.style.display = 'none';
		document.body.style.overflow = 'unset'
		document.querySelector('.header').style.filter = "unset";
		document.querySelector('.main').style.filter = "unset";
		document.querySelector('.footer').style.filter = "unset";
		document.querySelector('.navigation').style.filter = "unset";
	});
})