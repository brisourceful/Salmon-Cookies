'use strict';

function CookieStore (name, minCustomers, maxCustomers, avgCookies, hourlyCount) { // this is a constructor function taking in 4 parameters.
  this.name = name || 'Unknown'; // adding || (or) inputs a value if it doesn't meet true.
  this.minCustomers = minCustomers;  // the context of this is going to change. The keyword 'this' knows what it represents by the surrounding context
  this.maxCustomers = maxCustomers; // argument on the right is going into the parameter in the function.
  this.avgCookies = avgCookies;
  this.hourlyCount = hourlyCount || [];// assigning an empty array []
  this.totalCount = 0;
  this.businessHours = ['06am: ', '07am: ', '08am: ', '09am: ', '010am: ', '011am: ', '12pm: ', '01pm: ', '02pm: ', '03pm: ', '04pm: ', '05pm: ','06pm: '];
}

CookieStore.prototype.getAvgCookieCount = function () { // Add method with a prototype
  for (var hours = 0; hours < 15; hours++) {
    var avgCookiesPerhour = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers + 1) + this.minCustomers) * this.avgCookies);
    this.hourlyCount.push(avgCookiesPerhour);
    this.totalCount += avgCookiesPerhour;
  }
};

var firstAndPike = new CookieStore('First and Pike Store', 23, 65, 6.3); // CookieStore is a new type of instance.
var seaTacAirport = new CookieStore('SeaTac Airport Store', 3, 24, 1.2); // Now, two new instances of CookieStore.
var seattleCenter = new CookieStore('Seattle Center Store', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill Store', 20, 38, 2.3);
var alki = new CookieStore('Alki Store', 2, 16, 4.6);

firstAndPike.getAvgCookieCount();
seaTacAirport.getAvgCookieCount();
seattleCenter.getAvgCookieCount();
capitolHill.getAvgCookieCount();
alki.getAvgCookieCount();

var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

// var tableEl = document.createElement('table');  //Step 1 - Create Element
//
// for (var i = 0; i < stores.length; i++){
//   var currentStore = store[i];
//
//   var rowEl = document.createElement('tr'); //Step 3 - Create elements to loop through.
//   tableEl.appendChild(nameEl);
//
//   var nameEl = document.createElement('th'); // 'th' tag to create a heading
//   nameEl.textContent = currentStore.name;
//   rowEl.appendChild(nameEl);
//
//   var minCustEl = document.createElement('td');
//   minCustEl.textContent = currentStore.minCustomers;
//   rowEl.appendChild(minCustEl);
//
//   var maxCustEl = document.createElement('td');
//   maxCustEl.textContent = currentStore.maxCustomers;
//   rowEl.appendChild(maxCustEl);
//
//   var avgCookiesEl = document.createElement('td');
//   avgCookiesEl.textContent = currentStore.avgCookies;
//   rowEl.appendChild(avgCookiesEl);
//
// }

document.body.appendChild(tableEl); // Step 2 - don't forgot to add element to the document
