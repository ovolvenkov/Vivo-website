'use strict'

function menu() {
	let menuContainer = document.querySelector('.menu .container');
	let menuUl = document.querySelector('.menu_ul');
	let arrow = document.querySelector('.menu_arrow');

	menuContainer.addEventListener('click', menuOpenClose);

	function menuOpenClose(e) {

		let menuLiColection = document.querySelectorAll('.menu_li');
		if (window.getComputedStyle(arrow).display === 'block') {
			this.children[0].children[0].classList.toggle('menu_open');
			arrow.classList.toggle('menu_arrow_top');

			if (e.target.tagName === 'A') {
				menuLiColection.forEach( item => item.children[0].classList.remove('menu_active'));
				e.target.classList.add('menu_active');
				menuUl.prepend(e.target.parentElement);
			}
		} else {
			menuLiColection.forEach( item => item.children[0].classList.remove('menu_active'));
			e.target.classList.add('menu_active');
		}

	} 
}

menu()




function rotateElement(selectorParentElements, selectorChildElements) {

	const parentElements = document.querySelectorAll(selectorParentElements);

	for (var i = 0; i < parentElements.length; i++) {
		const parentElement = parentElements[i];
		parentElement.addEventListener('mousemove', startRotate);
		parentElement.addEventListener('mouseout', stopRotate);
	}

	function startRotate(e) {
		const childElement = this.querySelector(selectorChildElements);
		const halfHeightEl = childElement.offsetHeight/2;

		childElement.style.transform = `rotateX(${(e.offsetY - halfHeightEl)/5}deg) rotateY(${(e.offsetX - halfHeightEl)/5}deg)`;
	}

	function stopRotate(e) {
		const childElement = this.querySelector(selectorChildElements);
		childElement.style.transform = 'rotate(0)';
	}
}

// эффект для картинок статей//rotateElement('.article_photo', 'a img');

// эффект для картинок популярные статьи//rotateElement('.popular_article_photo', 'a img');



