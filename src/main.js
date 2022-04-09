import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import CursorFx from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
import Vuelidate from "vuelidate";
import VueYoutube from "vue-youtube";
import VueSocialSharing from "vue-social-sharing";
import VueGoodLinks from "vue-good-links";

// import the styles
import "vue-good-links/dist/vue-good-links.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

Vue.use(VueGoodLinks);
Vue.use(VueYoutube);
Vue.use(Vuelidate);
Vue.use(VueSocialSharing);

Vue.config.productionTip = false;
Vue.mixin({
  created: function () {
    this.gsap = gsap;
  },
});
new Vue({
  vuetify,
  CursorFx,
  router,
  store,
  mounted() {
    AOS.init({
      mirror: true,
      once: false,
    });
  },
  render: (h) => h(App),
}).$mount("#app");
