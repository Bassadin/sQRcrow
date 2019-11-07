<script>
export default {
    name: "QRCodeReader",
    data: () => ({
        qrString: "blubb"
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
        <qrcode-stream @decode="onDecode"></qrcode-stream>
        <h1>{{ qrString }}</h1>
    </v-container>
</template>

<style scoped></style>
