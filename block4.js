class Block4  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        this.visiblity=255;
        World.add(world,this.body)

    }
    display()  {
        console.log(this.body.speed)
        if(this.body.speed<4){
            rectMode(CENTER)
            fill("pink")
            rect(this.body.position.x,this.body.position.y,this.width,this.height)
          
        }
        else{
            World.remove(world, this.body);
            push();
                this.Visiblity = this.Visiblity - 5;
                tint(255,this.Visiblity);
                pop();
         
        }

    }
}