	// Next Shape Constructor
	function NextShape(){
		this.canvas = new Canvas('next-shape', 200, 150);
		this.ctx = this.canvas.ctx;
		this.init();
	};
	NextShape.prototype = {
		init: function(){
			this.canvas.drawHeader('Next', 'rgb(147,255,36)');
		},
		render: function(nextShape){
			this.canvas.clear(0, 50);
			nextShape.currentX = 2;
			nextShape.currentY = 2;
			nextShape.draw(this.ctx);
		}
	};
