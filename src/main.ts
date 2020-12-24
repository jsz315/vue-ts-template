import Vue from "vue";
import App from "./App.vue";
import { TypeDemo } from "./as2ts/TypeDemo";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

new TypeDemo();