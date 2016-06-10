((window) => {
  'use strict';

  const SHAPE_SETTING = {
    maxCol: 12
  };

  class Shape {
    constructor(opt) {
      opt = opt || {};
      this.block = new Block();
      //子类提供
      this.board = opt.board;
      this.maxState = opt.maxState || 2;
      this.layouts = opt.layouts || {};
      this.x = opt.x || 0;
      this.y = opt.y || 0;
      this.state = opt.state || 1;
      this.blockType = opt.blockType || 1;
      this.layout = this.layouts[this.state];
    }

    _tryMove(moveX, moveY) {
      if (moveX) {
        if (moveX < 0) {
          if (this.x + moveX >= 0) {
            this.x += moveX;
          }
        }
        else if (moveX > 0) {
          if (this.x + moveX <= SHAPE_SETTING.maxCol) {
            this.x += moveX;
          }
        }
      }
      if (moveY) {

      }
    }

    moveLeft() {
      if(this.board.validMove(-1, 0)){
        this.x -= 1;
      }
    }

    moveRight() {
      if(this.board.validMove(1, 0)){
        this.x += 1;
      }
    }

    moveDown() {
      // this.y += 1;
      console.log('暂未实现！');
    }

    rotate() {
      this.state += 1;
      if (this.state > this.maxState) {
        this.state = 1;
      }
      this.layout = this.layouts[this.state];
    }

    getMaxWidth(){
      let arr = [];
      for(let item of this.layout){
        arr.push(item.length);
      }
      return Math.max(...arr);
    }

    getMaxHeight(){
      return this.layout.length;
    }

    draw(context) {
      try {
        for (var i = 0; i < this.layout.length; i++) {
          for (var j = 0; j < this.layout[i].length; j++) {
            if (this.layout[i][j]) {
              this.block.draw(context, j + this.x, i + this.y, this.blockType);
            }
          }
        }
      } catch (e) {
        console.log("Error: can't draw the shape.");
      }
    }
  }

  class Shape1 extends Shape {
    constructor(blockType, board) {
      super({
        maxState: 4,
        board: board,
        layouts: {
          1: [[0, 1, 0], [1, 1, 1]],
          2: [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
          3: [[1, 1, 1], [0, 1, 0]],
          4: [[0, 1, 0], [1, 1, 0], [0, 1, 0]]
        },
        blockType: blockType
      });
    }
  }

  class Shape2 extends Shape {
    constructor(blockType, board) {
      super({
        maxState: 1,
        board: board,
        layouts: {
          1: [[1, 1], [1, 1]]
        },
        blockType: blockType
      });
    }
  }

  class Shape3 extends Shape {
    constructor(blockType, board) {
      super({
        maxState: 2,
        board: board,
        layouts: {
          1: [[1, 1, 1, 1]],
          2: [[1], [1], [1], [1]]
        },
        blockType: blockType
      });
    }
    rotate() {
      this.state += 1;
      if (this.state > this.maxState) {
        this.state = 1;
      }
      this.layout = this.layouts[this.state];
      if (this.state === 1) {
        if(this.board.validMove(-1, 1)){
          this.x -= 1;
          this.y += 1;
        }
      }
      else {
        if(this.board.validMove(1, -1)){
          this.x += 1;
          this.y -= 1;
        }
      }
    }
  }

  class ShapeFactory {
    constructor() {

    }

    static getShape(shapeType, color, board) {
      let shape = null;
      switch (shapeType) {
        case 'shape1':
          shape = new Shape1(color, board);
          break;
        case 'shape2':
          shape = new Shape2(color, board);
          break;
        case 'shape3':
          shape = new Shape3(color, board);
          break;
      }
      return shape;
    }
  }

  window.ShapeFactory = ShapeFactory;
})(window);
