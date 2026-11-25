let rockets = [];
let rocketPower = 0.5;
let steeringPower = rocketPower * 0.5;
let rocketSize = 50;
let collisionTrigger = 20;

function Rocket(){
    this.genes = [];
    for(let i = 0; i < desiredGenerations; i++){
        this.genes[i] = [];
    }
    
    this.reset = function(initialPos, genes, gen){
        this.pos = initialPos;
        this.vel = createVector();
        this.ace = createVector();
        this.genes[gen] = genes;
        this.reached = false;
        this.crashed = false;
    }


    this.update = function(gen, time){
        if(!this.checkCollision()){
            this.ace = this.applyGenes(this.genes[gen][time]);
            this.vel.add(this.ace);
            this.pos.add(this.vel);
            this.ace.mult(0);
        }
    }


    this.applyGenes = function(gen){
        let vec = createVector();

        switch(gen){
            case 'u':{
                vec.set(0, -rocketPower);
                break;
            }
            case 'd':{
                vec.set(0, steeringPower);
                break;
            }
            case 'l':{
                vec.set(-steeringPower, 0);
                break;
            }
            case 'r':{
                vec.set(steeringPower, 0);
                break;
            }
        }

        return vec;
    }


    this.checkCollision = function(){
        if(this.checkObstacleCollision()){
            this.crashed = true;
            return true;
        }

        let d = dist(this.pos.x, this.pos.y, finalPos.x, finalPos.y);
        if(d < collisionTrigger){
            this.reached = true;
            return true;
        }
        
        return false;
    }


    this.checkObstacleCollision = function(){
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].gen <= actualGeneration &&
               this.pos.x > obstacles[i].verA.x && this.pos.x < obstacles[i].verB.x &&
               this.pos.y > obstacles[i].verA.y && this.pos.y < obstacles[i].verB.y){
                    return true;
            }
        }
        return false;
    }



    this.show = function(){
        push();
        rectMode(CENTER);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        noStroke();
        fill(this.setColor());
        rect(0, 0, rocketSize, rocketSize/2);
        pop();
    }


    this.setColor = function(){
        if(this.reached){
            return color(0, 255, 0, 100);
        }
        if(this.crashed){
            return color(255, 0, 0, 100);
        }

        return color(175, 100);
    }
}