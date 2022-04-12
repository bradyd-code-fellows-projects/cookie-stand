'use strict';

const storeLocations = [
  {name: 'Seattle', minCust: 23, maxCust: 65, avgCookie: 6.3},
  {name: 'Tokyo', minCust: 3, maxCust: 24, avgCookie: 1.2},
  {name: 'Dubai', minCust: 11, maxCust: 38, avgCookie: 3.7},
  {name: 'Paris', minCust: 20, maxCust: 38, avgCookie: 2.3},
  {name: 'Lima', minCust: 2, maxCust: 16, avgCookie: 4.6}
];

const parentElement = document.getElementById('storeFronts');

const article = document.createElement('article');
parentElement.appendChild(article);

const displayLocation = document.createElement('h2');
displayLocation.textContent = `Sales Info for ${storeLocations[0].name}`;
article.appendChild(displayLocation);

const ul = document.createElement('ul');
article.appendChild(ul);

const li = document.createElement('li');
ul.appendChild(li);

const displayMinCust = document.createElement('displayMinCust');
displayMinCust.textContent = `Minimum Customers: ${storeLocations[0].minCust}`;
li.appendChild(displayMinCust);

const li2 = document.createElement('li');
ul.appendChild(li2);

const displayMaxCust = document.createElement('displayMaxCust');
displayMaxCust.textContent = `Maximum Customers: ${storeLocations[0].maxCust}`;
ul.appendChild(displayMaxCust);

const li3 = document.createElement('li');
ul.appendChild(li3);

const displayAvgCookie = document.createElement('displayAvgCookie');
displayAvgCookie.textContent = `Average cookies per customer: ${storeLocations[0].avgCookie}`;
ul.appendChild(displayAvgCookie);
