let inc = 0.01;

function setup() {
  pixelDensity(1);
  let banner = createCanvas(windowWidth, windowHeight/8);
  banner.id = "banner";
}

function draw(){
  let yOffset = 0;
  
  loadPixels();
  for (let x = 0; x < width; x++){
    let xOffset = 0;
    for(let y = 0; y < height; y++){
      let index = (x + y * width)*4; 
      let r = noise(xOffset, yOffset) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      

      xOffset += inc;
    }
    yOffset += inc;
  }
  updatePixels();
  // noLoop();
}