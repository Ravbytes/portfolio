import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";
import "./assets/css/tiny-slider.css";
import "aos/dist/aos.css";
import AOS from "aos";

App.AOS = new AOS.init({
  ease: "slide",
});

// import "./plugins/bootstrap-vue";
Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
