let buttonOpenCloseNav = document.querySelector('.o-close-nav-btn')
let navigationBar = document.querySelector('nav')
let dropdown = document.querySelector('.dropdown')
let overlay = document.querySelector('#overlay')

buttonOpenCloseNav.addEventListener('click', () => {

	switch (navigationBar.dataset.toggleStatus){
		case 'true':
			navigationBar.dataset.toggleStatus = 'false'

			overlay.dataset.overlayActive = 'false'

			buttonOpenCloseNav.src="images/icon-menu.svg"

			break

		case 'false':
			navigationBar.dataset.toggleStatus = 'true'

			overlay.dataset.overlayActive = 'true'

			buttonOpenCloseNav.src="images/icon-close-menu.svg"

			break

		default: /*For the beginning value*/
			navigationBar.dataset.toggleStatus = 'true'

			overlay.dataset.overlayActive = 'true'

			buttonOpenCloseNav.src="images/icon-close-menu.svg"

			break
	}

})