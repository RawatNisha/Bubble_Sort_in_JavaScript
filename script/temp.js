let string = "1.5,2,3.333233,4,5,6.8768";

let number = string.split(",") ;

console.log(number);

let numbers = [];

console.log(numbers);

number.forEach(function(value){
    numbers.push(parseInt(value))})

console.log(numbers);