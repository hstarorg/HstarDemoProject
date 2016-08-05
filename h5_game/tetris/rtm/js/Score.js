(function (window) {
  'use strict';
  function Score() {
    this.canvas = new Canvas('score', 100, 70);
    this.score = 0;

    this._init();
  }

  Score.prototype = {
    constructor: Score,
    _init: function () {
      this._render();
    },
    _render: function () {
      this.canvas.drawText(this.score);
    },
    addScore: function (value) {
      this.score += value;
      this._render();
      return this.score;
    }
  };

  window.Score = Score;
})(window);