'use strict'

function playVideo() {
	const videoButton = document.querySelector('.video_btn');
	const videoFrame = document.querySelector('.video_frame');



	videoButton.addEventListener('click', (e)=>{

		videoFrame.style.display = 'block';

	})
}






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
	const aboutPhoto = document.querySelector('.about_photo');
	const about_info = document.querySelector('.about_info');
	const aboutUs = document.querySelector('.about_us');

	document.addEventListener('scroll', (e)=>{
		if(window.pageYOffset > 300) {
			aboutPhoto.classList.add('active_about_photo');
			about_info.style.transform = 'scale(1)'
			aboutUs.style.transform = 'translateY(0%)'

		}
		else if(window.pageYOffset < 300) {
			aboutPhoto.classList.remove('active_about_photo')
			about_info.style.transform = 'scale(0)'
						aboutUs.style.transform = 'translateY(100%)'
		}
	})

}

animateAboutSection()




function modal() {
	const videoButton = document.querySelector('.video_btn');
	const body = document.querySelector('body');
	const modalContainer = document.querySelector('#modal-container');
	const modal = document.querySelector('.modal');




	videoButton.addEventListener('click',( e => {
		modalContainer.style.display = 'table'
		modalContainer.removeAttribute('class');
		modalContainer.classList.add('one');
		body.classList.add('modal-active');
		modal.innerHTML = '<iframe width="1015" height="523" src="https://www.youtube.com/embed/-yVqM6WnPs0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';


	}))

	modalContainer.addEventListener('click',( e => {
		modalContainer.classList.add('out');
		body.classList.remove('modal-active');
		modalContainer.style.transform = 'scale(0)';


		modal.innerHTML = '';

		

	}))
}

modal()


function animateSlideLine() {

}



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










