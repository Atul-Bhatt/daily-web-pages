let btn = document.querySelector("#btn");
let img = document.querySelector("#pic");

btn.addEventListener("click", () => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
	
	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4 && xhr.status === 200) {
			let url = JSON.parse(xhr.response).message;
			img.src = url;
		}
	}


	xhr.send();

});

