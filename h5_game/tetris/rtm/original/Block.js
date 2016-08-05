	// Single Tetris Block
	function Block(){
		this.sprite = new SpriteLoader();
		this.image = this.sprite.image;
		this.size  = this.sprite.imageSize;
		this.total = this.sprite.total;
	}
	Block.prototype = {
		random: function(){
			return Math.floor( Math.random() * this.total ) + 1;
		},
		draw: function(context, x, y, blockType){
			var blockType = blockType || this.random();
			var s = this.size;
			context.drawImage(this.image, (blockType-1)*s, 0, s, s, s*x, s*y, s, s);
		}
	};