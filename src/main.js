import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局函数及变量
import Global from './Global';
Vue.use(Global);

import Axios from 'axios';
Vue.prototype.$axios = Axios;
// 全局请求拦截器
Axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // 跳转error页面
    router.push({ path: "/" });
    return Promise.reject(error);
  }
);
// 全局响应拦截器
Axios.interceptors.response.use(
  res => {
    if (res.data.code === "500") {
      // 500表示服务器异常
      // 跳转error页面
      router.push({ path: "/" });
    }
    return res;
  },
  error => {
    // 跳转error页面
    router.push({ path: "/" });
    return Promise.reject(error);
  }
);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
