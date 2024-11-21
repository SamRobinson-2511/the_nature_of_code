// let xOffset1 = 0;
// let xOffset2 = 10000;
let inc = 0.01
let start = 0;
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  let xOffset = start;
  for (let x = 0; x < width; x++){
    stroke(255);
    let n = map(noise(xOffset), 0, 1, 0, height);
    let s = map(sin(xOffset), -1, 1, -50, 50);
    let y = s + n;
    
    
    
    
    // let y = noise(xOffset) * height;
    vertex(x, y);
    xOffset += inc;
  }
  endShape();
  start += inc;
  // noLoop();
}

