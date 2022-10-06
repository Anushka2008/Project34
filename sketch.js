const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ball2,ball3;
var obstical, obstical1,obstical2,obstical3,obstical4;
var cup,circle;
var redButton, purpleButton, blueButton;
var score=0

function preload(){
  cup_Image=loadImage("Cup.png");
  redBall=loadImage("RedBall.png");
  purpleBall=loadImage("PurpleBall.png");
  blueBall=loadImage("BlueBall.png");
}

function setup() {
  createCanvas(700,800);
  engine = Engine.create();
  world = engine.world;
  
  
  
  

  ball= new Ball(90,40,10, "RedBall.png");
  
  

  ball2=new Ball(350,40,10, "PurpleBall.png")


  ball3= new Ball(600,40,10, "BlueBall.png")
  
  
  obstical1= new Obstical(255,500,150,20)
  obstical2=new Obstical(510,320,100,20)
  obstical3= new Obstical(250,200,150,20)
  obstical4= new Obstical(300,630,70,20)

  cup=new Cup(400,750,100,100);
  

  redButton=createImg("RedButton.png")
  redButton.position(70,20)
  redButton.size(40,40)
  redButton.mouseClicked(fall1)

  purpleButton=createImg("purpleButton.png")
  purpleButton.position(320,10)
  purpleButton.size(65,65)  
  purpleButton.mouseClicked(fall2)

  blueButton=createImg("blueButton.png")
  blueButton.position(580,10)
  blueButton.size(50,50)  
  blueButton.mouseClicked(fall3)

  


}


function draw() 
{
  background("green");
  textSize(20)
  fill("white");
  text ("Score :"+score,150,30)
  Engine.update(engine);
  ball.show();
  ball2.show();
  ball3.show();
  obstical1.display();
  obstical2.display();
  cup.display();
  obstical3.display();
  obstical4.display();
  
   if(collide(ball.body,cup.body,20)==true){
    ball.remove();
    console.log("in");
    score=score+1
  }

}





function collide(body,sprite,x){
if(body!==null||sprite!==null)
      {
       var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
        console.log(d)
       if(d<=x)
          {
             return true;
          }
          else{
            return false;
          }
       }
}

 function fall1(){
    Matter.Body.setStatic(ball.body,false)
    Matter.Body.setVelocity(ball.body,{
      x: 0, y:3
  });
 }

 function fall2(){
  Matter.Body.setStatic(ball2.body,false)
  Matter.Body.setVelocity(ball2.body,{
    x: 0, y:10
});
 }

 function fall3(){
  Matter.Body.setStatic(ball3.body,false)
  Matter.Body.setVelocity(ball3.body,{
    x: 0, y:10
});
}




