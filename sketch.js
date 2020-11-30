var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars,car1,car2,car3,car4;
function preload()
{
  doc1=loadImage("js/doc1.png");
  doc2=loadImage("js/doc2.png");
  doc3=loadImage("js/doc3.png");
  doc4=loadImage("js/doc4.png");
  // similar manner load 4 doctor image
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
