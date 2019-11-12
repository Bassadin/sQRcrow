import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueQrcodeReader from 'vue-qrcode-reader';
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_TRACKING_CODE,
    checkDuplicatedScript: true
});

Vue.use(VueQrcodeReader);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
