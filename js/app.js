'use strict';

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '12pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandInRange(min, max) {
  const span = max - min + 1;
  const RandInSpan = Math.floor(Math.random() * span);
  return min + RandInSpan;
}

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCustomer: 6.3,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function() {
    let total = 0;
    for (let i = 0; i < storeHours.length; i++) {
      const randomCustomersPerHour = getRandInRange(this.minCust, this.maxCust);
      const cookiesSold = this.randomCookiesPerHour[i] = (Math.ceil(this.avgCookiesPerCustomer) * (randomCustomersPerHour));
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const containerElem = document.getElementById('storeFronts');
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.name;
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = storeHours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
  }
};

seattle.generateRandomCookiesPerHour();
seattle.render();

const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCustomer: 1.2,
  randomCookiesPerHour: [],
  generateRandomCookiesPerHour: function() {
    let total = 0;
    for (let i = 0; i < storeHours.length; i++) {
      const randomCustomersPerHour = getRandInRange(this.minCust, this.maxCust);
      const cookiesSold = this.randomCookiesPerHour[i] = (Math.ceil(this.avgCookiesPerCustomer) * (randomCustomersPerHour));
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const containerElem = document.getElementById('storeFronts');
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.name;
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = storeHours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
  }
};

tokyo.generateRandomCookiesPerHour();
tokyo.render();

const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCustomer: 3.7,
  randomCookiesPerHour: [],
  generateRandomCookiesPerHour: function() {
    let total = 0;
    for (let i = 0; i < storeHours.length; i++) {
      const randomCustomersPerHour = getRandInRange(this.minCust, this.maxCust);
      const cookiesSold = this.randomCookiesPerHour[i] = (Math.ceil(this.avgCookiesPerCustomer) * (randomCustomersPerHour));
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const containerElem = document.getElementById('storeFronts');
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.name;
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = storeHours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
  }
};

dubai.generateRandomCookiesPerHour();
dubai.render();

const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCustomer: 2.3,
  randomCookiesPerHour: [],
  generateRandomCookiesPerHour: function() {
    let total = 0;
    for (let i = 0; i < storeHours.length; i++) {
      const randomCustomersPerHour = getRandInRange(this.minCust, this.maxCust);
      const cookiesSold = this.randomCookiesPerHour[i] = (Math.ceil(this.avgCookiesPerCustomer) * (randomCustomersPerHour));
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const containerElem = document.getElementById('storeFronts');
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.name;
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = storeHours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
  }
};
paris.generateRandomCookiesPerHour();
paris.render();

const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCustomer: 4.6,
  randomCookiesPerHour: [],
  generateRandomCookiesPerHour: function() {
    let total = 0;
    for (let i = 0; i < storeHours.length; i++) {
      const randomCustomersPerHour = getRandInRange(this.minCust, this.maxCust);
      const cookiesSold = this.randomCookiesPerHour[i] = (Math.ceil(this.avgCookiesPerCustomer) * (randomCustomersPerHour));
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const containerElem = document.getElementById('storeFronts');
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.name;
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = storeHours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
  }
};
lima.generateRandomCookiesPerHour();
lima.render();
