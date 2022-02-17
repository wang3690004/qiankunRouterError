import { createRouter, createWebHistory } from "vue-router";
import { asyncRouteMap } from "./routes";

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/app/auth" : "/"),
  routes: [...asyncRouteMap],
});

export default router;
