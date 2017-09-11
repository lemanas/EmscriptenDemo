var fibo_module = require('./fibo_api.js');

var number = 30;
fibo_module.__Z9printFibox(number);
var fiboLast = fibo_module.__Z10returnFiboi(number-2);

console.log("\n");
console.log(fiboLast);