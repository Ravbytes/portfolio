import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// import { defaultTitle } from "../data/site";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   const nearestWithTitle = to.matched
//     .slice()
//     .reverse()
//     .find((r) => r.name);
//   if (nearestWithTitle) {
//     document.title = `${defaultTitle} | ${nearestWithTitle.name}`;
//   } else {
//     document.title = `${defaultTitle}`;
//   }
//   next();
// });

export default router;
