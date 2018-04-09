//let button = document.getElementById("btn");

let textBox = document.getElementById("textBox");
let text = document.getElementById("text");
text.innerHTML = "TICK TOCK";

// button.addEventListener("click", clock);


// function clock () {
// 	setInterval(function () {
// 		let d = new Date();
// 		// textBox.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// 		textBox.innerHTML = d.toLocaleTimeString();
// 	}, 1000);
// }
setInterval(function () {
		let d = new Date();
		// textBox.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
		textBox.innerHTML = d.toLocaleTimeString();
	}, 1000);

