
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var x = 40
var angle = 0
var XY = [400, -100]
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
var b_options = {
	restitution: 0.95,
    frictionAir:0.01
}
var c_options = {
	isStatic: true
}
b = Bodies.circle(400, 50, 20, b_options)
World.add(world, b)
b1 = Bodies.circle(400, 0, 20, b_options)
World.add(world, b1)
b2 = Bodies.circle(400, -50, 20, b_options)
World.add(world, b2)
b3 = Bodies.circle(400, -100, 20, b_options)
World.add(world, b3)
b4 = Bodies.circle(400, -150, 20, b_options)
World.add(world, b4)
b5 = Bodies.circle(400, -200, 20, b_options)
World.add(world, b5)
b6 = Bodies.circle(400, -250, 20, b_options)
World.add(world, b6)

chao = Bodies.rectangle(400, 690, 800, 20, c_options)
World.add(world, chao)
c1 = Bodies.rectangle(400, 350, 200, 20, c_options)
World.add(world, c1)
c2 = Bodies.rectangle(400, 350, 200, 20, c_options)
World.add(world, c2)
c3 = Bodies.rectangle(400, 350, 200, 20, c_options)
World.add(world, c3)

c11 = Bodies.rectangle(100, 550, 100, 20, c_options)
World.add(world, c11)
c12 = Bodies.rectangle(700, 550, 100, 20, c_options)
World.add(world, c12)
rectMode(CENTER);
  ellipseMode(RADIUS);

  Engine.run(engine);
}


function draw() {
  background(0,250,120);
  fill(250, 0, 0)
  Engine.update(engine);

  ellipse(b.position.x,b.position.y,20);
  ellipse(b1.position.x,b1.position.y,20);
  ellipse(b2.position.x,b2.position.y,20);
  ellipse(b3.position.x,b3.position.y,20);
  ellipse(b4.position.x,b4.position.y,20);
  ellipse(b5.position.x,b5.position.y,20);
  ellipse(b6.position.x,b6.position.y,20);
  rect(chao.position.x,chao.position.y,800,20);
  
  rect(c11.position.x,c11.position.y,150, 20);
  rect(c12.position.x,c12.position.y,150, 20);

  Body.rotate(c1,angle);
  push(); //captura a nova configuração
  translate(c1.position.x,c1.position.y); //move as coordenadas
  rotate(angle); //angulo da rotação
  rect(0, 0,200,20);
  pop(); //reverter para a configuração antiga


  Body.rotate(c2,angle + 175);
  push(); //captura a nova configuração
  translate(c2.position.x,c2.position.y); //move as coordenadas
  rotate(angle + 175); //angulo da rotação
  rect(0, 0,200,20);
  pop(); //reverter para a configuração antiga


  Body.rotate(c3,angle - 175);
  push(); //captura a nova configuração
  translate(c3.position.x,c3.position.y); //move as coordenadas
  rotate(angle - 175); //angulo da rotação
  rect(0, 0,200,20);
  pop(); //reverter para a configuração antiga

  angle +=0.1; //permite ver a rotação
}



