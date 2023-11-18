
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


// Number of visits
document.addEventListener('DOMContentLoaded', function() {
	function getDaysBetweenVisits() {
		var lastVisit = localStorage.getItem('lastVisit');
		if (lastVisit) {
			var msPerDay = 24 * 60 * 60 * 1000;
			var currentDate = new Date();
			var daysBetween = Math.floor((currentDate - new Date(lastVisit)) / msPerDay);
			return daysBetween;
		}
		return null;
	}

	function updateVisitMessage() {
		var daysBetween = getDaysBetweenVisits();
		if (daysBetween === null) {
			document.getElementById('visitsCount').textContent = 'Welcome! Let us know if you have any questions.';
		} else if (daysBetween < 1) {
			document.getElementById('visitsCount').textContent = 'Back so soon! Awesome!';
		} else {
			var plural = daysBetween === 1 ? 'day' : 'days';
			document.getElementById('visitsCount').textContent = 'You last visited ' + daysBetween + ' ' + plural + ' ago.';
		}
	}

	updateVisitMessage();

	var currentDate = new Date();
	localStorage.setItem('lastVisit', currentDate.toISOString());
});


