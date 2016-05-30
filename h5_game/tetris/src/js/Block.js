((window) => {
  'use strict';

  class Block {
    constructor() {
      this.sprite = ResourceManager.getSpriteImage();
      this.size = 32;
    }

    draw(context, x, y, blockType) {
      var size = this.size;
      context.drawImage(this.sprite, (blockType - 1) * size, 0, size, size, x * size, y * size, size, size);
    }
  }

  window.Block = Block;
})(window);
