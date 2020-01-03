<template>
    <div id="app">
        <div class="text-center">
            <h1 id="header">Codes</h1>
        </div>

        <v-layout row wrap justify-center ma-2>
            <v-flex
                xs12
                md6
                lg4
                xl3
                ma-2
                v-for="qrCode in qrCodeLocations"
                :key="qrCode.id"
            >
                <v-card class="elevation-16 mx-auto">
                    <v-img
                        class="white--text align-end"
                        height="160px"
                        gradient="to top, rgba(0, 0, 0, .55), rgba(0, 0, 0, 0)"
                        :src="qrCode.image"
                    >
                        <v-card-title class="headline" primary-title>
                            {{ qrCode.name }}
                        </v-card-title>
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>

                    <v-card-text>
                        <p>
                            Upload-Datum: {{
                                new Date(
                                    qrCode.creationTimestamp.seconds * 1000
                                ).toLocaleDateString()
                            }}
                        </p>
                        <p>{{ qrCode.location }}</p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
//Firestore
import { DB } from '../firebase/db';

export default {
    name: 'codes',
    data() {
        return {
            qrCodeLocations: []
        };
    },
    firestore: {
        qrCodeLocations: DB.collection('qr-codes')
    }
};
</script>
