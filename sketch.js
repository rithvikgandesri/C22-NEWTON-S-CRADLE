const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball
var ball2
var ball3
var ball4
var ball5
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	ball = Bodies.circle(200,50,10,ball_options)
  World.add(world,ball)
  
  ball2 = Bodies.circle(200,50,10,ball_options)
  World.add(world,ball2)

  ball3 = Bodies.circle(200,50,10,ball_options)
  World.add(world,ball3)

  ball4 = Bodies.circle(200,50,10,ball_options)
  World.add(world,ball4)

  ball5 = Bodies.circle(200,50,10,ball_options)
  World.add(world,ball5)

}

function draw() {
  rectMode(CENTER);
  background("#99004d");
fill(black)
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,10,ball.position.y);
  ellipse(ball2.position.x,11,ball2.position.y);
  ellipse(ball2.position.x,12,ball2.position.y);
  ellipse(ball2.position.x,13,ball2.position.y);
  ellipse(ball2.position.x,14,ball2.position.y);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
