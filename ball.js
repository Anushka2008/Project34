class Ball{
    constructor(x,y,r,imageName){
        var options={
            isStatic:true
        }
        this.x=x
        this.body=Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        this.redBall=loadImage(imageName);
        
    }
    
    show(){    
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.redBall, pos.x, pos.y, 60, 50);
       
    }

    remove(){
        Matter.World.remove(world,this.body);
    }

    
    
    
}