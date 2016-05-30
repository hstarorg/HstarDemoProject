((window) => {
  'use strict';

  const BLOCK_SIZE = 32;
  const BOARD_COLS = 13;
  const BOARD_ROWS = 20;

  class Board {
    constructor() {
      this.blockSize = BLOCK_SIZE;
      this.rows = BOARD_ROWS;
      this.cols = BOARD_COLS;
      this.canvas = new window.Canvas('board', this.blockSize * this.cols, this.blockSize * this.rows);
      this.context = this.canvas.context;
      this.keyboard = new Keyboard(this);
      
      //面板表格数据
      this.list = [];
      this.gridImageData;

      this.shape = new Shape(3);
    }

    _initGrid() {
      //生成表格数组（二维数组，数组元素值为0表示空格）
      for (let i = 0; i < this.rows; i++) {
        this.list[i] = [];
        for (let j = 0; j < this.cols; j++) {
          this.list[i][j] = 0;
        }
      }
      //渲染该表格
      this.context.strokeStyle = 'gray'; //设置绘制的颜色
      this.context.lineWidth = 0.5;
      for (let i = 0; i <= this.rows; i++) {
        this.context.moveTo(0, i * this.blockSize);
        this.context.lineTo(this.canvas.width, i * this.blockSize);
      }
      for (let i = 0; i <= this.cols; i++) {
        this.context.moveTo(i * this.blockSize, 0);
        this.context.lineTo(i * this.blockSize, this.canvas.height);
      }
      this.context.stroke(); //一次绘制
      this.gridImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }

    refresh() {
      this.canvas.clear();
      this.context.putImageData(this.gridImageData, 0, 0);
      // this.drawBlocks();
    }

    tick() {
      this.shape.currentY++;
      this.refresh();
      this.shape.draw(this.context);
    }

    init() {
      this._initGrid();
      this.keyboard.init();
      this.shape.draw(this.context);
    }
  }

  window.Board = Board;
})(window);
