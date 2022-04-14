'use strict';

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '12pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStand(locationCity, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.locationCity = locationCity;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalCookiesPerHourPerLocation = [];
  this.cookieSales = this.generateRandomHourlyCookieSales();
}


CookieStand.prototype.generateRandomHourlyCookieSales = function() {
  let total = 0;
  for (let i = 0; i < storeHours.length; i++) {
    const simulatedCustomersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
    const simulatedSales = Math.ceil(simulatedCustomersPerHour * this.avgCookiesPerCustomer);
    this.totalCookiesPerHourPerLocation.push(simulatedSales);
    total += simulatedSales;
  }
  this.totalCookiesSoldPerLocation = total;
};

// return random number in a range

function randomInRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// total for each hour on bottom of table

function getHourlyTotalsAcrossShops() {
  let hourlyTotalAcrossShops = [];
  for (let j = 0; j < storeHours.length; j++) {
    let total = 0;
    for (let i = 0; i < newCookieStands.length; i++) {
      let currentStore = newCookieStands[i];
      let hourCookiesSold = currentStore.totalCookiesPerHourPerLocation[j];
      total += hourCookiesSold;
    }
    hourlyTotalAcrossShops.push(total);
  }
  return hourlyTotalAcrossShops;
}

// daily location total, far right end of table

function getDailyLocationTotals() {
  let dailyLocationTotals = 0;
  for (let i = 0; i < storeHours.length; i++) {
    const currentHour = storeHours[i];
    let locationHourCookiesSold = currentHour.simulatedSales;
    dailyLocationTotals += locationHourCookiesSold;
  }
  return dailyLocationTotals;
}

// ******declare functions for creating table elements


const containerElem = document.getElementById('storeLocations');
const tableElem = document.createElement('table');
containerElem.appendChild(tableElem);
const tbodyElem = document.createElement('tbody');
tableElem.appendChild(tbodyElem);

// footer row

function createFooterRow() {
  const tfootElement = document.createElement('tfoot');
  tableElem.appendChild(tfootElement);
  const footerRowElem = document.createElement('tr');
  tfootElement.appendChild(footerRowElem);
  const emptyFooterRowElem = document.createElement('th');
  footerRowElem.appendChild(emptyFooterRowElem);
  emptyFooterRowElem.textContent = 'Totals';
  let totalSalesData = getHourlyTotalsAcrossShops();
  let grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) {
    const footerCellElem = document.createElement('th');
    footerRowElem.appendChild(footerCellElem);
    footerCellElem.textContent = totalSalesData[i];
    grandTotal += totalSalesData[i];
  }

  const grandTotalOfHoursandLocationsElem = document.createElement('td');
  footerRowElem.appendChild(grandTotalOfHoursandLocationsElem);
  grandTotalOfHoursandLocationsElem.textContent = grandTotal;
}

// header row

function createHeaderRow() {
  const theadElem = document.createElement('thead');
  tableElem.appendChild(theadElem);
  const tr = document.createElement('tr');
  theadElem.appendChild(tr);
  const emptyHeaderRowElem = document.createElement('th');
  theadElem.appendChild(emptyHeaderRowElem);
  emptyHeaderRowElem.textContent = '';
  for (let i = 0; i < storeHours.length; i++) {
    const theadHoursHeadingElem = document.createElement('th');
    theadElem.appendChild(theadHoursHeadingElem);
    theadHoursHeadingElem.textContent = storeHours[i];
  }
  const locationDailyGrandTotal = document.createElement('th');
  theadElem.appendChild(locationDailyGrandTotal);
  locationDailyGrandTotal.textContent = 'Daily Location Total';
}

// render

CookieStand.prototype.render = function() {

  const rowElem = document.createElement('tr');
  tableElem.appendChild(rowElem);

  const locationElem = document.createElement('td');
  rowElem.appendChild(locationElem);
  locationElem.textContent = this.locationCity;

  // data in each cell (i.e. Dubai at 9am, Paris at 5pm);
  let locationDailySales = 0;
  for (let i = 0; i < this.totalCookiesPerHourPerLocation.length; i++) {
    const salesElem = document.createElement('td');
    rowElem.appendChild(salesElem);
    salesElem.textContent = this.totalCookiesPerHourPerLocation[i];
    locationDailySales += this.totalCookiesPerHourPerLocation[i];
  }
  const dailyLocationTotals = document.createElement('td');
  rowElem.appendChild(dailyLocationTotals);
  dailyLocationTotals.textContent = locationDailySales;

};

// ********** invoke functions that create elements


const newCookieStands = [
  new CookieStand('Seattle', 23, 65, 6.3),
  new CookieStand('Tokyo', 3, 24, 1.2),
  new CookieStand('Dubai', 11, 38, 3.7),
  new CookieStand('Paris', 20, 38, 2.3),
  new CookieStand('Lima', 2, 16, 4.6)
];

for (let i = 0; i < newCookieStands.length; i++) {
  newCookieStands[i].render();
}

// create header row
createHeaderRow();

// create footer row
createFooterRow();

