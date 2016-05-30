((window) => {
  'use strict';

  class Shape {
    constructor(blockType) {
      this.block = new Block();
      this.layout = [[0, 1, 0], [1, 1, 1]];
      this.currentX = 0;
      this.currentY = 0;
      this.blockType = blockType;
    }
    
    moveLeft(){
      this.currentX -= 1;
    }
    
    moveRight(){
      this.currentX += 1;
    }

    draw(context) {
      try {
        for (var i = 0; i < this.layout.length; i++) {
          for (var j = 0; j < this.layout[i].length; j++) {
            if (this.layout[i][j]) {
              this.block.draw(context, j + this.currentX, i + this.currentY, this.blockType);
            }
          }
        }
      } catch (e) {
        console.log("Error: can't draw the shape.");
      }
    }
  }

  window.Shape = Shape;
})(window);
