var scrolled = window.pageYOffset;
var timer, headerhei, point;
var menu = document.querySelector('nav');
var navlis = menu.querySelectorAll('li');
var sections = document.querySelectorAll('.sect');

document.querySelector('header .image-box a').onclick = scrollToTop;
function scrollToTop() {
	if (scrolled > 0) {
		window.scrollTo(0, scrolled);
		scrolled = scrolled - 40;
		timer = setTimeout(scrollToTop, 8);
	} else {
		clearTimeout(timer);
		window.scrollTo(0,0);
	}
}

navlis.forEach(function(e, i) {
	e.addEventListener("click", function scrollToPoint() {
		if (document.body.clientWidth >= 481) {
			headerhei = document.querySelector('header').clientHeight;
		} else {
			headerhei = 64;
		}
		point = sections[i].offsetTop - headerhei;
		if (scrolled > point) {
			if ((scrolled - point) < 40) {
				scrolled = point;
				window.scrollTo(0, scrolled);
			} else {
				window.scrollTo(0, scrolled);
				scrolled = scrolled - 40;
				timer = setTimeout(scrollToPoint, 8);
			}
		} else if (scrolled < point) {
			if ((point - scrolled) < 40) {
				scrolled = point;
				window.scrollTo(0, scrolled);
			} else {
				window.scrollTo(0, scrolled);
				scrolled = scrolled + 40;
				timer = setTimeout(scrollToPoint, 8);
			}
		} else {
			clearTimeout(timer);
			window.scrollTo(0, scrolled);
		}
	}, false)
})