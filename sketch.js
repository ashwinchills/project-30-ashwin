const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon,world
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  }

function draw() {
  background(255,255,255);  

  ground= new Ground(600,height,400,20);
  //level one
block1= new Block(200,275,30,40);
block2= new Block(230,275,30,40);
block3= new Block(260,275,30,40);
block4= new Block(290,275,30,40);
block5= new Block(320,275,30,40);
block6= new Block(350,275,30,40);
block7= new Block(380,275,30,40);
//level two
block8= new Block(330,235,30,40);
block9= new Block(360,235,30,40);
block10=new Block(390,235,30,40);
block11= new Block(420,235,30,40);
block12= new Block(450,235,30,40);
//level three
block13= new Block(360,195,30,40);
block14= new Block(390,195,30,40);
block15= new Block(420,195,30,40);
//top
block16= new Block(390,155,30,40);
//polygon holder with slings
polygon=BODIES.circle(50,200,20);
World.add(world,polygon);

slingshot= new SlingShot(this.polygon,{x:100,y:200});

imageMode(CENTER);

image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
polygon.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body);
  }
}