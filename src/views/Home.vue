<template>
    <div class="Home">
        <v-container fluid>
            <v-layout text-center column ma-4>
                <h1 class="display-2 font-weight-bold mb-3">
                    Welcome to sQRcrow
                </h1>
                <p class="subheading font-weight-regular">
                    The location-based qr code network
                </p>
                <v-img
                    :src="require('../assets/logos/sQRcrow_logo.svg')"
                    contain
                    height="200"
                ></v-img>
                <v-divider></v-divider>
            </v-layout>
            <v-layout row wrap justify-center ma-2>
                <div class="grey lighten-4 pa-4">
                    <v-row align="center" justify="center">
                        <v-col cols=auto md=auto sm=auto>
                            <v-card>
                                <v-subheader class="subheader" >
                                    <h2>Wie nutzt man diese App?</h2>
                                </v-subheader>
                                <v-list>
                                    <template v-for="(item, index) in items">
                                        <v-list-item
                                            v-if="item.action"
                                            :key="item.title"

                                        >
                                            <v-list-item-action>
                                                <v-icon
                                                    >{{ item.action }}</v-icon
                                                >
                                            </v-list-item-action>

                                            <v-list-item-content>
                                                <v-list-item-title
                                                    >{{item.title}} </v-list-item-title
                                                >
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-divider
                                                v-else-if="item.divider"
                                                :key="index"
                                        ></v-divider>
                                    </template>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row
                            class="mt-12"
                            align="center"
                            justify="center"
                    >
                        <v-col
                                cols=auto
                                md=auto
                        >
                        </v-col>
                    </v-row>
                </div>
            </v-layout>
            <v-layout row wrap justify-center ma-2>
                <v-flex xs12 md6 lg4 xl3 ma-2>
                    <v-card
                        href="https://github.com/hfu-gis/gamma/commits/master"
                        target="_blank"
                    >
                        <v-img
                            :src="require('@/assets/images/news/whatsnew.jpg')"
                            height="200px"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                >
                                    <v-progress-circular
                                        indeterminate
                                        color="grey lighten-5"
                                    ></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <v-card-title>
                            What's new?
                        </v-card-title>
                        <v-card-subtitle>
                            Camera and google maps working, first dummy data is
                            there as well!
                        </v-card-subtitle>
                    </v-card>
                </v-flex>
                <v-flex xs12 md6 lg4 xl3 ma-2>
                    <v-card
                        href="https://github.com/hfu-gis/gamma/issues"
                        target="_blank"
                    >
                        <v-img
                            :src="require('@/assets/images/news/bugs.jpg')"
                            height="200px"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                >
                                    <v-progress-circular
                                        indeterminate
                                        color="grey lighten-5"
                                    ></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <v-card-title>
                            Known Issues
                        </v-card-title>
                        <v-card-subtitle>
                            Learn about known issues and bug reports as well as
                            feature requests.
                        </v-card-subtitle>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items:[
                {
                    action: 'Erstellen',
                    title: 'Deine eigene QRCodes bei uns!',
                },
                {
                    divider: true,
                },
                {
                    action: 'Kleben ',
                    title: 'Wo immer du willst!'
                },
                {
                    divider: true,
                },
                {
                    action: 'Scannen',
                    title: 'Dann bist du live bei uns!'
                },
                {
                    action: 'Und?',
                    title: 'Für Jeden in allem Alter!'
                }
            ]
        };
    }
};
</script>
<style scoped>
</style>