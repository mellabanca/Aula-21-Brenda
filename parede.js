class Parede {
    constructor(x,y,l,a){
        var config ={
            isStatic: true
        }

        this.corpo = Bodies.rectangle(x,y,l,a,config);
        World.add(world, this.corpo);
        this.l = l;
        this.a = a;
    }

    display(){
        var pos = this.corpo.position;
        push()
        rectMode(CENTER);
        stroke("white");
        fill("grey");
        rect(pos.x, pos.y, this.l, this.a);
        pop();
    }
}