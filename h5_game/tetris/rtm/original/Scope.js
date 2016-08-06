	// Score Constructor
	function Score(){
		this.canvas = new Canvas('score', 200, 100);
		this.ctx = this.canvas.ctx;
		this.total = 0;
		this.blocks = cols;
		this.factor = 100;
		this.init();
	}
	Score.prototype = {
		init: function(){
			this.canvas.drawHeader('Score', 'rgb(0,204,255)');
			this.updateScore(this.total);
		},
		numberWithCommas: function(){
    	return this.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		calcScore: function(lines){
			return lines * this.blocks * this.factor;
		},
		render: function(){
			this.canvas.drawText(this.numberWithCommas());
		},
		updateScore: function(lines){
			this.total += this.calcScore(lines);
			this.render();
		}
	};