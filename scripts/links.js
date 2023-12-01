const baseURL = "https://wdd130wei.github.io/wdd230/";

const linksURL = "https://wdd130wei.github.io/wdd230/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    const assignments = document.getElementById('assignments');
    weeks.forEach((week) => {
        let layout = document.createElement('section')
        let weekElement = document.createElement('p');
        weekElement.textContent = `${week.week}:`;
        assignments.appendChild(weekElement);
        assignments.appendChild(layout);
  
    let listElement = document.createElement('ul');
    week.links.forEach((link) => {
        let listItem = document.createElement('li');
        let urlElement = document.createElement('a');

        urlElement.href = link.url;
        urlElement.textContent = link.title;
  
        listItem.appendChild(urlElement);
        listElement.appendChild(listItem);
    });
      
    layout.appendChild(weekElement);
    layout.appendChild(listElement);
    assignments.appendChild(layout);
    });
};