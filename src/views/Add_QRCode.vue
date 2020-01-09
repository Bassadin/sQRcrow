<template>
    <v-stepper v-model="currentStepperStep" vertical>
        <v-stepper-step step="1" complete>
            Gebe deinem QR-Code einen Namen
        </v-stepper-step>

        <v-stepper-content step="1">
            <v-text-field placeholder="Name eingeben" outlined></v-text-field>

            <v-btn color="primary" @click="currentStepperStep = 2"
                >Weiter</v-btn
            >
        </v-stepper-content>

        <v-stepper-step step="2" complete>
            Lade einen neuen QR-Code hoch
        </v-stepper-step>

        <v-stepper-content step="2">
            <v-image-input
                v-model="imageData"
                :image-quality="0.85"
                clearable
                image-format="jpeg"
            />
            <br />
            <v-btn color="primary" @click="currentStepperStep = 3"
                >Weiter</v-btn
            >
            <v-btn text @click="currentStepperStep = 1">Zurück</v-btn>
        </v-stepper-content>

        <v-stepper-step step="3" complete>
            Location
        </v-stepper-step>

        <v-stepper-content step="3">
            <v-btn color="primary" @click="currentStepperStep = 4"
                >Fertig</v-btn
            >
            <v-btn text @click="currentStepperStep = 2">Zurück</v-btn>
        </v-stepper-content>
    </v-stepper>
</template>

<script>
import VImageInput from 'vuetify-image-input';

export default {
    name: 'Add-QRCode',
    components: {
        VImageInput
    },
    data() {
        return {
            currentStepperStep: 1
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
