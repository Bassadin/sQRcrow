import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import QR_Reader from '../views/QR_Reader.vue';
import Maps from '../views/Maps.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/QR_Reader',
        name: 'QR-Reader',
        component: QR_Reader
    },
    {
        path: '/maps',
        name: 'maps',
        component: Maps
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

//Analytics
import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_TRACKING_CODE,
    checkDuplicatedScript: true,
    router
});

export default router;
