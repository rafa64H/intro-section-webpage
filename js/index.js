let buttonOpenCloseNav = document.querySelector('.o-close-nav-btn')

let navigationBar = document.querySelector('nav')


let OpenOrCloseDropdown = document.querySelectorAll('.open-close-dropdown')

let OpenOrCloseDropdownArrowIcons = document.querySelectorAll('.drop-arrow')

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


		default: /*For the beginning value (to open)*/

			navigationBar.dataset.navToggleStatus = 'true'

			overlay.dataset.overlayActive = 'true'

			buttonOpenCloseNav.src="images/icon-close-menu.svg"

			break

	}

})


OpenOrCloseDropdown.forEach(elementsWithDropdownClasses => {

	elementsWithDropdownClasses.addEventListener('click', (e) => {
		makeDropMenuAppear(e);
	})
})

function makeDropMenuAppear(e){

	if (e.target === OpenOrCloseDropdown[0]){

		switch (dropdowns[0].dataset.dropActive){ 

			case 'true':

				dropdowns[0].dataset.dropActive = 'false'

				OpenOrCloseDropdownArrowIcons[0].dataset.dropArrowActive = 'false'

				break;


			case 'false':

				if(dropdowns[1].dataset.dropActive === 'true'){

					dropdowns[1].dataset.dropActive = 'false'

					OpenOrCloseDropdownArrowIcons[1].dataset.dropArrowActive = 'false'

				}

				dropdowns[0].dataset.dropActive = 'true'

				OpenOrCloseDropdownArrowIcons[0].dataset.dropArrowActive = 'true'

				break;


			default: /*For the beginning value (to open)*/

				if(dropdowns[1].dataset.dropActive === 'true'){

					dropdowns[1].dataset.dropActive = 'false'

					OpenOrCloseDropdownArrowIcons[1].dataset.dropArrowActive = 'false'

				}

				dropdowns[0].dataset.dropActive = 'true'

				OpenOrCloseDropdownArrowIcons[0].dataset.dropArrowActive = 'true'

				break;

		}

	} 
	else if (e.target === OpenOrCloseDropdown[1]){

		switch (dropdowns[1].dataset.dropActive){

			case 'true':

				dropdowns[1].dataset.dropActive = 'false'

				OpenOrCloseDropdownArrowIcons[1].dataset.dropArrowActive = 'false'

				break;


			case 'false':

				if(dropdowns[0].dataset.dropActive === 'true'){

					dropdowns[0].dataset.dropActive = 'false'

					OpenOrCloseDropdownArrowIcons[0].dataset.dropArrowActive = 'false'

				}

				dropdowns[1].dataset.dropActive = 'true'

				OpenOrCloseDropdownArrowIcons[1].dataset.dropArrowActive = 'true'

				break;


			default: /*For the beginning value (to open)*/

				if(dropdowns[0].dataset.dropActive === 'true'){

					dropdowns[0].dataset.dropActive = 'false'

					OpenOrCloseDropdownArrowIcon[0].dataset.dropArrowActive = 'false'

				}

				dropdowns[1].dataset.dropActive = 'true'

				OpenOrCloseDropdownArrowIcons[1].dataset.dropArrowActive = 'true'

				break;

		}

	}
}