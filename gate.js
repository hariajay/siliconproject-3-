class Gate{
  constructor(x,y,h){
    this.body = Bodies.rectangle(x,y,40,h,{isStatic:true})
    this.h = h
    world.add(wld,this.body)
  }
  display(){
     var pos = this.body.position
     push()
     imageMode(CENTER)
     fill(0)
     strokeWeight(3)
     line(pos.x,0,pos.x,pos.y)
     image(stk2,pos.x,pos.y,40,this.h)
     pop()
  }
}