const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score=0


function setup() {
  createCanvas(1200,600);
  
  

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,580,1200,20);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1= new Block(480,275,30,40);
  block2 = new Block(450,275,30,40);
  block3 = new Block(420,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(360,275,30,40);
  block6 = new Block(330,275,30,40);
  block7 = new Block(300,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  b1 = new Block(900,300,30,40);
  b2 = new Block(900,335,30,40);
  b3 = new Block(870,335,30,40);
  b4 = new Block(930,335,30,40);
  b5 = new Block(900,375,30,40);
  b6 = new Block(870,375,30,40);
  b7 = new Block(840,375,30,40);
  b8 = new Block(930,375,30,40);
  b9 = new Block(960,375,30,40);
  


}

function draw() {
  background("lightgrey")
  textSize(20)

  
  text("score:"+score,width-100,100);
console.log(score)

  text("Press Space For Another Try",450,100)
  ground.display();
  ground2.display();
  ground3.display();
fill("purple")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("yellow")
  block13.display();
  block14.display();
  block15.display();
  fill(171,247,247)
  block16.display(); 

  b1.display();
  fill("pink")
  b2.display();
  b3.display();
  b4.display();
fill("purple")
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  
  block1.Score();
 block2.Score();
 block3.Score();
 block4.Score();
 block5.Score();
 block6.Score();
 block7.Score();
 block8.Score();
 block9.Score();
 block10.Score();
 block11.Score();
 block12.Score();
 block13.Score();
 block14.Score();
 block15.Score();
 block16.Score();

 b1.Score();
 b2.Score();
 b3.Score();
 b4.Score();
 b5.Score();
 b6.Score();
 b7.Score();
 b8.Score();
 b9.Score();

 
 

  polygon.display();

  launcher.display();

  drawSprites();

}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
 
    launcher.attach(polygon.body);

  }

}

