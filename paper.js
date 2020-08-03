class Paper{
    constructor(x, y, radius){

            var options = {
                density:1.2,
                isStatic:false,
                restitution:0.3,
                friction:0.5
            }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        
        circle(pos.x, pos.y, this.radius);
        pop();
    }
}