'use strict';

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '12pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Location\'s Day Total'];

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

// table

const containerElem = document.getElementById('storeLocations');
const salesTableElem = document.createElement('table');
containerElem.appendChild(salesTableElem);

// table head

const tHeadElem = document.createElement('thead');
salesTableElem.appendChild(tHeadElem);

// table row

const tHeadTableRowElem = document.createElement('tr');
tHeadElem.appendChild(tHeadTableRowElem);

// empty table heading cell

const emptySalesTableHeading = document.createElement('th');
tHeadTableRowElem.appendChild(emptySalesTableHeading);
emptySalesTableHeading.textContent = '';

// table heading, hour time slots

for (let i = 0; i < storeHours.length; i++) {
  const newHeaderCell = document.createElement('th');
  tHeadTableRowElem.appendChild(newHeaderCell);
  newHeaderCell.textContent = storeHours[i];
}

StoreSalesInfo.prototype.render = function () {

  // table body

  const salesTableTBody = document.createElement('tbody');
  salesTableElem.appendChild(salesTableTBody);

  // table body headings >> city names

  const cityNameRowHeadings = document.createElement('th');
  salesTableTBody.appendChild(cityNameRowHeadings);
  cityNameRowHeadings.textContent = this.name;

  // table body data >> hourly sales per hour slot for each location

  for (let j = 0; j < storeHours.length; j++) {
    const cellCityCookiesSoldInCurrentTimeSlot = document.createElement('td');
    salesTableTBody.appendChild(cellCityCookiesSoldInCurrentTimeSlot);
    cellCityCookiesSoldInCurrentTimeSlot.textContent = getCityTimeSlotSales();
  }

};

// table footer

function createFooterRow() {

  const footer = document.createElement('tfoot');
  salesTableElem.appendChild(footer);

  const footerRow = document.createElement('tr');
  footer.appendChild(footerRow);

  const totalsElem = document.createElement('th');
  footerRow.appendChild(totalsElem);
  totalsElem.textContent = 'Totals';

  // make cells for each hour's sales per location

  for (let i = 0; i < storeHours.length; i++) {
    // const currentHourSalesPerLocation = getHourSalesPerLocation(i);
    // grandTotal += currentHourSalesPerLocation;
    const salesElem = document.createElement('td');
    footerRow.appendChild(salesElem);
    salesElem.textContent = 0; //to do
  }

  // let grandTotal = 0; // to do

  // const grandTotalElem = document.createElement('td');
  // footerRow.appendChild(grandTotalElem);
  // grandTotalElem.textContent = grandTotal;

}

createFooterRow();

function getCityTimeSlotSales () {
  for (let i = 0; i < storeHours.length; i++) {
    const cityTimeSlotSales = getCityTotalCookiesSold();
    return cityTimeSlotSales;
  }
}

function getCityTotalCookiesSold () {
  const cityCookieSalesforHour = 2;
  return cityCookieSalesforHour;
}

// function getHourSalesPerLocation (currentHour) {
//   let sum = 0;
//   sum += seattle.randomCookiesPerHour[currentHour];
//   sum += tokyo.randomCookiesPerHour[currentHour];
//   sum += dubai.randomCookiesPerHour[currentHour];
//   sum += paris.randomCookiesPerHour[currentHour];
//   sum += lima.randomCookiesPerHour[currentHour];
//   return sum;
// }


function getRandInRange(min, max) {
  const span = max - min + 1;
  const RandInSpan = Math.floor(Math.random() * span);
  return min + RandInSpan;
}

const newStores = [];

function getNewStores () {

  const seattle = new StoreSalesInfo('Seattle', 23, 65, 6.3);
  seattle.generateRandomCookiesPerHour();
  seattle.render();
  newStores.push(seattle);

  const tokyo = new StoreSalesInfo('Tokyo', 3, 24, 1.2);
  tokyo.generateRandomCookiesPerHour();
  tokyo.render();
  newStores.push(tokyo);

  const dubai = new StoreSalesInfo('Dubai', 11, 38, 3.7);
  dubai.generateRandomCookiesPerHour();
  dubai.render();
  newStores.push(dubai);

  const paris = new StoreSalesInfo('Paris', 20, 38, 2.3);
  paris.generateRandomCookiesPerHour();
  paris.render();
  newStores.push(paris);

  const lima = new StoreSalesInfo('Lima', 2, 16, 4.6);
  lima.generateRandomCookiesPerHour();
  lima.render();
  newStores.push(lima);

}

getNewStores();
