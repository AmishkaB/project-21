//Program to make algorithm for collision sprites
var movingRect, fixedRect;

var speed,weight

function setup()
{
    createCanvas(1000,600)
    speed=random(55,90)
    weight=random(400,1500)


    movingRect=createSprite(200,100,50,50);
    fixedRect=createSprite(800,200,60,300)
    movingRect.shapeColor=fixedRect.shapeColor="yellow"
    
    movingRect.velocityX=speed;


}
function draw()
{
    background(0);
     //movingRect.x=World.mouseX;
     //movingRect.y=World.mouseY;

     console.log("Width Gap " + (movingRect.x-fixedRect.x )+ " "+(movingRect.width/2+fixedRect.width/2))
     console.log("Height Gap "+ (movingRect.y-fixedRect.y )+ " " +(movingRect.height/2+fixedRect.height/2))
     
     
     //collision algorithm
    if(Math.abs(movingRect.x-fixedRect.x)<=(movingRect.width/2+fixedRect.width/2) && (Math.abs(movingRect.y-fixedRect.y)<=(movingRect.height/2+fixedRect.height/2))){
       movingRect.velocityX=0;
       var damage=0.5*weight*speed*speed/22509
       if(damage>180)
        movingRect.shapeColor=fixedRect.shapeColor="blue"
        if(damage<180 && damage>100)
        movingRect.shapeColor=fixedRect.shapeColor="pink"
     if(damage<100)

        movingRect.shapeColor=fixedRect.shapeColor="yellow"
    }

    
    drawSprites();
}