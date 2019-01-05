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
      path: "/",
      component: () => import("./views/all.vue"),
      redirect: "/Home",
      children: [
        {
          path: "/home",
          component: () => import("./views/home/home.vue"),
          name: "home",
          meta: {
            title: "首页"
          }
        },
        {
          path: "/search",
          component: () => import("./views/search/search.vue"),
          name: "search",
          meta: {
            title: "搜索结果"
          }
        },
        {
          path: "/searchExhibition",
          component: () => import("./views/search/searchExhibition.vue"),
          name: "searchExhibition",
          meta: {
            title: "展会搜索结果"
          }
        },
        {
          path: "/searchBrochure",
          component: () => import("./views/search/searchBrochure.vue"),
          name: "searchBrochure",
          meta: {
            title: "产品搜索结果"
          }
        },
        {
          path: "/searchCompaby",
          component: () => import("./views/search/searchCompaby.vue"),
          name: "searchCompaby",
          meta: {
            title: "企业搜索结果"
          }
        },
        {
          path: "/searchImages",
          component: () => import("./views/search/searhImages.vue"),
          name: "searchImages",
          meta: {
            title: "图片搜索结果"
          }
        },
        {
          path: "/searchEvent",
          component: () => import("./views/search/searchEvent.vue"),
          name: "searchEvent",
          meta: {
            title: "动态搜索结果"
          }
        },
        {
          path: "/News",
          component: () => import("./views/news/news.vue"),
          name: "News",
          meta: {
            title: "消息列表页"
          }
        },
        {
          path: "/enterprise",
          component: () => import("./views/enterprise/enterprise.vue"),
          name: "enterprise",
          meta: {
            title: "企业发现"
          }
        },
        {
          path: "/history",
          component: () => import("./views/enterprise/history.vue"),
          name: "history",
          meta: {
            title: "历史纪录"
          }
        },
        {
          path: "/collection",
          component: () => import("./views/enterprise/collection.vue"),
          name: "collection",
          meta: {
            title: "收藏记录"
          }
        }
      ]
    }
  ]
});
