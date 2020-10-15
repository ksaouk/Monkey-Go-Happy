var monkey, monkeyImage, bananaGroup, bananaImage, stoneImage, stoneGroup, ground, groundImage, score;

function preload(){
  groundImage = loadImage("jungle.jpg");
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png",         "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png",   "Monkey_07.png", "Monkey_08.png", "Monkey_09.png",                   "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  
  ground = createSprite(200, 385, 400, 20);
  ground.visible = false;
  ground.x = ground.width /2;
  
  monkey = createSprite(30, 380, 10, 10);
  monkey.addAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png", monkeyImage);
  monkey.scale = 0.1;
  
  bananaGroup = new Group();
  stoneGroup = new Group();
  
  score = 0;
}

function draw() {
  background(groundImage);
  text("Score: "+ score, 30,100);
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  if (bananaGroup.isTouching(monkey))  {
    score = score+2;
    bananaGroup.destroyEach();
  }
  
  if (stoneGroup.isTouching(monkey))  {
    score = score-1;
    stoneGroup.destroyEach();
  }
  
  if(keyDown("space")) {
      monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  drawSprites();
  food();
  obstacles();
}

function food()  {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 134;
    bananaGroup.add(banana);
  }


}

function obstacles()  {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,360,20,20);
    obstacle.addImage(stoneImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifetime = 134;
    stoneGroup.add(obstacle);
  }


}