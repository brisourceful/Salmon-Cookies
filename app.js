'use strict';

var firstAndPike = {
  cookieArray: [],
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  businessHours: 15,
  genRandomNumCustHour: function() {
    return Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust;
  },
  cookiesPerHour: function () {
    for (var i = 0; i < 15; i++){
      this.cookieArray.push(Math.floor(this.genRandomNumCustHour() * this.avgCookieSale)); //the array you want the data to push and then the data you want to push into the array//
    }
    return this.cookieArray;
  }
};

var cookieDataEl = document.getElementById('header');
var arrayEl = document.createElement('p');
arrayEl.textContent = firstAndPike.cookieArray;
cookieDataEl.appendChild(arrayEl);

// var userHeadingEl = document.getElementById('first-user-heading'); // Step 1
// userHeadingEl.textContent = myUser.fullName; // Step 2

//
// var seaTacAirport = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2
// };
//
// var seattleCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7
// };
//
// var capitolHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3
// };
//
// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6
// };
























// //This is an example of an object literal.
// var userFullName = prompt('Please enter your full name');
// var userEmail = prompt ('Please enter your email');
//
// var myUser = {
//   fullName: userFullName,
//   email: userEmail,
//   login: function(){
//     console.log(this.fullName + ' has now logged in!');
//   }
// };
//
// //Adding a property outside the object. Use variable then "." then key.
// // myUser.email = 'eaoueou@gmail.com';
//
// console.log('------------------ New User--------------'); //Creates nice separation in the console log.
// console.log(myUser);
//
// myUser.login();
//
// console.log('_____________PRESENT ELEMENTS!________________');
//
// var userHeadingEl = document.getElementById('first-user-heading'); // Step 1
// userHeadingEl.textContent = myUser.fullName; // Step 2
//
//
// var userElement = document.createElement('h1'); //Step 1 - Create element or access the element for the DOM.
// // userElement = <h1></h1>
//
// userElement.setAttribute('id', 'first-user-heading');// Step 2 - Assign any attributes (.setAttribute is on any html element node). We are storing userElement and therefore is an HTML node. Make sure you have all attributes set before giving it to the DOM.
// // userElement = <h1 id="first-user-heading"></h1>
//
// userElement.textContent = myUser.fullName;
// //userElement = <h1 id="first-user-heading">someUserName</h1>
//
// var sectionEl = document.getElementById('main-content'); //Got reference
// //<section id="main-content"></section> //from our index.html
//
// sectionEl.appendChild(userElement); //Step 3 - Adds element to designated section.
