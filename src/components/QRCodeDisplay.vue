<template>
    <div id="QRCodeDisplay">
        <qrcode
            style="border-radius:10%;position:absolute;top: 5px; right: 5px;"
            :value="this.qrCodeUrl"
            :options="{
                width: displayWidth,
                margin: 3,
                color: {
                    light: 'FDF8E5FF',
                    dark: '00023BFF'
                }
            }"
        ></qrcode>
    </div>
</template>

<script>
export default {
    name: 'QRCodeDisplay',
    props: {
        qrCodeValue: { type: String, required: true },
        displayWidth: {
            type: Number,
            default: 75
        }
    },
    computed: {
        qrCodeUrl() {
            console.log(this.qrCodeValue);
            return window.location.hostname + '/codes/' + this.qrCodeValue;
        }
    }
};
</script>
