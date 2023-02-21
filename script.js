//change backgrougnd color 
const box = document.getElementById('box');
const body = document.getElementsByTagName("body")[0];

box.addEventListener('mouseenter', function () {
	document.body.style.background = ' linear-gradient(to bottom, #FF69B4 ,  #FFA500 )';
	box.style.backgroundColor = "#f563a0";
	box.style.border = ' 2px solid  #dfdadc';
});

box.addEventListener("mouseleave", function () {
	body.style.background = "linear-gradient(to bottom, #00ffff, #1a1aff)";
	box.style.backgroundColor = " #17aad3";
	box.style.border = ' 2px solid #000';
});
//**************khtm***********
let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
	button.addEventListener('click', (e) => {
		if (e.target.innerHTML == '=') {
			string = eval(string);
			document.querySelector('input').value = string;
		}

		else if (e.target.innerHTML == 'C') {
			string = "";
			document.querySelector('input').value = string;
		}

		else {
			console.log(e.target);
			string = string + e.target.innerHTML;
			document.querySelector('input').value = string;
		}
	});
});
//this JavaScript code defines an event listener that responds to clicks on buttons in a web page. The code performs the following steps:

//1)Creates an empty string variable 'string' to store the user input.
//let string = "";
//2)Uses the 'document.querySelectorAll' method to select all the buttons in the web page and stores them in the 'buttons' variable.
//let buttons = document.querySelectorAll('button');
//Converts the 'buttons' variable to an array using 'Array.from'.
//Array.from(buttons)
//Uses the 'forEach' method to loop through each button in the array and add an event listener to it.
//.forEach((button) => { ... });
//Within the event listener, checks if the clicked button has an innerHTML value of "=".
//if (e.target.innerHTML == '=') { ... }
//If the button has an innerHTML value of "=", evaluates the 'string' variable using the 'eval' function and stores the result in the 'string' variable. Sets the value of the input element in the web page to the value of the 'string' variable.
//string = eval(string);
//document.querySelector('input').value = string;
//If the clicked button has an innerHTML value of "C", sets the 'string' variable to an empty string and sets the value of the input element in the web page to an empty string.
//else if (e.target.innerHTML == 'C') {
//string = "";
//document.querySelector('input').value = string;
// }
//If the clicked button does not have an innerHTML value of "=" or "C", concatenates the innerHTML value of the clicked button to the 'string' variable and sets the value of the input element in the web page to the value of the 'string' variable.
//else {
//console.log(e.target);
//string = string + e.target.innerHTML;
//document.querySelector('input').value = string;
//}
//In summary, this code implements a simple calculator that evaluates user input and displays the result in an input element in the web page. The user can enter numbers and mathematical operations using the buttons, and the calculator evaluates the expression when the user clicks the "=" button. The "C" button clears the user input.
