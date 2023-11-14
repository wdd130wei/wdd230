const todaysdate = new Date();

const year = todaysdate.getFullYear();

document.getElementById('currentyear').textContent = year;

let oLastModified = new Date(document.lastModified);

document.getElementById('lastModified').textContent = 'Last modification: ' + oLastModified;