class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.body = Bodies.circle(x,y,10,options);
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        fill("white")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

};