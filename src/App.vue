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
    data: () => ({
        //
    }),
    meta: [{ 'theme-color': '#000000' }]
};
</script>
