"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHTMLFromEmployeeCards = exports.createEmployeeCard = void 0;
// this function takes in an employee (or any of its subclasses) and uses its fields to generate a unique card
function createEmployeeCard(employee) {
    // deconstruct the UniqueMap object into its values to use them for the template string
    let { role, uniqueField, uniqueFieldValue, icon } = employee.getUniqueMap();
    // construct the template string with the employee object's fields
    let template = `
      <div class="column">
        <div class="card">
            <div class="card-header bg-info text-light">
                <h5 class=""> ${employee.getName()} </h5>
                <p> ${employee.getRole()} <i class= "${icon}" style="display:inline; margin: 3px;"></i></p> 
            </div>

    <div class="card-body">
        <div class="card-body border-dark">
          <ul class="list-group">
            <li class="list-group-item list-group-item-action">ID: ${employee.getId()}</li>
            <li class="list-group-item list-group-item-action"> E-mail ${employee.getEmail()}   </li>
            <li class="list-group-item list-group-item-action"> ${uniqueField} : ${uniqueFieldValue} </li>
          </ul>
        </div>    
    </div>
    </div>
    </div>`;
    return template;
}
exports.createEmployeeCard = createEmployeeCard;
// this function returns a string representation of a complete html page
// input is an array of strings in which each element is the output of the cardTemplate function
function createHTMLFromEmployeeCards(card) {
    // return an empty string if no cards are provided
    if (card.length < 1) {
        return "";
    }
    // string with the html page's head
    let head = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous">
    </head>
    <body>
    <div class="row">
    `;
    // I'm told string concatenation is expensive and this is the better way to do it:
    // Declare empty array, append each card to the array, and then declare a new string that joins all the array elements
    let contentArray = [];
    card.forEach(card => contentArray.push(card));
    let content = contentArray.join("");
    // bottom part of the page
    let bottom = `
    </div>
    </body>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    `;
    // return a string of all concatenated parts; it's like a sandwich, but with strings;
    return head + content + bottom;
}
exports.createHTMLFromEmployeeCards = createHTMLFromEmployeeCards;
