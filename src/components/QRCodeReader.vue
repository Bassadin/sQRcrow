<template>
    <v-container>
        <qrcode-stream id="qrWindow" @decode="onDecode"></qrcode-stream>
        <h1>{{ qrString }}</h1>
    </v-container>
</template>

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

<style scoped>
#qrWindow {
    height: 100% !important;
    width: 100% !important;
    margin: 0 auto;
}
</style>
