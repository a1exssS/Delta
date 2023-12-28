if (document.querySelector('.filter__options-item')) {

	document.addEventListener('DOMContentLoaded', function () {
		const containers = document.querySelectorAll('.filter__options-item');

		containers.forEach(container => {
			const checkboxes = container.querySelectorAll('.filter__dropdown-input');

			const rangeSizeInputs = container.querySelectorAll('.filter__dropdown-inputs-size input');
			const rangeSizeNumberInputs = container.querySelectorAll('.filter__dropdown-range-size input');
			const rangeSizeProgress = container.querySelector('.filter__dropdown-slider-progress-size');

			const rangePriceInputs = container.querySelectorAll('.filter__dropdown-inputs-price input');
			const rangePriceNumberInputs = container.querySelectorAll('.filter__dropdown-range-price input');
			const rangePriceProgress = container.querySelector('.filter__dropdown-slider-progress-price');

			const selectedCount = container.querySelector('.filter__option-name span');
			const resetButton = container.querySelector('.filter__reset-button');
			const resetAllButton = container.querySelector('.filter__button-submit');

			rangePriceInputs.forEach((range) => {
				range.addEventListener("change", function () {
					let minRange = rangePriceInputs[0].getAttribute('data-price-range-min');
					let maxRange = rangePriceInputs[1].getAttribute('data-price-range-max');
					if (rangePriceInputs[0].value !== minRange || rangePriceInputs[1].value !== maxRange) {
						selectedCount.closest('.filter__options-item').querySelector('[data-reset-button]').style.display = "flex"
					} else {
						selectedCount.closest('.filter__options-item').querySelector('[data-reset-button]').style.display = "none"
					}
				});
			})
			rangeSizeInputs.forEach((range) => {
				range.addEventListener("change", function () {
					let minRange = rangeSizeInputs[0].getAttribute('data-size-range-min');
					let maxRange = rangeSizeInputs[1].getAttribute('data-size-range-max');
					if (rangeSizeInputs[0].value !== minRange || rangeSizeInputs[1].value !== maxRange) {

						selectedCount.closest('.filter__options-item').querySelector('[data-reset-button]').style.display = "flex"
					} else {
						selectedCount.closest('.filter__options-item').querySelector('[data-reset-button]').style.display = "none"
					}
				});
			})

			checkboxes.forEach(checkbox => {
				checkbox.addEventListener('change', function () {
					let checkedCount = 0;

					checkboxes.forEach(chk => {
						if (chk.checked) {
							checkedCount++;
						}
					});
					checkedCount > 0 ? selectedCount.closest('.filter__options-item').querySelector('[data-reset-button]').style.display = "flex" : selectedCount.closest('.filter__options-item').querySelector('[data-reset-button]').style.display = "none"

					selectedCount.innerHTML = checkedCount > 0 ? `<strong>:</strong> ${checkedCount}` : ``;
				});
			});
			try {
				resetButton.addEventListener('click', function () {
					checkboxes.forEach(chk => {
						chk.checked = false;
					});
					selectedCount.closest('.filter__options-item').querySelector('[data-reset-button]').style.display = "none";
					selectedCount.innerHTML = ``;
					try {
						rangeSizeProgress.style.left = "0"
						rangeSizeProgress.style.right = "0"
						rangeSizeNumberInputs[0].value = rangeSizeInputs[0].getAttribute('data-size-range-min');
						rangeSizeInputs[0].value = rangeSizeInputs[0].getAttribute('data-size-range-min');
						rangeSizeNumberInputs[1].value = rangeSizeInputs[1].getAttribute('data-size-range-max');
						rangeSizeInputs[1].value = rangeSizeInputs[1].getAttribute('data-size-range-max');
					} catch (e) { }
					try {
						rangePriceProgress.style.left = "0"
						rangePriceProgress.style.right = "0"
						rangePriceNumberInputs[0].value = rangePriceInputs[0].getAttribute('data-price-range-min');
						rangePriceInputs[0].value = rangePriceInputs[0].getAttribute('data-price-range-min');
						rangePriceNumberInputs[1].value = rangePriceInputs[1].getAttribute('data-price-range-max');
						rangePriceInputs[1].value = rangePriceInputs[1].getAttribute('data-price-range-max');
					} catch (e) { }
				});

			}
			catch (e) {
			}
			try {
				resetAllButton.addEventListener('click', function () {
					document.querySelectorAll('.filter__dropdown-input').forEach(chk => {
						chk.checked = false;
					});
					document.querySelectorAll('[data-reset-button]').forEach((el) => {
						el.style.display = "none";
					})
					document.querySelectorAll('.filter__option-name span').forEach((el) => {
						el.innerHTML = ``;
					})
					const rangeSizeInputs = document.querySelectorAll('.filter__dropdown-inputs-size input');
					const rangeSizeNumberInputs = document.querySelectorAll('.filter__dropdown-range-size input');
					const rangeSizeProgress = document.querySelector('.filter__dropdown-slider-progress-size');

					const rangePriceInputs = document.querySelectorAll('.filter__dropdown-inputs-price input');
					const rangePriceNumberInputs = document.querySelectorAll('.filter__dropdown-range-price input');
					const rangePriceProgress = document.querySelector('.filter__dropdown-slider-progress-price');

					rangeSizeProgress.style.left = "0"
					rangeSizeProgress.style.right = "0"
					rangeSizeNumberInputs[0].value = rangeSizeInputs[0].getAttribute('data-size-range-min');
					rangeSizeInputs[0].value = rangeSizeInputs[0].getAttribute('data-size-range-min');
					rangeSizeNumberInputs[1].value = rangeSizeInputs[1].getAttribute('data-size-range-max');
					rangeSizeInputs[1].value = rangeSizeInputs[1].getAttribute('data-size-range-max');

					rangePriceProgress.style.left = "0"
					rangePriceProgress.style.right = "0"
					rangePriceNumberInputs[0].value = rangePriceInputs[0].getAttribute('data-price-range-min');
					rangePriceInputs[0].value = rangePriceInputs[0].getAttribute('data-price-range-min');
					rangePriceNumberInputs[1].value = rangePriceInputs[1].getAttribute('data-price-range-max');
					rangePriceInputs[1].value = rangePriceInputs[1].getAttribute('data-price-range-max');
				});
			} catch (e) { }
		});
	});
	document.addEventListener("DOMContentLoaded", () => {
		const element = document.querySelector(".filter__dropdown-item");
		const children = Array.from(element.children);
		const showAllButton = document.createElement("button");
		showAllButton.setAttribute('type', 'button')
		showAllButton.classList.add('filter__show-button')
		let initialChildrenCount
		if (window.innerWidth < 740) {
			initialChildrenCount = 6
		} else {
			initialChildrenCount = 9999
		}
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