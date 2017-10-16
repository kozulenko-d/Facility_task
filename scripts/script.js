window.onload = mobileMenu;
window.onresize = mobileMenu;

function mobileMenu() {
	var cross = document.querySelector('.cross-button');
	var burg = document.querySelector('.burger-button');
	var nav = document.querySelector('nav');

	if (document.body.clientWidth >= 768) {
		if (nav.classList.contains("expanded")) {
			cross.style.animationName = 'hideCross';
		}
		nav.classList.add('collapsed');
		nav.classList.remove('expanded');
	}
	if (document.body.clientWidth >= 481 && document.body.clientWidth <= 767) {
		if (nav.classList.contains("expanded")) {
			cross.style.animationName = 'hideCross';
			burg.style.animationName = 'showBurger';
		}
		nav.classList.add('collapsed');
		nav.classList.remove('expanded');


		burg.onclick = function() {
			burg.style.animationName = 'hideBurger';
			cross.style.animationName = 'showCross';
			nav.classList.add('expanded');
		}
		cross.onclick = function() {
			burg.style.animationName = 'showBurger';
			cross.style.animationName = 'hideCross';
			nav.classList.remove('expanded');
		}
	}
	if (document.body.clientWidth <= 480) {
		if (nav.classList.contains("expanded")) {
			cross.style.animationName = 'hideCross';
			burg.style.animationName = 'showBurger';
		}
		nav.classList.add('collapsed');
		nav.classList.remove('expanded');

		burg.onclick = function() {
			burg.style.animationName = 'hideBurger';
			cross.style.animationName = 'showCross';
			nav.classList.add('expanded');
		}
		cross.onclick = function() {
			burg.style.animationName = 'showBurger';
			cross.style.animationName = 'hideCross';
			nav.classList.remove('expanded');
		}
		for (var i = 0; i < nav.querySelectorAll('li').length; i++) {
			nav.querySelectorAll('li')[i].onclick = function() {
				burg.style.animationName = 'showBurger';
				cross.style.animationName = 'hideCross';
				nav.classList.remove('expanded');
			}
		}
	}
}