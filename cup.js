class Cup{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
        }
        this.x=x;
        this.originalX = x;
        this.y=y;
        this.w=w
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.cup_Image=loadImage("Cup.png")
        World.add(world,this.body);
    }

    display(){
        let pos=this.body.position;
        
       
        this.body.position.x=this.body.position.x-5
        
        if(pos.x < 0)
         {
          pos.x = this.originalX;
         }
        imageMode(CENTER);
        image (this.cup_Image,pos.x,pos.y,this.w,this.h);
        
    }
}