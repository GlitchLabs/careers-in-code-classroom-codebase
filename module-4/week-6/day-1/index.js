// Change this file to do something else!


const numberOfStates = 50;
console.log(numberOfStates);

const states =["Alabama",
"Alaska", 
"Arizona", 
"Arkansas", 
"California", 
"Colorado", 
"Connecticut", 
"Delaware", 
"Florida", 
"Georgia", 
"Hawaii", 
"Idaho", 
"Illinois",
"Indiana", 
"Iowa", 
"Kansas", 
"Kentucky", 
"Louisiana", 
"Maine", 
"Maryland", 
"Massachusetts", 
"Michigan", 
"Minnesota", 
"Mississippi", 
"Missouri", 
"Montana", "Nebraska", 
"Nevada", 
"New Hampshire", 
"New Jersey", 
"New Mexico", 
"New York", 
"North Carolina", 
"North Dakota", 
"Ohio", 
"Oklahoma", 
"Oregon", 
"Pennsylvania", "Rhode Island", 
"South Carolina", 
"South Dakota", 
"Tennessee", 
"Texas", 
"Utah", 
"Vermont", 
"Virginia", 
"Washington", 
"West Virginia", 
"Wisconsin", 
"Wyoming"]
var x = Math.floor((Math.random() * 50) + 1);
var state = states[x];

console.log("What state is number "+ x +" out of 50?");
console.log(state);