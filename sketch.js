
var trex ,trex_running;
var ground 
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 ground = createSprite(200,180,600,15)
  trex =  createSprite(50, 150, 30, 40)
trex.addAnimation("running",trex_running)
trex.scale= 0.5
}


function draw(){
  background("green")
  if (keyDown("space")){
trex.velocityY=-3
  }

  trex.velocityY=trex.velocityY+0.5

  trex.collide(ground)

  drawSprites();

}
