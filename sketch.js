var engine, world;
var log1;
var log2;
var log3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

 
    ground = new Ground(600,height,1200,20)
    log1 = new Log(200, 200, 200,10);

     log2 = new Log(100,180, 10,50);
    
    log3 = new Log(290,210,100,10);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    log1.display();
    log2.display();
    log3.display();

}