
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stoneDiameter = 2;

var Constraint = Matter.Constraint;

//var boy, boyImg;
//var stone, stoneImg;

function preload()
{
//stoneImg = loadImage("stone.png");
//boyImg = loadImage("boy.png");	
}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(750, 740, 1500, 20);
    tree = new Tree(900, 270, 50, 200);
    mango1 = new Mango(950,400,3);
    mango2 = new Mango(1025,365,3);
    mango3 = new Mango(1090,320,3);
    mango4 = new Mango(1100,395,3);
    mango5 = new Mango(1250,360,3);
    mango6 = new Mango(1180,340,3);
    mango7 = new Mango(1020,450,3);
    mango8 = new Mango(1170,435,3);
    mango9 = new Mango(1280,435,3);

    

  stone = new Stone(220,610,2);

  boy = new Boy(220,580,20,50);
 
    chain1 = new Chain(stone.body, boy.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 
  boy.display();
  stone.display();

  chain1.display();

  drawSprites();
 
}

  function mouseDragged()
  {
   Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
  }

function mouseReleased()
{
 
  Chain.fly();
  Matter.Body.applyForce(stone.body, stone.body.position.x, stone.position.y, {x: 20, y:50});
}