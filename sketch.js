var fixedRect,movingRect;
var rect1,rect2;
var rect3,rect4;

function setup() {
  createCanvas(800,800);
 
 movingRect = createSprite(400, 200, 50, 50);
movingRect.shapeColor="green";

fixedRect=createSprite(400,400,50,50);
fixedRect.shapeColor="green";

rect1=createSprite(400,400,50,50);
rect1.velocityX=3

rect2=createSprite(600,400,50,50);
rect2.velocityX=-3

rect3=createSprite(700,400,50,50);
rect3.velocityY=3

rect4=createSprite(700,700,50,50);
rect4.velocityY=-3


}

function draw() {
  background(0);  
  
  movingRect.x=mouseX
  movingRect.y=mouseY

  if(fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2 && movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 && 
    fixedRect.y-movingRect.y <= fixedRect.height/2+movingRect.height/2 && movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2
    ){

    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

if(rect1.x-rect2.x <= rect1.width/2+rect2.width/2 && rect2.x-rect1.x <= rect1.width/2+rect2.width/2 ){
rect1.velocityX= -rect1.velocityX
rect2.velocityX= -rect2.velocityX
}

if(rect3.y-rect4.y <= rect3.height/2+rect4.height/2 && rect4.y-rect3.y <= rect3.height/2+rect4.height/2 ){
  rect3.velocityY= -rect3.velocityY
  rect4.velocityY= -rect4.velocityY
  }

  drawSprites();

}