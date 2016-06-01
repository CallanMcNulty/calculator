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
  debugger;
  return multiply(temp, divide(9,5)) + 32;
};

var ftoc = function(temp){
  return multiply(subtract(temp,32),divide(5,9));
};

//User interface (or front-end) logic

$(document).ready(function() {
  $("form.calc").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#inpt1").val());
    var number2 = $("#inpt2").val();
    if(number2.toUpperCase() != "C" && number2.toUpperCase() != "F") {
      number2 = parseInt(number2);
    }
    var op = $('input[name=operations]:checked').val();
    var result;

    if (op === "+") {
      result = add(number1, number2).toFixed(4);
    } else if (op === "-") {
      result = subtract(number1, number2).toFixed(4);
    } else if (op === "*") {
      result = multiply(number1, number2).toFixed(4);
    } else if (op === "/") {
      result = divide(number1, number2).toFixed(4);
    } else if (op === "BMI") {
      result = bmi(number1, number2).toFixed(4);
    } else {
      if (number2.toUpperCase() === "C"){
        result = ctof(number1).toFixed(4)+"\xB0 F";
      } else {
        result = ftoc(number1).toFixed(4)+"\xB0 C";

      }
    }

    $("#result-field").attr('placeholder', result.toString());
    $("#op-symbol").text(op);
  });
  $("#bmi-btn").click(function() {
    $("#inpt1").attr('placeholder', "weight(lbs)");
    $("#inpt2").attr('placeholder', "height(in)");
  });
  $("#cf-btn").click(function() {
    $("#inpt1").attr('placeholder', "degrees");
    $("#inpt2").attr('placeholder', "C/F");
  });

  $('input[name=operations]').click(function() {
    var checked = $('input[name=operations]:checked').val();
    if(checked != "BMI" && checked != "\xB0") {
      $("#inpt1").attr('placeholder', "");
      $("#inpt2").attr('placeholder', "");
    }
  });
});
