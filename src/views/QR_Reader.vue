<template>
    <div class="QR_Reader">
        <v-container text-center wrap>
            <QRCodeReader />
        </v-container>
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
