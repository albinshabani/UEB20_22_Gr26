// Vetit dhe metodat për manipulim me numra në JS
let maxValue = Number.MAX_VALUE;
let nanValue = isNaN("Not a Number");
let exponentialValue = (123456).toExponential();
let stringValue = (987).toString();

console.log("Max Value:", maxValue);
console.log("NaN:", nanValue);
console.log("Exponential:", exponentialValue);
console.log("String Representation:", stringValue);

// Definimi i objekteve në JS dhe krijimi i instancave të objekteve nga ky funksion
function Destination(name, description) {
    this.name = name;
    this.description = description;
}

let destination1 = new Destination('Beach Paradise', 'Relax on pristine beaches with crystal-clear waters.');
let destination2 = new Destination('Mountain Retreat', 'Embark on breathtaking hikes through majestic mountain landscapes.');
let destination3 = new Destination('City Exploration', 'Explore vibrant city life and indulge in diverse culinary experiences.');

console.log("Destination 1:", destination1);
console.log("Destination 2:", destination2);
console.log("Destination 3:", destination3);

// Përdorimi i metodave match() dhe replace() tek stringjet
let originalString = "Hello, world! This is a beautiful world.";
let matchResult = originalString.match(/world/g);
let replaceResult = originalString.replace(/world/g, 'universe');

console.log("Match Result:", matchResult);
console.log("Replace Result:", replaceResult);

// Përdorimi i jQuery efekteve (Hide, Show)
function hideContent() {
    $('#main-content').hide('slow');
}

function showContent() {
    $('#main-content').show('slow');
}

// Përdorimi i jQuery me HTML (Get, Set, Add, Remove)
function getContent() {
    alert($('#main-content').html());
}

function setContent() {
    $('#main-content').html('<p>New content set using jQuery</p>');
}

function addContent() {
    $('#main-content').append('<p>Appended content using jQuery</p>');
}

function removeContent() {
    $('#main-content p:last-child').remove();
}
