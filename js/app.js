'use strict';

function StoreSalesInfo (name, minCust, maxCust, avgCookiesPerCustomer) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.randomCookiesPerHour = [];
  this.totalCookiesSold = 0;
}

StoreSalesInfo.prototype.generateRandomCookiesPerHour = function () {
  let total = 0;
  for (let i = 0; i < storeHours.length; i++) {
    const randomCustomersPerHour = getRandInRange(this.minCust, this.maxCust);
    const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
    this.randomCookiesPerHour[i] = cookiesSold;
    total += cookiesSold;
  }
  this.totalCookiesSold = total;
};

StoreSalesInfo.prototype.render = function () {

  const containerElem = document.getElementById('storeFronts');

  const articleElem = document.createElement('article');
  containerElem.appendChild(articleElem);

  const headingElem = document.createElement('h2');
  articleElem.appendChild(headingElem);
  headingElem.textContent = this.name;

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  for (let i = 0; i < storeHours.length; i++) {
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    const timeSlot = storeHours[i];
    const cookiesSoldThisHour = this.randomCookiesPerHour[i];
    liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
  }
  const liElem = document.createElement('li');
  ulElem.appendChild(liElem);
  liElem.textContent = `Total: ${this.totalCookiesSold}`;
};

function getRandInRange(min, max) {
  const span = max - min + 1;
  const RandInSpan = Math.floor(Math.random() * span);
  return min + RandInSpan;
}

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '12pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = new StoreSalesInfo('Seattle', 23, 65, 6.3);
seattle.generateRandomCookiesPerHour();
seattle.render();

const tokyo = new StoreSalesInfo('Tokyo', 3, 24, 1.2);
tokyo.generateRandomCookiesPerHour();
tokyo.render();

const dubai = new StoreSalesInfo('Dubai', 11, 38, 3.7);
dubai.generateRandomCookiesPerHour();
dubai.render();

const paris = new StoreSalesInfo('Paris', 20, 38, 2.3);
paris.generateRandomCookiesPerHour();
paris.render();

const lima = new StoreSalesInfo('Lima', 2, 16, 4.6);
lima.generateRandomCookiesPerHour();
lima.render();
