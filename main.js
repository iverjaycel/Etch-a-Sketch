let color = "black";
let click = true;

// This line declares a JavaScript function 
// named populateBoard, which takes a single argument size.
function populateBoard(size) {
    
    // This line selects an HTML element with the class "board" 
    // using document.querySelector() and stores it in the board 
    //variable. This is presumably the grid container.
  let board = document.querySelector(".board");

  //This line selects all div elements within the board and stores them 
  //in the squares variable. These are the individual squares within the grid.
  let squares = board.querySelectorAll("div");

  squares.forEach((div) => div.remove()); //loop through each square and remove it from the grid.

  //This line sets the grid's column template to create a grid with a specified number of columns.
  // The number of columns is determined by the size parameter.
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;

  //This line sets the grid's row template to create a grid with a specified number of rows, also determined by the size parameter.
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  //This line calculates the total number of squares needed, which is the square of the size.
  let amount = size * size;
  for (let i = 0; i < amount; i++) { //This line begins a for loop that will create and insert squares into the grid
    let square = document.createElement("div"); //Inside the loop, a new div element is created and stored in the square variable.

    //An event listener is attached to the square element. When the mouse hovers over the square, the colorSquare function will be called.
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white"; //The initial background color of the square is set to white.
    board.insertAdjacentElement("beforeend", square); //The square is added to the board as a child element at the end of the grid.
    //The for loop continues until all squares have been created and inserted into the grid.
  }
}

populateBoard(16); //This line calls the populateBoard function with an initial size of 16, presumably creating a 16x16 grid of squares.

function changeSize(input) { //This line declares a function named changeSize that takes an input parameter.
  if (input >= 2 && input <= 100) { //This conditional statement checks if the input is greater than or equal to 2 and less than or equal to 100.
    
    //If the input is within the valid range, this line selects an HTML element with the class "error" and sets its display style property to "none."
    // This is typically used to hide an error message, assuming that element is displaying an error message.
    document.querySelector(".error").style.display = "none"; 

    populateBoard(input); //The populateBoard function is called with the input parameter, presumably to create or update the grid with the new size specified by the user.
  } else { //f the input is not within the valid range (less than 2 or greater than 100), the code inside this block will be executed.

    // This line selects an HTML element with the class "error" and sets its display style property to "flex." This is typically used to display an error message,
    // assuming that element is responsible for displaying errors.
    document.querySelector(".error").style.display = "flex";
  }
}

function colorSquare() {
  if (click) { //This conditional statement checks whether a variable or property named click is true.
    if (color === "random") { //Within the if (click) block, this conditional statement checks if a variable or property named color is set to the string "random."

      //If click is true and color is "random," this line generates a random HSL (Hue, Saturation, Lightness) color and sets the background color of the current element
      //(a square) to that random color. It uses Math.random() to create a random hue value between 0 and 360.  
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else { //If color is not "random," the code inside this block will be executed.

      //In this case, the background color of the current square is set to the value of the color variable, which has been previously set by the changeColor function.  
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) { //This line declares a function named changeColor that takes a choice parameter.
  color = choice; // This line sets the global color variable to the value of the choice parameter.
}

function resetBoard() {  //This line declares a function named resetBoard.
  let board = document.querySelector(".board"); //This line selects the grid container element with the class "board" and stores it in the board variable.
  let squares = board.querySelectorAll("div"); //This line selects all the div elements within the grid container and stores them in the squares variable.
  squares.forEach((div) => (div.style.backgroundColor = "white")); //This line uses a forEach loop to iterate over all the squares and set their background color to white, effectively resetting the entire grid.
}

document.querySelector("body").addEventListener("click", (e) => {  //This line adds a click event listener to the <body> element
  if (e.target.tagName != "BUTTON") { //Inside the event listener, this conditional checks if the clicked element is not a <button>.
    click = !click; //If the clicked element is not a button, it toggles the click variable 
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring"; //If click is true, it sets the text content of an element with the class "mode" to "Mode: Coloring."
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";//In this case, it sets the text content of the "mode" element to "Mode: Not Coloring."
    }
  }
});