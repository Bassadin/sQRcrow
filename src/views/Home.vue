<template>
    <v-row justify="center">
        <v-col cols="12" sm="8" md="6">

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
                            Click on <a href="/about">about</a> at the top to
                            try out the qr code scanner
                        </p>
                    </v-flex>
                    <v-container fluid>
                        <v-row>
                            <v-col
                                max-height="auto"
                                max-width="auto"
                                v-for="item in newsContent.news"
                                :key="item.key"
                                :cols="item.flex"
                            >
                                <v-card>
                                    <v-img
                                        :src="
                                            require('@/assets/images/news/' +
                                                item.img)
                                        "
                                        height="200px"
                                    >
                                        <h2>{{ item.title }}</h2>
                                    </v-img>
                                    <v-card-text>
                                        <p>
                                            {{ item.content }}
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-layout>
            </div>

        </v-col>
        <div class="footer">
            <v-footer padless>
                <v-col class="text-center" cols="12">
                    {{ new Date().getFullYear() }} —
                    <strong>sQRcrow</strong>
                </v-col>
            </v-footer>
        </div>
    </v-row>

</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    header: 'Aktuell'
                },
                { divider: true },
                {
                    //Info zu User
                    avatar: 'https://picsum.photos/250/300?image=660',
                    title: 'Neues aus Furtwangen',
                    subtitle:
                        "<span class='text--primary'>Julian</span> &mdash; Hallo"
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=821',
                    title:
                        'Ersti Party <span class="grey--text text--lighten-1"></span>',
                    subtitle:
                        "<span class='text--primary'>Lea</span> &mdash; Ich wünschte ich könnte kommen."
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=783',
                    title: ':)',
                    subtitle:
                        "<span class='text--primary'>Sabrina</span> &mdash; hallo zusammen"
                },
                {
                    header: 'Gestern'
                },
                { divider: true },
                {
                    avatar: 'https://picsum.photos/250/300?image=1006',
                    title: 'Haustiere',
                    subtitle:
                        "<span class='text--primary'>Mia</span> &mdash; Meine neue Katze, süß oder?"
                },

                {
                    header: 'Letzte Woche'
                },
                { divider: true },
                {
                    avatar: 'https://picsum.photos/250/300?image=1008',
                    title: 'Mensa',
                    subtitle:
                        "<span class='text--primary'>Nick</span> &mdash; Das gab es heute in der Mensa"
                }
            ],
            newsContent: {}
        };
    },
    mounted() {
        this.newsContent = require('../database/news');
    }
};
</script>

<style scoped>
.header {
    margin-left: 70px;
    color: #00023b;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
}

.comments {
    margin-left: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.footer {
    position: center;
    bottom: 0;
    width: 100%;
}

.v-card {
    color: Black;
    font-size: 22px;
}

h2 {
    color: Black;
    font-size: 30px;
}

p {
    color: #222222;
}
</style>
