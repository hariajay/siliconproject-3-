const Engine = Matter.Engine
const world = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var gameState = 2
var bg1,bg2,bg3
var eng,wld
var red,b1,volley,b2,foot,b3
var carbon,arrow,light,acid,rand
var star,rec,start,button,green,award
var collide,water,sharp,weapon,lava,witch,last
var j,k1,h1,h2,h3,firegroup,v1,v2,thunder
var gs=[],fs=[],cs=[],ws=[],ss=[],ks=[]
var collect,season=1,rand1,rand2,rand3,sharpgroup
var dis=0,coinum=0,mins=0,gems=0,e1=10650,e2=10900,t1=1,t2=1,s=1,l=1,p=1,j=1,n=1,f=1,g=1,k=1,o=1,b=1,a=1,c=2,m=1,d=1,q=1,z=1,x=1,y=1,w=1,r=22200,u=1
var si=1,jk=1,v=1,cv=1
var img,wi=55,hi=55,kg=1
function preload(){
  bg1 = loadImage("brown.jpg")
  bg2 = loadImage("hills.png")
  bg3 = loadImage("mount.png")
  bg4 = loadImage("shadow.png")
  b1 = loadImage("red.png")
  b2 = loadImage("volley.png")
  b3 = loadImage("football.png")
  thunder = loadImage("thunder.png")
  energy = loadImage("power.png")
  award = loadImage("award.png")
  over = loadImage("gameover.png")
  whimg = loadImage("witch.png")
  arrow = loadImage("arrow.png")
  st1 = loadImage("stand1.png")
  people = loadImage("people.png")
  st2 = loadImage("stand2.png")
  st3 = loadImage("stand3.png")
  st4 = loadImage("stand4.png")
  change = loadImage("flash.png")
  man = loadImage("man.png")
  st5 = loadImage("stand5.png")
  st6 = loadImage("stand6.png")
  lava = loadImage("lava.png")
  wimg = loadImage("weapon.png")
  water1 = loadImage("water1.png")
  water2 = loadImage("water2.png")
  flash = loadImage("thunder.png")
  acid = loadImage("acid.jpg")
  light = loadImage("light.png")
  lr1 = loadAnimation("lr1.png")
  lr2 = loadAnimation("lr2.png")
  carbon = loadImage("diamond.png")
  timer = loadImage("clock.png")
  sh1 = loadImage("blade1.png")
  sh2 = loadImage("blade2.png")
  restart = loadImage("restart.png")
  ins = loadImage("ins.png")
  intro = loadImage("intro.png")
  story = loadImage("story.png")
  tools = loadImage("tools.png")
  stick = loadImage("stk1.png")
  stk2 = loadImage("stk2.png")
  star = loadImage("c1.png")
  frame = loadImage("frame.png")
  rec = loadImage("rect.png")
  laser = loadImage("laser.png")
  box = loadImage("box.png")
  gemsound = loadSound("gems.mp3")
  blast = loadAnimation("e1.png","e2.png","e3.png","e4.png","e5.png","e6.png")
}
function setup(){
    createCanvas(510,460)
  
    eng = Engine.create()
    wld = eng.world
    candy = Bodies.circle(20,380,27,{density:1,friction:0,restitution:0.3,frictionAir:0.04})
    world.add(wld,candy)
    ball = createSprite(20,380,56,56)
    ball.visible = false
    collide = Bodies.rectangle(-30,170,10,460,{isStatic:true})
    world.add(wld,collide)
    iron1 = Bodies.circle(3713,0,40)
    world.add(wld,iron1)
    iron2 = Bodies.circle(16400,0,40)
    world.add(wld,iron2)
    lb1 = Bodies.circle(7450,100,25,{isStatic:true})
    world.add(wld,lb1)
    lb2 = Bodies.circle(7450,380,25,{isStatic:true})
    world.add(wld,lb2)
    lb3 = Bodies.circle(17150,100,25,{isStatic:true})
    world.add(wld,lb3)
    lb4 = Bodies.circle(17150,380,25,{isStatic:true})
    world.add(wld,lb4)
    v1 = Bodies.rectangle(14500,350,15,110,{isStatic:true})
    world.add(wld,v1)
    last = Bodies.rectangle(21575,230,10,460,{isStatic:true})
    world.add(wld,last)
    knife(300,560)
    knife(1115,1600)
    knife(2235,2900)
    knife(5160,5660)
    knife(8315,8755)
    coins(155,305,380)
    coins(725,875,250)
    coins(825,975,380)
    coins(1875,2025,250)
    coins(1775,1925,380)
    coins(1715,1865,150)
    coins(3125,3275,250)
    coins(3225,3375,380)
    coins(3860,4010,270)
    coins(4575,4725,150)
    coins(4775,4925,250)
    coins(4775,4925,380)
    coins(5700,5850,380)
    coins(6450,6600,380)
    coins(6800,7100,380)
    coins(7100,7250,250)
    coins(7800,7950,250)
    coins(8000,8150,380)
    coins(8950,9100,250)
    coins(8940,9090,150)
    coins(8950,9100,380)
    coins(10250,10400,380)
    coins(11240,11390,380)
    coins(12720,12845,250)
    coins(12800,13075,380)
    coins(11840,11990,380)
    coins(16200,16350,250)
    coins(16220,16370,380)
    coins(18800,18950,380)
    coins(19300,19450,150)
    coins(19500,19650,250)
    dia(1500,200)
    dia(3000,350)
    dia(4300,250)
    dia(6150,300)
    dia(6750,300)
    dia(9610,370)
    dia(11050,300)
    dia(12320,425)
    wall(8150,"brown")
    wall(12700,"orange")

    firegroup = new Group()
    g1 = new Ground(110,415,350)
    g2 = new Ground(832,415,530)
    g3 = new Ground(1912,415,625)
    g4 = new Ground(4070,415,2365)
    g5 = new Ground(5788,415,270)
    g6 = new Ground(6700,415,2100)
    g7 = new Ground(8005,415,600)
    g8 = new Ground(10385,415,3282)
    g9 = new Ground(12218,455,450)
    g10 = new Ground(12791,415,630)
    g11 = new Ground(14360,415,680)
    g12 = new Ground(15163,415,925)
    g13 = new Ground(16950,415,1740)
    g14 = new Ground(19200,415,1400)
    g15 = new Ground(21500,415,2000)

    std1 = new Stand(800,310,260,44,st1)
    std2 = new Stand(1350,310,18,44,st3)
    std3 = new Stand(1900,310,260,44,st1)
    std4 = new Stand(1800,190,260,44,st1)
    std5 = new Stand(3200,310,260,44,st1)
    std6 = new Stand(4650,190,260,44,st1)
    std7 = new Stand(4850,310,260,44,st1)
    std8 = new Stand(5400,310,18,44,st3)
    std9 = new Stand(2375,310,180,10,stick)
    std10 = new Stand(2560,260,180,10,stick)
    std11 = new Stand(2740,210,180,10,stick)
    std12 = new Stand(7900,310,260,44,st2)
    std13 = new Stand(8525,305,18,44,st4)
    std14 = new Stand(9000,190,260,44,st2)
    std15 = new Stand(9035,310,260,44,st2)
    std16 = new Stand(12870,310,260,44,st2)
    std17 = new Stand(7125,300,260,44,st1)
    std18 = new Stand(14350,300,300,10,stick)
    std19 = new Stand(15810,300,15,40,st6)
    std20 = new Stand(16300,300,260,44,st5)
    std21 = new Stand(17400,190,260,44,st5)
    std22 = new Stand(17600,305,260,44,st5)
    std23 = new Stand(19400,200,260,44,st5)
    std24 = new Stand(19560,305,260,44,st5)
    ss.push(std1,std2,std3,std4,std5,std6,std7,std8,std9,std10,std11,std12,std13,std14,std15,std16,std17,std18,std19,std20,std21,std22,std23,std24)

    gate1 = new Gate(10100,275,280)
    gate2 = new Gate(10180,275,280)
    gate3 = new Gate(11110,255,320)
    gate4 = new Gate(15220,275,280)
    gate5 = new Gate(15300,275,280)
    gate6 = new Gate(15380,275,280)
    re = createSprite(200,-295,200,100)
    light1 = createSprite(3600,200,55,420)
    light2 = createSprite(10480,200,55,420)
    lazer1 = createSprite(7450,240,15,280)
    lazer2 = createSprite(17150,240,15,280)
    k1 = createSprite(6650,505,20,200)
    k2 = createSprite(6700,505,20,200)
    k3 = createSprite(6750,505,20,200)
    k4 = createSprite(19050,505,20,190)
    k5 = createSprite(19100,400,20,190)
    k6 = createSprite(19150,505,20,190)
    h1 = createSprite(2465,300,150,10)
    h2 = createSprite(2620,250,150,10)
    h3 = createSprite(2775,200,150,10)
    h1.visible = false
    h2.visible = false
    h3.visible = false
    light2.visible = false
    light1.visible = false
    lazer1.visible = false
    lazer2.visible = false
    k1.shapeColor = "brown"
    k2.shapeColor = "brown"
    k3.shapeColor = "brown"
    k4.shapeColor = "brown"
    k5.shapeColor = "brown"
    k6.shapeColor = "brown"
    bl1 = new Sharp(k1.x,45,sh1)
    bl2 = new Sharp(k2.x,45,sh1)
    bl3 = new Sharp(k3.x,45,sh1)
    bl4 = new Sharp(k4.x,45,sh1)
    bl5 = new Sharp(k5.x,45,sh1)
    bl6 = new Sharp(k6.x,45,sh1)
    chain1 = new Chain(iron1,{x:4050,y:15})
    chain2 = new Chain(iron2,{x:16745,y:15})
   
    z1 = createSprite(3910,275,10,60)
    z2 = createSprite(0,0,60,60)
    z3 = createSprite(4190,275,10,60)
    z1.visible = false
    z2.visible = false
    z3.visible = false
    r1 = new Lever(9800,"lt1","lt2")
    r2 = new Lever(10000,"lt3","lt4")
    r3 = new Lever(14870,"lt5","lt6")
    r4 = new Lever(15000,"lt7","lt8")
    r5 = new Lever(15150,"lt9","lt10")
    he1 = createSprite(10760,400,40,10)
    he2 = createSprite(11010,400,40,10)
    la1 = createSprite(11480,400,300,10)
    la2 = createSprite(6050,400,300,10)
    la3 = createSprite(20950,400,300,10)
    la1.visible = false
    la2.visible = false
    la3.visible = false
    he1.visible = false
    he2.visible = false
    obs1 = createSprite(12210,438,500,62)
    obs1.visible = false
    obs2 = createSprite(20000,438,500,62)
    obs2.visible = false
    power1 = createSprite(7550,285,50,50)
    power1.addImage("po",energy)
    power1.scale = 0.07
    power2 = createSprite(14550,285,50,50)
    power2.addImage("po",energy)
    power2.scale = 0.07
    wd1 = new Wood(13195)
    wd2 = new Wood(13435)
    wd3 = new Wood(13640)
    wd4 = new Wood(13875)
    wd5 = new Wood(17950)
    wd6 = new Wood(18165)
    wd7 = new Wood(18380)
    wd8 = new Wood(18595)
    s1 = new Sharp(14270,190,sh2)
    s2 = new Sharp(14367,190,sh2)
    s3 = new Sharp(14465,190,sh2)
    q1 = createSprite(20475,420,50,250)
    q2 = createSprite(20475,40,50,250)
    q1.shapeColor = "brown"
    q2.shapeColor = "brown"
    s4 = new Sharp(20460,170,sh2)
    s5 = new Sharp(20490,170,sh2)
    s6 = new Sharp(20460,285,sh1)
    s7 = new Sharp(20490,285,sh1)
    witch = createSprite(21700,110,125,125)
    witch.addImage("witch",whimg)
    witch.scale = 0.22
    img = b1
    p1 = createSprite(300,300,30,30)
    p1.addImage("light",thunder)
    p1.scale = 0.03
}
function draw(){
  background(0)
   Engine.update(eng)

   imageMode(CENTER)
   image(bg2,3750,180,7800,610)
   image(bg3,11180,217,7100,550)
   image(bg4,18600,207,7800,550)
   image(rec,camera.position.x-177,30,140,45)
   image(rec,camera.position.x+70,30,100,42)
   image(rec,camera.position.x+185,30,115,40)
   image(timer,camera.position.x+42,30,28,28)
   image(carbon,camera.position.x-157,30,28,24)
   image(arrow,camera.position.x+153,30,30,10)
   image(water1,425,440,275,67)
   image(water1,1350,440,500,67)
   image(water1,2567,440,690,67)
   image(water1,5400,437,500,67)
   image(lava,la2.x,438,290,60)
   image(lava,13570,438,900,62)
   rectMode(CENTER)
   fill("brown")
   rect(v1.position.x,v1.position.y,15,110)
   if(jk==1){
   rect(21575,230,10,460)
   }
   g+=1
   if(g<60){
     k=1
   }
   if(g>60){
     k=2
   }
   if(g>95){
     g=1
   }
   if(k==1){
   image(light,3600,200,75,420)
   image(light,10480,200,75,420)
   image(laser,7445,240,20,280)
   image(laser,17145,240,20,280)
   }
   image(star,camera.position.x-223,30,28,28)
   image(wimg,iron1.position.x,iron1.position.y,70,70)
   image(wimg,iron2.position.x,iron2.position.y,70,70)
   image(water1,8525,438,440,65)
   image(lava,15850,433,450,60)
   image(lava,18290,433,930,60)
   image(lava,9500,438,350,62)
   image(lava,la1.x,438,300,62)
   image(lava,la3.x,438,300,62)

   ball.x = candy.position.x
   ball.y = candy.position.y
   z2.x = iron1.position.x
   z2.y = iron1.position.y
   if(z2.isTouching(z1)){
     m=2
   }
   if(m==2){
    Matter.Body.applyForce(iron1,iron1.position,{x:0.0042,y:0})
    Matter.Body.applyForce(iron2,iron2.position,{x:0.0042,y:0})
   }
   if(z2.isTouching(z3)){
     m=3
  }
  if(m==3){
   Matter.Body.applyForce(iron1,iron1.position,{x:-0.0042,y:0})
   Matter.Body.applyForce(iron2,iron2.position,{x:-0.0042,y:0})
  }
   if(la1.x<11500){
    la1.velocityX+=2.5
   }
   if(la1.x>11625){
    la1.velocityX-=2.5
   }
   if(la2.x<6070){
    la2.velocityX+=2.5
   }
   if(la2.x>6200){
    la2.velocityX-=2.5
   }
   if(la3.x<20970){
    la3.velocityX+=2.5
   }
   if(la3.x>21070){
    la3.velocityX-=2.5
   }
   if(s1.sprite.y<220){
    s1.sprite.velocityY+=1.5
    s2.sprite.velocityY+=1.5
    s3.sprite.velocityY+=1.5
   }
   if(s1.sprite.y>265){
    s1.sprite.velocityY-=1.5
    s2.sprite.velocityY-=1.5
    s3.sprite.velocityY-=1.5
  }
  s4.sprite.position.y = q2.y+130
  s5.sprite.position.y = q2.y+130
  s6.sprite.position.y = q2.y+240
  s7.sprite.position.y = q2.y+240
  if(q2.y<41){
    q1.velocityY+=1.2
    q2.velocityY+=1.2
  }
  if(q2.y>100){
    q1.velocityY-=1.2
    q2.velocityY-=1.2
  }
  if(witch.y<120){
    witch.velocityY+=7
  }
  if(witch.y>350){
    witch.velocityY-=7
  }
  wd1.display()
  wd2.display()
  wd3.display()
  wd4.display()
  wd5.display()
  wd6.display()
  wd7.display()
  wd8.display()
  g12.display()

   textSize(22)
   fill(0)
   strokeWeight(0.2)
   text(gems,camera.position.x-138,38)
   text(coinum,camera.position.x-203,38)
   text(World.seconds+" s",camera.position.x+60,37)
   text(dis+" m",camera.position.x+172,38)

   b+=0.1
   if(o==1){
     image(frame,145,160,415,100)
     fill("brown")
     stroke(0)
     strokeWeight(0.5)
     text("Complete within countdown",5,185)
     text("Season1",90,150)
   }
   if(ball.x>7650){
    season = 2
    cv+=0.1
   }
   if(season==2 && v==1){
    image(frame,camera.position.x+15,160,415,100)
    fill("brown")
    stroke(0)
    strokeWeight(0.5)
    text("Complete within countdown",camera.position.x-125,185)
    text("Season2",camera.position.x-40,150)
    }
   if(b>8){
     o=2
     b=1
   }
   if(cv>8){
     v=2
     cv=1
   }
   if(x==1){
   camera.position.x = candy.position.x+130
   camera.position.y = 230
   }
   if(ball.x>21380){
     x=2
   }
   if(ball.x<21380){
    x=1
   }
   dis= Math.round(candy.position.x/50)
   bl1.sprite.position.y=k1.y-115
   bl2.sprite.position.y=k2.y-115
   bl3.sprite.position.y=k3.y-115
   bl4.sprite.position.y=k4.y-115
   bl5.sprite.position.y=k5.y-115
   bl6.sprite.position.y=k6.y-115
   h1.y = std9.body.position.y
   h2.y = std10.body.position.y
   h3.y = std11.body.position.y

   if(k1.y<415){
     k1.velocityY+=4
     k2.velocityY+=4
     k3.velocityY+=4
   }
   if(k1.y>500){
    k1.velocityY=-4
    k2.velocityY=-4
    k3.velocityY=-4
   }
   if(k4.y<425){
    k4.velocityY+=3.5
    k6.velocityY+=3.5
   }
   if(k4.y>500){
    k4.velocityY-=3.5
    k6.velocityY-=3.5
   }
   if(k5.y<510){
     k5.velocityY+=3.5
   }
   if(k5.y>430){
    k5.velocityY-=3.5
   }
   fill(50)
   strokeWeight(0)
  if(s==1){
   ellipse(he1.x,410,100,20)
   ellipse(he2.x,410,100,20)
   }
   ellipse(7450,100,50,50)
   ellipse(7450,380,50,50)
   ellipse(17150,100,50,50)
   ellipse(17150,380,50,50)

   chain1.display()
   chain2.display()
   for(var i=0; i<ws.length; i++){
     ws[i].display()
   }
   for(var i=0; i<ss.length; i++){
     ss[i].display()
   }
   gate1.display()
   gate2.display()
   gate3.display()
   gate4.display()
   gate5.display()
   gate6.display()

  if(keyDown("space") && n==1){
    Matter.Body.applyForce(candy,candy.position,{x:0,y:-22})
    j+=0.5
  }
   if(keyDown("left")){
    Matter.Body.applyForce(candy,candy.position,{x:-2.2,y:0})
  }
   if(keyDown("right")){
    Matter.Body.applyForce(candy,candy.position,{x:2.2,y:0})
  }
  if(j>3){
    n=2
    j=1
  }
  if(ball.isTouching(h1)){
    Matter.Body.setStatic(std9.body,false)
  }
  if(ball.isTouching(h2)){
    Matter.Body.setStatic(std10.body,false)
  }
  if(ball.isTouching(h3)){
    Matter.Body.setStatic(std11.body,false)
  }
  for(var i=0; i<cs.length; i++){
    cs[i].touching1()
  }
  for(var i=0; i<gs.length; i++){
    gs[i].touching2()
  }
  if(mousePressedOver(ball)){

  }
  if(ball.isTouching(r2.ler)){
    r2.ler.changeAnimation("lt4",lr1)
    p=2
  }
  if(ball.isTouching(r1.ler) && p==2){
    p=3
  }
  if(p==3){
   r1.changeAnimation("lt2",lr1)
   Matter.Body.setStatic(gate1.body,false)
   Matter.Body.setStatic(gate2.body,false)
   gate1.body.position.y-=0.6
   gate2.body.position.y-=0.6
  }
  if(gate1.body.position.y<140){
    p=1
    Matter.Body.setStatic(gate1.body,true)
    Matter.Body.setStatic(gate2.body,true)
  }
  if(he1.x < 10770){
    he1.velocityX+= 3.5
    he2.velocityX-= 3.5
   }
   if(he1.x > 11000){
     he1.velocityX-= 3.5
     he2.velocityX+= 3.5
   }
   if(t1 > 5){
    t2 = 2
  }
   if(ball.x>10570){
     t1+=0.1
   }
   if(t2 == 1){
     fill(150)
     textSize(20)
     text("hell",he1.x-13,415)
     text("open",he2.x-13,415)
   }
  if(ball.isTouching(he2) && s==1){
    s=2
  }
  if(s==2){
    Matter.Body.setStatic(gate3.body,false)
    gate3.body.position.y-=0.6
  }
  if(gate3.body.position.y<140){
    s=3
    Matter.Body.setStatic(gate3.body,true)
  }
  if(ball.isTouching(r4.ler) && q==1){
    r4.ler.changeAnimation("lt8",lr2)
    q=2
  }
  if(ball.isTouching(r3.ler) && q==2){
    r3.ler.changeAnimation("lt6",lr2)
    q=3
  }
  if(ball.isTouching(r5.ler) && q==3){
    r5.ler.changeAnimation("lt10",lr2)
    Matter.Body.setStatic(gate4.body,false)
    Matter.Body.setStatic(gate5.body,false)
    Matter.Body.setStatic(gate6.body,false)
    gate4.body.position.y-=0.6
    gate5.body.position.y-=0.6
    gate6.body.position.y-=0.6
  }
  if(gate4.body.position.y<140){
    q=1
    Matter.Body.setStatic(gate4.body,true)
    Matter.Body.setStatic(gate5.body,true)
    Matter.Body.setStatic(gate6.body,true)
  }
  if(frameCount % 15 == 0 && f==1){
    rand1 = Math.round(random(1,3))
  }
  if(frameCount % 15 == 0 && z==1){
    rand3 = Math.round(random(1,3))
  }
  textSize(24)
  strokeWeight(0.2)
  if(rand1 == 1){
    image(water1,12250,438,450,60)
    text("water",12250,438)
  }
  if(rand1 == 2){
   image(lava,12250,438,450,60)
   text("lava",12250,438)
  }
  if(rand1 == 3){
   image(acid,12250,438,450,60)
   text("acid",12250,438)
  }
  if(rand3 == 1){
   image(water1,20000,438,450,60)
   text("water",20000,438)
  }
  if(rand3 == 2){
    image(lava,20000,438,450,60)
    text("lava",20000,438)
  }
  if(rand3 == 3){
    image(acid,20000,438,450,60)
    text("acid",20000,438)
  }
  if(ball.isTouching(obs1) && rand1==1){
    f=2
  }
  if(ball.isTouching(obs2) && rand3==1){
    z=2
  }
  if(f==2){
    image(water1,12250,438,450,60)
    text("water",12250,438)
  }
  if(z==2){
    image(water1,20000,438,450,60)
    text("water",20000,438)
  }
  if(u==1 && ball.x>21400){
  flame()
  }
  drawSprites()
  if(ball.x>21400){
    y+=1
    if(w==1){
  animation(blast,21700,witch.y,100,100)
    }
  witch.destroy()
  u=2
  }
  if(kg==1){
  image(b1,candy.position.x,candy.position.y,55,55)
  }
  if(y>60){
    si=2
    image(people,r,313,400,175)
    r-=9
    ball.x=21530
  }
  if(y>150){
    image(box,ball.x+5,230,200,70)
    image(box,ball.x-160,230,120,70)
    image(box,ball.x+160,230,100,70)
    textSize(17)
    text("thank you for changing",ball.x-80,220)
    text("me into man",ball.x-10,240)
    text("thanks for",ball.x-200,220)
    text("saving us",ball.x-200,240)
    text("you are a",ball.x+120,220)
    text("hero",ball.x+135,240)
  }
  if(y>25){
    w=2
    Matter.Body.setStatic(candy,true)
    image(man,ball.x,330,120,150)
    if(si==1){
    image(change,ball.x,ball.y-40,400,450)
    }
    jk=2
    kg=2
  }
  if(r<21500){
    r=21500
  }
  if(ball.y>400){
    end()
  }
  if(mousePressedOver(re)){
    replay()
  }
}
function dia(x,y){
  gs.push(new Gem(x,y))
}
function coins(x1,x2,y){
  for(var a=x1; a<x2; a+=50){
    cs.push(new Coin(a,y))
   }
}
function flame(){
 if(frameCount % 60 == 0 && season==2){
   fs.push(new Fires(camera.position.x+400,random(150,390)))
 }
}
function wall(ax,f){
  for(var i=100; i<425; i+=70){
  ws.push(new Wall(ax,i,f))
  }
}
function knife(x1,x2){
 for(var i=x1; i<x2; i+=27){
   ks.push(new Sharp(i,445,sh1))
 }
}  
function end(){
  if(gameState == 2){
  Matter.Body.setStatic(candy,true)
  firegroup.setVelocityXEach(0)
  re.y = 295
  image(bg1,camera.position.x-5,200,320,250)
  image(restart,camera.position.x-10,295,130,110)
  image(award,camera.position.x-5,165,40,40)
  image(over,camera.position.x-5,125,350,250)
  textSize(22)
  strokeWeight(0.2)
  fill(0)
  text("Coins: "+coinum,camera.position.x-105,220)
  text("Gems: " +gems,camera.position.x+20,220)
  text("Distance: " +dis+" m",camera.position.x-65,255)
  }
}
function replay(){
  console.log("message")
  Matter.Body.setStatic(candy,false)
  Matter.Body.setPosition(candy,{x:20,y:300})
  console.log(ball.x)
}