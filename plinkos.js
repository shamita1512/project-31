class Plinkos{
    constructor(x,y,r){
        var options={
        'isStatic': true
        }
    
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.color =color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
        }
    }

    
