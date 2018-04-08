let button = document.getElementById("btn");

let textBox = document.getElementById("textBox");

button.addEventListener("click", colorGen);


function colorGen() {
	
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
	textBox.innerHTML="RGB (" + r + "," + g + "," + b + " )";
}

