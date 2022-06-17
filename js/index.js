let buttonOpenCloseNav = document.querySelector('.o-close-nav-btn')
let navigationBar = document.querySelector('nav')
let OpenOrCloseDropdown = document.querySelectorAll('.open-close-dropdown')
let OpenOrCloseDropdownArrows = document.querySelectorAll('.drop-arrow')
let dropdowns = document.querySelectorAll('.dropdown')
let overlay = document.querySelector('#overlay')

buttonOpenCloseNav.addEventListener('click', () => {

	switch (navigationBar.dataset.navToggleStatus){
		case 'true':
			navigationBar.dataset.navToggleStatus = 'false'

			overlay.dataset.overlayActive = 'false'

			buttonOpenCloseNav.src="images/icon-menu.svg"

			break

		case 'false':
			navigationBar.dataset.navToggleStatus = 'true'

			overlay.dataset.overlayActive = 'true'

			buttonOpenCloseNav.src="images/icon-close-menu.svg"

			break

		default: /*For the beginning value*/
			navigationBar.dataset.navToggleStatus = 'true'

			overlay.dataset.overlayActive = 'true'

			buttonOpenCloseNav.src="images/icon-close-menu.svg"

			break
	}

})

OpenOrCloseDropdown.forEach(showDropmenu => {

	showDropmenu.addEventListener('click', (e) => {
		makeDropMenuAppear(e);
	})
})

function makeDropMenuAppear(e){
	if (e.target === OpenOrCloseDropdown[0]){

		switch (dropdowns[0].dataset.dropActive){

			case 'true':
				dropdowns[0].dataset.dropActive = 'false'
				OpenOrCloseDropdownArrows[0].dataset.dropArrowActive = 'false'
				break;

			case 'false':
				dropdowns[0].dataset.dropActive = 'true'
				OpenOrCloseDropdownArrows[0].dataset.dropArrowActive = 'true'
				break;

			default:
				dropdowns[0].dataset.dropActive = 'true'
				OpenOrCloseDropdownArrows[0].dataset.dropArrowActive = 'true'
				break;

		}

	} 
	else if (e.target === OpenOrCloseDropdown[1]){

		switch (dropdowns[1].dataset.dropActive){

			case 'true':
				dropdowns[1].dataset.dropActive = 'false'
				OpenOrCloseDropdownArrows[1].dataset.dropArrowActive = 'false'
				break;

			case 'false':
				dropdowns[1].dataset.dropActive = 'true'
				OpenOrCloseDropdownArrows[1].dataset.dropArrowActive = 'true'
				break;

			default:
				dropdowns[1].dataset.dropActive = 'true'
				OpenOrCloseDropdownArrows[1].dataset.dropArrowActive = 'true'
				break;

		}

	}
}