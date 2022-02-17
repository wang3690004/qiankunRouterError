import { MICROCONFIG } from "./app";
import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from "qiankun";
/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */

registerMicroApps(MICROCONFIG, {
  beforeLoad: () => {
    return Promise.resolve();
  },

  // qiankun 生命周期钩子 - 挂载后
  afterMount: () => {
    return Promise.resolve();
  },
});

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.error(event);

  // const { message: msg } = event;
  // // 加载失败时提示
  // if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
  //   message.error("子应用加载失败，请检查应用是否可运行");
  // }
});
start();
// 导出 qiankun 的启动函数
export default start;
