if (document.querySelector('.filter__dropdown-inputs-size')) {

	const rangeSizeInput = document.querySelectorAll('.filter__dropdown-inputs-size input'),
		inputSizeField = document.querySelectorAll('.filter__dropdown-range-size input'),
		sizeProgress = document.querySelector('.filter__dropdown-slider-size .filter__dropdown-slider-progress-size')
	const rangePriceInput = document.querySelectorAll('.filter__dropdown-inputs-price input'),
		inputPriceField = document.querySelectorAll('.filter__dropdown-range-price input'),
		priceProgress = document.querySelector('.filter__dropdown-slider-price .filter__dropdown-slider-progress-price')

	let sizeGap = 2
	let priceGap = 1000
	inputSizeField.forEach((input) => {
		input.addEventListener("input", (e) => {
			let minVal = parseInt(inputSizeField[0].value),
				maxVal = parseInt(inputSizeField[1].value)
			if ((maxVal - minVal >= sizeGap) && maxVal <= 400 && minVal >= 35) {
				if (e.target.className === "filter__dropdown-range-number filter__dropdown-number-min range-number-size-min") {
					rangeSizeInput[0].value = minVal
					sizeProgress.style.left = (minVal / rangeSizeInput[0].max) * 100 + "%"
				} else {
					rangeSizeInput[1].value = maxVal
					sizeProgress.style.right = 100 - (maxVal / rangeSizeInput[1].max) * 100 + "%"
				}
			}

		})
	})
	rangeSizeInput.forEach((input) => {
		input.addEventListener("input", (e) => {
			let minVal = parseInt(rangeSizeInput[0].value),
				maxVal = parseInt(rangeSizeInput[1].value)

			if (maxVal - minVal < sizeGap) {
				if (e.target.className === "filter__dropdown-range-input-min range-size-min") {
					rangeSizeInput[0].value = maxVal - sizeGap
				} else {
					rangeSizeInput[1].value = minVal + sizeGap
				}
			}
			else {
				function calc(number, min, max) {
					return ((number - min) / (max - min)) * 100
				}
				const minRange = 35;
				const maxRange = 400;
				inputSizeField[0].value = minVal
				inputSizeField[1].value = maxVal
				sizeProgress.style.left = Math.round(calc(inputSizeField[0].value, minRange, maxRange)) + "%"
				sizeProgress.style.right = 100 - Math.round(calc(inputSizeField[1].value, minRange, maxRange)) + "%"
			}

		})
	})
	inputPriceField.forEach((input) => {
		input.addEventListener("input", (e) => {
			let minVal = parseInt(inputPriceField[0].value),
				maxVal = parseInt(inputPriceField[1].value)

			if ((maxVal - minVal >= priceGap) && maxVal <= 22690000 && minVal >= 1470000) {
				if (e.target.className === "filter__dropdown-range-number filter__dropdown-number-min range-number-price-min") {
					rangePriceInput[0].value = minVal
					priceProgress.style.left = (minVal / rangePriceInput[0].max) * 100 + "%"
				} else {
					rangePriceInput[1].value = maxVal
					priceProgress.style.right = 100 - (maxVal / rangePriceInput[1].max) * 100 + "%"
				}
			}

		})
	})
	rangePriceInput.forEach((input) => {
		input.addEventListener("input", (e) => {
			let minVal = parseInt(rangePriceInput[0].value),
				maxVal = parseInt(rangePriceInput[1].value)

			if (maxVal - minVal < priceGap) {
				if (e.target.className === "filter__dropdown-range-input-min range-price-min") {
					rangePriceInput[0].value = maxVal - priceGap
				} else {
					rangePriceInput[1].value = minVal + priceGap
				}
			}
			else {
				function calc(number, min, max) {
					return ((number - min) / (max - min)) * 100
				}
				const minRange = 1470000;
				const maxRange = 22690000;
				inputPriceField[0].value = minVal
				inputPriceField[1].value = maxVal
				priceProgress.style.left = Math.round(calc(inputPriceField[0].value, minRange, maxRange)) + "%"
				priceProgress.style.right = 100 - Math.round(calc(inputPriceField[1].value, minRange, maxRange)) + "%"
			}

		})
	})
}


