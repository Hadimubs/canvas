var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="white";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",drawcircle);
function drawcircle(a){
mouseX=a.clientX-canvas.offsetLeft;
mouseY=a.clientY-canvas.offsetTop;
console.log(mouseX);
console.log(mouseY);
circle(mouseX,mouseY);
color=document.getElementById("color").value ;

}
function circle(mouseX,mouseY){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
ctx.stroke();

}
function d(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}

