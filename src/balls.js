let balls = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 18; i++) {
    balls.push({
      x: random(width),
      y: random(height),
      r: random(12, 36),
      vx: random(-3, 3),
      vy: random(-3, 3),
      col: color(random(100, 255), random(50, 180), random(150, 255), 200)
    });
  }
}

function draw() {
  background(18, 18, 28, 40);

  for (let b of balls) {
    b.x += b.vx;
    b.y += b.vy;

    if (b.x - b.r < 0 || b.x + b.r > width)  b.vx *= -1;
    if (b.y - b.r < 0 || b.y + b.r > height) b.vy *= -1;

    noStroke();
    fill(b.col);
    ellipse(b.x, b.y, b.r * 2);
  }
}
