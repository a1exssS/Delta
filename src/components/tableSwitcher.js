document.addEventListener('click', (e) => {
	if (e.target.matches("[data-dropdown-table-button='1']")) {
		e.target.classList.add('active');
		document.querySelector("[data-dropdown-table-button='2']").classList.remove('active')
		document.querySelector("[data-dropdown-table='1']").style.display = "block"
		document.querySelector("[data-dropdown-table='2']").style.display = "none"
	}
	if (e.target.matches("[data-dropdown-table-button='2']")) {
		e.target.classList.add('active');
		document.querySelector("[data-dropdown-table-button='1']").classList.remove('active')
		document.querySelector("[data-dropdown-table='2']").style.display = "block"
		document.querySelector("[data-dropdown-table='1']").style.display = "none"
	}
})