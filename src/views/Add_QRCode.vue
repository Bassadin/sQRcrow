<template>
    <v-stepper v-model="e13" vertical>
        <v-stepper-step step="1" complete>
            Gebe deinem QR-Code einen Namen
        </v-stepper-step>

        <v-stepper-content step="1">
            <v-text-field placeholder="Name eingeben" outlined></v-text-field>

            <v-btn color="primary" @click="e13 = 2">Weiter</v-btn>
            <v-btn text>Beenden</v-btn>
        </v-stepper-content>

        <v-stepper-step step="2" complete>
            Lade einen neuen QR-Code hoch
        </v-stepper-step>

        <v-stepper-content step="2">
            <v-content> <input type="file" /><br /> </v-content><br />

            <v-btn color="primary" @click="e13 = 3">Weiter</v-btn>
            <v-btn text>Beenden</v-btn>
        </v-stepper-content>

        <v-stepper-step step="3" complete>
            Location
        </v-stepper-step>

        <v-stepper-content step="3">
            <v-btn color="primary" @click="e13 = 4">Upload</v-btn>
            <v-btn text>Beenden</v-btn>
        </v-stepper-content>
    </v-stepper>
</template>

<script>
export default {
    name: 'Add-QRCode',

    data() {
        return {
            e13: 1
        };
    }
};
</script>

<style scoped>
#qrWindow {
    height: 100%;
    margin: 0;
}
</style>
