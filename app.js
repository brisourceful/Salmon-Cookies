'use strict';
//
// var firstAndPike = {
//   nameOfLocation: 'First and Pike',
//   cookieArray: [],
//   businessHours: ['6am','7am','8am','9am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm','08pm'],
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   //Method to generate random number of customers per hour.
//   genRandomNumCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust;
//   },
//   //Calculation for cookies purchased each hours using avgCookieSale * genRandomNumCustHour.
//   cookiesPerHour: function () {
//     for (var i = 0; i < 15; i++){
//       this.cookieArray.push(Math.ceil(this.genRandomNumCustHour() * this.avgCookieSale)); //the array you want the data to push and then the data you want to push into the array//
//       this.businessHours[i] += ': ' + this.cookieArray[i];
//     }
//   }
// };
//
// firstAndPike.cookiesPerHour();
//
// for (var j = 0; j < firstAndPike.businessHours.length; j++) {
//   var cookieDataEl = document.getElementById('OnePikeData');
//   var arrayEl = document.createElement('li');
//   console.log(cookieDataEl);
//   arrayEl.textContent = firstAndPike.businessHours[j];
//   console.log(arrayEl);
//   cookieDataEl.appendChild(arrayEl);
// };
//
// var seaTacAirport = {
//   cookieArray: [],
//   nameOfLocation: 'SeaTac Airport',
//   businessHours: ['6am','7am','8am','9am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm','08pm'],
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
// //Method to generate random number of customers per hour.
//   genRandomNumCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust;
//   },
// //Calculation for cookies purchased each hours using avgCookieSale * genRandomNumCustHour.
//   cookiesPerHour: function () {
//     for (var i = 0; i < 15; i++){
//       this.cookieArray.push(Math.ceil(this.genRandomNumCustHour() * this.avgCookieSale)); //the array you want the data to push and then the data you want to push into the array//
//       this.businessHours[i] += ': ' + this.cookieArray[i];
//     }
//   }
// };
//
// seaTacAirport.cookiesPerHour();
//
// for (var k = 0; k < seaTacAirport.businessHours.length; k++) {
//   var cookieDataEl = document.getElementById('SeaTacData');
//   var arrayEl = document.createElement('li');
//   console.log(cookieDataEl);
//   arrayEl.textContent = seaTacAirport.businessHours[k];
//   console.log(arrayEl);
//   cookieDataEl.appendChild(arrayEl);
// };
//
// var seattleCenter = {
//   cookieArray: [],
//   nameOfLocation: 'Seattle Center',
//   businessHours: ['6am','7am','8am','9am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm','08pm'],
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
// //Method to generate random number of customers per hour.
//   genRandomNumCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust;
//   },
// //Calculation for cookies purchased each hours using avgCookieSale * genRandomNumCustHour.
//   cookiesPerHour: function () {
//     for (var i = 0; i < 15; i++){
//       this.cookieArray.push(Math.ceil(this.genRandomNumCustHour() * this.avgCookieSale)); //the array you want the data to push and then the data you want to push into the array//
//       this.businessHours[i] += ': ' + this.cookieArray[i];
//     }
//   }
// };
//
// seattleCenter.cookiesPerHour();
//
// for (var l = 0; l < seattleCenter.businessHours.length; l++) {
//   var cookieDataEl = document.getElementById('SeaCenterData');
//   var arrayEl = document.createElement('li');
//   console.log(cookieDataEl);
//   arrayEl.textContent = seattleCenter.businessHours[l];
//   console.log(arrayEl);
//   cookieDataEl.appendChild(arrayEl);
// };
//
// var capitolHill = {
//   cookieArray: [],
//   nameOfLocation: 'Capitol Hill',
//   businessHours: ['6am','7am','8am','9am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm','08pm'],
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
// //Method to generate random number of customers per hour.
//   genRandomNumCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust;
//   },
// //Calculation for cookies purchased each hours using avgCookieSale * genRandomNumCustHour.
//   cookiesPerHour: function () {
//     for (var i = 0; i < 15; i++){
//       this.cookieArray.push(Math.ceil(this.genRandomNumCustHour() * this.avgCookieSale)); //the array you want the data to push and then the data you want to push into the array//
//       this.businessHours[i] += ': ' + this.cookieArray[i];
//     }
//   }
// };
//
// capitolHill.cookiesPerHour();
//
// for (var m = 0; m < seattleCenter.businessHours.length; m++) {
//   var cookieDataEl = document.getElementById('CapHillData');
//   var arrayEl = document.createElement('li');
//   console.log(cookieDataEl);
//   arrayEl.textContent = seattleCenter.businessHours[m];
//   console.log(arrayEl);
//   cookieDataEl.appendChild(arrayEl);
// };
//
// var alki = {
//   cookieArray: [],
//   nameOfLocation: 'Alki',
//   businessHours: ['6am','7am','8am','9am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm','08pm'],
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
// //Method to generate random number of customers per hour.
//   genRandomNumCustHour: function() {
//     return Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust;
//   },
// //Calculation for cookies purchased each hours using avgCookieSale * genRandomNumCustHour.
//   cookiesPerHour: function () {
//     for (var i = 0; i < 15; i++){
//       this.cookieArray.push(Math.ceil(this.genRandomNumCustHour() * this.avgCookieSale)); //the array you want the data to push and then the data you want to push into the array//
//       this.businessHours[i] += ': ' + this.cookieArray[i];
//     }
//   }
// };
//
// alki.cookiesPerHour();
//
// for (var n = 0; n < seattleCenter.businessHours.length; n++) {
//   var cookieDataEl = document.getElementById('AlkiData');
//   var arrayEl = document.createElement('li');
//   console.log(cookieDataEl);
//   arrayEl.textContent = seattleCenter.businessHours[n];
//   console.log(arrayEl);
//   cookieDataEl.appendChild(arrayEl);
// };
//This is an example of an object literal.
var userFullName = prompt('Please enter your full name');
var userEmail = prompt ('Please enter your email');

