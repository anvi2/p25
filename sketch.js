
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject
var world
var paper;




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,635);
	
	paper = new Paper(140,450,31);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  if(keyDown(UP_ARROW)){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-35})
  }

 
 //console.log(paper.body.x);

 
  groundObject.display();
  dustbinObj.display();
  paper.display(); 
  
drawSprites();
}

