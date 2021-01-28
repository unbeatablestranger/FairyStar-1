class star 
{
   constructor(x,y)
   {
        var options = {
            'isStatic': true,
            'restitution': 0.9,
            'friction': 0.5,
            'density': 1.5,

        }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = 50;
       this.height = 50;
       this.image = loadImage("images/star.png");
   }

   display()
   {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
   }   

}