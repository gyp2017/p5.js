function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  rect(160, 30, 260, 20);
  // 타원을 직사각형 위에 그린다.
  // 이 코드가 나중에 실행되기 때문에
  ellipse(140, 0, 190, 190);
}
