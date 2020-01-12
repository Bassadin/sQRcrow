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
            newsContent: {}
        };
    },
    mounted() {
        this.newsContent = require('../database/news');
    }
};
</script>
