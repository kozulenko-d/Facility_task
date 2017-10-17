window.onload = mobileMenu;
window.onresize = mobileMenu;

function mobileMenu() {
	var cross = document.querySelector('.cross-button');
	var burg = document.querySelector('.burger-button');
	var headerTop = document.querySelector('header');

	if (document.body.clientWidth >= 768) {
		if (headerTop.classList.contains("expanded")) {
			cross.style.animationName = 'hideCross';
		}
		headerTop.classList.add('collapsed');
		headerTop.classList.remove('expanded');
	}
	if (document.body.clientWidth >= 481 && document.body.clientWidth <= 767) {
		if (headerTop.classList.contains("expanded")) {
			cross.style.animationName = 'hideCross';
			burg.style.animationName = 'showBurger';
		}
		headerTop.classList.add('collapsed');
		headerTop.classList.remove('expanded');


		burg.onclick = function() {
			burg.style.animationName = 'hideBurger';
			cross.style.animationName = 'showCross';
			headerTop.classList.add('expanded');
		}
		cross.onclick = function() {
			burg.style.animationName = 'showBurger';
			cross.style.animationName = 'hideCross';
			headerTop.classList.remove('expanded');
		}
	}
	if (document.body.clientWidth <= 480) {
		if (headerTop.classList.contains("expanded")) {
			cross.style.animationName = 'hideCross';
			burg.style.animationName = 'showBurger';
		}
		headerTop.classList.add('collapsed');
		headerTop.classList.remove('expanded');

		burg.onclick = function() {
			burg.style.animationName = 'hideBurger';
			cross.style.animationName = 'showCross';
			headerTop.classList.add('expanded');
		}
		cross.onclick = function() {
			burg.style.animationName = 'showBurger';
			cross.style.animationName = 'hideCross';
			headerTop.classList.remove('expanded');
		}
		for (var i = 0; i < headerTop.querySelectorAll('li').length; i++) {
			headerTop.querySelectorAll('li')[i].onclick = function() {
				burg.style.animationName = 'showBurger';
				cross.style.animationName = 'hideCross';
				headerTop.classList.remove('expanded');
			}
		}
	}
}