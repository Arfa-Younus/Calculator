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

