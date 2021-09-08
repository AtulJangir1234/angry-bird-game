class Rock {

  constructor(x, y, r) {
    this.r = r;
    let options = {
      // angle: random(TWO_PI),
      // friction: 0,
      // restitution: 0
    }
    this.r = 40;

    this.body = Bodies.circle(x, y, this.r, options);
    //this.body.angle = PI / 2;
    this.image = loadImage("melon.png")
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
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }


}