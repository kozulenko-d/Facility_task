var scrolled;
var timer;
var point = 0;
var navlis = document.querySelector('nav').querySelectorAll('li');
var navhei = document.querySelector('nav').clientHeight;

document.querySelector('.image-box').querySelector('a').onclick = function() {
	point = 0;
	scrolled = window.pageYOffset;
	scrollToPoint();
}
navlis[0].onclick = function() {
	point = 0;
	scrolled = window.pageYOffset;
	scrollToPoint();
}
navlis[1].onclick = function() {
	point = document.querySelector('.mini-slider').offsetTop - navhei;
	scrolled = window.pageYOffset;
	scrollToPoint();
}
navlis[2].onclick = function() {
	point = document.querySelector('.columns').offsetTop - navhei;
	scrolled = window.pageYOffset;
	scrollToPoint();
}
navlis[3].onclick = function() {
	point = document.querySelector('article').offsetTop - navhei;
	scrolled = window.pageYOffset;
	scrollToPoint();
}
navlis[4].onclick = function() {
	point = document.querySelector('.map').offsetTop - navhei;
	scrolled = window.pageYOffset;
	scrollToPoint();
}

function scrollToPoint() {
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
}