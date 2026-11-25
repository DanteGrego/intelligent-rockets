let clicking = false;
let drawing = true;
let calculated = true;
let beginVertice;
let finalVertice;
let button;
let desiredGenerations = 0;
let desiredGenerationsInput;

function checkKeyInput(){
    if(keyIsPressed){
        if(keyCode === 87){
            finalPos.set(mouseX, mouseY);
        }else if(keyCode === 83){
            initialPos.set(mouseX, mouseY);
        }
    }
}


function checkStartingInputs(){
    if(drawing){
        button.mousePressed(buttonPressed);
        desiredGenerationsInput.input(setDesiredGeneration);
    }
}


function mousePressed(){
    if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
        clicking = true;
        beginVertice = createVector(mouseX, mouseY);
    }
}


function mouseReleased(){
    if(clicking){
        clicking = false;
        finalVertice = createVector(mouseX, mouseY);
        createObstacle(beginVertice.copy(), finalVertice.copy());
    }
}


function drawPreview(){
    if(clicking){
        rectMode(CORNERS);
        noStroke();
        fill(150, 150);
        rect(beginVertice.x, beginVertice.y, mouseX, mouseY);
    }
}


function buttonPressed(){
    if(calculated){
        calculated = false;
        calculateGenerations(desiredGenerations, drawing);
        drawing = false;
        time = 0;
    }
}


function setDesiredGeneration(){
    desiredGenerations = floor(desiredGenerationsInput.value());
}


function setInputs(){
    button = createButton('Empezar');
    button.position(0, 400);
    desiredGenerationsInput = createInput();
    desiredGenerationsInput.position(70, 400);
    nextButton = createButton('Sig. Generacion');
    nextButton.position(0, 425);
    prevButton = createButton('Ant. Generacion');
    prevButton.position(110, 425);
    goGenerationInput = createInput();
    goGenerationInput.position(220, 425);
    viewVelocitySlider = createSlider(1, 500, 1, 1);
    viewVelocitySlider.position(0, 450);
    showRocketsButton = createButton('Mostrar Cohetes');
    showRocketsButton.position(135, 450);
    showDebugButton = createButton('Mostrar Promedios');
    showDebugButton.position(248, 450);
}