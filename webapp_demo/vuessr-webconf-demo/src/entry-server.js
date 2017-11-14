
const { createApp } = require('./createApp');

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();
    const { url } = context;
    // 校验URL
    const { fullPath } = router.resolve(url).route
    if (fullPath !== url) {
      return reject({ url: fullPath })
    }
    // 跳转到指定页面
    router.push(context.url);
    // 路由准备好之后
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))).then(() => {
        context.state = store.state
        resolve(app);
      })
        .catch(reject);
    }, reject);
  });
};
