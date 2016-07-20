(function (window) {
  'use strict';

  function Shape() {
    this.block = new Block(1);
    this.maxState = 1;
    this.state = 1;
    this.x = 0;
    this.y = 0;
    this.layouts = {
      1: [[1, 1], [1, 1]]
    };
    this.layout = this.layouts[this.state];
  }

  Shape.prototype = {
    constructor: Shape,
    draw: function (context) {
      try {
        for (var i = 0; i < this.layout.length; i++) {
          for (var j = 0; j < this.layout[i].length; j++) {
            if (this.layout[i][j]) {
              this.block.draw(context, j + this.x, i + this.y, this.blockType);
            }
          }
        }
      } catch (e) {
        console.log("Error: can't draw the shape.", e);
      }
    },
    moveLeft: function () {

    },
    moveRight: function () {

    },
    moveDown: function () {

    },
    rotate: function () {

    }
  };

  window.Shape = Shape;

})(window);