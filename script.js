'use strict'


function reduceMenuSize() {
	const headerTop = document.querySelector('.header_top');
	document.addEventListener('scroll', (e) => {
		if (window.pageYOffset > 0) {
			headerTop.style.paddingTop = '10px';
			headerTop.style.transition = 'padding-top 0.3s ease-in-out';
		} else if (window.pageYOffset == 0) {
			headerTop.style.paddingTop = '21px'
			headerTop.style.transition = 'padding-top 0.3s ease-in-out';
		}
	})
}

reduceMenuSize()



function animate() {
	const aboutPhoto = document.querySelector('.about_photo');
	const about_info = document.querySelector('.about_info');
	const aboutUs = document.querySelector('.about_us');
	const arrowScrolTop = document.querySelector('.top_link');


	document.addEventListener('scroll', (e)=>{
		if (window.pageYOffset > 300) {
			aboutPhoto.classList.add('active_about_photo');
			about_info.style.transform = 'scale(1)'
			//aboutUs.style.transform = 'translateY(0%)'
			arrowScrolTop.style.transform = 'scale(0)'


		}
		else if (window.pageYOffset < 300) {
			aboutPhoto.classList.remove('active_about_photo')
			about_info.style.transform = 'scale(0)'
						//aboutUs.style.transform = 'translateY(100%)'
			arrowScrolTop.style.transform = 'scale(1)'
		}
	})
}

animate()




function modalVideo() {
	const videoButton = document.querySelector('.video_btn');
	const body = document.querySelector('body');
	const modalContainer = document.querySelector('#modal-container');
	const modal = document.querySelector('.modal');

	videoButton.addEventListener('click',( e => {
		modalContainer.style.display = 'table'
		modalContainer.removeAttribute('class');
		modalContainer.classList.add('one');
		body.classList.add('modal-active');
		modal.innerHTML = `<div class="videoblock" ><iframe width="1015" height="523" 
							src="https://www.youtube.com/embed/-yVqM6WnPs0" 
							frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
							picture-in-picture" allowfullscreen></iframe></div>`;
	}))

	modalContainer.addEventListener('click',( e => {
		modalContainer.classList.add('out');
		body.classList.remove('modal-active');
		modalContainer.style.transform = 'scale(0)';
		modal.innerHTML = '';
	}))
}

modalVideo()


//smoothScrolling()

// smooth anchor scrolling

document.addEventListener('click', function(event){
	if(event.target.classList.contains('smooth')){
		if(window.innerWidth > 1024 || screen.width > 1024 ){
			event.preventDefault();
		}
		let targetAnchor = event.target.getAttribute('href');
		let targetElem = document.querySelector(targetAnchor);
		let targetTop = targetElem.offsetTop;

		if (targetAnchor === '#about') {
			window.scrollTo({
				left: 0,
				top: targetTop - 180,
				behavior: 'smooth'
			})
		} else if(targetAnchor === '#our_services') {
			window.scrollTo({
				left: 0,
				top: targetTop - 70,
				behavior: 'smooth'
			})
		} else if(targetAnchor === '#contacts'){
			window.scrollTo({
				left: 0,
				top: targetTop - 240,
				behavior: 'smooth'
			})
		} else {
			window.scrollTo({
				left: 0,
				top: targetTop - 80,
				behavior: 'smooth'
			})
		}
	}
// scroll totop
	if(event.target.classList.contains('logo') || event.target.parentNode.classList.contains('logo')){
		window.scrollTo({
			left: 0,
			top: 0,
			behavior: 'smooth'
		});
		// tip for IOS Safari
		if(window.innerWidth <= 1024 || screen.width <= 1024 ){
			document.body.scrollTop = 0; // For Safari
			window.location.hash = 'htop';
		}
	}

// scroll to bottom
	if (event.target.classList.contains('top_link') || event.target.parentNode.classList.contains('top_link')) {
		let scrollHeight = Math.max(
		  document.body.scrollHeight, document.documentElement.scrollHeight,
		  document.body.offsetHeight, document.documentElement.offsetHeight,
		  document.body.clientHeight, document.documentElement.clientHeight
		);

		window.scrollBy({
			left: 0,
			top: scrollHeight,
			behavior: 'smooth'
		});


	}


});


function openCloseProduct() {
	const models = document.querySelectorAll('.models');

	document.addEventListener('click', function(e) {
		models.forEach((item)=> item.style.height = '0px')

		if (e.target.classList.contains('icon_text')) {
			e.target.nextElementSibling.style.height = '100px';	
		}
	})
}

openCloseProduct()



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










