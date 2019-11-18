<template>
    <div class="maps">
        <l-map
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="width:100%;height:100%"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
        >
            <l-tile-layer :url="url" :attribution="attribution" />

            <l-marker :lat-lng="userCoordinates" :icon="userLocationIcon">
                <l-popup>
                    <div @click="innerClick">Your Location</div>
                </l-popup>
            </l-marker>

            <l-marker
                v-for="marker in qrCodeLocations"
                v-bind:lat-lng="[
                    marker.location.latitude,
                    marker.location.longitude
                ]"
                v-bind:key="marker.id"
                :icon="qrCodeLocationIcon"
            >
                <l-popup>
                    <div @click="innerClick">{{ marker.name }}</div>
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
//Maps
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import L from 'leaflet';

//Firestore
import { db } from '../db';

export default {
    name: 'maps',
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup
    },
    data() {
        return {
            userLocationIcon: L.icon({
                iconUrl: require('@/assets/map-icons/target.svg'),
                iconSize: [32, 32],
                iconAnchor: [16, 0]
            }),
            qrCodeLocationIcon: L.icon({
                iconUrl: require('@/assets/map-icons/qr-code.svg'),
                iconSize: [32, 32],
                iconAnchor: [16, 0]
            }),
            zoom: 14,
            center: latLng(48.05162, 8.20798),
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            currentZoom: 7,
            currentCenter: latLng(47.41322, -1.219482),
            mapOptions: {
                zoomSnap: 0.2
            },
            showMap: true,
            userCoordinates: latLng(48.05162, 8.20798),
            qrCodeLocations: []
        };
    },
    firestore: {
        qrCodeLocations: db.collection('qr-codes')
    },
    methods: {
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
        innerClick() {
            // alert('Click!');
        }
    },
    mounted() {
        this.$watchLocation({
            enableHighAccuracy: true
        }).then(coordinates => {
            this.userCoordinates = coordinates;
        });
    }
};
</script>

<style scoped>
.maps {
    width: 100%;
    height: 100%;
}
</style>
