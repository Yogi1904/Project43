var hr, mn, sec;

function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
}

function draw() {
  background("black");

  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();
  
  //Seconds Related Coding
  stroke(255, 0, 0);
  strokeWeight(7);
  noFill();

  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 228, 228, 0, scAngle);

  push()
  rotate(scAngle);
  fill(255, 0, 0);
  line(0, 0, 57, 0)
  pop()

  //Minutes Related Coding

  stroke(0, 255, 0);
  strokeWeight(7);
  noFill();

  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 214, 214, 0, mnAngle);

  push()
  rotate(mnAngle);
  fill(0, 255, 0);
  line(0, 0, 55.5, 0)
  pop()

  //Hours Related Coding

  stroke(0, 0, 255);
  strokeWeight(7);
  noFill();

  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hrAngle);

  push()
  rotate(hrAngle);
  fill(0, 0, 255);
  line(0, 0, 50, 0)
  pop()
}