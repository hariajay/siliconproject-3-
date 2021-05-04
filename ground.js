class Ground{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,12,{isStatic:true,friction:0})
        this.w = w
        world.add(wld,this.body)
    }
    display(){
        push()
        fill(100)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,12)
        pop()
    }
}