function playCoinFlip() {
    var coinFlip = Math.random(); // a random number
    var choice = prompt("Select Heads or Tails:").toLowerCase();
  
    if (coinFlip < 5.0) {
      // Flipping Coin Head 
      if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!");
      } else if (choice === "tails") {
        alert("The flip was heads but you chose tails...you lose!");
      } else {
        alert("Invalid choice. Please select Heads or Tails.");
      }
    } else {
      // Flipping Coin - result is tails
      if (choice === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
      } else if (choice === "tails") {
        alert("The flip was tails and you chose tails...you win!");
      } else {
        alert("Invalid choice. Please select Heads or Tails.");
      }
    }
  }
  
  window.onload = playCoinFlip;
  

