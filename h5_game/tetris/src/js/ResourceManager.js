((window) => {
  'use strict';

  var image = new Image();

  let map = new Map();

  class ResourceManager {
    constructor() {

    }

    static load(done) {
      // let image = new Image();
      image.src = 'images/blocks.png';
      image.onload = function () {
        map.set('block', image);
        done();
      };
    }

    static getSpriteImage(key) {
      key = key || 'block';
      return image; //map.get(key);
    }
  }

  window.ResourceManager = ResourceManager;
})(window);
