class Base {
    constructor(x, y, w, h) {
      this.w = w;
      this.h = h;
      let options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(w, h, w, h, options);
      World.add(world, this.body);
      this.image = loadImage("base3.png")
    }
  
    show() {
      let pos = this.body.position;
      let angle = this.body.angle;
      fill(255);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 380, 350, this.w, this.h);
      pop();
    }
  }