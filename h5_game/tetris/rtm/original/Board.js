// Board Constructor
function Board() {
		var grid;
		this.cols = cols || 13;
		this.rows = rows || 16;
		this.blockSize = blockSize || 32;
		this.canvas = new Canvas('board', cols * blockSize, rows * blockSize);
		this.shape = new Shape();
		this.nextShape = new Shape();
		this.ctx = this.canvas.ctx;
		this.list = [];
}
Board.prototype = {
		init: function () {
		this.initGrid();
		this.drawGrid();
		this.shape.new().draw(this.ctx);
		this.nextShape.new();
		window.Tetris.nextShape.render(this.nextShape);
		},
		initGrid: function () {
		for (var y = 0; y < this.rows; y++) {
		    this.list[y] = [];
		    for (var x = 0; x < this.cols; x++) {
		      this.list[y][x] = 0;
		    }
		  }
		},
		drawGrid: function () {
		this.ctx.strokeStyle = 'rgba(40,40,40,.8)';
		this.ctx.lineWidth = 1;

		for (var i = 0; i < this.rows; i++) {
			this.ctx.moveTo(0, i * this.blockSize);
			this.ctx.lineTo(this.canvas.width, i * this.blockSize);
			this.ctx.stroke();
		}
		for (var i = 0; i < this.cols; i++) {
			this.ctx.moveTo(i * this.blockSize, 0);
			this.ctx.lineTo(i * this.blockSize, this.canvas.height);
			this.ctx.stroke();
		}
		grid = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
		},
		validMove: function (incX, incY, shape) {
		var shape = shape || this.shape;
		var offsetX = shape.currentX + incX;
		  var offsetY = shape.currentY + incY;

		  for (var y = 0; y < shape.layout.length; y++) {
		    for (var x = 0; x < shape.layout[0].length; x++) {
		      if (shape.layout[y][x]) {
		        if (typeof this.list[offsetY + y] === 'undefined'
		          || typeof this.list[offsetY + y][offsetX + x] === 'undefined'
		          || this.list[offsetY + y][offsetX + x]
		          || offsetX + x < 0
		          || offsetX + x >= this.cols
		          || offsetY + y >= this.rows) {
		          return false;
		        }
		      }
		    }
		  }

		return true;
		},
		addShapeToBoard: function () {
		// loop1:
				for (var y = 0; y < this.shape.layout.length; y++) {
			// loop2:
			for (var x = 0; x < this.shape.layout[0].length; x++) {
				if (this.shape.layout[y][x]) {
					var boardX = this.shape.currentX + x;
					var boardY = this.shape.currentY + y;
					if (this.list[boardY][boardX]) {
						gameOver = true;
						break loop1;
					} else this.list[boardY][boardX] = this.shape.layout[y][x];
				}
			}
				}
		},
		clearLines: function () {
		var lines = 0;
		for (var y = this.rows - 1; y >= 0; y--) {
			var filled = true;
			for (var x = 0; x < this.cols; x++) {
				if (!this.list[y][x]) {
					filled = false;
					break;
				}
			}
			if (filled && y) {
				for (var yy = y; yy > 0; yy--) {
					for (var x = 0; x < this.cols; x++) {
						this.list[yy][x] = this.list[yy - 1][x];
					}
				}
				lines++;
				y++;
			}
		}
		if (lines) window.Tetris.score.updateScore(lines); // Update current score
		},
		drawBlocks: function () {
		for (var y = 0; y < this.rows; y++) {
			for (var x = 0; x < this.cols; x++) {
				if (this.list[y][x]) this.shape.block.draw(this.ctx, x, y, this.list[y][x]);
			}
		}
		},
		refresh: function () {
		this.canvas.clear();
		this.ctx.putImageData(grid, 0, 0);
		this.drawBlocks();
		},
		tick: function () {
		if (this.validMove(0, 1)) {
			this.shape.currentY++;
		} else {
			this.addShapeToBoard();
			this.clearLines();

			if (gameOver) {
				window.Tetris.endGame();
				return false;
			}

			var tempShape = this.shape.new();
			this.shape = this.nextShape;
			this.shape.defaultXY();

			this.nextShape = tempShape;
			window.Tetris.nextShape.render(this.nextShape); // Update next shape
		}
		this.refresh();
		this.shape.draw(this.ctx);
		}
};