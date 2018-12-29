import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      component: () => import("./views/About.vue"),
      name: "about",
      meta: {
        title: "商品详情"
      }
    }
  ]
});
