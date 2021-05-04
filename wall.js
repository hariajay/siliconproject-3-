class Wall{
  constructor(x,y,c){
     this.body = Bodies.rectangle(x,y,45,70,{density:1})
     this.c = c
     world.add(wld,this.body)
     angleMode(RADIANS)
  }
  display(){
     var angle = this.body.angle
     var pos = this.body.position
     push()
     rectMode(CENTER)
     translate(pos.x,pos.y)
     rotate(angle)
     strokeWeight(1)
     fill(this.c)
     rect(0,0,45,70)
     pop()
     if(c==1){
     Matter.Body.setStatic(this.body,true)
     }
     if(c==2){
     Matter.Body.setStatic(this.body,false)
     }
  }
}