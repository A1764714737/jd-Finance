import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
console.log(123);
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
