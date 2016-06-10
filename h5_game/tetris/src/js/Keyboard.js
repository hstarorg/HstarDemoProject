((window) => {
  'use strict';

  var keys = {
    38: 'top',
    39: 'right',
    40: 'down',
    37: 'left'
  };

  class Keyboard {
    constructor(board) {
      this.board = board;

    }

    init() {
      var self = this;
      document.addEventListener('keydown', (evt) => {
        self.onKeyPress(evt);
      }, true);
      console.log('keydown init.');
    }

    onKeyPress(evt) {
      var self = this;
      if (keys[evt.keyCode]) {
        self.press(keys[evt.keyCode]);
      }
    }

    press(key) {
      var refresh = false;
      switch (key) {
        case 'top':
          this.board.shape.rotate();
          break;
        case 'right':
          this.board.shape.moveRight();
          break;
        case 'down':
          // this.board.refresh();
          this.board.shape.moveDown();
          break;
        case 'left':
          this.board.shape.moveLeft();
          break;
      }
      if (refresh) {
        //  this.board.refresh();
      }
    }
  }

  window.Keyboard = Keyboard;
})(window);
