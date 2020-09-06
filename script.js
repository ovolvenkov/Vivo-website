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



function animateAboutSection() {
	const aboutPhoto = document.querySelector('.about_photo');
	const about_info = document.querySelector('.about_info');
	const aboutUs = document.querySelector('.about_us');

	document.addEventListener('scroll', (e)=>{
		if (window.pageYOffset > 300) {
			aboutPhoto.classList.add('active_about_photo');
			about_info.style.transform = 'scale(1)'
			//aboutUs.style.transform = 'translateY(0%)'

		}
		else if (window.pageYOffset < 300) {
			aboutPhoto.classList.remove('active_about_photo')
			about_info.style.transform = 'scale(0)'
						//aboutUs.style.transform = 'translateY(100%)'
		}
	})
}

animateAboutSection()




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
		modal.innerHTML = `<iframe width="1015" height="523" 
							src="https://www.youtube.com/embed/-yVqM6WnPs0" 
							frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
							picture-in-picture" allowfullscreen></iframe>`;
	}))

	modalContainer.addEventListener('click',( e => {
		modalContainer.classList.add('out');
		body.classList.remove('modal-active');
		modalContainer.style.transform = 'scale(0)';
		modal.innerHTML = '';
	}))
}

modalVideo()





function smoothScrolling() {
	document.addEventListener('click', function(e) {
		let anchors = document.querySelectorAll('a[href^="#"]');
			for (let i = 0; i < anchors.length; i++) {
				if(anchors[i] === e.target) {
					e.preventDefault();
					let selector = e.target.getAttribute('href');
					let elem = document.querySelector(`${selector}`);
					console.log(elem.offsetTop)
					if (selector === '#about') {
						window.scrollTo(0,elem.offsetTop - 180)
					} else if(selector === '#our_services') {
						window.scrollTo(0,elem.offsetTop - 70)
					} else if(selector === '#contacts'){
						window.scrollTo(0,elem.offsetTop - 240)
					} else {
						window.scrollTo(0,elem.offsetTop - 80)
					}
				}
			}
	})
}

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
		window.scrollTo({
			left: 0,
			top: targetTop,
			behavior: 'smooth'
		});
	}
// scroll totop
	if(event.target.classList.contains('top_link') ||
	 event.target.parentNode.classList.contains('top_link')){
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
});



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










