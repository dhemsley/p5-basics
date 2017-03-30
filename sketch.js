var a=50;
var b=50;
var newHeight= a+b;
var newWidth = 100;

//setup function executes once
function setup(){
    createCanvas(600,400);
    background(30, 3, 58);
}

//draw function loops forever
function draw(){
  //background(50);
  if(mouseIsPressed){
   noStroke();
  fill(239, 136, 217);
  ellipse(mouseX,mouseY,newWidth,newHeight); 
  }
  
}