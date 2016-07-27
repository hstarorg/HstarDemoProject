(function (window) {
  'use strict';
  /**
   * Canvas操作类
   * @param canvasId Canvas元素的ID属性
   * @param width canvas宽度
   * @param height canvas高度
   */
  function Canvas(canvasId, width, height) {
    this.canvasId = canvasId;
    this.el = document.getElementById(canvasId);
    if (!this.el) {
      throw new Error('Must provider a right canvas id.');
    }
    this.context = this.el.getContext('2d');
    this.width = width || window.innerWidth;
    this.height = height || window.innerHeight;

    this._init();
  }

  Canvas.prototype = {
    constructor: Canvas,
    _init: function () {
      this.el.width = this.width;
      this.el.height = this.height;
    },
    clear: function (fromX, fromY, toX, toY) {
      fromX = fromX || 0;
      fromY = fromY || 0;
      toX = toX || this.width;
      toY = toY || this.height;
      this.context.clearRect(fromX, fromY, toX, toY);
    }
  };

  window.Canvas = Canvas;
})(window);
