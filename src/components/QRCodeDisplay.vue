<template>
    <div id="QRCodeDisplay">
        <qrcode
            style="border-radius:10%;position:absolute;top: 5px; right: 5px;"
            :value="value"
            :options="{
                width: 75,
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
    props: ['value']
};
</script>
