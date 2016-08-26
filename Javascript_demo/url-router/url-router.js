(() => {
  let urlRouter = {};
  let container;
  let routeMapCache;

  let getPage = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Accept', 'text/plain');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        callback && callback(xhr.responseText);
      }
    }
    xhr.send();
  };

  urlRouter.init = (routeMap, options) => {
    routeMapCache = routeMap;
    if (options.container instanceof HTMLElement) {
      container = options.container;
    } else {
      container = document.querySelector(options.container);
    }

    // 处理状态变化
    window.addEventListener('popstate', function (evt) {
      let stateObj = history.state || evt.state;
      console.log(evt, stateObj);
      if (stateObj) {
        urlRouter.go(stateObj.state);
      }
    }, false);

    // 初始化时，处理默认状态
    let path = window.location.pathname;
    let stateKeys = Object.keys(routeMapCache);
    for (let i = 0; i < stateKeys.length; i++) {
      let stateObj = routeMapCache[stateKeys[i]];
      if (stateObj.url === path) {
        urlRouter.go(stateKeys[i]);
        return;
      }
    }
  };

  urlRouter.go = (state) => {
    let stateObj = routeMapCache[state];
    if (!stateObj) {
      throw new Error('state not found.');
    }
    stateObj.state = state;
    window.history.pushState(stateObj, '', stateObj.url);
    getPage(stateObj.path, (content) => {
      container.innerHTML = content;
    });
  };

  window.urlRouter = urlRouter;
})();