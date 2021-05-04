class Wood{
  constructor(x){
    this.body = Bodies.rectangle(x,225,200,30,{density:0.25})
    this.rope = new Chain(this.body,{x:x,y:10})
    world.add(wld,this.body)
    angleMode(RADIANS)
  }
  display(){
    var angle  = this.body.angle
    var pos = this.body.position
    this.rope.display()
    push()
    rectMode(CENTER)
    translate(pos.x,pos.y)
    rotate(angle)
    fill("brown")
    strokeWeight(1)
    rect(0,0,200,30)
    pop()
  }
}