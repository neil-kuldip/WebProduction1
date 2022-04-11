/* Depressed Worm
   Created by: Neil Kuldip
   Reference: Move in a Circle by kchung
*/

let angle = 0;
let scalar = 50;  // Radius of circle
let prevX = 0;
let flip = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Change the angle mode from radians to degrees
  angleMode(DEGREES);	
}

function draw() {
  
  //Set to rovolve around the mouse
  var x = mouseX + scalar * cos(angle);
  var y = mouseY + scalar * sin(angle);
  
  noStroke();
  
  // Goes from grayscale to color on mouse press
  if (!flip) {
    fill(random(255));
  }
  else {
    fill(random(255), random(255), random(255));
  }
  ellipse(x, y, random(100));
  
  angle++;	// Increment angle for the next frame
}

function mousePressed() {
  scalar++;
  flip = !flip;
}

function doubleClicked() {
  background(0);
}