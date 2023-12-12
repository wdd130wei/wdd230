
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


/* Timestamp */
document.addEventListener('DOMContentLoaded', function () {
	var currentDateTime = new Date();
	document.getElementById('timestamp').value = currentDateTime;
});


/* Directory */
const baseURL = "https://wdd130wei.github.io/wdd230/";

const linksURL = "https://wdd130wei.github.io/wdd230/chamber/data/members.json";

const membersContainer = document.querySelector('#directory-grid');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.members);
}

getLinks();

const displayLinks = (members) => {
    members.forEach((member) => {
        let memberElement = document.createElement('section');

        let nameElement = document.createElement('p');
        nameElement.textContent = member.name;

        let addressElement = document.createElement('p');
        addressElement.textContent = member.address;

        let phoneElement = document.createElement('p');
        phoneElement.textContent = member.phone;

        let urlElement = document.createElement('a');
        urlElement.href = member.url;
		urlElement.textContent = member.url;

		let logoElement = document.createElement('img');
        logoElement.setAttribute('src', member.imageurl);
        logoElement.setAttribute('alt', 'Company logo');
        logoElement.setAttribute('loading', 'lazy');
        logoElement.setAttribute('width', '100');
        logoElement.setAttribute('height', '100');

        let membershipElement = document.createElement('p');
        membershipElement.textContent = `Membership: ${member.membership}`;
        
		memberElement.appendChild(logoElement);
        memberElement.appendChild(nameElement);
        memberElement.appendChild(addressElement);
        memberElement.appendChild(phoneElement);
        memberElement.appendChild(urlElement);

        memberElement.appendChild(membershipElement);

        membersContainer.appendChild(memberElement);
    });
};


// /* Toggle */
document.addEventListener('DOMContentLoaded', function () {
    const directory = document.getElementById('directory-grid') !== null;

    if (directory) {
        const gridbutton = document.querySelector("#grid");
        const listbutton = document.querySelector("#list");
        const display = document.querySelector("#directory-grid");

        display.classList.add("grid");

        if (display && gridbutton) {
            gridbutton.addEventListener("click", () => {
                display.classList.add("grid");
                display.classList.remove("list");
            });
        }

        if (display && listbutton) {
            listbutton.addEventListener("click", () => {
                display.classList.remove("grid");
                display.classList.add("list");
            });
        }
    }
});


/* Weather */

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=36.86&lon=174.76&appid=dce54304461cc7d7e0f2bce3ecdbc1a0&units=imperial`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch(url);