var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star1, starSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() 
{
  createCanvas(800, 650);
  
  engine = Engine.create();
	world = engine.world;

	fairyVoice.play();

	fairy = createSprite(130, 500);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star1 = new star(600,30);
  star1.scale = 0.2;
  World.add(world,star1);

  starSprite = createSprite(600,30,20,20);
  starSprite.visible=false;
  starSprite.x = star1.position.x;
  starSprite.y = star1.position.y;

	
	
	
	
	Engine.run(engine);


}


function draw() 
{
  background(bgImg);

  Engine.update(engine);

  if(keyDown("down_arrow") && fairy.x>300)
  {
    starSprite.velocityY=4;
  }

  if(keyWentDown("right_arrow"))
  {
    fairy.velocityX=5;
  }else if(keyWentUp("right_arrow"))
   {
	 fairy.velocityX=0;  
   }

   if(keyWentDown("left_arrow"))
   {
	 fairy.velocityX=-5;  
   }else if(keyWentUp("left_arrow"))
    {
	  fairy.velocityX=0;	
	} 

  if(fairy.x>800)
  {
    fairy.x=790;
  }

  if(fairy.x<0)
  {
	fairy.x=10;  
  }
  

  star1.display();

  drawSprites();

}


  
