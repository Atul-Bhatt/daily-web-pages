
function Cell(pos, r, c) {
	if(pos) {
		this.pos = pos.copy();
	}
	else {
		this.pos = pos || createVector(random(width), random(height));
	}
	
	this.r = r || 60;
	this.c = c || color(random(100, 250), 0, random(100, 250), 100);

	this.clicked = function(x, y) {
		let d = dist(this.pos.x, this.pos.y, x, y);
		if(d < this.r/2){
			return true;
		}
		else {
			return false;
		}
	}

	this.move = function() {
		let vel = p5.Vector.random2D();
		this.pos.add(vel);
	}

	this.show = function() {
		noStroke();
		fill(this.c);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
		
	}

	this.mitosis = function (){
		this.pos.x += random(-this.r, this.r);
		let cellA = new Cell(this.pos, this.r *0.8, this.c);
		return cellA;
	}
}