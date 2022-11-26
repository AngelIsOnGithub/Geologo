class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
		var options = {
			'restitution': 0.8,
			"friction": 3,
			'density': 30
		}

		this.x=x;
		this.y=y;
        this.width= 80;
        this.height = 50;
		this.body=Bodies.rectangle(this.x, this.y, 80, 50, options)
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
			fill("gray");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width, this.height);
			pop()
	}

}