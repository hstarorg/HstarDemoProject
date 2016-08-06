	// Game Level Constructor
	function Level(){
		this.canvas = new Canvas('level', 200, 100);
		this.ctx = this.canvas.ctx;
		this.init();
	};
	Level.prototype = {
		init: function(){
			this.canvas.drawHeader('Level', 'rgb(0,204,255)');
			this.render();
		},
		render: function(nextShape){
			this.canvas.drawText('1');
		}
	};