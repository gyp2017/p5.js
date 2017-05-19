function setup() {
  createCanvas(800, 600);
}

function draw() {
  // background(204);
  // ellipse(50, 50, 50, 50);

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
