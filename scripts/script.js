// var close = document.querySelector('.cross-button');
// close.onclick = function() {
//     document.getElementsByTagName('nav')[0].style.display = 'none';
// }
window.onload = function() {
	var cross = document.querySelector('.cross-button');
	var burg = document.querySelector('.burger-button');
	var nav = document.querySelector('nav');
	var lis = nav.querySelector('ul').querySelectorAll('li');

	// if (document.body.clientWidth >= 768 && document.body.clientWidth <= 1023) {
	// 	burg.onclick = function () {
	// 		burg.classList.toggle('hidden');
	// 		cross.classList.toggle('hidden');
	// 		document.querySelector('.logo-box').querySelector('span').classList.toggle('hidden');
	// 		document.querySelector('nav').querySelector('ul').classList.toggle('hidden');
	// 		document.querySelector('nav').style.height = '135px';
	// 	}
	// 	cross.onclick = function() {
	// 		burg.classList.toggle('hidden');
	// 		cross.classList.toggle('hidden');
	// 		document.querySelector('.logo-box').querySelector('span').classList.toggle('hidden');
	// 		document.querySelector('nav').querySelector('ul').classList.toggle('hidden');
	// 		document.querySelector('nav').style.height = '64px';
	// 	}
	// }
	if (document.body.clientWidth >= 481 && document.body.clientWidth <= 767) {
		burg.onclick = function() {
			burg.style.display = 'none';
			cross.style.display = 'inline-block';
			cross.style.transform = 'rotate(225deg)';
			document.querySelector('.logo-box').querySelector('span').style.display = 'block';
			nav.querySelector('ul').style.display = 'block';
			nav.style.height = '135px';
		}
		cross.onclick = function() {
			burg.style.display = 'block';
			cross.style.display = 'none';
			cross.style.transform = 'rotate(45deg)';
			document.querySelector('.logo-box').querySelector('span').style.display = 'none';
			nav.querySelector('ul').style.display = 'none';
			nav.style.height = '64px';
		}
	}
	if (document.body.clientWidth <= 480) {
		burg.onclick = function() {
			burg.style.display = 'none';
			cross.style.display = 'inline-block';
			document.querySelector('.image-box').querySelector('img').style.display = 'none';
			document.querySelector('.logo-box').querySelector('span').style.display = 'block';
			nav.querySelector('ul').style.display = 'block';
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.display = 'block';
			}
			nav.style.height = '100vh';
		}
		cross.onclick = function() {
			burg.style.display = 'block';
			cross.style.display = 'none';
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

