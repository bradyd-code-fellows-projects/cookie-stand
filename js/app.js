'use strict';

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '12pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
    let randomCustomersPerHour = getRandInRange(this.minCust, this.maxCust);
    let cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
    this.randomCookiesPerHour[i] = cookiesSold;
    total += cookiesSold;
  }
  this.totalCookiesSold = total;
};

function getHourlySalesForAllLocations(timeSlot) {
  let hourlySalesForAllLocations = 0;
  for (let i = 0; i < storeLocations.length; i++) {
    const currentStoreLocation = storeLocations[i];
    const locationHourlySales = currentStoreLocation.totalCookiesPerHourPerLocation(timeSlot);
    hourlySalesForAllLocations += locationHourlySales;
  }
  return hourlySalesForAllLocations;
}

const containerElem = document.getElementById('storeFronts');

const salesTable = document.createElement('table');
containerElem.appendChild(salesTable);

const salesTableTHead = document.createElement('thead');
salesTable.appendChild(salesTableTHead);

const salesTableTR = document.createElement('tr');
salesTableTHead.appendChild(salesTableTR);

const emptySalesTableHeading = document.createElement('th');
salesTableTR.appendChild(emptySalesTableHeading);
emptySalesTableHeading.textContent = '';

for (let i = 0; i < storeHours.length; i++) {
  const newHeaderCell = document.createElement('th');
  salesTableTR.appendChild(newHeaderCell);
  newHeaderCell.textContent = storeHours[i];
}

StoreSalesInfo.prototype.render = function () {

  const salesTableTBody = document.createElement('tbody');
  salesTable.appendChild(salesTableTBody);

  const salesTableTBodyTh = document.createElement('th');
  salesTableTBody.appendChild(salesTableTBodyTh);
  salesTableTBodyTh.textContent = this.name;

  for (let i = 0; i < storeHours.length; i++) {
    let newDataCell = document.createElement('td');
    salesTableTBodyTh.appendChild(newDataCell);
    for (let j = 0; j < storeHours.length; j++) {
      if (newDataCell.textContent === '') {
        newDataCell.textContent = this.randomCookiesPerHour[i];
      }
    }
  }

  function createFooterRow() {
    const tr7 = document.createElement('tr');
    salesTableTBody.appendChild('tr7');
    const totals = document.createElement('th');
    tr7.appendChild(totals);
    totals.textContent = 'Totals';
  }

};


function getRandInRange(min, max) {
  const span = max - min + 1;
  const RandInSpan = Math.floor(Math.random() * span);
  return min + RandInSpan;
}

const storeLocations = [];

function getStoreLocation() {

  const seattle = new StoreSalesInfo('Seattle', 23, 65, 6.3);
  seattle.generateRandomCookiesPerHour();
  seattle.render();
  storeLocations.push(seattle);

  const tokyo = new StoreSalesInfo('Tokyo', 3, 24, 1.2);
  tokyo.generateRandomCookiesPerHour();
  tokyo.render();
  storeLocations.push(tokyo);

  const dubai = new StoreSalesInfo('Dubai', 11, 38, 3.7);
  dubai.generateRandomCookiesPerHour();
  dubai.render();
  storeLocations.push(dubai);

  const paris = new StoreSalesInfo('Paris', 20, 38, 2.3);
  paris.generateRandomCookiesPerHour();
  paris.render();
  storeLocations.push(paris);

  const lima = new StoreSalesInfo('Lima', 2, 16, 4.6);
  lima.generateRandomCookiesPerHour();
  lima.render();
  storeLocations.push(lima);

}
