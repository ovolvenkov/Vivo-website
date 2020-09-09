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

if(document.documentElement.clientWidth > 375) reduceMenuSize()



function animate() {
	const aboutPhoto = document.querySelector('.about_photo');
	const about_info = document.querySelector('.about_info');
	const aboutUs = document.querySelector('.about_us');
	const arrowScrolTop = document.querySelector('.top_link');
	const imgServices = document.querySelectorAll('.service');


	document.addEventListener('scroll', (e)=>{
		//console.log(window.pageYOffset)
		if (window.pageYOffset > 300) {
			aboutPhoto.classList.add('active_about_photo');
			about_info.style.transform = 'scale(1)'
			aboutUs.style.transform = 'translateY(0%)'
			arrowScrolTop.style.transform = 'scale(0)'
		} else if (window.pageYOffset < 300) {
			aboutPhoto.classList.remove('active_about_photo')
			about_info.style.transform = 'scale(0)'
			aboutUs.style.transform = 'translateY(100%)'
			arrowScrolTop.style.transform = 'scale(1)'
		}

		//animate section services
		if (window.pageYOffset > 800) {
			let num = 0.2;
			imgServices.forEach(item => {
				item.style.transform = "translateY(0%)";
				item.style.transition = `all ${num}s`;
				num += 0.3;
			})
		} else if (window.pageYOffset < 800) {
						let num = 0.2;
			imgServices.forEach(item => {
				item.style.transform = "translateY(100%)";
				item.style.transition = `all ${num}s`;
				num += 0.3;
				})
		}

		//animate section products
		let productsUl = document.querySelector('.products_ul');
		if (window.pageYOffset > 1600) {
			productsUl.style.transform = "translateY(0%)";
		} else if (window.pageYOffset < 1600) {
			productsUl.style.transform = "translateY(100%)";
		}

		//animate contact section
		let contact = document.querySelector('.contact');

		if (window.pageYOffset > 2100) {
			contact.style.transform = 'translateY(0%)';
		} else if (window.pageYOffset < 2100) {
			contact.style.transform = 'translateY(100%)';
		}

	})

	//animate opacity first screen .main_header_text
	  document.addEventListener("DOMContentLoaded", () => {
    	let mainHeaderText = document.querySelector('.main_header_text');
    	mainHeaderText.style.opacity = '1';
    	mainHeaderText.style.transform = 'scale(1)';
 	 });
}

if(document.documentElement.clientWidth >= 768) animate();




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


// smooth anchor scrolling

function smoothScrolling() {

	document.addEventListener('click', function(event){
		if(event.target.classList.contains('smooth')){
			event.preventDefault();
			let targetAnchor = event.target.getAttribute('href');
			let targetElem = document.querySelector(targetAnchor);
			let targetTop = targetElem.offsetTop;

			if (targetAnchor === '#about') {
				window.scrollTo({
					left: 0,
					top: targetTop - 120,
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

	//btn scroll to bottom
		if (event.target.classList.contains('top_link') || event.target.parentNode.classList.contains('top_link')) {
			let targetElem = document.querySelector('#about');
			window.scrollTo({
				left: 0,
				top: targetElem.offsetTop - 180,
				behavior: 'smooth'
			})


		}


	});
}

smoothScrolling()

function openCloseProduct() {
	const models = document.querySelectorAll('.models');

	document.addEventListener('click', function(e) {
		models.forEach(item => item.classList.remove('models_active'))
		if (e.target.classList.contains('icon_text')) {
			e.target.nextElementSibling.classList.toggle('models_active');
		} 

	})

	//for mobile browsers event
	document.addEventListener('touchstart', function(e) {
		models.forEach(item => item.classList.remove('models_active'))
		if (e.target.classList.contains('icon_text')) {
			e.target.nextElementSibling.classList.toggle('models_active');
		} 

	})
}

openCloseProduct()



	//E-mail
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

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










