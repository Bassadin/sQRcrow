<template>
    <div id="app">
        <div class="text-center ma-5">
            <h1 id="header">Alle Codes</h1>
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
                <v-card
                    class="elevation-8 mx-auto"
                    :to="'/codes/' + qrCode.id"
                    dark
                >
                    <v-img
                        class="white--text align-end"
                        height="250px"
                        gradient="to top, rgba(0, 0, 0, .63), rgba(0, 0, 0, 0)"
                        :src="qrCode.image"
                        style="position:relative;"
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
                        <QRCodeDisplay
                            :qrCodeValue="qrCode.id"
                            :displayWidth="120"
                        ></QRCodeDisplay>
                    </v-img>

                    <v-card-text>
                        <v-chip color="green" text-color="white">
                            <v-icon left>mdi-upload</v-icon>
                            {{
                                new Date(
                                    qrCode.creationTimestamp.seconds * 1000
                                ).toLocaleDateString()
                            }}
                        </v-chip>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
//Firestore
import { DB } from '../firebase/db';
import QRCodeDisplay from '@/components/QRCodeDisplay';

export default {
    name: 'codes',
    data() {
        return {
            qrCodeLocations: []
        };
    },
    components: {
        QRCodeDisplay
    },
    firestore: {
        qrCodeLocations: DB.collection('qr-codes')
    }
};
</script>
