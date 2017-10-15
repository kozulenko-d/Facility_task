window.onload = function() {
	var cross = document.querySelector('.cross-button');
	var burg = document.querySelector('.burger-button');
	var nav = document.querySelector('nav');
	var lis = nav.querySelector('ul').querySelectorAll('li');

	if (document.body.clientWidth >= 481 && document.body.clientWidth <= 767) {
		burg.onclick = function() {
			burg.style.animationName = 'hideBurger';
			cross.style.animationName = 'showCross';
			document.querySelector('.logo-box').querySelector('span').style.display = 'block';
			nav.querySelector('ul').style.display = 'block';
			nav.style.height = '135px';
		}
		cross.onclick = function() {
			burg.style.animationName = 'showBurger';
			cross.style.animationName = 'hideCross';
			document.querySelector('.logo-box').querySelector('span').style.display = 'none';
			nav.querySelector('ul').style.display = 'none';
			nav.style.height = '64px';
		}
	}
	if (document.body.clientWidth <= 480) {
		burg.onclick = function() {
			burg.style.animationName = 'hideBurger';
			cross.style.animationName = 'showCross';
			document.querySelector('.image-box').querySelector('img').style.display = 'none';
			document.querySelector('.logo-box').querySelector('span').style.display = 'block';
			nav.querySelector('ul').style.display = 'block';
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.display = 'block';
			}
			nav.style.height = '100vh';
		}
		cross.onclick = function() {
			burg.style.animationName = 'showBurger';
			cross.style.animationName = 'hideCross';
			document.querySelector('.image-box').querySelector('img').style.display = 'inline-block';
			document.querySelector('.logo-box').querySelector('span').style.display = 'none';
			nav.querySelector('ul').style.display = 'none';
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.display = 'none';
			}
			nav.style.height = '64px';
		}
	}
}