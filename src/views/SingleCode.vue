<template>
    <div class="singlecode">
        <v-dialog v-model="dialog" max-width="400" style="z-index:99999">
            <v-card>
                <v-card-title>
                    Oh Oh! Something went wrong!
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
        <v-container bg fill-height>
            <v-layout column wrap align-center>
                <v-flex :v-if="qrCode">
                    <v-card class="mx-auto ma-4" elevation="10" outlined>
                        <v-img
                            :src="qrCode.image"
                            contain
                            max-height="40vh"
                            class="white--text align-end"
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
                        ></v-img>
                        <v-card-title class="headline" primary-title>
                            {{ this.qrCode.name }}
                        </v-card-title>
                    </v-card>

                    <v-card class="mx-auto ma-4" elevation="3" outlined>
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
                                style="width:700px; height:400px"
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
        </v-container>
    </div>
</template>

<script>
//Firestore
import * as firebase from 'firebase';

//Maps
import * as Leaflet from 'leaflet';
import { latLngBounds } from 'leaflet';
import { LMap, LMarker, LTileLayer } from 'vue2-leaflet';

export default {
    name: 'SingleCode',
    data: () => ({
        qrCode: null,
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
        dialog: false
    }),
    components: {
        LMap,
        LMarker,
        LTileLayer
    },
    created() {
        this.qrCode = firebase
            .firestore()
            .collection('qr-codes')
            .doc(this.$route.params.qrcodeid)
            .get()
            .then(snapshot => {
                this.qrCode = snapshot.data();
                if (this.qrCode == null) {
                    throw new Error('qrCode not found');
                }
                this.markerLocation = {
                    lat: this.qrCode.location.latitude,
                    lng: this.qrCode.location.longitude
                };
                this.bounds = latLngBounds([
                    [
                        this.qrCode.location.latitude,
                        this.qrCode.location.longitude
                    ],
                    [
                        this.qrCode.location.latitude,
                        this.qrCode.location.longitude
                    ]
                ]);
            })
            .catch(() => {
                this.dialog = true;
            });
    }
};
</script>

<style scoped>
@import '~leaflet/dist/leaflet.css';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
