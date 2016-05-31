var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(num1, num2){
  return num1 - num2;
};

var multiply = function(num1, num2){
  return num1 * num2;
};

var divide = function(num1, num2){
  return num1 / num2;
};

var bmi = function(weight, height){
  return divide(weight, multiply(height, height)) * 703;
};

var ctof = function(temp){
  return multiply(temp, divide(9/5)) + 32;
};

var ftoc = function(temp){
  return multiply(subtract(temp,32),divide(5,9));
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = bmi(number1, number2);
alert(result);
