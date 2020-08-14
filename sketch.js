const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var ground;
var engine,world;
function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(480,790,800,10);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  displayloops();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  } 
  ground.display();
  for(var j = 0; j <particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k < divisions.length;k++ ){
    divisions[k].display();
  }
  for(var s =0;s <plinkos.length;s= s+50){
    plinkos[s].display();
  }
  drawSprites();
  
}

function displayloops(){
  for(var k = 0; k <=width; k = k +80){
    divisions.push(new Divisions(k, height- divisionHeight/2,10,divisionHeight));
  }
  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinkos(j,75,10));
  }
  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinkos(j,175,10));
  }
  for(var j = 75; j<=width-10; j=j+50){
    plinkos.push(new Plinkos(j,275,10));
  }
  for(var j = 110; j<=width-10; j=j+50){
    plinkos.push(new Plinkos(j,375,10));
  }
}