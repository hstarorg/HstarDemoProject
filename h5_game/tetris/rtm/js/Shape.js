(function (window) {
  'use strict';

  var shapeLayouts = [
    [[0, 1, 0], [1, 1, 1]],
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[0, 1], [1, 1], [1, 0]],
    [[1, 0], [1, 1], [0, 1]],
    [[1, 0, 1], [1, 1, 1]],
    [[0, 1], [1, 1]],
    [[1, 1]],
    [[1, 1], [1, 0], [1, 0]],
    [[1, 1], [0, 1], [0, 1]]
  ];

  var random = function (minValue, maxValue) {
    return minValue + Math.floor(Math.random() * maxValue);//参数随机数，从0到1的值（包含0，不包含1）
  };

  var styleCount = 7;

  function Shape() {
    this.x = 0;
    this.y = 0;
    this.blockType = random(1, styleCount);
    this.block = new Block(this.blockType);

    this.layout = shapeLayouts[random(0, shapeLayouts.length)];
  }

  Shape.prototype = {
    constructor: Shape,
    draw: function (context, size) {
      for (var i = 0; i < this.layout.length; i++) {
        for (var j = 0; j < this.layout[i].length; j++) {
          if (this.layout[i][j]) {
            this.block.draw(context, j + this.x, i + this.y, undefined, size);
          }
        }
      }
    },
    random(minValue, maxValue) {
      return minValue + Math.floor(Math.random() * maxValue);//参数随机数，从0到1的值（包含0，不包含1）
    },
    rotate: function () {
      var newLayout = [];
      for (var y = 0; y < this.layout[0].length; y++) {
        newLayout[y] = [];
        for (var x = 0; x < this.layout.length; x++) {
          newLayout[y][x] = this.layout[this.layout.length - 1 - x][y];
        }
      }
      this.layout = newLayout;

      this._setLayout();
    },
    _setLayout: function () {
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.y = 0;
      }
      if (this.x + this.layout[0].length > TetrisConfig.cols) {
        this.x = TetrisConfig.cols - this.layout[0].length;
      }
      if (this.y + this.layout.length > TetrisConfig.rows) {
        this.y = TetrisConfig.rows - this.layout.length;
      }
    },
    _getMaxCols: function () {
      var max = 0;
      for (var y = 0; y < this.layout.length; y++) {
        max = Math.max(max, this.layout[y].length);
      }
      return max;
    },
    _getMaxRows: function(){
      return this.layout.length;
    },
    setPosition: function (cols, rows, ignoreRows) {
      this.x = Math.floor((cols - this._getMaxCols()) / 2);
      if (!ignoreRows) {
        this.y = Math.floor((rows - this._getMaxRows()) / 2);
      }
    }
  };

  window.Shape = Shape;
})(window);