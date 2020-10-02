var bob,rope,roof

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof=new Roof(400,350,250,25);
  bob1=new Bob(300,600,30);
  bob2=new Bob(350,600,30);
  bob3=new Bob(400,600,30);
  bob4=new Bob(450,600,30);
  bob5=new Bob(500,600,30); 
  rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
  drawSprites();
 
}



