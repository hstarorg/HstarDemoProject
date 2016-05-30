((window) => {
	'use strict';
	class Canvas {
		constructor(id, width, height) {
			this.id = id;
			this.el = document.getElementById(this.id);
			this.context = this.el.getContext('2d');
			this.width = width || window.innerWidth || documentElement.clientWidth;
			this.height = height || window.innerHeight || documentElement.clientHeight;

			this.setSize();
		}

		setSize() {
			this.el.width = this.width;
			this.el.height = this.height;
		}

		clear(fromX, fromY, toX, toY) {
			var fromX = fromX || 0;
			var fromY = fromY || 0;
			var toX = toX || this.width;
			var toY = toY || this.height;
			this.context.clearRect(fromX, fromY, toX, toY);
		}

		drawHeader(text, color) {
			this.ctx.fillStyle = color;
			this.ctx.fillRect(0, 0, this.width, 50);
			this.ctx.font = "25px Arial";
			this.ctx.fillStyle = 'black';
			this.ctx.textAlign = 'center';
			this.ctx.fillText(text, this.width / 2, 34);
		}

		drawText(text) {
			this.clear(0, 50);
			this.ctx.font = "25px Arial";
			this.ctx.fillStyle = 'white';
			this.ctx.textAlign = 'center';
			this.ctx.fillText(text, this.width / 2, 84);
		}
	}
	
	window.Canvas = Canvas;

})(window);

