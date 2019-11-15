<template>
    <v-app>
        <AppNavigation>
            <router-view></router-view>
        </AppNavigation>
    </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue';

export default {
    name: 'App',
    components: {
        AppNavigation
    },
    data: () => ({}),
    metaInfo: {
        title: process.env.VUE_APP_NAME,
        htmlAttrs: {
            lang: 'de-DE'
        },
        meta: [{ name: 'theme-color', content: '#0D1F2D' }],
        link: [
            {
                rel: 'shortcut icon',
                href: require('@/assets/logos/sQRcrow_logo.png'),
                type: 'image/x-icon'
            }
        ]
    }
};
</script>
