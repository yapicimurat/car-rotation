let car =
{
  position: {
    x: 100,
    y: 400
  },
  size: {
    w: 60,
    h: 30
  },
  vector:{
    x: 0,
    y: 0
  },
  angle: 0,
  directions:
  {
    left: false,
    right: false,
    down: false,
    top: true
  },
  speed: 10,
  rSpeed: 0.07,
  image: null
};

function preload()
{
  car.image = loadImage('./img/car.png');
}

function setup() 
{
  createCanvas(500,500);
  carPosition = createVector(width / 2,10);
  
  car.vector.x = cos(0);
  car.vector.y = sin(0);
}

function draw() {
  background(220);
  checkKey();
  drawCar();
}


function drawCar()
{
  if(car.directions.up)
  {
    car.position.x += car.vector.x * car.speed;
    car.position.y += car.vector.y * car.speed;
  }
  
  if(car.directions.down)
  {
    car.position.x -= car.vector.x * car.speed;
    car.position.y -= car.vector.y * car.speed;
  }
  
  if(car.directions.left)
  {
    car.angle -= car.rSpeed;
    car.vector.x = cos(car.angle);
    car.vector.y = sin(car.angle);
  }
  if(car.directions.right)
  {
    car.angle += car.rSpeed;  
    car.vector.x = cos(car.angle);
    car.vector.y = sin(car.angle);
  }
  
  push();
  noFill();
  translate(car.position.x, car.position.y);
  rotate(car.angle);
  image(car.image,-car.size.w / 2,-car.size.h / 2,car.size.w,car.size.h);
  
  pop();
}


function checkKey()
{
  if(keyIsDown(UP_ARROW))
  {
    car.directions.up = true;
  }
  if(!keyIsDown(UP_ARROW))
  {
    car.directions.up = false;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    car.directions.down = true;
  }
  if(!keyIsDown(DOWN_ARROW))
  {
    car.directions.down = false;
  }
  if(keyIsDown(LEFT_ARROW))
  {
    car.directions.left = true;
  }
  if(!keyIsDown(LEFT_ARROW))
  {
    car.directions.left = false;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    car.directions.right = true;
  }
  if(!keyIsDown(RIGHT_ARROW))
  {
    car.directions.right = false;
  }
  

  text(car.directions.left+" "+car.directions.right+" "+car.directions.up+" "+car.directions.down,10,15);
}