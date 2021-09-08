const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

let ground;
let boxes = [];
let birds = [];
let base;
let world;
let engine;
let rock;
let mConstraint;
let slingshot;
let tree;


function setup() {
  let canvas = createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Boundary(0, 400, width, 20);
  base =new Base(0,0,100,40);
  

  for (let i = 0; i < 3; i++) {
    box = new Box(500, 300 - i * 100, 25, 30);
    boxes.push(box);
  }
  for (let i = 0; i < 3; i++) {
    bird = new Bird(450, 300 - i * 100, 25, 30);
    birds.push(bird);
  }

  rock = new Rock(150, 320, 10);

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  slingshot = Constraint.create({
    pointA: {
      x: 150,
      y: 300
    },
    bodyB: rock.body,
    length: 20,
    stiffness: 0.01
  });
  World.add(world, slingshot);


}


function keyPressed() {
  rock = new Rock(150, 320, 10);
 slingshot.bodyB = rock.body; 
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.show();
  for (let box of boxes) {
    box.show();
  }
  for (let bird of birds) {
    bird.show();
  }

    base.show()

  rock.show();

  let posR = rock.body.position;
  let posS = slingshot.pointA;
  
  if (!mouseIsPressed) {
    let d = dist(posR.x, posR.y, posS.x, posS.y);
    if (d > 60 && posR.x > 150) {
      slingshot.bodyB = null;
    }
  }


  if (slingshot.bodyB) {
    stroke(255);
    line(slingshot.pointA.x, slingshot.pointA.y, rock.body.position.x, rock.body.position.y);
  }
}