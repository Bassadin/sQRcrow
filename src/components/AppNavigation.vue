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
            <v-spacer></v-spacer>

            <template v-if="!this.userIsAuthenticated">
                <v-btn color="primary" to="/login"
                    ><v-icon left>mdi-login-variant</v-icon> Log in</v-btn
                >
            </template>
            <template v-else>
                <!-- TODO Signout -->
                <v-btn color="warning" @click="logout">Log out</v-btn>
            </template>
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
            v-if="this.hasWebcam() == true"
        >
            <v-icon>mdi-qrcode</v-icon>
        </v-btn>
    </v-app>
</template>

<script>
// var DetectRTC = require('detectrtc');

export default {
    props: {
        source: String
    },
    data: () => ({
        drawer: null,
        lowerPages: [
            {
                icon: 'mdi-information-outline',
                text: 'Impressum',
                to: '/impressum'
            },
            { icon: 'mdi-help-circle-outline', text: 'Help', to: '/help' }
        ]
    }),
    computed: {
        userIsAuthenticated() {
            return (
                this.$store.getters.user != null &&
                this.$store.getters.user != undefined
            );
        },
        user() {
            return this.$store.getters.user;
        },
        mainPages() {
            let mainPagesToAdd = [];

            mainPagesToAdd.push({ icon: 'mdi-home', text: 'Home', to: '/' });

            if (this.hasWebcam()) {
                mainPagesToAdd.push({
                    icon: 'mdi-qrcode-scan',
                    text: 'QR-Scanner',
                    to: '/QR_Reader'
                });
            }

            mainPagesToAdd.push({
                icon: 'mdi-map-search',
                text: 'Map',
                to: '/maps'
            });
            mainPagesToAdd.push({
                icon: 'mdi-qrcode',
                text: 'Add QR-Code',
                to: '/Add_QRCode'
            });
            mainPagesToAdd.push({
                icon: 'mdi-qrcode',
                text: 'Codes',
                to: '/codes'
            });

            return mainPagesToAdd;
        }
    },
    watch: {
        user(value) {
            if (value == null && value == undefined) {
                this.$router.push('/');
            }
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logoutUser');
        },
        hasWebcam() {
            //TODO...
            // DetectRTC.load();
            // console.log(DetectRTC.hasWebcam);
            // return DetectRTC.hasWebcam;
            return true;
        }
    }
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
    /* Make navbar hover above the map (and everything else) on mobile */
    z-index: 90000;
}
</style>
