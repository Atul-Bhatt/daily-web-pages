const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.strokeStyle = "teal";
context.fillStyle = "teal";
//Rectangle
context.strokeRect(350, 120, 80, 50);
context.fillRect(450, 120, 80, 50);
//Drawing line
context.moveTo(20,50);
context.lineTo(500, 50);
context.stroke();
//Circle
context.beginPath();
context.arc(100, 150, 50, 0, 2*Math.PI);
context.stroke();
//Circlre fill
context.beginPath();
context.arc(250, 150, 50, 0, 2*Math.PI);
context.fill();
//Semi-Circle
context.beginPath();
context.arc(100, 300, 50, 0, Math.PI);
context.stroke();
//Semi-circle fill
context.beginPath();
context.arc(250, 300, 50, 0, Math.PI);
context.fill();