const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;


function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
	ctx.fillStyle = "teal";
	ctx.fill();
	ctx.stroke();
	}

	this.update = function () {
		this.draw();
		if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;
		
	}
}



let circleArray = [];
for (let i = 0; i < 100; i++) {
	let radius = Math.random()  * 20;
	let x = Math.random() * (innerWidth - radius * 2) + radius;
	let y = Math.random() * (innerHeight - radius * 2) + radius;
	let dx = (Math.random() - 0.5) * 4;
	let dy = (Math.random() - 0.5) * 4;
	

	circleArray.push(new Circle(x, y, dx, dy, radius))
}



function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}	
	
}
animate();