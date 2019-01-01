import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "boot",
      component: () => import("./views/Boot/Boot.vue"),
      meta: {
        title: "引导页"
      }
    },
    {
      path: "/home",
      component: () => import("./views/home/home.vue"),
      name: "home",
      meta: {
        title: "首页"
      }
    }
  ]
});
