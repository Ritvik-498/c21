function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 80, 30);
movingRect.shapeColor="green";
fixedRect=createSprite(600,400,50,80);
fixedRect.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,fixedRect)){
  fixedRect.shapeColor="RED";
  movingRect.shapeColor="RED";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }


  
  drawSprites();
}

