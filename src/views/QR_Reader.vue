<template>
    <div class="QR_Reader" style="margin:0 auto;">
        <v-layout text-center wrap>
            <v-flex xs12>
                <QRCodeReader />
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import QRCodeReader from '@/components/QRCodeReader.vue';

export default {
    name: 'QR_Reader',
    data(){
        return{dialog: false}
    },
    components: {
        QRCodeReader
    },
    method:{
        logErrors(promise) {
            promise.catch(function() {

            });
        }
    }
};
</script>

<style scoped>
#qr-reader-component {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

.QR_Reader {
    height: 100%;
    width: 100%;
}

h3{
    text-align: center;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
}
</style>
