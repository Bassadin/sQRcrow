<template>

<div id="app">
    <div class="text-center">
        <h1 id="header">Codes</h1>
    </div>
  <v-app id="inspire">
    <v-card
      class="elevation-16 mx-auto"
      width="60%"
    >
      <v-card-title
        class="headline"
        primary-title
      >
        Schwarzwald-Panorama-See
      </v-card-title>
      <v-card-text>
        Wunderschöner See im Schwarzwald, Genuss pur!
  
        <div class="text-center mt-12">
          <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
          </v-img>
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
          ></v-rating>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-space-between">
        <v-btn text>No Thanks</v-btn>
        <v-btn
          color="primary"
          text
        >
          Rate Now
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</div>


</template>

<script>

</script>

<style scoped>
#header {
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
}
#inspire {
   
    margin-top: 25px;
    margin-bottom: 25px;
}
</style>