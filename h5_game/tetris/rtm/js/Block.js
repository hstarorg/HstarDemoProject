(function (window) {
  'use strict';
  function Block(blockType) {
    this.blcokType = blockType;
    this.size = 30;
    this.originalSize = 32;
    this.sprite = window.ResourceManager.getResource('blocks');
  }

  Block.prototype = {
    constructor: Block,
    draw: function (context, x, y) {
      context.drawImage(this.sprite, (this.blcokType - 1) * this.originalSize, 0, this.originalSize, this.originalSize, x * this.size, y * this.size, this.size, this.size);
    }
  };

  window.Block = Block;

})(window);