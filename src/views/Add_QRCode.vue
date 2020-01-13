<template>

    <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
            QR Code hinzufügen
            <small>Scanne einen neuen QR Code um die Kommentare lesen zu können</small>
        </v-stepper-step>

        <v-stepper-content step="1">
            <v-card class="mb-12" height="200px">

                <qrcode-stream
                        id="qrWindow"
                        :key="_uid"
                        :track="paintGreenText"
                        @decode="onDecode"
                        @init="logErrors"
                ></qrcode-stream>

            </v-card>
            <v-btn color="primary" @click="e6 = 2">Weiter</v-btn>
            <v-btn text>Beenden</v-btn>
        </v-stepper-content>

    </v-stepper>
</template>

<script>
    export default {
        name: 'Add-QRCode',
        data () {
            return {
                e6: 1,
            }
        },
    }
</script>

<style scoped>
    #qrWindow {
        height: 100%;
        margin: 0;
    }
</style>
