class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
		var options = {
			'restitution': 0.8,
			"friction": 0.9,
			'density': 12
		}

		this.x=x;
		this.y=y;
		this.width = width;
        this.height =  height;
		this.body=Bodies.rectangle(this.x, this.y, width, height, options)
		World.add(world, this.body);

	}
	display()
	{ 
			var pos = this.body.position;
            var angle = this.body.angle		
			push()
			translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width, this.height);
			pop()
	}

}