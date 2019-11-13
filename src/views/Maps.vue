<template>
    <div class="maps">
        <v-layout text-center wrap>
            <l-map
                v-if="showMap"
                :zoom="zoom"
                :center="center"
                :options="mapOptions"
                style="height:80vh"
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
                    v-for="marker in markers"
                    v-bind:lat-lng="marker.coordinates"
                    v-bind:key="marker.id"
                    :icon="qrCodeLocationIcon"
                >
                    <l-popup>
                        <div @click="innerClick">{{ marker.content }}</div>
                    </l-popup>
                </l-marker>
            </l-map>
        </v-layout>
    </div>
</template>

<script>
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import L from 'leaflet';

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
            markers: [
                {
                    coordinates: latLng(48.05162, 8.20798),
                    content: 'Cursed Clocktower'
                },
                {
                    coordinates: latLng(48.04, 8.208),
                    content: 'Student Flats of DOOM'
                }
            ]
        };
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
