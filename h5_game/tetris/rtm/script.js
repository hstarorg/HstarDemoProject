
var Tetris = (function(){

	var interval;
	var cols = 13;
	var rows = 20;
	var blockSize = 32;
	var speed = 800;
	var gameOver = false;

	// Tetris Constructor
	function Tetris(){
		this.board = new Board();
		this.timer = new Timer();
		this.score = new Score();
		this.level = new Level();
		this.highScore = new HighScore();
		this.nextShape = new NextShape();
		Keyboard.call(this);
		this.init();
	}
	Tetris.prototype = {
		init: function(){
			this.eventHandlers();
			this.newGame();
		},
		newGame: function(){
			var self = this;
			var sprite = this.board.shape.block.sprite.image;
			sprite.onload = function(){
				self.board.init();
				interval = setInterval(function(){
					self.board.tick();
				}, speed);
			};
		},
		endGame: function(){
			clearInterval(interval);
			clearInterval(this.timer.timerId);
			alert("Game Over");
		}
	};

	// Sprite Constructor - Loading the sprite image
	function SpriteLoader(src){
		var path = '';
		this.image = new Image();
		this.image.src = path + ((src) ? src : 'blocks.png');
		this.imageSize = blockSize || 32;
		this.total = 7;
	}













	return new Tetris();
})();
