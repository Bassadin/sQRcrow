<template>
    <div class="home">
        <v-layout text-center wrap>
            <v-flex xs12>
                <v-img
                        :src="require('../assets/logos/sQRcrow_logo.svg')"
                        class="my-3"
                        contain
                        height="200"
                ></v-img>
            </v-flex>

            <v-flex mb-4>
                <h1 class="display-2 font-weight-bold mb-3">
                    Welcome to sQRcrow
                </h1>
                <p class="subheading font-weight-regular">
                    Click on <a href="/about">about</a> at the top to try out
                    the qr code scanner
                </p>
            </v-flex>
        </v-layout>
        <v-container fluid>
            <v-row dense>
                <v-col  max-height="auto" max-width="auto"
                        v-for="item in newsContent.news"
                        :key="item"
                        :cols="item.flex">
                    <v-card>
                        <v-img
                            src="http://picsum.photos/700/500"
                            gradient="to bottom, rgba(0.1,0.5,0.2,0.01),rgba(0.1,0.5,0.2,0.01)"
                            height="200px"
                        >
                            <h2>{{item.title}}</h2>
                        </v-img>
                        <v-card-text>
                            <p>
                                {{item.content}}
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
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
        created() {
            this.newsContent = require('../database/news');
        }
    };
</script>

<style scoped>
    .v-card {
        color: #000000;
        font-size: 22px;
    }
    h2{
        color: #cccccc;
        font-size: 30px;
    }
</style>
