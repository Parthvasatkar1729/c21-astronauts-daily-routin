var bg_img,sleep,gym,bath,eat,move,drink,brush;
var astronaut,bg;


function preload() {
  bg_img = loadImage("images/iss.png");
  bath =loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadAnimation("images/brush.png");
  sleep = loadAnimation("images/sleep.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  gym_1 = loadAnimation("images/gym1.png","images/gym2.png");
  gym_2 = loadAnimation("images/gym11.png","images/gym12.png");
  move = loadAnimation("images/move.png","images/move1.png");
}

function setup() {
  background(bg_img)
  createCanvas(800, 400);
  
  bg=createSprite(400,200);
  bg.addImage(bg_img);
  bg.scale= 0.2;

  astronaut=createSprite(300,230,10,10);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.08;
 
}

function draw() {
  background(0);

  
  textSize(20);
  fill("black")
  text("INSTRUCTIONS: ",10,20);

  edges= createEdgeSprites();
  drawSprites();

  if (keyDown("UP_Arrow")) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.x= 600;
    astronaut.y=250;
    astronaut.velocityY= 0;
    astronaut.velocityX= 0;
  }

  if (keyDown("DOWN_Arrow")) {
    astronaut.addAnimation("gymming",gym_1);
    astronaut.changeAnimation("gymming");
    astronaut.x= 300;
    astronaut.y=250;
    astronaut.velocityY= 0;
    astronaut.velocityX= 0;
  }

  if (keyDown("LEFT_Arrow")) {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.x= 400;
    astronaut.y= 200
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }
  
  if (keyDown("RIGHT_Arrow")) {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.x= 500;
    astronaut.y=150
    astronaut.velocityY= 0;
    astronaut.velocityY= 0;
  }
  if (keyDown("m")) {
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.x= 80;
    astronaut.y=100;
    astronaut.velocityY= 2;
    astronaut.velocityY= 3;
  }

  

  textSize(15);
  text("UP Arrow = brushing",10,20);

  textSize(15);
  text("DOWN Arrow = Gymming",10,35);

  textSize(15);
  text("LEFT Arrow = Eating",10,50);

  textSize(15);
  text("RIGHT Arrow = Bathing",10,65);

  textSize(15);
  text("m key = Moving",10,80);
}