主应用 main  qiankun 2.6.3  vue-router 3.2.0 vue2.6.11


子应用1  sub-vue-router-3  vue-router 3.2.0  vue 2.6.11


子应用2 sub-vue-router-4  vue-router 4.0.12 vue 3.2.30 

主应用默认加载子应用1

复现过程：  

通过主应用的 两个按钮(router.push,  history.pushstate)两种方式  切换两个子应用  

先从子应用1-> 子应用2      没有任何问题

子应用2 -> 子应用1        没有问题

子应用1  ->  子应用2      报错



