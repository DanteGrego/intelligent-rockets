let initialPos, finalPos;
let nRockets = 50;

function setup() {
  createCanvas(400, 400);
  initialPos = createVector(width/2, height-50);
  finalPos = createVector(width/2, 10);
  time = 0;
  setInputs();
}

function draw() {
  background(0);

  if(drawing){
    checkKeyInput();
    drawPreview();
    drawPos();
    showObstacles();
    checkStartingInputs();
  }else{
    checkInputs();
    drawPreview();
    showGenerations();
  }
}