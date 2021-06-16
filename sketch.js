var fox,foxImage
var foodImage,food1,food2,food3,food4,food5,food6;
var grenadeImg,grenade1,grenade2;
var mazeImg,wall1,wall2,wall3,wall4,wall5,
    wall6,wall7,wall8,wall9,wall10,
    wall11,wall12,wall13,wall14,wall15;

function preload(){
   mazeImg = loadImage("maze.png");
   foxImage = loadImage("Fox.png");
}

function setup(){
  createCanvas(500,500);
console.log();
  fox = createSprite(270,450,25,25);
  fox.addImage(foxImage);
  fox.scale = 0.2;

  wall1 = createSprite(46,250,10,400);
  wall2 = createSprite(454,250,10,400);
  wall3 = createSprite(127,46,173,10);
  wall4 = createSprite(352,46,215,10);
  wall5 = createSprite(127,46,173,10);
  wall6 = createSprite(144,454,208,10);
  wall7 = createSprite(372,454,173,10);
  wall8 = createSprite(210,250,10,170);
  wall9 = createSprite(250,310,10,215);
  wall10= createSprite(290,350,10,50);
  wall11= createSprite(310,330,130,10);
  wall12= createSprite(399,250,120,10);
  wall13= createSprite(128,230,10,137);
  wall14= createSprite(128,292,95,10);
  wall15= createSprite(165,330,90,10);
  wall16= createSprite(170,250,90,10);
  wall17= createSprite(87,169,10,174);
  wall18= createSprite(131,370,10,86);
  wall19= createSprite(169,413,90,10);
  wall20= createSprite(200,374,80,10);
  
}

function draw(){
 background(mazeImg);
    text(mouseX + "," + mouseY,mouseX,mouseY);

 drawSprites();
}