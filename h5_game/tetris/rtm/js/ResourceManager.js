(function (window) {

  var cacheMap = new Map();

  var resourceTotalCount = 1;

  var currentLoaded = 0;

  var isAllLoaded = function () {
    currentLoaded += 1;
    if (currentLoaded === resourceTotalCount && typeof window.ResourceManager.onResourceLoaded === 'function') {
      window.ResourceManager.onResourceLoaded();
    };
  };

  let init = function () {
    var image = new Image();
    image.src = 'images/blocks.png';
    image.onload = function () {
      cacheMap.set('blocks', image);
      isAllLoaded();
    };
  }

  var getResource = function (key) {
    return cacheMap.get(key);
  };

  window.ResourceManager = {
    getResource: getResource,
    init: init,
    onResourceLoaded: null
  };
})(window);