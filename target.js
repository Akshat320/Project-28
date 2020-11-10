class Mango{

    constructor (x,y,radius)
    {
        
     var options={
        isStatic: true,
        restitution: 0,
        friction: 1
    }

     this.image = loadImage("mango1.png");

    this.body = Bodies.circle(x, y, radius, options);
    this.body.radius = radius;
    
    World.add(world, this.body);
    }
    
    display()
    {
       
        fill("white");
        image(this.image,this.body.position.x,this.body.position.y);
    }
}