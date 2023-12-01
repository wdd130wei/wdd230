const baseURL = "https://github.com/wdd130wei/wdd230/";

const linksURL = "https://github.com/wdd130wei/wdd230/blob/main/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
getLinks();


const displayLinks = (links) => {
    links.forEach((link) => {
      let week = document.createElement('p');
      let url = document.createElement('a');
      let title = document.createElement('li');

      week.textContent = `${link.week}`;
      url.textContent = `${link.links.url}`;
      title.textContent = `${link.links.title}`;

      card.appendChild(week);
      card.appendChild(url);
      card.appendChild(title);
  
      cards.appendChild(card1);
    });
  };


