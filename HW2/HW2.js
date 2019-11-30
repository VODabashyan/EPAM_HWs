//problem 4
print("Please, enter a sentence");
function rev(str) {
  var reversed = "";
  for (var i = str.length; i > 0; i--) {
    reversed += str[i];
  }
  return reversed;
}


//problem 6
function factOfFacts(n) {
  var result = 1;
  for (var i = n; i >= 1; i--) {
    result = result * factorial(i);
  }
  return result;
}

function factorial(value) {
  if (value == 0 || value == 1) {
    return 1;
  }
  return value * factorial(value - 1);
}

var toPrint = factOfFacts(5);
console.log(toPrint);
