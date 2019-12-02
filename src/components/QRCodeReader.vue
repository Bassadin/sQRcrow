<template>
    <qrcode-stream
        id="qrWindow"
        :key="_uid"
        :track="paintGreenText"
        @decode="onDecode"
        @init="logErrors"
    ></qrcode-stream>
</template>

<script>
export default {
    name: 'QRCodeReader',
    data: () => ({
        result: null
    }),
    methods: {
        onDecode(decodedString) {
            this.result = decodedString;
        },
        paintGreenText(location, ctx) {
            const {
                topLeftCorner,
                topRightCorner,
                bottomLeftCorner,
                bottomRightCorner
            } = location;

            const pointArray = [
                topLeftCorner,
                topRightCorner,
                bottomLeftCorner,
                bottomRightCorner
            ];

            const centerX = pointArray.reduce((sum, { x }) => x + sum, 0) / 4;
            const centerY = pointArray.reduce((sum, { y }) => y + sum, 0) / 4;

            ctx.font = 'bold 30px Roboto';
            ctx.textAlign = 'center';

            ctx.lineWidth = 3;
            ctx.strokeStyle = '#35495e';
            ctx.strokeText(this.result, centerX, centerY);

            ctx.fillStyle = '#5cb984';
            ctx.fillText(this.result, centerX, centerY);
        },
        logErrors(promise) {
            promise.catch(console.error);
        }
    }
};
</script>

<style scoped>
#qrWindow {
    height: 100% !important;
    width: 100% !important;
    margin: 0;
    padding: 0;
}
</style>
