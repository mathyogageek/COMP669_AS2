// Call the function after the page has finished loading
// automatically after the page loads

window.onload = compareIntegers;

// Wrap - inside a function
function compareIntegers() {
  // Prompt -user insert
  var x = parseInt(prompt("Enter the first integer:"));
  var y = parseInt(prompt("Enter the second integer:"));

  // Compare with if-else statement the two numbers
  var result;
  if (x > y) {
    result = x;
  } else if (y > x) {
    result = y;
  } else {
    result = "The two numbers are equal.";
  }

  // Display the result in the browser window
  document.body.innerHTML = "<h1>" + result + "</h1>";

  
}

