let posibleGenes = ['u', 'd', 'l', 'r'];
let mutationProbability = 0.008; 

function createRandomRockets(nRockets){
    for(let i = 0; i < nRockets; i++){
        rockets[i] = new Rocket();
        rockets[i].reset(initialPos.copy(), createRandomGenes(timeLimit));
    }
}


function createRockets(gen, best){
    for(let i = 0; i < rockets.length; i++){
        let nGenes = createNewGenes(timeLimit, best, gen);
        rockets[i].reset(initialPos.copy(), nGenes, gen+1);
    }
}


function createRandomGenes(arrayLength){
    let genes = [];
    for(let i = 0; i < arrayLength; i++){
        genes.push(random(posibleGenes));
    }
    return genes;
}



function createNewGenes(arrayLength, best, gen){
    let bestGenes = rockets[best[0]].genes[gen];
    let genes = [];
    let bestD = best[1];
    let worstD = best[2];

    for(let i = 0; i < arrayLength; i++){
        if(i < bestGenes.length && mutationProbability < random(1)){
            genes.push(bestGenes[i]);
        }else{
            genes.push(random(posibleGenes));
        }
    }

    return genes;
}


function resetRockets(){
    for(let i = 0; i < rockets.length; i++){
        rockets[i].reset(initialPos.copy());
    }
}