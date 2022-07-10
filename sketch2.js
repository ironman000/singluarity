let distribution = new Array(360);
let detailX;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(0, 200));
  }
  detailX = createSlider(3, 24, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
}

x = 200; 
y = 200;
speed = 0.2;

function draw() {
  background(0);
  strokeWeight(1)
  translate(windowWidth / 50, windowHeight / 50);
  for (let i = 0; i < distribution.length; i++) {
     rotate(TWO_PI / distribution.length);
     stroke(255);
     let dist = abs(distribution[i]);
     line(0, 0, y, y*y);
   }

   rotateZ(millis() / 9000);
   noFill();
   strokeWeight(0.5);
   sphere(170, detailX.value(), 16);


    x = x + speed; 
    if ( x > 250){
        x = x*-1
    }
    y = y 
}