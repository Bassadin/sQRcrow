<template>
    <div class="maps">
        <v-container text-center wrap>
            <h1>Google Maps example</h1>
            <GmapMap
                :center="{ lat: 10, lng: 10 }"
                :zoom="7"
                map-type-id="terrain"
                style="width: 500px; height: 300px"
            >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center = m.position"
                />
            </GmapMap>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'maps'
};
</script>