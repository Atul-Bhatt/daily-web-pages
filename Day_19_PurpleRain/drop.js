function Drop() {
	this.x = random(width);
	this.y = random(-200, -100);
	this.z = random(0, 20);
	this.len = map(this.z, 0, 20, 10, 20);
	this.yspeed = map(this.z, 0, 20, 3, 10);


	this.fall = () => {
		this.y = this.y + this.yspeed;
		this.g = map(this.z, 0, 20, 0, 0.2);
		this.yspeed = this.yspeed + this.g;

		if(this.y > height) {
			this.y = random(-200, -100);
			this.yspeed = map(this.z, 0, 20, 3, 10);
		}
	}

	this.show = () => {
		this.thick = map(this.z, 0, 20, 1, 2);
		strokeWeight(this.thick);
		stroke(138, 43, 226);
		line(this.x, this.y, this.x, this.y + this.len);
	}
}