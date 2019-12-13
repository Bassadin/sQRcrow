<template>
    <v-app id="nvaigation">
        <v-navigation-drawer id="nav-drawer" v-model="drawer" app clipped>
            <v-list>
                <v-list-item
                    v-for="page in mainPages"
                    :key="page.text"
                    :to="page.to"
                    link
                >
                    <v-list-item-action>
                        <v-icon>{{ page.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ page.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item
                        v-for="page in lowerPages"
                        :key="page.text"
                        :to="page.to"
                        link
                    >
                        <v-list-item-action>
                            <v-icon>{{ page.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{
                                page.text
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </template>
        </v-navigation-drawer>

        <v-app-bar app clipped-left color="#0D1F2D" dense>
            <v-app-bar-nav-icon
                color="#FDF8E5"
                @click.stop="drawer = !drawer"
            />
            <v-icon class="mx-4" color="#FDF8E5">mdi-qrcode</v-icon>
            <v-toolbar-title class="mr-12 align-center">
                <span class="title" style="color:#FDF8E5">sQRcrow</span>
            </v-toolbar-title>
        </v-app-bar>

        <v-content>
            <slot></slot>
        </v-content>

        <v-btn
            key="mdi-qrcode"
            id="qr-fab"
            color="#00023B"
            fab
            large
            dark
            bottom
            right
            class="fab-button"
            to="/QR_Reader"
        >
            <v-icon>mdi-qrcode</v-icon>
        </v-btn>
    </v-app>
</template>

<script>
export default {
    props: {
        source: String
    },
    data: () => ({
        drawer: null,
        mainPages: [
            { icon: 'mdi-home', text: 'Home', to: '/' },
            { icon: 'mdi-qrcode-scan', text: 'QR-Scanner', to: '/QR_Reader' },
            { icon: 'mdi-map-search', text: 'Map', to: '/maps' },
            {
                icon: 'mdi-access-point-network',
                text: 'Server Status',
                to: '/no_connection'
            }
            //Change if server status is done, default is /no_connection
        ],
        lowerPages: [
            {
                icon: 'mdi-information-outline',
                text: 'Impressum',
                to: '/impressum'
            },
            { icon: 'mdi-help-circle-outline', 
            text: 'Help', 
            to: '/help' }
        ]
    })
};
</script>

<style scoped>
.fab-button {
    bottom: 0;
    right: 0;
    position: fixed;
    margin: 0 22px 22px 0;
}

#nav-drawer,
#qr-fab {
    z-index: 90000; /* Make navbar hover above the map (and everything else) on mobile */
}
</style>
