function drawPos(){
    noStroke();
    fill(0, 0, 255);
    ellipse(initialPos.x, initialPos.y, 10, 10);
    fill(0, 255, 255);
    ellipse(finalPos.x, finalPos.y, 10, 10);
}

function drawData(gen){
    fill(255);
    text('time limit:', 0, 10);
    text(timeLimitTracker[gen], 50, 10);
    text('generation:', 0, 20);
    text(gen, 60, 20);
    text('final generation:', 0, 30);
    text(finalGeneration, 85, 30);
}


function showRockets(gen){
    if(showRocketss){
        for(let i = 0; i < rockets.length; i++){
            rockets[i].show();
        }
    }

    if(showDebug){
        strokeWeight(5);
        for(let i = 1; i < averageTrack[gen].length; i+=1){
            stroke(averageVelocity[gen][i-1], averageVelocity[gen][i], 255);
            line(averageTrack[gen][i-1].x, averageTrack[gen][i-1].y, averageTrack[gen][i].x, averageTrack[gen][i].y);
            //stroke(0, 255, 0);
            //line(averageTrack1[gen][i-1].x, averageTrack1[gen][i-1].y, averageTrack1[gen][i].x, averageTrack1[gen][i].y);
        }
    }
}