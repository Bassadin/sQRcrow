<template>
  <v-app>
    <AppNavigation />

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppNavigation from "./components/AppNavigation.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    AppNavigation
  },

  data: () => ({
    //
  })
};
</script>
