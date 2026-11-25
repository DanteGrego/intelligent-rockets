function Obstacle(verA, verB, gen){
    this.verA = verA;
    this.verB = verB;
    this.gen = gen;


    this.show = function(){
        rectMode(CORNERS);
        noStroke();
        fill(175);
        rect(this.verA.x, this.verA.y, this.verB.x, this.verB.y);
    }
}