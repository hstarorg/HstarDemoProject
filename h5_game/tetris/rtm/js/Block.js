(function (window) {
  'use strict';
  function Block(blockType) {
    this.size = 30;
    this.orignalSize = 32;
    this.blockType = blockType;
    this.sprite = window.ResourceManager.getResource('blocks');
  }

  Block.prototype.draw = function (context, x, y) {
    context.drawImage(this.sprite, (this.blockType - 1) * this.orignalSize, 0, this.orignalSize, this.orignalSize, x * this.size, y * this.size, this.size, this.size)
  };

  window.Block = Block;
})(window);