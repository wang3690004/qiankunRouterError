import "./public-path";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { asyncRouterMap } from "./router/routes";

let instance = null;
let router = null;
Vue.use(VueRouter);

function render(props = {}) {
  const { container } = props;

  router = new VueRouter({
    // 运行在主应用中时，添加路由命名空间
    base: window.__POWERED_BY_QIANKUN__ ? "/app/cmdb" : "/",
    mode: "history",
    routes: [...asyncRouterMap],
  });

  // 挂载应用
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  // console.log("VueMicroApp bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("cmdb mount");
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("cmdb unmount");
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
