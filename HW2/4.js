print("Please, enter a sentence");
function rev(str) {
  var reversed = "";
  for (var i = str.length; i > 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
