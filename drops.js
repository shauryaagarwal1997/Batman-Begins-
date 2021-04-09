class Drops{
    constructor(x,y,radius){
        var options={
            friction:0.1
        }
        this.drop=Bodies.circle(x,y,radius,options)
        
        World.add(world,this.drop);

        this.radius=radius;

    }
    display(){
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius);

        for(var i=0; i<200; i++){
            rainDrops[i]=new Drops(x,y,200);
           x+=100;
           y+=100;
        }
    }
}