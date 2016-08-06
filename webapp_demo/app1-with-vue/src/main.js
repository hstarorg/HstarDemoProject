import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入页面组件
import Home from './pages/Home';

// 注册路由
Vue.use(VueRouter);

// 根组件
let App = Vue.extend({});

// 实例化路由对象
let router = new VueRouter({ history: true });

// 配置路由映射
router.map({
  '/': {
    component: Home
  }
});

// 启动应用
router.start(App, 'body');