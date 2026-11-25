let actualGeneration = 0;
let nextButton, prevButton;
let goGenerationInput;
let viewVelocitySlider;
let finalGeneration = 0;
let showRocketsButton;
let showRocketss = true;
let showDebugButton;
let showDebug = false;
let savedTime = 0;

function checkInputs(){
    nextButton.mousePressed(addGeneration);
    prevButton.mousePressed(decreaseGeneration);
    goGenerationInput.input(goGeneration);
    showRocketsButton.mousePressed(changeShowRockets);
    showDebugButton.mousePressed(changeShowDebug);
}

function addGeneration(){
    if(actualGeneration < timeLimitTracker.length-1){
        actualGeneration++;
        resetRockets();
        time = 0;
    }
}

function decreaseGeneration(){
    if(actualGeneration > 0){
        actualGeneration--;
        resetRockets();
        time = 0;
    }
}


function goGeneration(){
    let val = goGenerationInput.value();
    if(val > 0 && val < timeLimitTracker.length-1){
        actualGeneration = val;
        resetRockets();
        time = 0;
    }
}


function changeShowRockets(){
    if(showRocketss){
        showRocketss = false;
    }else{
        showRocketss = true;
    }
}


function changeShowDebug(){
    if(showDebug){
        showDebug = false;
    }else{
        showDebug = true;
    }
}


function showGenerations(){
    for(let n = 0; n < viewVelocitySlider.value(); n++){
        for(let i = 0; i < rockets.length; i++){
            rockets[i].update(actualGeneration, time);
        }
        time++;
        if(time === timeLimitTracker[actualGeneration]){
            time = 0;
            if(actualGeneration < timeLimitTracker.length-2){
                addGeneration();    
            }
            resetRockets();
        }
    }

    showRockets(actualGeneration);
    showObstacles();
    drawPos();
    drawData(actualGeneration);
}


function calculateTime(frase){
    console.log(frase+': ', (millis()-savedTime)/1000);
    savedTime = millis();
}