var myUser = {
  fullName: userFullName,
  email: userEmail,
  login: function(){
    console.log(this.fullName + ' has now logged in!');
  }
};

//Adding a property outside the object. Use variable then "." then key.
// myUser.email = 'eaoueou@gmail.com';

console.log('------------------ New User--------------'); //Creates nice separation in the console log.
console.log(myUser);

myUser.login();

console.log('_____________PRESENT ELEMENTS!________________');

var userHeadingEl = document.getElementById('first-user-heading'); // Step 1
userHeadingEl.textContent = myUser.fullName; // Step 2

var userElement = document.createElement('h1'); //Step 1 - Create element or access the element for the DOM.
// userElement = <h1></h1>

userElement.setAttribute('id', 'first-user-heading');// Step 2 - Assign any attributes (.setAttribute is on any html element node). We are storing userElement and therefore is an HTML node. Make sure you have all attributes set before giving it to the DOM.
// userElement = <h1 id="first-user-heading"></h1>

userElement.textContent = myUser.fullName;
//userElement = <h1 id="first-user-heading">someUserName</h1>

var sectionEl = document.getElementById('main-content'); //Got reference
//<section id="main-content"></section> //from our index.html

sectionEl.appendChild(userElement); //Step 3 - Adds element to designated section.

console.log('--------------------CONSTRUCTORS------------------------');

function CookieStore (name, minCustomers, maxCustomers, avgCookies, hourlyCount) { // this is a constructor function taking in 4 parameters.
  this.name = name || 'Unknown'; // adding || (or) inputs a value if it doesn't meet true.
  this.minCustomers = minCustomers;  // the context of this is going to change. The keyword 'this' knows what it represents by the surrounding context
  this.maxCustomers = maxCustomers; // argument on the right is going into the parameter in the function.
  this.avgCookies = avgCookies;
  this.hourlyCount = hourlyCount || []; // assigning an empty array []
}

CookieStore.prototype.getAvgCookieCount = function () { // Add method with a prototype
  var avgCookiesPerhour = Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers + 1) + this.minCustomers) * this.avgCookies);
  this.hourlyCount.push(avgCookiesPerhour);
  console.log(this.name + 'Got avg cookie count.');
};

// var hourlyCookie = [50, 100, 23, 15, 66]; //Add array to your constructor as a parameter

var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3); // CookieStore is a new type of instance.
var otherStore = new CookieStore('Other Store', 100, 200, 10); // Now, two new instances of CookieStore.
var anotherStore = new CookieStore('Downtown', 50, 500, 1600);

var stores = [pikePlace, otherStore, anotherStore];

var tableEl = document.createElement('table');  //Step 1 - Create Element

for (var i = 0; i < stores.length; i++){
  var currentStore = store[i];

  var rowEl = document.createElement('tr'); //Step 3 - Create elements to loop through.
  tableEl.appendChild(nameEl);

  var nameEl = document.createElement('th'); // 'th' tag to create a heading
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);

  var minCustEl = document.createElement('td');
  minCustEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustEl);

  var maxCustEl = document.createElement('td');
  maxCustEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustEl);

  var avgCookiesEl = document.createElement('td');
  avgCookiesEl.textContent = currentStore.avgCookies;
  rowEl.appendChild(avgCookiesEl);

}

document.body.appendChild(tableEl); // Step 2 - don't forgot to add element to the document
