class Paper{
    constructor(x, y,radius) {
        var options = {
            'isStatic': false,
            'restitution':0.2,
            'friction':0.5,
            'density':1.1,
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        //this.height = width;
       // this.width = height;
       this.radius = radius;
        World.add(world, this.body);
      } 
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(200,15,0);
        ellipse( 0, 0,this.radius,this.radius );
        pop();
       
      }
}