let routeMap = {
  'page1': { url: '/page1', path: 'page1.html' },
  'page2': { url: '/page2', path: 'page2.html' },
  'page3': { url: '/page3', path: 'page3.html' },
};

// 初始化路由
window.urlRouter.init(routeMap, { container: '#page-content' });

//路由跳转

let links = [].slice.call(document.querySelectorAll('#page-menu li a'));
links.forEach(link => {
  link.addEventListener('click', function (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    window.urlRouter.go(evt.target.getAttribute('href'));
  }, false);
});