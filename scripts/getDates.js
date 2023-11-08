const todaysdate = new Date();
const year = todaysdate.getFullYear();
document.getElementById('currentyear').textContent = year;

let oLastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 'Last modification: ' + oLastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

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