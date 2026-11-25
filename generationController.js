let timeLimit = 100;
let timeLimitTracker = [timeLimit];
let timeIncrement = 1;
let timeDecrease = 4;
let time;
let badGeneration = 0;
let badGenerationTrigger = 5;
let averageTrack = [];
let averageTrackPresicion = 10;
let averageVelocity = [];
let maxVelocity;
let minVelocity;
//let averageTrack1 = [];

function updateGeneration(gen){
    for(let i = 0; i < rockets.length; i++){
        rockets[i].update(gen, time);
    }
    time++;
}


function createNewGeneration(gen){
    let bestRocket = checkBestRocket();
    controlTimeLimit(bestRocket[0]);
    createRockets(gen, bestRocket);
}


function checkBestRocket(){
    let bestDistance = width*height;
    let worstDistance = 0;
    let best = floor(random(rockets.length));
    for(let i = 0; i < rockets.length; i++){
        if(!rockets[i].crashed){
            let d = dist(rockets[i].pos.x, rockets[i].pos.y, finalPos.x, finalPos.y);
            if(d < bestDistance){
                bestDistance = d;
                best = i;
            }else if(d > worstDistance){
                worstDistance = d;
            }
        }
    }

    return [best, bestDistance, worstDistance];
}


function controlTimeLimit(best){
    if(rockets[best].reached){
        timeLimit -= timeDecrease;
        badGeneration = 0;
    }else{
        badGeneration++;
        if(badGeneration > badGenerationTrigger){
            badGeneration = 0;
            timeLimit += timeIncrement;
        }
    }

    timeLimitTracker.push(timeLimit);
}


function mapAverageVelocities(gen){
    for(let i = 0; i < averageVelocity[gen].length; i++){
        averageVelocity[gen][i] = map(averageVelocity[gen][i], minVelocity, maxVelocity, 0, 255);
    } 
}


function calculateAverage(gen){
    let average = createVector();
    averageVelocity[gen].push(0);
    let rocketsCount = 0;
    //let average1 = createVector();
    
    for(let i = 0; i < rockets.length; i++){
        //average1.add(rockets[i].pos);
        if(!rockets[i].crashed){
            rocketsCount++;
            average.add(rockets[i].pos);
            let mag = rockets[i].vel.mag();
            averageVelocity[gen][averageVelocity[gen].length-1] += mag; 
            if(mag > maxVelocity){
                maxVelocity = mag;
            }else if(mag < minVelocity){
                minVelocity = mag;
            }
        }
    }

    
    //average1.div(rockets.length);
    //averageTrack1[gen].push(average1.copy());
    if(rocketsCount > 0){
        average.div(rocketsCount);
        averageVelocity[gen][averageVelocity[gen].length-1] /= rocketsCount;
    }
    averageTrack[gen].push(average.copy());
    //console.log(gen, averageTrack[gen]);
}


function calculateGenerations(desGen, first){
    calculateTime('started');
    if(first){
        createRandomRockets(nRockets);
    }else{
        resetRockets();
    }

    calculateTime('set rockets');
    for(let i = finalGeneration; i < desGen+finalGeneration; i++){
        time = 0;
        averageTrack[i] = [];
        averageVelocity[i] = [];
        //averageTrack1[i] = [];
        maxVelocity = 0;
        minVelocity = 0;
        while(time < timeLimit){
            calculateAverage(i);
            updateGeneration(i);
        }
        mapAverageVelocities(i);
        createNewGeneration(i);
    }

    calculateTime('simulated:');
    finalGeneration += desGen;
    calculated = true;
    console.log('-------------------');
}