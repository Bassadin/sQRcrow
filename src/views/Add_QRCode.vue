<template>
    <v-stepper v-model="currentStepperStep" vertical>
        <v-stepper-step step="1" complete>
            Gebe deinem QR-Code einen Namen
        </v-stepper-step>

        <v-stepper-content step="1">
            <v-text-field label="Name" outlined v-model="name"></v-text-field>

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
            <v-text-field
                class="mt-1"
                label="Breitengrad"
                outlined
                v-model="latitude"
            ></v-text-field
            ><v-text-field
                label="Längengrad"
                outlined
                v-model="longitude"
            ></v-text-field>
            <v-btn
                color="primary"
                @click="
                    currentStepperStep = 4;
                    uploadNewQRCode();
                "
                >Fertig</v-btn
            >
            <v-btn text @click="currentStepperStep = 2">Zurück</v-btn>
        </v-stepper-content>
    </v-stepper>
</template>

<script>
import VImageInput from 'vuetify-image-input';

import * as firebase from 'firebase';

export default {
    name: 'Add-QRCode',
    components: {
        VImageInput
    },
    data() {
        return {
            currentStepperStep: 1
        };
    },
    methods: {
        uploadNewQRCode() {
            let imageUrl;
            let id;

            const newQrCodeData = {
                name: this.name,
                creationTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
                location: {
                    latitude: this.latitude, //Debug data for now
                    longitude: this.longitude
                },
                image: 'abc'
            };

            firebase
                .firestore()
                .collection('qr-codes')
                .add(newQrCodeData)
                .then(data => {
                    id = data.id;
                    return id;
                })
                .then(id => {
                    var firebaseStorageRef = firebase
                        .storage()
                        .ref()
                        .child('qr-code-images/' + id);
                    return firebaseStorageRef.putString(
                        this.imageData,
                        'data_url'
                    );
                })
                .then(fileData => {
                    return firebase
                        .storage()
                        .ref(fileData.metadata.fullPath)
                        .getDownloadURL();
                })
                .then(URL => {
                    imageUrl = URL;
                    return firebase
                        .firestore()
                        .collection('qr-codes')
                        .doc(id)
                        .update({ image: imageUrl });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style scoped>
#qrWindow {
    height: 100%;
    margin: 0;
}
</style>
