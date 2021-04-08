class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position
            var pointB=this.pointB
            push();
            stroke("yellow")
            strokeWeight(5)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop();
        }
    }
}