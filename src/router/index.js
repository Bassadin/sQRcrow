import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import QR_Reader from '../views/QR_Reader.vue';
import Maps from '../views/Maps.vue';
import Impressum from '../views/Impressum.vue';
import Help from '../views/Help.vue';
import TroubleShooting from '../views/TroubleShooting';
import Codes from '../views/Codes';
import AddQRCode from '../views/Add_QRCode';
import Login from '../views/Login';
import SingleCode from '../views/SingleCode';

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
    },
    {
        path: '/impressum',
        name: 'impressum',
        component: Impressum
    },
    {
        path: '/help',
        name: 'help',
        component: Help
    },
    {
        path: '/QR_TroubleShooting',
        name: 'TroubleShooting',
        component: TroubleShooting
    },
    {
        path: '/codes',
        name: 'Codes',
        component: Codes
    },
    {
        path: '/Add_QRCode',
        name: 'Add_QRCode',
        component: AddQRCode
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/codes/:qrcodeid',
        component: SingleCode
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
    id: 'UA-151954503-1',
    checkDuplicatedScript: true,
    router
});

export default router;
