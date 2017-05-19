function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  ellipse(140, 0, 190, 190);
  // 직사각형을 타원 위에 그린다.
  // 이 코드가 나중에 실행되기 때문에
  rect(160, 30, 260, 20);
}
