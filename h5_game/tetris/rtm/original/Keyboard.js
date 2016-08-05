	// Keypress Constructor
	function Keyboard(){
		var self = this;
		var keys = {
			38: 'top',
			39: 'right',
			40: 'down',
			37: 'left'
		};
		this.eventHandlers = function(){
			document.addEventListener('keydown', this.keyPressEvent, true);
		};
		this.keyPressEvent = function(event){
			if (keys[event.keyCode])
				self.keyPress( keys[event.keyCode] );
		};
		this.keyPress = function(key){
			var refresh = false;

			switch(key){
				case 'top':
					this.board.shape.rotate();
					if (this.board.validMove(0,0))
						refresh = true;
					break;
				case 'right':
					if (this.board.validMove(1,0)){
						this.board.shape.currentX++;
						refresh = true;
					}
					break;
				case 'down':
					if (this.board.validMove(0,1)){
						clearInterval(interval);
						this.board.shape.currentY++;
						refresh = true;
					}
					break;
				case 'left':
					if (this.board.validMove(-1,0)){
						this.board.shape.currentX--;
						refresh = true;
					}
					break;
			}
			
			if (refresh){
				this.board.refresh();
				this.board.shape.draw(this.board.ctx);

				if (key === 'down'){
					var self = this;
					interval = setInterval(function(){
						self.board.tick();
					}, speed);
				}
			}
		};
	}