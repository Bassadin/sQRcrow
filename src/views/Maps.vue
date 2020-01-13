<template>
    <div class="maps">
        <l-map
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="width:100%;height:100%"
        >
            <v-locatecontrol :options="{ showCompass: true, flyTo: true }" />
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

            <l-marker
                v-for="marker in qrCodeLocations"
                v-bind:lat-lng="[
                    marker.location.latitude,
                    marker.location.longitude
                ]"
                v-bind:key="marker.id"
                :icon="qrCodeLocationIcon"
            >
                <l-popup :style="'width: ' + popupWidth">
                    <v-card style="width:95%; height:100%;">
                        <v-img
                            class="white--text align-end"
                            height="130px"
                            gradient="to top, rgba(0, 0, 0, .63), rgba(0, 0, 0, 0)"
                            :src="marker.image"
                        >
                            <v-card-title class="headline" primary-title>
                                {{ marker.name }}
                            </v-card-title>
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
                        <v-card-text>
                            <strong>Upload-Datum:</strong><br />
                            {{
                                new Date(
                                    marker.creationTimestamp.seconds * 1000
                                ).toLocaleDateString()
                            }}
                            <br />
                            <strong>Geokoordinaten:</strong><br />
                            {{ marker.location }}
                        </v-card-text>
                    </v-card>
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
import * as Leaflet from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol/Vue2LeafletLocatecontrol';

//Firestore
import { DB } from '../firebase/db';

export default {
    name: 'maps',
    components: {
        LMap,
        LMarker,
        LPopup,
        LTileLayer,
        'v-locatecontrol': Vue2LeafletLocatecontrol
    },
    data() {
        return {
            userLocationIcon: Leaflet.icon({
                iconUrl: require('@/assets/map-icons/target.svg'),
                iconSize: [32, 32],
                iconAnchor: [16, 0]
            }),
            qrCodeLocationIcon: Leaflet.icon({
                iconUrl: require('@/assets/map-icons/qr-code.svg'),
                iconSize: [32, 32],
                iconAnchor: [16, 0]
            }),
            zoom: 14,
            center: { lat: 48.05162, lng: 8.20798 },
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            currentZoom: 7,
            currentCenter: { lat: 47.41322, lng: -1.219482 },
            mapOptions: {
                zoomSnap: 0.2
            },
            showMap: true,
            qrCodeLocations: []
        };
    },
    firestore: {
        qrCodeLocations: DB.collection('qr-codes')
    },
    computed: {
        popupWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return '230px';
                case 'sm':
                    return '250px';
                case 'md':
                    return '300px';
                case 'lg':
                    return '320px';
                case 'xl':
                    return '350px';
            }
            return '0';
        }
    }
};
</script>

<style scoped>
@import '~leaflet/dist/leaflet.css';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
.maps {
    width: 100%;
    height: 100%;
}

.qrCode-popup {
    width: 250px;
}
</style>
