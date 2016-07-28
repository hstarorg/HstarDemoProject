(function (window) {
  'use strict';
  
  var cacheMap = new Map(); // 用于存储资源的Map对象 

  var resourceTotalCount = 1; // 资源总数量

  var currentLoaded = 0; // 当前加载的资源数量

  var isAddLoaded = function () {
    currentLoaded += 1;
    if (currentLoaded === resourceTotalCount && typeof window.ResourceManager.onResourceLoaded === 'function') {
      window.ResourceManager.onResourceLoaded();
    }
  };

  var init = function () {
    var image = new Image();
    image.onload = function () {
      cacheMap.set('blocks', image);
      isAddLoaded();
    };
    image.src = 'images/blocks.png';
  };

  var getResource = function (key) {
    return cacheMap.get(key);
  };

  window.ResourceManager = {
    getResource: getResource,
    init: init,
    onResourceLoaded: null // 资源加载完成回调
  };
})(window);