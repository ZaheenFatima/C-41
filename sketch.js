const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bruce;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(500,800);
    background("Black");
    engine = Engine.create();
    world = engine.world;

    bruce = new Umberella(100,500,50,50);
    
}

function draw(){
    Engine.update(engine);
    bruce.display();
}   

