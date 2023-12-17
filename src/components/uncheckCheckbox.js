document.addEventListener('click', (e) => {
	const isResetButton = e.target.matches("[data-reset-button]")
	if (!isResetButton && e.target.closest('.filter__dropdown-label') != null) return
	let currentResetButton;

	if (isResetButton) {
		currentResetButton = e.target.closest('[data-dropdown]')
		currentResetButton.querySelector('.filter__option-name span').textContent = ''
		currentResetButton.querySelectorAll('input').forEach((el) => {
			el.checked = false
		})
	}

	const isOpenButton = e.target.matches("[data-dropdown-button]")
	if (!isOpenButton && e.target.closest('.filter__dropdown-label') != null) return

	if (isOpenButton) {
		let currentOpenButton = e.target.closest('[data-dropdown]')
		let selectedCountElement = currentOpenButton.querySelector('.filter__option-name span')
		function updateSelectedCount() {
			const selectedCheckboxes = document.querySelectorAll('.filter__dropdown-input:checked');
			selectedCountElement.textContent = `${selectedCheckboxes.length > 0 ? selectedCheckboxes.length : ''}`;
		}
		currentOpenButton.querySelectorAll('input').forEach((el) => {
			el.addEventListener('change', updateSelectedCount)
		})
	}
})