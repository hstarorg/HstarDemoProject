(function (window) {
  'use strict';

  function Board() {
    this.blockSize = 30;
    this.rows = 20;
    this.cols = 13;
    this.canvas = new Canvas('c_game_main', this.cols * this.blockSize, this.rows * this.blockSize);
    this.context = this.canvas.context;
    this.boardList = [];
    this.shape = new window.Shape();

    this._init();

    var b = ResourceManager.getResource('blocks');
    console.log(b);
  }

  Board.prototype = {
    constructor: Board,
    _init: function () {
      this._buildGridData();
      this._initGrid();

      this.shape.draw(this.context);
    },
    _buildGridData() {
      var i, j;
      for (i = 0; i < this.rows; i++) {
        this.boardList[i] = [];
        for (j = 0; j < this.cols; j++) {
          this.boardList[i][j] = 0;
        }
      }
    },
    _initGrid() {
      var i;
      this.context.strokeStyle = 'green';
      this.context.lineWidth = 0.5;
      //绘制线条的笔迹
      for (i = 0; i <= this.rows; i++) {
        this.context.moveTo(0, i * this.blockSize);
        this.context.lineTo(this.canvas.width, i * this.blockSize);
      }
      for (i = 0; i <= this.cols; i++) {
        this.context.moveTo(i * this.blockSize, 0);
        this.context.lineTo(i * this.blockSize, this.canvas.height);
      }
      //绘制线条
      this.context.stroke();

      //缓存数据
      this.gridImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    },
    tick: function () {
      this.shape.y += 1;
      this.refresh();
      this.shape.draw(this.context);
    },
    refresh: function(){
      this.canvas.clear();
      this.context.putImageData(this.gridImageData, 0, 0);
    }
  };

  window.Board = Board;

})(window);