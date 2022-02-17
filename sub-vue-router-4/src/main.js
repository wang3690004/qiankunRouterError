import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

let app = createApp(App);

function render(props = {}) {
  const { container } = props;

  app.use(router).mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {}
export async function mount(props) {
  render(props);
  app.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  app.config.globalProperties.$setGlobalState = props.setGlobalState;
  console.log("yauth mount");
}
export async function unmount() {
  console.log("yauth unmount");
  app.unmount();
  app._container.innerHTML = "";
  app = null;
}
