const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var gameState = "play";
  var particles;
var particles = [];
var plinkos = [];
var divisions =[];


var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);



    
}
 


function draw() {
  background("black");
  textSize(20);
  fill("cyan");
 text("Score : "+score,20,30);
 text("500",20,535);
 text("500",100,535);
 text("500",180,535);
 text("500",260,535);

 text("200",340,535);
 text("200",420,535);
 text("200",500,535);
 text("200",580,535);
 

 text("100",660,535);
 text("100",750,535);

  Engine.update(engine);
 
console.log(plinkos);
 
  // line


// making divisions 
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  
  // making plinkos
   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

   
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  //  making particles
  if(frameCount % 60 === 0){
    particles.push(new particle(random(width/2-10, width/2+10), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

   
  
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX, 10,10,10);
  }
}