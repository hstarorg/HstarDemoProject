import 'mint-ui/lib/style.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Mint from 'mint-ui';

// 导入页面组件
import Home from './pages/Home';

// 注册路由
Vue.use(VueRouter);
// 引入Ajax
Vue.use(VueResource);
// 引入UI组件
Vue.use(Mint);

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