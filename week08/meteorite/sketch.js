/* Meteorite
   Created by: Neil Kuldip
   Reference: The Coding Train YT Channel
*/

let circleX;
let circleY;
let meteorRedVal;
let meteorGreenVal;

function setup() {
  createCanvas(400, 400);
  circleX = 10;
  circleY = 0;
  meteorRedVal = 100;
  meteorGreenVal = 0;
}

function draw() {
  background(0);
  
  //Background constellations 
  fill(255);
  circle(random(width), random(width), 5);
  circle(random(width), random(width), 5);
  circle(random(width), random(width), 5);
  
  //Earth
  fill(0,0,255);
  circle(375,375,300);
  fill(0,255,0);
  rect(260, 300, 80, 80, 30);
  rect(360, 260, 80, 60, 20);
  rect(380, 350, 80, 80, 30);
  
  
  //Moving Meteorite
  noStroke();
  fill(meteorRedVal, meteorGreenVal, 0);
  circle(circleX, circleY, mouseY);
  circleX++;
  circleY++;
  meteorRedVal += 5;
  meteorGreenVal += 0.5; //Found best ratio to make orange
  if (circleX >= 300) {
    explosion();
    if (circleX == 500) {
      mousePressed();
    }
  }
  
}

//End message -- user mouse movement changes text color
function explosion() {
  background(255, 69, 0);
  fill(mouseX, mouseY, 153);
  textSize(32);
  text('BWAHAHAHAHA!!!', 70, 200);
}

//User optional choice to click to reset
function mousePressed() {
  background(0);
  circleX = 10;
  circleY = 0;
  meteorRedVal = 100;
  meteorGreenVal = 0;
}