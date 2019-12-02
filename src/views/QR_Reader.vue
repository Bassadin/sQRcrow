<template>
    <div class="QR_Reader" style="margin:0 auto;">
        <v-layout text-center wrap>
            <v-flex xs12>
                <QRCodeReader />
            </v-flex>
            <h3>
                Doesn't work? Click <a href="TroubleShooting.vue">here</a>
            </h3>
        </v-layout>
    </div>
</template>

<script>
import QRCodeReader from '@/components/QRCodeReader.vue';

export default {
    name: 'QR_Reader',
    components: {
        QRCodeReader
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
</style>
