const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var object;
var ball
function setup() {
  createCanvas(800,400);
engine= Engine.create();
world= engine.world;


var options={
  isStatic: true

}

object= Bodies.rectangle(400,390,800,30,options);
World.add(world, object );


var option1={
  restitution: 1

}

ball= Bodies.circle(120,150,40,option1);
World.add(world, ball)




 
}

function draw() {
  background('yellow');  
Engine.update(engine);

  rectMode(CENTER)
  rect(object.position.x,object.position.y,800,30);

  circle(ball.position.x,ball.position.y,40)
  drawSprites();
}