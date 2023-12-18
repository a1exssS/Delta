function adjustDropdownPosition(dropdown) {
	const dropdownContent = dropdown.querySelector('.filter__dropdown-box');
	if (!dropdownContent) return;

	const dropdownRect = dropdownContent.getBoundingClientRect();
	const spaceRight = window.innerWidth - dropdownRect.right;
	const spaceLeft = dropdownRect.left;

	if (spaceRight < 0 && spaceLeft >= dropdownRect.width) {
		dropdownContent.style.right = '0';
		dropdownContent.style.left = 'auto';
	} else {
		dropdownContent.style.left = '0';
		dropdownContent.style.right = 'auto';
	}
}

function handleResize() {
	const dropdowns = document.querySelectorAll('[data-dropdown]');

	dropdowns.forEach((dropdown) => {
		if (dropdown.classList.contains('active')) {
			adjustDropdownPosition(dropdown);
		}
	});
}

window.addEventListener('resize', handleResize);

document.addEventListener('click', (e) => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]");
	if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

	let currentDropdown;
	if (isDropdownButton) {
		currentDropdown = e.target.closest('[data-dropdown]');
		currentDropdown.classList.toggle('active');
		if (currentDropdown.classList.contains('active')) {
			adjustDropdownPosition(currentDropdown);
		}
	}
	document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
		if (dropdown === currentDropdown) return;
		return dropdown.classList.remove('active');
	});

	handleResize();
});

document.addEventListener('click', (e) => {
	if (e.target.matches("[data-dropdown-button]")) {
		let currentDropdown = e.target.closest('[data-dropdown-card]');
		currentDropdown.classList.toggle('active');
	}
})