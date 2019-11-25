import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

//Firebase
import { firestorePlugin } from 'vuefire';
Vue.use(firestorePlugin);

//vue-meta
import VueMeta from 'vue-meta';
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
});

//Load Leaflet Stuff
import * as Vue2Leaflet from 'vue2-leaflet';
Vue.use(Vue2Leaflet);
import * as Leaflet from 'leaflet';
Vue.use(Leaflet);

import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol';
Vue.component('v-locatecontrol', Vue2LeafletLocatecontrol);

// eslint-disable-next-line
delete L.Icon.Default.prototype._getIconUrl;
// eslint-disable-next-line
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
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
