import Vue from 'vue';
import { Toast } from 'mint-ui';

let _ajax = (options) => {
  // Vue.http.options.headers = {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
  // };
  Vue.http.options.emulateJSON = true;
  return new Promise((resolve, reject) => {
    Vue.http({
      url: options.url,
      method: options.method,
      data: options.data || {}
    }).then((res) => {
      resolve(res.data);
    }, (res) => {
      Toast('请求服务器失败，请重试');
    });
  });
};

let get = (url, options) => {
  return _ajax({ method: 'get', url: url, options: options });
};

let post = (url, data, options) => {
  return _ajax({ method: 'post', url: url, data: data, options: options });
};

let put = (url, data, options) => {
  return _ajax({ method: 'put', url: url, data: data, options: options });
};

// 为了避免和关键字重名
let delete2 = (url, options) => {
  return _ajax({ method: 'delete', url: url, options: options });
};

module.exports = {
  get: get,
  post: post,
  put: put,
  delete: delete2
};