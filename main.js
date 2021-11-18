"use strict"

function renderCoffee(coffee) {
    if (coffee.roast === 'light') {
        var html = '<div class="coffee light">';
        html += '<h2>' + coffee.name + '</h2>';
        html += '<div class="roast"><p>' + coffee.roast + '</p></div>';
        html += '<div class="hide"><h4>' + coffee.description + '</h4></div>';
        html += '</div>';
    } else if ( coffee.roast === 'medium'){
        var html = '<div class="coffee medium">';
        html += '<h2>' + coffee.name + '</h2>';
        html += '<div class="roast"><p>' + coffee.roast + '</p></div>';
        html += '<div class="hide"><h4>' + coffee.description + '</h4></div>';
        html += '</div>';
    } else if (coffee.roast === 'dark') {
        var html = '<div class="coffee dark">';
        html += '<h2>' + coffee.name + '</h2>';
        html += '<div class="roast"><p>' + coffee.roast + '</p></div>';
        html += '<div class="hide"><h4>' + coffee.description + '</h4></div>';
        html += '</div>';
    }
    return html;
}

function renderCoffees(coffees) {
    var html = '';

    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {

        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

function coffeeComparison (x) {
    x.preventDefault(); // don't submit the form, we just want to update the data
    var searched = searchedCoffee.value.toLowerCase();
    var filteredCoffees = [];
    for (var i = 0; i < coffees.length; i++) {
        if (searched === coffees[i].name.toLowerCase()) {
            filteredCoffees.push(coffees[i]);
        }
    }
    div.innerHTML = renderCoffees(filteredCoffees);
}
//-------------------------
function searchCoffees(y) {
    y.preventDefault();
    var searchRoast = searchBox.value.toLowerCase();
    var filteredCoffees = [];
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(searchRoast.toLowerCase())) {
            filteredCoffees.push(coffees[i]);
        }

        div.innerHTML = renderCoffees(filteredCoffees);
    }
}

//---------------------------



//ADD COFFEE
// var addForm = document.forms['add-coffee'];
// addForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     var value = addForm.querySelector('input[type="text"]').value;
//     var coffees = document.createElement('span');
//
//     coffees.push(coffees[i]);
//
//     div.innerHTML = renderCoffees(filteredCoffees);
// });

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', description: 'Light flavor with bright acidic notes'},
    {id: 2, name: 'Half City', roast: 'light', description: 'Medium flavor with bright acidic notes'},
    {id: 3, name: 'Cinnamon', roast: 'light', description: 'With a hint of sweetness, mellow and cozey'},
    {id: 4, name: 'City', roast: 'medium', description: 'Full flavor with bright acidic notes'},
    {id: 5, name: 'American', roast: 'medium', description: 'Notes of cocoa and toasted nuts'},
    {id: 6, name: 'Breakfast', roast: 'medium', description: 'Mild roast, smooth with a citrusy tang'},
    {id: 7, name: 'High', roast: 'dark', description: 'Robust, full body'},
    {id: 8, name: 'Continental', roast: 'dark', description: 'Full body with a fruity nuance'},
    {id: 9, name: 'New Orleans', roast: 'dark', description: 'Deep dark blend with smooth smokey flavors'},
    {id: 10, name: 'European', roast: 'dark', description: 'Robust with s distinct flavor'},
    {id: 11, name: 'Espresso', roast: 'dark', description: 'Luxuriously creamy, with a kiss of foamy cream'},
    {id: 12, name: 'Viennese', roast: 'dark', description: 'Espresso with half steamed milk, topped off with milk froth.'},
    {id: 13, name: 'Italian', roast: 'dark', description: 'Arabica coffee smooth and acidic'},
    {id: 14, name: 'French', roast: 'dark', description: 'Intense and smokey-sweet flavor'},
];

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchButton = document.querySelector('#searchbtn');
var searchedCoffee = document.querySelector('#query');
div.innerHTML = renderCoffees(coffees);
//---------------------
var searchBox = document.querySelector('.searchBox');
searchBox.addEventListener('keyup', searchCoffees);
//----------------------

searchButton.addEventListener('click', coffeeComparison);

submitButton.addEventListener('click', updateCoffees);
