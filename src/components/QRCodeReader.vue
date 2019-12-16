<template>
    <div id="QRCode">
        <qrcode-stream
        id="qrWindow"
        :key="_uid"
        :track="paintGreenText"
        @decode="onDecode"
        @init="logErrors"
        ></qrcode-stream>
        <v-dialog
                v-model="dialog"
                width = "500">
            <v-card>
                <v-card-title>
                    Oh Oh! Something went wrong!
                </v-card-title>
                <v-card-text>
                    Looks like we don't access to your camera. Please enable access to your camera via your browser.
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'QRCodeReader',
    data: () => ({
        result: null,
        dialog: false
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
            promise.catch(function() {
                this.dialog = !this.dialog;
                console.log("Cykablyat");
            });
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
