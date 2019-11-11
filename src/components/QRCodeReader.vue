<script>
export default {
    name: 'QRCodeReader',
    data: () => ({
        qrString: 'blubb'
    }),
    methods: {
        onDecode(decodedString) {
            this.qrString = decodedString;
        }
    }
};
</script>

<template>
    <v-container>
        <qrcode-stream class="qrWindow" @decode="onDecode"></qrcode-stream>
        <h1>{{ qrString }}</h1>
    </v-container>
</template>

<style scoped>
.qrWindow {
    height: 50vh !important;
    width: 80vw !important;
    margin: 0 auto;
}
</style>
