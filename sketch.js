let xOffset = 0;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  
  let x = map(noise(xOffset), 0, 1, 0, width);
  xOffset += 0.01;
  

  ellipse(x, 200, 24, 24);
}

