
/* last modification date */
let oLastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 'Last modification: ' + oLastModified;


/* menu button */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
