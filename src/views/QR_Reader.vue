<template>
    <div class="QR_Reader">
        <QRCodeReader id="qr-reader-component" />
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
