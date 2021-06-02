class Snow {
    constructor( x, y, width, height) {
       var options = {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 0.1,
            'isStatic' : false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
        this.visibility = 255;
    }

    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
    }
}

