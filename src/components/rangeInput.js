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
				sizeProgress.style.left = (minVal / rangeSizeInput[0].max) * 100 - 4.5 + "%"
			} else {
				rangeSizeInput[1].value = maxVal
				sizeProgress.style.right = 100 - (maxVal / rangeSizeInput[1].max) * 100 + 4.5 + "%"
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
			inputSizeField[0].value = minVal
			inputSizeField[1].value = maxVal
			sizeProgress.style.left = (minVal / rangeSizeInput[0].max) * 100 - 4.5 + "%"
			sizeProgress.style.right = 100 - (maxVal / rangeSizeInput[1].max) * 100 + 4.5 + "%"
		}

	})
})
inputPriceField.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minVal = parseInt(inputPriceField[0].value),
			maxVal = parseInt(inputPriceField[1].value)

		if ((maxVal - minVal >= priceGap) && maxVal <= 60000000 && minVal >= 1000000) {
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
			inputPriceField[0].value = minVal
			inputPriceField[1].value = maxVal
			priceProgress.style.left = (minVal / rangePriceInput[0].max) * 100 + "%"
			priceProgress.style.right = 100 - (maxVal / rangePriceInput[1].max) * 100 + "%"
		}

	})
})


