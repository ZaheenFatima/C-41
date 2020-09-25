class Umberella{
    constructor(x, y, w, h){
      var options = {
        isStatic : true,
      }
    
    this.body = Bodies.rectangle(x,y,w,h, options);
    this.w = width;
      this.h = height;
      this.image = loadImage("Picture1.png");
      scale = 0.5;
      World.add(world, this.body);
}

display(){
var pos =this.body.position;
rectMode(CENTER); 
image(this.image,pos.x,pos.y, this.width, this.height);
imageMode(CENTER);
rect(pos.x, pos.y, this.width, this.height);
}

}