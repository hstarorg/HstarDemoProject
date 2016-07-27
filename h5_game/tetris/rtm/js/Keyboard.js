(function (window) {
  'use strict';

  var keys = {
    38: 'top',
    39: 'right',
    40: 'down',
    37: 'left'
  };

  function Keyboard() {
    this.board;
  }

  Keyboard.prototype = {
    constructor: Keyboard,
    init: function (board) {
      var self = this;
      self.board = board;
      document.addEventListener('keydown', function (evt) {
        self.processKeyDown(evt);
      });
    },
    processKeyDown: function (evt) {
      if (keys[evt.keyCode]) {
        this.press(keys[evt.keyCode]);
      }
    },
    press: function (key) {
      console.log(key);
      switch (key) {
        case 'top':
          //todo
          break;
        case 'right':
          this.board.shape.x += 1;
          break;
        case 'down':
        this.board.shape.x -= 1;
          break;
        case 'left':
          break;
      }
    }
  };

  window.Keyboard = Keyboard;
})(window);