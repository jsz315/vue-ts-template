import Vue from "vue";
import App from "./App.vue";
import { Demo } from "./as2ts/Demo";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

new Demo();