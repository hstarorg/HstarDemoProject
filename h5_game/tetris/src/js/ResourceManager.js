((window) => {
  'use strict';
  
  var image = new Image();

  class ResourceManager {
    constructor() {
    }
    
    static load(done){
      image.src = 'images/blocks.png';
      image.onload = function(){
        done();
      };
    }
    
    static getSpriteImage(){
      return image;
    }
  }

  window.ResourceManager = ResourceManager;
})(window);
