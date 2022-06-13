let buttonOpenCloseNav = document.querySelector('.o-close-nav-btn')
let navigationBar = document.querySelector('nav')

buttonOpenCloseNav.addEventListener('click', () => {

	if (navigationBar.dataset.toggleStatus == 'true'){
		navigationBar.dataset.toggleStatus = 'false'
	}

	else if (navigationBar.dataset.toggleStatus == 'false'){
		navigationBar.dataset.toggleStatus = 'true'
	} 

	else if (navigationBar.dataset.toggleStatus == ''){
		navigationBar.dataset.toggleStatus = 'true'
	}

})