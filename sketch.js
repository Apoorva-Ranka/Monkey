
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score;
var ground;
var gamestate='play'

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  monkey = createSprite(75,250,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(50,295,1200,10);
  
  obstacleGroup= new Group();
  foodGroup= new Group();
  
}
  


function draw() {
  background("white");

  ground.velocityX=-2;
  
  if (gamestate='play'){
    if (ground.x<0){
      ground.x=ground.width/2;
    }
  
    if(keyDown("space")&& monkey.y>156){
      monkey.velocityY=-12;
    }
    
    monkey.velocityY=monkey.velocityY+0.5;
    //console.log(monkey.y)
  
    obstacles();
    foods();
  }
  
  if(monkey.isTouching(obstacleGroup)){
    gamestate='end';
    monkey.velocityY=0;
    ground.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
  }
  
  monkey.collide(ground);
  
  drawSprites();
  
}

function obstacles(){
  if(frameCount % 300 === 0) {
    obstacle = createSprite(600,255,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2
    obstacle.velocityX=-5
    obstacle.lifetime=120;
    obstacleGroup.add(obstacle);
  }
}

function foods(){
  if(frameCount%80===0){
    var rand = Math.round(random(120,200));
    banana = createSprite(600,rand,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-5;
    banana.lifetime=120;
    foodGroup.add(banana);
  }
}






