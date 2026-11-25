let obstacles = [];

function createObstacle(begin, final){
    sortVertices(begin, final);

    obstacles.push(new Obstacle(begin.copy(), final.copy(), actualGeneration));
}


function sortVertices(begin, final){
    if(final.x < begin.x){
        let aux = final.x;
        final.x = begin.x;
        begin.x = aux;
    }
    if(final.y < begin.y){
        let aux = final.y;
        final.y = begin.y;
        begin.y = aux;
    }
}


function showObstacles(){
    for(let i = 0; i < obstacles.length; i++){
        if(obstacles[i].gen <= actualGeneration){
            obstacles[i].show();
        }
    }
}