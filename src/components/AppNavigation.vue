<template>
    <v-app-bar app color="brown darken-4" dark>
        <v-spacer class="hidden-md-and-up"></v-spacer>
        <v-toolbar-title>sQRcrow</v-toolbar-title>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/about">QR Reader</v-btn>
        <v-btn to="/maps">Maps</v-btn>
        <v-spacer></v-spacer>
        <v-btn text>SIGN IN</v-btn>
        <v-btn color="brown lighten-3">JOIN</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppNavigation"
};
</script>

<style scoped></style>
