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
                <v-flex
                    xs12
                    md6
                    lg4
                    xl3
                    ma-2
                    v-for="item in newsContent.news"
                    :key="item.key"
                >
                    <v-card>
                        <v-img
                            :src="require('@/assets/images/news/' + item.img)"
                            height="200px"
                        >
                        </v-img>
                        <v-card-title>
                            {{ item.title }}
                        </v-card-title>
                        <v-card-subtitle>
                            {{ item.content }}
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
