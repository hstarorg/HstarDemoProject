	// High Score Constructor
	function HighScore(){
		this.canvas = new Canvas('high-score', 200, 100);
		this.ctx = this.canvas.ctx;
		this.init();
	};
	HighScore.prototype = {
		init: function(){
			this.canvas.drawHeader('High Score', 'rgb(147,255,36)');
			this.render();
		},
		render: function(nextShape){
			this.canvas.drawText('1,000,000');
		}
	};