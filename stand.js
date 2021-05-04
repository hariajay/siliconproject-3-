class Stand{
    constructor(x,y,w,h,img){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
        this.img = img
        this.w = w
        this.h = h
        world.add(wld,this.body)
    }
    display(){
      var pos = this.body.position
      var x1 = pos.x-this.w/2
      var x2 = pos.x+this.w/2
      var y1 = (pos.y-this.h/2)-28

      push()
      imageMode(CENTER)
      image(this.img,pos.x,pos.y,this.w,this.h)
      pop()
      if((ball.x>x1 && ball.x<x2 && ball.y>y1 && ball.y<y1+2) || (ball.y>382 && ball.y<383) || (ball.y>422 && ball.y<423)){
        n=1
    }
  }
}