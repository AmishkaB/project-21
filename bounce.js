//Program to make algorithm for collision sprites
var car, wall;
var carImage;

function preload(){
//carImage=loadImage('car.png');

}


function setup()
{
    createCanvas(1000,600)

    car=createSprite(200,100,50,50);
    wall=createSprite(800,200,60,300)
    car.shapeColor=wall.shapeColor="yellow"
    //car.addImage(carImage);
    car.velocityX=13;



}
function draw()
{
    background(0);
     //car.x=World.mouseX;
     //car.y=World.mouseY;

     console.log("Width Gap " + (car.x-wall.x )+ " "+(car.width/2+wall.width/2))
     console.log("Height Gap "+ (car.y-wall.y )+ " " +(car.height/2+wall.height/2))
     
     //collision algorithm
    if(Math.abs(car.x-wall.x)<=(car.width/2+wall.width/2))
{ 
        //car.shapeColor=wall.shapeColor="blue"
        car.velocityX=car.velocityX*-1
    }

    //else
   // {
  //      car.shapeColor=wall.shapeColor="yellow"
  //  }

   // && (Math.abs(car.y-wall.y)<=(car.height/2+wall.height/2))){ 
    drawSprites();
}