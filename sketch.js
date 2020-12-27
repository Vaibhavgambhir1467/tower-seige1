const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var poly, ground, stand1, stand2, polygon, engine, world;

function preload(){

  polygon = loadImage("polygon.png");

}

function setup() {

  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(490,350,250,10);
  stand2 = new Stand(800,200,200,10);


  block1 = new Block(400,275,30,40);
  block2 = new Block(430,275,30,40);
  block3 = new Block(460,275,30,40);
  block4 = new Block(490,275,30,40);
  block5 = new Block(520,275,30,40);
  block6 = new Block(550,275,30,40);
  block7 = new Block(580,275,30,40);
  block8 = new Block (430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);
  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);
  block16 = new Block(490,155,30,40);

  

  poly = Bodies.circle(50,200,20 ,{density:2});
  World.add(world, poly);

  slingshot = new Slingshot(this.poly, {x:150, y:400})


}

function draw() {
  background(0);  
  textSize(20);
  fill("red");
  text("Try to fall all in just one hit !! and press space to get a chance",100,30);

  ground.display();

  stand1.display();
  stand2.display();

  slingshot.display();

  strokeWeight(0);
  stroke(0);
  fill("skyblue");
  block1.display();
  fill("pink");
  block2.display();
  fill("skyblue");
  block3.display();
  fill("pink");
  block4.display();
  fill("skyblue");
  block5.display();
  fill("pink");
  block6.display();
  fill("skyblue");
  block7.display();
  // stage 2
  fill("yellow");
  block8.display();
  fill("white");
  block9.display();
  fill("yellow");
  block10.display();
  fill("white");
  block11.display();
  fill("yellow");
  block12.display();
  // stage 3
  fill("blue");
  block13.display();
  fill("red");
  block14.display();
  fill("blue");
  block15.display();
  // stage 4
  fill("magenta");
  block16.display();

   // stand2 
  // stage 1
  fill("cyan");
  blocks1.display();
  fill("gold");
  blocks2.display();
  fill("cyan")
  blocks3.display();
  fill("gold")
  blocks4.display();
  fill("cyan")
  blocks5.display();
  // stage2
  fill("peach");
  blocks6.display();
  fill("coral")
  blocks7.display();
  fill("peach")
  blocks8.display();

  fill("pink")
  blocks9.display();


   imageMode(CENTER)
  image(polygon ,poly.position.x, poly.position.y,40,40);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(poly, {x:150, y:400});
  slingshot.attach(poly);
}









