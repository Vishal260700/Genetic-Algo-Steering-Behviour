let v;

let food = [];
let poison = [];

function setup() {
  createCanvas(640, 360);
  v = new Vehicle(width / 2, height / 2);

  for(var i = 0; i < 20; i++){
    var posx = random(width);
    var posy = random(height);
    food.push(createVector(posx, posy));
  }

  for(var i = 0; i < 20; i++){
    var posx = random(width);
    var posy = random(height);
    poison.push(createVector(posx, posy));
  }

}

function draw() {
  background(51);

  for(var i = 0; i < food.length; i++){
    fill(0,255,0);
    noStroke();
    ellipse(food[i].x, food[i].y, 5, 5);
  }

  for(var i = 0; i < poison.length; i++){
    fill(255,0,0);
    noStroke();
    ellipse(poison[i].x, poison[i].y, 5, 5);
  }

  // Call the appropriate steering behaviors for our agents

  v.eat(food);
  v.eat(poison);

  // v.seek(mouse);
  v.update();
  v.display();

}