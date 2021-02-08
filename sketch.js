const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground3, ball, sling;

var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box = [];



function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  ground3 = new Ground(750, 600, 1500, 10);

  ball = new Ball(200,150)

  sling = new Chain(ball.body,{x:500, y:50});

  for(var i = 599, j = 0; j<6 ; i = i-70, j++){
    box[j] = new Box(800, i, 70, 70);
    // box.push(box1);
  }



  // box2 = new Box(800, 529, 70, 70);
  // box3 = new Box(800, 599, 70, 70);
  // box4 = new Box(800, 599, 70, 70);
  // box5 = new Box(800, 599, 70, 70);
  // box6 = new Box(800, 599, 70, 70);

}

function draw() {
  background("lightblue");
  Engine.update(engine);

  ground3.display();
  sling.display();
  ball.display();

  for(var i = 0; i<box.length; i++){
    box[i].display();
  }
  // box1.display();
  // box2.display();


}


function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
