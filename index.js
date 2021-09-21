// Code your solution in this file!
let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia' ];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


let fareBase = 4;
function createFareMultiplier(f){
  return function(fareBase){
      return fareBase ** 2; 
  }
}

function fareDoubler(fareBase){
    return fareBase * 2;
}
console.log(fareDoubler(5));

function fareTripler(fareBase){
    return fareBase * 3;
}
console.log(fareTripler(5));

drivers = ['Sally', 'Bob', 'Freddy', 'Claudia' ];
function selectDifferentDrivers(someArray, someFunc){
    return someFunc(drivers);
}

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));