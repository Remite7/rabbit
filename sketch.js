var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;
var red, redImg;
var orange, orangeImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  redImg = loadImage("redImage.png");
  orangeImg = loadImage("orangeleaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprite = Math.round(random(1,4));
  if (frameCount % 80===0){
   switch (select_sprite){
     case 1 : spawnOrange();
              break;
     case 2 : spawnRed();
              break;
     case 3 : spawnLeaf();
              break;
     case 4 : spawnApple();
              break;
    default : break;
   } 
  
  }
  drawSprites();
}

function spawnApple(){
  apple = createSprite(200,0);
  apple.velocityY = 3 ;
  apple.addImage("apple", appleImg);
  apple.scale = 0.1;
  apple.x = Math.round (random(20,380));
  apple.lifetime = 150;
  } 

  function spawnLeaf(){
    leaf = createSprite(200,0);
    leaf.velocityY = 3 ;
    leaf.addImage("leaf", leafImg);
    leaf.scale = 0.05;
    leaf.x = Math.round (random(20,380));
    leaf.lifetime = 150;
    }

    function spawnRed(){
      red = createSprite(200,0);
      red.velocityY = 3 ;
      red.addImage("red", redImg);
      red.scale = 0.05;
      red.x = Math.round (random(20,380));
      red.lifetime = 150;
      }
      
      function spawnOrange(){
          orange = createSprite(200,0);
        orange.velocityY = 3 ;
        orange.addImage("orange", orangeImg);
        orange.scale = 0.05;
        orange.x = Math.round (random(20,380));
        orange.lifetime = 150;
        } 