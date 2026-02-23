xOff = 50;

function setup() {
  //windowSize = min(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  // background(220);

  for (n = 0; n < height; n += 30) {
    let r = noise(n*0.1 + 500) * 255;
    let g = noise(n*0.8 + 100) * 255;
    let b = noise(0) * 255;
    strokeWeight(3);
    stroke(r, g, b,128);
    
    let amp = random(30, 120);        // each line gets a random amplitude
   // let freq = random(0.04, 0.05);    // each line gets a random frequency
    
    beginShape();
    for (i = 30; i < width - 30; i += 10) {
      var d = dist(i, n, width / 2, n);
      var maxD = dist(30, n, width / 2, n);
      var falloff = pow(1 - (d / maxD), 0.5); // ← pow < 1 makes falloff less steep
      curveVertex(i, n - noise(n * 0.3 + i + xOff) * falloff * amp);
    }
    endShape();
  }

  xOff += 0.05; 
}
