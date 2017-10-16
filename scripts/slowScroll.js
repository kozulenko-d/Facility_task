var scrolled = window.pageYOffset;;
var timer, navhei, point;
var menu = document.querySelector('nav');
var navlis = document.querySelector('nav').querySelectorAll('li');
var sections = document.querySelectorAll('.sect');

document.querySelector('.image-box').querySelector('a').onclick = scrollToTop;
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
		navhei = document.querySelector('nav').clientHeight;
		point = sections[i].offsetTop - navhei;
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