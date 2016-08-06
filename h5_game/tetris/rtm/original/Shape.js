	// Shape Constructor
	function Shape(){
		this.block = new Block();
		this.layout;
		this.blockType;
		this.currentX = 0;
		this.currentY = 0;
		this.layouts = [
			[
		  	[ 0, 1, 0 ],
		  	[ 1, 1, 1 ]
		  ],[
		  	[ 0, 0, 1 ],
		  	[ 1, 1, 1 ]
		  ],[
		  	[ 1, 0, 0 ],
		  	[ 1, 1, 1 ]
		  ],[
		  	[ 1, 1, 0 ],
		  	[ 0, 1, 1 ]
		  ],[
		  	[ 0, 1, 1 ],
		  	[ 1, 1, 0 ]
		  ],[
		  	[ 1, 1, 1, 1 ]
		  ],[
		  	[ 1, 1 ],
		  	[ 1, 1 ]
		  ]
		];
	}
	Shape.prototype = {
		random: function(){
			var layout = this.layouts[ Math.floor(Math.random() * this.layouts.length) ];
			this.blockType = this.block.random();

			for (var y=0; y < layout.length; y++){
				for (var x=0; x < layout[0].length; x++){
					if (layout[y][x]) layout[y][x] = this.blockType;
				}
			}
			this.layout = layout;
		},
		defaultXY: function(){
			this.currentX = Math.floor((cols - this.layout[0].length)/2);
			this.currentY = 0;
		},
		new: function(){
			this.random();
			this.defaultXY();
			return this;
		},
		fixCurrentXY: function(){
			if (this.currentX < 0) this.currentX = 0;
			if (this.currentY < 0) this.currentY = 0;
			if (this.currentX + this.layout[0].length > cols) this.currentX = cols - this.layout[0].length;
			if (this.currentY + this.layout.length    > rows) this.currentY = rows - this.layout.length;
		},
		rotate: function(){
			var newLayout = [];
			for (var y=0; y < this.layout[0].length; y++){
				newLayout[y] = [];
				for (var x=0; x < this.layout.length; x++){
					newLayout[y][x] = this.layout[this.layout.length - 1 - x][y];
				}
			}
			this.layout = newLayout;
			this.fixCurrentXY();
		},
		draw: function(context){
			try {
				for (var y=0; y < this.layout.length; y++){
					for (var x=0; x < this.layout[y].length; x++){
						if (this.layout[y][x]) this.block.draw(context, x + this.currentX, y + this.currentY, this.blockType);
					}
				}
			} catch(e){
				console.log("Error: can't draw the shape.");
			}
		}
	};