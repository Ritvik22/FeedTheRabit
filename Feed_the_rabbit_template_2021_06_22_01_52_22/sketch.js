//Click Space for JackPot!

var garden, rabbit;

var gardenImg, rabbitImg;

var apple, appleImg;

var appleGroup;
var leafGroup;

var leaf, leafImg;

var selector;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup() {
  createCanvas(400, 400);

  // Jungle
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating rabbit
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  
  appleGroup = new Group();
  leafGroup = new Group();
  
}

function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  selector = Math.round(random(1, 2));

  switch (selector) {
    case 1:
      if (frameCount % 100 === 0) {
        createApple();
        break;
      } else if (keyDown("space")) {
        createApple();
      }

      break;

    case 2:
      if (frameCount % 100 === 0) {
        createLeaf();
        break;
      } else if (keyDown("space")) {
        createLeaf();
      }

      break;

    default:
      break;
  }

  for (var i = 0; i < appleGroup.length; i++) {
    
    if (rabbit.isTouching(appleGroup.get(i))) {
        
       appleGroup.get(i).destroy();
        
    }
    
  }
    
   for (var j = 0; j < leafGroup.length; j++) {
    
    if (rabbit.isTouching(leafGroup.get(j))) {
        
       leafGroup.get(j).destroy();
        
    }
    
  }
  
  drawSprites();
}

function createApple() {
  apple = createSprite(random(50, 350), 10, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY = 3;
  apple.lifetime = 134;
  appleGroup.add(apple);
  
}

function createLeaf() {
  leaf = createSprite(random(50, 350), 10, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.05;
  leaf.velocityY = 3;
  leaf.lifetime = 134;
  leafGroup.add(leaf);
}
