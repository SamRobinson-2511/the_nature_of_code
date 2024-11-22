// let xOffset1 = 0;
// let xOffset2 = 10000;
let inc = 0.0125
let start = 0;
function setup() {
  let banner = createCanvas(windowWidth, windowHeight/16);
  banner.id = "banner";
}

function draw() {
  background(11);
  stroke(255);
  noFill();
  beginShape();
  let xOffset = start;
  for (let x = 0; x < width; x++){
    stroke(255);
    let n = map(noise(xOffset), 0, 1, 0, height);
    let s = map(sin(xOffset), -1, 1, -12, 5);
    let y = s + n;
    
    
    
    
    // let y = noise(xOffset) * height;
    vertex(x, y);
    xOffset += inc;
  }
  endShape();
  start += inc;
  // noLoop();

}

