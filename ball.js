class Ball{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 80,{frictionAir:0.005, density:1});
        this.r = 80;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("green");
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}