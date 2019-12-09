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
            @mouseup="mapClick"
        >
            <v-locatecontrol />
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
                <l-popup>
                    <div @click="innerClick">{{ marker.name }}</div>
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
import { db } from '../db';

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
        },
        mapClick(mouseEvent) {
            console.log(mouseEvent);
            //new Leaflet.marker(mouseEvent.latlng).addTo(map);
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
</style>
