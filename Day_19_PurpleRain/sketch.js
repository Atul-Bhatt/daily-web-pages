let drop = [];

function setup() {
	createCanvas(800, 540);
	for( let i = 0; i < 300; i++) {
		drop.push(new Drop());
		
	}
	
}

function draw(){
	background(230, 230, 250);	
	for( let i = 0; i < 300; i++) {
		drop[i].show();
		drop[i].fall();
	}	
}