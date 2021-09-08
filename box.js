class Box {

  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    let options = {
      // angle: random(TWO_PI),
      friction: 1,
      restitution: 0.8
    }
this.image = loadImage("a1.png")

    this.body = Bodies.rectangle(x, y, w, h, options);
    //this.body.angle = PI / 2;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    fill(255);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height)
    pop();
  }


}