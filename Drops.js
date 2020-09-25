class drops{
    constructor(x, y, r){


        
    this.body = Bodies.ellipse(x,y,r);
    this.r = radius;
    World.add(world, this.body);
    }
display(){
    var pos =this.body.position;
    circle(pos.x, pos.y, this.radius);
    ellipseMode(RADIUS);
}
}