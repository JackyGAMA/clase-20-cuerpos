
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall;
var rock;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   }
   
   var wall_options={
     isStatic:true
   }
   var rock_options={
     restitution:0.67,
     frictionAir:0.01
   }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  wall=Bodies.rectangle(200,250,200,20,wall_options);
  World.add(world,wall);

  rock=Bodies.circle(300,10,20,rock_options);
  World.add(world,rock);

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("green");
  ellipse(ball.position.x,ball.position.y,20);
  fill ("purple");
  rect(ground.position.x,ground.position.y,400,20);
  fill ("blue");
  ellipse(rock.position.x,ball.position.y,20);
  fill ("yellow");
  rect(wall.position.x,wall.position.y,200,20);
}

