let particles = [];
let cols, rows;
const SCALE = 20;
const NUM = 300;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
  background(220, 15, 12);

  cols = floor(width  / SCALE);
  rows = floor(height / SCALE);

  for (let i = 0; i < NUM; i++) {
    particles.push(createVector(random(width), random(height)));
  }
}

function draw() {
  noStroke();
  fill(220, 15, 12, 8);
  rect(0, 0, width, height);

  let t = frameCount * 0.003;

  for (let p of particles) {
    let nx = p.x / width;
    let ny = p.y / height;
    let angle = noise(nx, ny, t) * TWO_PI * 3;

    let hue = (frameCount * 0.4 + nx * 180) % 360;
    stroke(hue, 80, 95, 70);
    strokeWeight(1.2);

    let px = p.x, py = p.y;
    p.x += cos(angle) * 2;
    p.y += sin(angle) * 2;
    line(px, py, p.x, p.y);

    if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}
