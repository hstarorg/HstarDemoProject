(function (window) {
  'use strict';
  function NextShape() {
    this.canvas = new Canvas('nextshape', 100, 70);

    this._init();
  }

  NextShape.prototype = {
    constructor: NextShape,
    _init: function () {
      this.rows = 4;
      this.cols = 6;
    },
    render: function (shape) {
      this.canvas.clear();
      shape.draw(this.canvas.context, 16); // 16*4 ~~ 70 , 16*6 ~~ 100
    }
  };

  window.NextShape = NextShape;
})(window);