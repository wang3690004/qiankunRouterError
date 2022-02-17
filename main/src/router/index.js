import Vue from "vue";
import VueRouter from "vue-router";
import { asyncRouterMap } from "./route";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...asyncRouterMap],
});

router.beforeEach((to, from, next) => {
  console.log(from, to);
  // if (_.isEmpty(windowHistory.current)) {
  //   _.assign(history.state, { current: from.fullPath });
  // }
  next();
});

export default router;
