const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.font = "38pt Arial";
context.fillStyle = "gray";
context.strokeStyle = "teal";


context.fillText("Hello World!", canvas.width/2 - 100, canvas.height/2);
context.strokeText("Hello World!", canvas.width/2 -101, canvas.height/2);
