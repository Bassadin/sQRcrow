<template>
    <div class="singlecode">
        <v-dialog v-model="dialog" max-width="400" style="z-index:99999">
            <v-card>
                <v-card-title>
                    Aw shit, here we go again.
                </v-card-title>
                <v-card-text>
                    This QR code ID couldn't be found. Maybe it has been deleted
                    or perhaps it has never existed in the first place! Go back
                    to the map and find another one :)
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="yellow darken-1"
                        text
                        @click="this.$router.push('/maps')"
                    >
                        Go back to map
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-layout row wrap justify-center ma-8 v-if="qrCodeData">
            <v-flex xs12 md6 lg6 xl6 ma-3>
                <v-card class="mx-auto" elevation="10" dark>
                    <v-img
                        :src="qrCodeData.image"
                        cover
                        max-height="40vh"
                        class="white--text align-end"
                        style="position:relative;"
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
                            </v-row> </template
                        ><QRCodeDisplay
                            :qrCodeValue="qrCodeId"
                            :displayWidth="160"
                        ></QRCodeDisplay
                    ></v-img>
                    <v-card-title class="headline" primary-title>
                        <v-icon left>mdi-qrcode</v-icon>
                        {{ this.qrCodeData.name }}
                    </v-card-title>

                    <v-card-text>
                        <v-chip color="green" text-color="white">
                            <v-icon left>mdi-upload</v-icon>
                            {{
                                new Date(
                                    qrCodeData.creationTimestamp.seconds * 1000
                                ).toLocaleDateString()
                            }}
                        </v-chip>
                        <v-chip
                            color="yellow"
                            text-color="grey darken-4"
                            class="ml-3"
                        >
                            <v-icon left>mdi-star</v-icon>
                            {{ qrCodeRatingValue }}
                        </v-chip>
                    </v-card-text>
                    <v-flex v-if="this.userIsAuthenticated">
                        <v-divider dark></v-divider>
                        <v-card-actions class="pa-4">
                            Bewerten
                            <v-spacer></v-spacer>
                            <v-rating
                                v-model="qrCodeRatingValue"
                                @input="ratingChanged"
                                background-color="white"
                                color="yellow accent-4"
                                dense
                                half-increments
                                hover
                                size="24"
                            ></v-rating>
                        </v-card-actions>
                    </v-flex>
                </v-card>
            </v-flex>
            <v-flex xs12 md6 lg6 xl6 ma-3>
                <v-card class="mx-auto" elevation="3" outlined>
                    <v-card-title class="headline" primary-title>
                        Location
                    </v-card-title>
                    <v-card-text>
                        <l-map
                            ref="myMap"
                            :zoom="15"
                            :center="markerLocation"
                            :options="{
                                zoomSnap: 0.2
                            }"
                            style="width:100%; height:500px"
                            :max-bounds="bounds"
                        >
                            <l-tile-layer
                                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            ></l-tile-layer>

                            <l-marker
                                :icon="qrCodeLocationIcon"
                                :lat-lng="markerLocation"
                            >
                            </l-marker>
                        </l-map>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
//Firestore
const firebase = require('firebase/app');
require('firebase/firestore');
//QRCode display
import QRCodeDisplay from '@/components/QRCodeDisplay';
//Maps
import * as Leaflet from 'leaflet';
import { latLngBounds } from 'leaflet';
import { LMap, LMarker, LTileLayer } from 'vue2-leaflet';
export default {
    name: 'SingleCode',
    data: () => ({
        qrCodeData: null,
        qrCodeId: null,
        markerLocation: { lat: 0, lng: 0 },
        qrCodeLocationIcon: Leaflet.icon({
            iconUrl: require('@/assets/map-icons/qr-code.svg'),
            iconSize: [32, 32],
            iconAnchor: [16, 0]
        }),
        bounds: latLngBounds([
            [0, 0],
            [0, 0]
        ]),
        dialog: false,
        qrCodeRatingValue: 0
    }),
    components: {
        LMap,
        LMarker,
        LTileLayer,
        QRCodeDisplay
    },
    created() {
        firebase
            .firestore()
            .collection('qr-codes')
            .doc(this.$route.params.qrcodeid) //Get the qr code id from the url parameter
            .get()
            .then(snapshot => {
                this.qrCodeData = snapshot.data();
                this.qrCodeId = snapshot.id;
                if (this.qrCodeData == null) {
                    throw new Error('qrCodeData not found');
                }
                this.markerLocation = {
                    lat: this.qrCodeData.location.latitude,
                    lng: this.qrCodeData.location.longitude
                };
                this.bounds = latLngBounds([
                    [
                        this.qrCodeData.location.latitude,
                        this.qrCodeData.location.longitude
                    ],
                    [
                        this.qrCodeData.location.latitude,
                        this.qrCodeData.location.longitude
                    ]
                ]);
            })
            .then(() => {
                this.updateRating();
            })
            .catch(() => {
                this.dialog = true;
            });
    },
    methods: {
        ratingChanged(newRating) {
            if (!this.userIsAuthenticated || this.qrCodeId == null) {
                this.dialog = true;
            } else {
                firebase
                    .firestore()
                    .collection('ratings')
                    .where('qrCodeId', '==', this.qrCodeId)
                    .where('userId', '==', this.$store.getters.user.id)
                    .get()
                    .then(snapshot => {
                        if (snapshot.empty) {
                            firebase
                                .firestore()
                                .collection('ratings')
                                .add({
                                    qrCodeId: this.qrCodeId,
                                    rating: newRating,
                                    userId: this.$store.getters.user.id
                                });
                        } else {
                            snapshot.docs[0].ref.update({
                                rating: newRating
                            });
                            this.updateRating();
                        }
                    });
            }
        },
        updateRating() {
            let firestoreCollection = firebase
                .firestore()
                .collection('ratings');
            let firestoreQuery = firestoreCollection.where(
                'qrCodeId',
                '==',
                this.qrCodeId
            );
            firestoreQuery
                .get()
                .then(querySnapshot => {
                    if (querySnapshot.empty) {
                        this.qrCodeRatingValue = 0;
                    } else {
                        let ratingsSum = 0;
                        let ratingsAmountCounter = 0;
                        querySnapshot.forEach(doc => {
                            ratingsSum += doc.data().rating;
                            ratingsAmountCounter++;
                        });
                        this.qrCodeRatingValue =
                            ratingsSum / ratingsAmountCounter;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    computed: {
        userIsAuthenticated() {
            return (
                this.$store.getters.user != null &&
                this.$store.getters.user != undefined
            );
        }
    }
};
</script>

<style scoped>
@import '~leaflet/dist/leaflet.css';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
