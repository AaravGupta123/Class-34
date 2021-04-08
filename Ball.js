class Ball{
    constructor(x,y,radius,angle){
        var z= {
            density:1,frictionAir: 0.005,
        }
    this.body = Bodies.circle(x,y,radius,z);
    this.radius = radius;
    World.add(world,this.body)
    }
    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle); 
        fill("red")
        ellipse(0, 0, this.radius, this.radius); 
        pop(); 
    }
}