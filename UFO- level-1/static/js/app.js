// from data.js
var tableData = data;
console.log(tableData)

// Get a reference to the table body
var tbody = d3.select("tbody");

data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


var form = d3.select("#form")
var button = d3.select("filter-btn")

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
// Prevent the page from refreshing
    d3.event.preventDefault();
 // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
 // Get the value property of the input element
    var inputValue = inputElement.property("value");
 // Print the value to the console
    console.log(inputValue);
  // First, create an array with just the datetime values
    var filterdata = tableData.filter(x=>x.datetime === inputValue)
    console.log(filterdata)
  
    tbody.html("")

    filterdata.forEach((weatherReport) => {
      var row = tbody.append("tr");
      Object.entries(weatherReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

}
   



