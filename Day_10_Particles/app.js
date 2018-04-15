const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let particles = {};
let particleIndex = 0;
let particleNum = 4;


function Particle() {
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.width = 8;
	this.height = 8;
	this.vx = Math.random() * 20 - 10;
	this.vy = Math.random() * 20 - 10;
	this.gravity = 0.8;
	//this.color = "hsl("+ parseInt(Math.random() *255) + " ,50%, 70%)";
	this.color = "#da224a";

	particleIndex++;
	particles[particleIndex] = this;
	this.id = particleIndex;
	this.life = 0;
	this.maxLife = Math.random() * 30 + 50;;
}

Particle.prototype.draw = function(){
	this.x += this.vx;
	this.y += this.vy;
	//this.yv += this.gravity;
	if(Math.random() < 0.1){
		this.vx = Math.random() * 10 - 5;
		this.vy = Math.random() * 10 - 5;
	}

	this.life++;
	if(this.life >= this.maxLife)
		delete particles[this.id];

	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
};





function animate() {
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	for(let i = 0; i < particleNum; i++) {
	new Particle();
	}

	for(let i in particles) {
		particles[i].draw();
	}
	
	requestAnimationFrame(animate);
}

animate(); 