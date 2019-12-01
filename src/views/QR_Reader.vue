<template>
    <div class="QR_Reader" style="margin:0 auto;">
        <v-layout text-center wrap>
            <v-flex xs12>
                <QRCodeReader />
            </v-flex>
            <h3>
                Doesn't work? Click <a href="../src/views/CameraGuide">here</a>
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
