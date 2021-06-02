const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgoundImg;
var snow, snowImg;
var engine;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow5.webp");
}

function setup() {
  createCanvas(1200,655);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
 
  
  for (var j = 75; j <=width; j=j+50) { 
    snow = createSprite(random(10, 1190), 10);
    snow.addImage(snowImg);
    snow.scale = 0.15;
    keyPressed();
  }
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    snow.velocityY = snow.velocityY + 650;
  }
}