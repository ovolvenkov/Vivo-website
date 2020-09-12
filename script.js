'use strict'
//reduce size header menu
function reduceMenuSize() {
	const headerTop = document.querySelector('.header_top');
	document.addEventListener('scroll', (e) => {
		if (window.pageYOffset > 0) {
			headerTop.style.paddingTop = '10px';
			headerTop.style.transition = 'padding-top 0.3s ease-in-out';
		} else if (window.pageYOffset === 0) {
			headerTop.style.paddingTop = '21px'
			headerTop.style.transition = 'padding-top 0.3s ease-in-out';
		}
	})
}

if(document.documentElement.clientWidth > 375) reduceMenuSize()



function animateSections() {
	const aboutPhoto = document.querySelector('.about_photo');
	const about_info = document.querySelector('.about_info');
	const aboutUs = document.querySelector('.about_us');
	const arrowScrolTop = document.querySelector('.top_link');
	const imgServices = document.querySelectorAll('.service');

	document.addEventListener('scroll', (e)=>{
		//animate section about
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
		if (window.pageYOffset > 1500) {
			productsUl.style.transform = "translateY(0%)";
		} else if (window.pageYOffset < 1600) {
			productsUl.style.transform = "translateY(100%)";
		}

		//animate contact section
		let contact = document.querySelector('.contact');

		if (window.pageYOffset > 2050) {
			contact.style.transform = 'translateY(0%)';
		} else if (window.pageYOffset < 2050) {
			contact.style.transform = 'translateY(100%)';
		}

	})

	//animate opacity first screen .main_header_text
	document.addEventListener("DOMContentLoaded", () => {
    	let mainHeaderText = document.querySelector('.main_header_text');
    	mainHeaderText.style.opacity = '1';
    	mainHeaderText.style.transform = 'scale(1)';
 	 });

	window.addEventListener("resize", () => {
    	let mainHeaderText = document.querySelector('.main_header_text');
    	mainHeaderText.style.opacity = '1';
    	mainHeaderText.style.transform = 'scale(1)';
 	 });
}

if(document.documentElement.clientWidth > 375) animateSections();
window.addEventListener('resize',()=>{if(document.documentElement.clientWidth > 375) animateSections()});



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




//burger menu 
function burgerMenu () {
	let headerTop = document.querySelector('.header_top');
	let nav = document.querySelector('.nav');
	let navA = document.querySelectorAll('.nav_a');
	let mobileBurgerIcon = document.querySelector('.mobile_burger_icon');
	let body = document.querySelector('body');
	let html = document.querySelector('html');

	mobileBurgerIcon.addEventListener('click', ( e => {
		headerTop.classList.toggle('header_top_active');
		navA.forEach(item => {item.classList.toggle('nav_a_active')});
		nav.classList.toggle('nav_active');
		body.classList.toggle('modal-active');
		html.classList.toggle('modal-active');
		mobileBurgerIcon.classList.toggle('mobile_burger_icon_active');

	}))

	document.addEventListener('click', (e) => {
		if(e.target.classList.contains('nav_a_active')) {
			headerTop.classList.toggle('header_top_active');
			navA.forEach(item => {item.classList.toggle('nav_a_active')});
			nav.classList.toggle('nav_active');
			body.classList.toggle('modal-active');
			html.classList.toggle('modal-active');
			mobileBurgerIcon.classList.toggle('mobile_burger_icon_active');
		}
	})
}

burgerMenu ()


//open-close category product
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



	//send E-mail
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



//animation line logo
if(document.documentElement.clientWidth > 375) {
	$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 9000,
    //gap in pixels between the tickers
    gap: 0,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
});
}



//smooth scrolling by anchors for ios and other
$(document).ready(function(){
	$(".header_top").on("click","a", function (event) {
		event.preventDefault(); 

		var id  = $(this).attr('href'); 
		var	top = $(id).offset().top;
			if (id === '#about') {
				top = 650;
			} else if(id === '#our_services') {
				top = $(id).offset().top - 80;
			} else if(id === '#products_section') {
				top = $(id).offset().top - 80;
			} else if(id === '#contacts'){
				top = 2830;
			} else if (id === '#home') {
				top = 0;
			}

	$('body,html').animate({scrollTop: top}, 500); //сделаем прокрутку за 1 с
	});
});


