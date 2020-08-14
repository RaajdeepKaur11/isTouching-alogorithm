
var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,200,50,50);
  movingRect= createSprite(400,200,100,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;
  
}



function draw() {
  background(255,255,255);  
  drawSprites();
  movingRect.y = mouseY;
  movingRect.x =mouseX;

  if(fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 
    && movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 )
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

}