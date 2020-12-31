var fixedRect, movingRect;
 
var box1, box2;
 
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
 
  box1 = createSprite(100,50,50,50);
  box1.shapeColor = "green";
  box1.debug = false;
  
  box2 = createSprite(600,650,100,80);
  box2.shapeColor = "green";
  box2.debug =false;
  
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
 


 
 
}
 
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  
  drawSprites();
 
  //calling the func
  if( collisionMaster(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
  else if(collisionMaster(movingRect,box1)) {
    movingRect.shapeColor = "blue";
    box1.shapeColor = "blue";
  }
  else if(collisionMaster(movingRect,box2)){
      movingRect.shapeColor = "crimson";
      box2.shapeColor = "crimson";

  }
}

//defining the func //diff bet x pos less than the sum of their half of thier width
function collisionMaster(p1,p2) {
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
     return true; //boolean
}
else {
  p1.shapeColor = "green";
  p2.shapeColor = "green";
}
 
}


 

