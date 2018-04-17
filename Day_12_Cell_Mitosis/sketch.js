let cells = [];
function setup() {
	createCanvas(800, 600);
	for(let i = 0; i < 5; i++) {
		cells.push(new Cell());
	}

}

function draw() {
	background(200);
	textSize(32);
	fill(0, 102, 153, 90);
 	text('Click on the cells', 300, 50);
	for(let i = 0;i < cells.length; i++) {
		cells[i].move(); 
		cells[i].show();
	}
}

function mousePressed() {
	for(let i = cells.length-1; i >= 0; i--) {
		if(cells[i].clicked(mouseX, mouseY)) {
			console.log("cli00");  
			cells.push(cells[i].mitosis());
			cells.push(cells[i].mitosis());
			cells.splice(i, 1);
		}
		
	}
}

