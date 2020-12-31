var ground, pipe1, pipe2, bird,score;
var grassimg , birdimg
var pipe1img,pipe2img
function preload(){
pipe1img = loadImage("assets/pipe1.png")
pipe2img = loadImage("assets/pipe2.png")
grassimg = loadImage("assets/continuous_grass.png")
birdimg = loadImage("assets/bird.png")
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(width/2,height/4,width,height)
  pipe1 = createSprite(401,350)
  pipe1.addImage(pipe1img)
  pipe1.scale=0.14
pipe2 = createSprite(401,50)
pipe2.addImage(pipe2img)
  pipe2.scale=0.14
ground.addImage(grassimg)
ground.scale = 2.5
bird = createSprite(50,200)
bird.addImage(birdimg)
bird.scale=0.15 

score = 0
}


function draw() {
  background("black")
  if(ground.x<-0){
    ground.x = 400
  }
  ground.velocityX = -3
  if(keyDown("space")){ 
    bird.velocityY = -7
}
//console.log("pipe"+pipe.x)
//console.log("bird "+bird.x)
pipe1.velocityX=-3
if(pipe1.x<-0){
    pipe1.x = 401
   pipe1.y = random(340,390)
  }
  pipe2.velocityX=-3 
if(pipe2.x<-0){
    pipe2.x = 401
     pipe2.y = random(10,60)
  }
bird.velocityY=bird.velocityY+0.25
if(bird.x === pipe1.x){
  if (bird.isTouching(pipe1) || bird.isTouching(pipe2) ) {
  score = 0
 }else{
   score = score + 1
 }
  
}



  drawSprites()
    textSize(24)
    text(score,200,30)
    
}
