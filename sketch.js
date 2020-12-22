var a,b;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(200, 200, 50, 50);
  a.shapeColor="black"
  b.shapeColor="black"
}

function draw() {
  background("white");  
  a.x=mouseX
  a.y=mouseY
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2&&a.y-b.y<a.width/2+b.width/2&&b.y-a.y<a.width/2+b.width/2)
  {
    a.shapeColor="blue"
    b.shapeColor="blue"
  }
  else{
    a.shapeColor="black"
  b.shapeColor="black"
  }
  drawSprites();
}