if (document.querySelector('.filter__dropdown')) {

	document.addEventListener('click', (e) => {
		const isResetButton = e.target.matches("[data-reset-button]")
		if (!isResetButton && e.target.closest('.filter__dropdown-label') != null) return
		let currentResetButton;

		if (isResetButton) {
			currentResetButton = e.target.closest('[data-dropdown]')
			currentResetButton.querySelector('.filter__option-name span').innerHTML = ''
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
				selectedCountElement.innerHTML = `${selectedCheckboxes.length > 0 ? `<strong>:</strong> ${selectedCheckboxes.length}` : ''}`;
			}
			currentOpenButton.querySelectorAll('input').forEach((el) => {
				el.addEventListener('change', updateSelectedCount)
			})
		}
	})
	document.addEventListener("DOMContentLoaded", () => {
		const element = document.querySelector(".filter__dropdown-item"); // замените на ваш класс или id элемента
		const children = Array.from(element.children);
		const showAllButton = document.createElement("button");
		showAllButton.setAttribute('type', 'button')
		showAllButton.classList.add('filter__show-button')
		const initialChildrenCount = 6;
		let isExpanded = false;

		children.forEach((child, index) => {
			if (index >= initialChildrenCount) {
				child.style.display = "none";
			}
		});

		if (children.length > initialChildrenCount) {
			showAllButton.textContent = "Показать все";
			element.parentNode.insertBefore(showAllButton, element.nextSibling);

			showAllButton.addEventListener("click", () => {
				children.forEach((child, index) => {
					if (index >= initialChildrenCount) {
						child.style.display = isExpanded ? "none" : "";
					}
				});

				showAllButton.textContent = isExpanded ? "Показать все" : "Скрыть";
				isExpanded = !isExpanded;
			});
		}
	});

}
