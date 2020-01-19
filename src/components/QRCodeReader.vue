<template>
    <div id="QRCode">
        <qrcode-stream
            id="qrWindow"
            :key="_uid"
            :track="paintGreenText"
            @decode="onDecode"
            @init="onInit"
        ></qrcode-stream>
        <v-dialog v-model="dialog" max-width="400">
            <v-card>
                <v-card-title>
                    Oh Oh! Something went wrong!
                </v-card-title>
                <v-card-text>
                    <p>
                        sQRcrow couldn't access your camera. Please enable
                        access to your camera in your browser.
                    </p>
                    <strong>Error message: {{ this.error }}</strong>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="green darken-1" text @click="refreshView">
                        Refresh
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'QRCodeReader',
    data: () => ({
        decodedStringValue: null,
        detectedQrCodeId: null,
        dialog: false,
        error: ''
    }),
    methods: {
        onDecode(decodedString) {
            this.decodedStringValue = decodedString;
            this.detectedQrCodeId = this.decodedStringValue.substr(
                this.decodedStringValue.lastIndexOf('/') + 1
            );
            this.$router.push('/codes/' + this.detectedQrCodeId);
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
            ctx.strokeText(this.detectedQrCodeId, centerX, centerY);

            ctx.fillStyle = '#5cb984';
            ctx.fillText(this.detectedQrCodeId, centerX, centerY);
        },
        async onInit(promise) {
            try {
                await promise;
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    this.error =
                        'ERROR: you need to grant camera access permisson';
                } else if (error.name === 'NotFoundError') {
                    this.error = 'ERROR: no camera on this device';
                } else if (error.name === 'NotSupportedError') {
                    this.error =
                        'ERROR: secure context required (HTTPS, localhost)';
                } else if (error.name === 'NotReadableError') {
                    this.error = 'ERROR: is the camera already in use?';
                } else if (error.name === 'OverconstrainedError') {
                    this.error = 'ERROR: installed cameras are not suitable';
                } else if (error.name === 'StreamApiNotSupportedError') {
                    this.error =
                        'ERROR: Stream API is not supported in this browser';
                }
                if (error) {
                    this.dialog = true;
                }
            }
        },
        refreshView() {
            this.$router.go();
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
