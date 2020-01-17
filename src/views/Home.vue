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


            <!--Tawan-->
            <div class="home">
                <v-layout text-center wrap>

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

        <div class="footer">
            <v-footer padless>
                <v-col class="text-center" cols="12">
                    {{ new Date().getFullYear() }} —
                    <strong>sQRcrow</strong>
                </v-col>
            </v-footer>
        </div>

            </v-layout>
            <v-layout justify-center>
                <v-flex>
                    <v-carousel
                        cycle
                        height="400"
                        hide-delimiter-background
                        show-arrows-on-hover
                    >
                        <v-carousel-item v-for="(slide, i) in slides" :key="i">
                            <v-sheet :color="colors[i]" height="100%">
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <div class="display-3">{{ slide }}</div>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
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
            colors: [
                'red',
                'yellow',
                'magenta',
                'green',
                'orange',
                'blue',
                'purple',
                'gray',
                'cyan',
                'dark green',
                'black',
                'silver',
                'pink'
            ],
            slides: [
                'Karten Funktion ist da!',
                'Dummy QRCodes sind jetzt online!',
                'Vergiss nicht, anzumelden!',
                'Made in Germany!',
                'Erstellt eure eigene QRCodes und ' + 'ladet sie hoch!',
                'Noch mehr Funktionen unterwegs!',
                'Geht raus und findet die QRCodes!',
                'Die App ist gut für Entdecker!',
                'Geben Sie uns bitte volle Punktzahl' + ' für dieses Projekt!',
                'Wir sitzen hier so lang, ' +
                    'unsere Rücken fangen an zu schmerzen',
                'Quasi Geocaching lmao',
                'Danke für eure Besuch!',
                "Und jetzt auf geht's!"
            ]
        };
    }
};
</script>
