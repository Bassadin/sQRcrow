<template>
  <v-app-bar app color="brown darken-4" dark>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-toolbar-title>blubb</v-toolbar-title>
    <v-btn to="/" text class="hidden-sm-and-down">Home</v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/about" text class="hidden-sm-and-down">About</v-btn>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-btn text class="hidden-sm-and-down">SIGN IN</v-btn>
    <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppNavigation"
};
</script>

<style scoped></style>
