(function(window){
  'use strict';
  
  var intervalId;
  var speed = 1000;

  function Tetris(){
    this.board = new Board();
    (new Keyboard()).init(this.board);
  }

  Tetris.prototype = {
    constructor: Tetris,
    startGame: function(){
      var self = this;
      intervalId = window.setInterval(function(){
        self.board.tick();
      }, speed);
    },
    endGame: function(){

    }
  };

  window.Tetris = Tetris;

})(window);