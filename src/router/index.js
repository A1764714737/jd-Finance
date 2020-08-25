import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home/index.vue";
import "../css/reset.scss";
import "swiper/swiper-bundle.css";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
