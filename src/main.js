import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

//Load Leaflet Stuff
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

//Analytics
import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_TRACKING_CODE,
    checkDuplicatedScript: true
});

//QR Reader
import VueQrcodeReader from 'vue-qrcode-reader';
Vue.use(VueQrcodeReader);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
