// Business (or bach-end) logic:

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

//User interface (or front-end) logic

$(document).ready(function() {
  $("form.add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
