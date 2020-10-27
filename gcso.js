var car,wall;
var speed,weight;


function setup() {
  createCanvas(1500,400);
  car = createSprite(50, 200, 50, 50);
 
  
  wall = createSprite(900,200,60,height/2)
  wall.shapeColor = (80,80,80)
  speed = random(25,40)
  weight = random(400,1500)
}

function draw() {
  background(255,255,255);  
  
 // console.log("car" + car.x)
 // console.log("wall" + wall.x)

  car.velocityX = speed

 if(wall.x-car.x < (car.width + wall.width)/2)
{
  car.velocityX = 0
  var deformation = 0.5*weight*speed*speed/22509

  if(deformation > 180)
  {
    car.shapeColor = "red"
  }
  if(deformation < 180 && deformation>100) 
  {
    car.shapeColor = "yellow"
  }
  if(deformation < 100)
  {
    car.shapeColor = "green"
  }
} 
 

 
 //car.x = World.mouseX
  drawSprites();
}