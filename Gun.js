class Gun{
    constructor(x,y,width,height){
      var options = {
        restitution : 0.5,
        fricitions : 1.0 ,
        density : 0.04,
        isStatic:false,
    
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      World.add(world,this.body)
    
      }
      display(){
        var position=this.body.position;
        var angle = this.body.angle;
        push ()
        translate (position.x,position.y)
        rotate (angle)
        rectMode(CENTER);
        fill ("red");
        rect(0,0,this.width,this.height);
        pop ()
        
      }
    }
    
    