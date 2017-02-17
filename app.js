'use strict';

var storeSalesDataEl = document.createElement('table');

var timeRowEl = document.createElement('tr');
storeSalesDataEl.appendChild(timeRowEl);

var blankCell = document.createElement('td');
timeRowEl.appendChild(blankCell);

var sectionEl = document.getElementById('cookie_table_section');
sectionEl.appendChild(storeSalesDataEl);

var businessHours = ['06am','07am ', '08am ', '09am ', '10am ', '11am ', '12pm ', '01pm ', '02pm ', '03pm ', '04pm ', '05pm ','06pm ','07pm ', '08pm '];

function CookieStore (name, minCustomers, maxCustomers, avgCookies, hourlyCookieSales) { // this is a constructor function taking in 4 parameters.
  this.name = name || 'Unknown'; // adding || (or) inputs a value if it doesn't meet true.
  this.minCustomers = minCustomers;  // the context of this is going to change. The keyword 'this' knows what it represents by the surrounding context
  this.maxCustomers = maxCustomers; // argument on the right is going into the parameter in the function.
  this.avgCookies = avgCookies;
  this.hourlyCookieSales = hourlyCookieSales || [];// assigning an empty array []
  this.totalCountForDay = 0;
  this.businessHours = businessHours;
}

CookieStore.prototype.getAvgCookieCount = function () { // Add method with a prototype
  for (var hours = 0; hours < this.businessHours.length; hours++) {
    var avgCookiesPerhour = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers + 1) + this.minCustomers) * this.avgCookies);
    this.hourlyCookieSales.push(avgCookiesPerhour);
    this.totalCountForDay += avgCookiesPerhour;
  }
};

CookieStore.prototype.renderRow = function () {
  var tableRowEl = document.createElement('tr');
  storeSalesDataEl.appendChild(tableRowEl);

  var tableHeaderEl = document.createElement('th');
  tableHeaderEl.textContent = this.name;
  tableRowEl.appendChild(tableHeaderEl);

  var tableFooterEl = document.createElement('tr');
  storeSalesDataEl.appendChild(tableFooterEl);

  for (var cookieData = 0; cookieData < this.hourlyCookieSales.length; cookieData++){
    var cookieCountEl = document.createElement('td');
    cookieCountEl.textContent = this.hourlyCookieSales[cookieData];
    tableRowEl.appendChild(cookieCountEl);
  }

  var dailyLocationTotalEl = document.createElement('td');
  dailyLocationTotalEl.textContent = this.totalCountForDay;
  tableRowEl.appendChild(dailyLocationTotalEl);
};

function totalHourlLocSales() {
  var totalHourlySales = [];
  for (var hours = 0; hours < businessHours.length; hours++){
    var hourlyTotal = 0;
    for (var hourlySales = 0; hourlySales < stores.length; hourlySales++) {
      hourlyTotal += stores[hourlySales].hourlyCookieSales[hours];
    }
    totalHourlySales.push(hourlyTotal);
  }
  return totalHourlySales;
}

function hourLocSalesRow(){
  var totalHourlySales = totalHourlLocSales();
  var totalHourlyRowEl = document.createElement('tr');
  totalHourlyRowEl.setAttribute('id', 'hourRow');
  storeSalesDataEl.appendChild(totalHourlyRowEl);
  var hourLocSalesRowHeader = document.createElement('th');
  hourLocSalesRowHeader.textContent = 'Totals';
  totalHourlyRowEl.appendChild(hourLocSalesRowHeader);
  for (var i = 0; i < totalHourlySales.length; i++) {
    var totalHourlyDataEl = document.createElement('td');
    totalHourlyDataEl.textContent = totalHourlySales[i];
    totalHourlyRowEl.appendChild(totalHourlyDataEl);
  }
}

var firstAndPike = new CookieStore('First and Pike Store', 23, 65, 6.3); // CookieStore is a new type of instance.
var seaTacAirport = new CookieStore('SeaTac Airport Store', 3, 24, 1.2); // Now, two new instances of CookieStore.
var seattleCenter = new CookieStore('Seattle Center Store', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill Store', 20, 38, 2.3);
var alki = new CookieStore('Alki Store', 2, 16, 4.6);
var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

function allStoresCookieData () {
  for (var allStores = 0; allStores < stores.length; allStores++){
    stores[allStores].getAvgCookieCount();
  }
};

function creatingHeaderRow () {
  for (var cell = 0; cell < firstAndPike.businessHours.length; cell++) { // Needed time from first store to display hours.
    var timeHour = document.createElement('td');
    timeHour.textContent = firstAndPike.businessHours[cell];
    timeRowEl.appendChild(timeHour);
  }
  var dailyLocationTotalEl = document.createElement('td');
  timeRowEl.appendChild(dailyLocationTotalEl);
  dailyLocationTotalEl.textContent = 'Daily Location Sales';
}

function createRowsForStores() {
  for (var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
    stores[storeIndex].renderRow();
  }
};

function drawTable() {
  creatingHeaderRow();
  createRowsForStores();
  hourLocSalesRow();
}

allStoresCookieData();
totalHourlLocSales();
drawTable();

console.log('----------------EVENTS LISTENERS------------------');

var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();

  console.log(event);

  var name = event.target.cookieStoreName.value;
  var minCustomers = parseInt(event.target.minCust.value);
  var maxCustomers = parseInt(event.target.maxCust.value);
  var avgCookies = parseInt(event.target.avgCookies.value);

  var store = new CookieStore(name,minCustomers, maxCustomers, avgCookies);

  stores.push(store);
  store.getAvgCookieCount();
  var hourRow = document.getElementById('hourRow');
  hourRow.parentNode.removeChild(hourRow);
  store.renderRow();
  hourLocSalesRow();

  console.log(store);
}
