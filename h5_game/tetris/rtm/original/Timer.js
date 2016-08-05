	// Timer Constructor
	function Timer(){
		this.canvas = new Canvas('timer', 200, 100);
		this.ctx = this.canvas.ctx;
		this.timerId;
		this.time = 0;
		this.init();
	}
	Timer.prototype = {
		init: function(){
			this.canvas.drawHeader('Timer', 'rgb(147,255,36)');
			this.render();
			this.start();
		},
		start: function(){
			var self = this;
			clearInterval(this.timerId);
			this.timerId = setInterval(function(){
				self.time += 1;
				self.render();
			}, 1000);
		},
		reset: function(){
			clearInterval(this.timerId);
			this.time = 0;
		},
		toTimeFormat: function(sec){
			var sec     = parseInt(sec, 10);
	    var hours   = Math.floor(sec / 3600);
	    var minutes = Math.floor((sec - (hours * 3600)) / 60);
	    var seconds = sec - (hours * 3600) - (minutes * 60);

	    if (hours   < 10) hours   = '0' + hours;
	    if (minutes < 10) minutes = '0' + minutes;
	    if (seconds < 10) seconds = '0' + seconds;

	    return hours + ':' + minutes + ':' + seconds;
		},
		render: function(){
			this.canvas.drawText(this.toTimeFormat(this.time));
		}
	};