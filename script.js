'use strict'

function playVideo() {
	const videoButton = document.querySelector('.video_btn');
	const videoFrame = document.querySelector('.video_frame');



	videoButton.addEventListener('click', (e)=>{

		videoFrame.style.display = 'block';

	})
}

playVideo()




function reduceMenuSize() {
	const headerTop = document.querySelector('.header_top');
	document.addEventListener('scroll',(e)=>{
		if(window.pageYOffset > 0){
			headerTop.style.paddingTop = '10px';
			headerTop.style.transition = 'padding-top 0.3s ease-in-out';
		} else if (window.pageYOffset == 0) {
			headerTop.style.paddingTop = '21px'
			headerTop.style.transition = 'padding-top 0.3s ease-in-out';
		}
	})
}

reduceMenuSize()



function animateAboutSection() {
	let aboutPhoto = document.querySelector('.about_photo');
	let about_info = document.querySelector('.about_info');

	document.addEventListener('scroll', (e)=>{
		if(window.pageYOffset > 400) {
			aboutPhoto.classList.add('active_about_photo');
			about_info.style.transform = 'scale(1)'

		}
		else if(window.pageYOffset < 400) {
			aboutPhoto.classList.remove('active_about_photo')
			about_info.style.transform = 'scale(0)'
		}
	})



}

animateAboutSection()














/*function menu() {
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
}*/

//menu()








