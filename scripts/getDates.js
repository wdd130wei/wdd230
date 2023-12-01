//get the year for footer
const todaysdate = new Date();
const year = todaysdate.getFullYear();
document.getElementById('currentyear').textContent = year;

let oLastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 'Last modification: ' + oLastModified;


//menu button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


//day or night mode
const modeButton = document.querySelector('#mode');
const main = document.querySelector('main')
const links = document.querySelectorAll('.card a');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes("🕶️")) {
        links.forEach(link => {
            link.style.color = '#fff';
        });
        main.style.background = '#000';
        main.style.color = '#fff';
        modeButton.textContent = "🔆";
    }
    else {
        links.forEach(link => {
            link.style.color = '#000';
        });
		main.style.background = "#FFFFFF";
		main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
})


// Number of visits
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'dce54304461cc7d7e0f2bce3ecdbc1a0';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=26.20&lon=119.54&appid=${apiKey}&units=imperial`;

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