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
      console.log(key);
      var refresh = false;
      switch (key) {
        case 'top':
          break;
        case 'right':
          this.board.shape.moveRight();
          break;
        case 'down':
          break;
        case 'left':
          this.board.shape.moveLeft();
          break;
      }
      if (refresh) {
        //  this.board.refresh();
      }
    }

    draw(context, x, y, blockType) {
      var size = this.size;
      context.drawImage(this.sprite, (blockType - 1) * size, 0, size, size, x * size, y * size, size, size);
    }
  }

  window.Keyboard = Keyboard;
})(window);
