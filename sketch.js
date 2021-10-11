var bg,bg2,form,system,code,security;
var treasureImg
var score=0;

function preload() {
  bg= loadImage("aladdin_cave.jpg")
  treasureImg = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  
  if(score === 3){
    clear();
    background(treasureImg);
    fill("black");
    textSize(40);
    text("Treasure Unlocked",250,200);
  }

  drawSprites()
}