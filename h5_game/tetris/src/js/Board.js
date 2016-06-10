((window) => {
  'use strict';

  class Board {
    constructor() {
      this.blockSize = TETRIS_SETTINGS.BLOCK_SIZE;
      this.rows = TETRIS_SETTINGS.BOARD_ROWS;
      this.cols = TETRIS_SETTINGS.BOARD_COLS;
      this.canvas = new window.Canvas('board', this.blockSize * this.cols, this.blockSize * this.rows);
      this.context = this.canvas.context;
      this.keyboard = new Keyboard(this);

      this.gameOver = false;

      //面板表格数据
      this.list = [];
      this.gridImageData;

      this.shape = ShapeFactory.getShape('shape3', 4, this);
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
      //缓存数据
      this.gridImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }

    refresh() {
      this.canvas.clear();
      this.context.putImageData(this.gridImageData, 0, 0);
      this.drawBlocks();
    }

    drawBlocks() {
      try {
        for (var y = 0; y < this.list.length; y++) {
          for (var x = 0; x < this.list[y].length; x++) {
            if (this.list[y][x]) {
              this.shape.block.draw(this.context, x, y, this.list[y][x]);
            }
          }
        }
      } catch (e) {
        console.log("Error: can't draw the shape.", e);
      }
    }

    tick() {
      if (this.validMove(0, 1)) {
        this.shape.y += 1;
      } else {
        this.addShapeToBoard();
        this.clearLines();

        if (this.gameOver) {
          alert('game over');
        }
      }
      this.refresh();
      this.shape.draw(this.context);
    }

    validMove(moveX, moveY) {
      let shape = this.shape;
      let toX = shape.x + moveX;
      let toY = shape.y + moveY;
      let canMove = true;
      // x 坐标越界
      if (toX < 0 || toX > TETRIS_SETTINGS.BOARD_COLS - shape.getMaxWidth()) {
        canMove = false;
      } else if (toY > TETRIS_SETTINGS.BOARD_ROWS - shape.getMaxHeight()) { // y坐标越界
        canMove = false;
      } else { //碰撞
        for (let y = 0; y < shape.layout.length; y++) {
          for (let x = 0; x < shape.layout[y].length; x++) {
            if (shape.layout[y][x] === 1) {
              if (this.list[toY + y][toX + x] === 1) {
                return false;
              }
            }
          }
        }
      }
      return canMove;
    }

    addShapeToBoard() {
      loop1: for (let y = 0; y < this.shape.layout.length; y++) {
        for (let x = 0; x < this.shape.layout[0].length; x++) {
          if (this.shape.layout[y][x] === 1) {
            let boardX = this.shape.x + x;
            let boardY = this.shape.y + y;
            if (this.list[boardY][boardX] === 1) {
              this.gameOver = true;
              break loop1;
            }
            this.list[boardY][boardX] = 1;
          }
        }
      }
      let rnd = Math.floor(Math.random() * 2) + 1;
      console.log(rnd);
      this.shape = ShapeFactory.getShape(`shape${rnd}`, 3, this);
    }

    clearLines() {
      for (let i = this.list.length - 1; i >= 0; i--) {
        let sum = 0;
        for (let item of this.list[i]) {
          sum += item;
        }
        if (this.list[i].length === sum) {
          let row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          //插入一行，干掉一行
          this.list.splice(i, 1);
          this.list.unshift(row);
        }
      }
    }

    init() {
      this._initGrid();
      this.keyboard.init();
      this.shape.draw(this.context);
    }
  }

  window.Board = Board;
})(window);
