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
        <v-card max-height="420" max-width="250">
            <v-card-text>

            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    var newsData = require("../database/news");

    export default {
        data(){
            return{
                newsContent: newsData.news
            }

        }
        }
</script>
