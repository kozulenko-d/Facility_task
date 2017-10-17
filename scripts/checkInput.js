var inpName = document.querySelector('#userName');
var inpMail = document.querySelector('#userEmail');
var inpSubmit = document.querySelector('#inputSend');
var errName = document.querySelector('.error-message-name');
var errMail = document.querySelector('.error-message-mail');
var bodyPopup = document.querySelector('.popup-body');
var buttonPopup = document.querySelectorAll('.popup-button');
var contentPopup = document.querySelector('#popup-content');

for (var i = 0; i < buttonPopup.length; i++) {
	buttonPopup[i].onclick = function() {
		bodyPopup.style.display = 'block';
	}
}

function closePopup() {
	contentPopup.classList.remove('popup-content-sent');
	bodyPopup.style.display = 'none';
}
function sendInfo() {
	contentPopup.classList.add('popup-content-sent');
}
inpSubmit.onclick = sendInfo;
contentPopup.querySelector('button').addEventListener('click', closePopup, false);
contentPopup.querySelector('.popup-cross').addEventListener('click', closePopup, false);

inpName.onblur = function() {
	var nam = inpName.value;
	if (nam.length > 1) {
		errName.style.display = 'none';
		inpName.style.borderColor = '#646464';
		inpName.style.boxShadow = '0 0';
	} else {
		errName.style.display = 'block';
		errName.innerHTML = 'You should enter name longer than one letter!';
		inpName.style.borderColor = 'red';
		inpName.style.boxShadow = '0 0 10px red';
		inpName.focus();
	}
}

inpMail.onblur = function() {
	var str = inpMail.value;
	if (~str.indexOf("@") && ~str.indexOf(".")) {
		errMail.style.display = 'none';
		inpMail.style.borderColor = '#646464';
		inpMail.style.boxShadow = '0 0';
	} else {
		errMail.style.display = 'block';
		errMail.innerHTML = 'You should enter a valid e-mail address!';
		inpMail.style.borderColor = 'red';
		inpMail.style.boxShadow = '0 0 10px red';
		inpMail.focus();
	}
}