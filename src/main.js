import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueQrcodeReader from "vue-qrcode-reader";
import * as VueGoogleMaps from "vue2-google-maps";

//Import Google Maps stuff
Vue.use(VueGoogleMaps, {
    load: {
        key: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", //TODO: Get API key
        libraries: "places,drawing,visualization"
    }
});

Vue.use(VueQrcodeReader);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
