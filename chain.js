class Chain{

    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:150,
        }
        this.js=Constraint.create(option)
        World.add(world,this.js)
    }
       display(){
           line(this.js.bodyA.position.x,this.js.bodyA.position.y,this.js.bodyB.position.x,this.js.bodyB.position.y)
       }
}