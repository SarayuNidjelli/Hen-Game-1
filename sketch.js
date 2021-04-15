var hen,  basket;
var egg;

function preload(){
  henImg = loadImage("images/hen.png");
  eggImg = loadImage("images/egg.png");
  basketImg = loadImage("images/basket.png");
}

function setup() {
  createCanvas(2000,800);
   hen = createSprite(400, 200, 50, 50);
   basket = createSprite(200, 750, 50, 50);
   basket.scale = 0.3;

   hen.addImage("hen", henImg);
   basket.addImage("basket", basketImg);

  
 
}

