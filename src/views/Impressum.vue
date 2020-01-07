<template>
  
  <v-app id="inspire">
      <h1 class="header">Impressum</h1>
    <v-card
      class="mx-auto"
      width="500"
    >
      <v-card-text>
          
        <div class="text--primary">
                    Angaben gemäß § 5 TMG:<br />
                    MIB2 Team Gamma<br />
                    sQRcrow<br />
                    Robert-Gerwig-Platz 1<br />
                    78120 Furtwangen im Schwarzwald<br />

        </div>
       
      </v-card-text>
       <v-img
       src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
       height="200">
           
            
        </v-img>
    </v-card>
  </v-app>

</template>



<script>
export default {
    name: 'Impressum'
};
</script>

<style scoped>
.text--primary{

    text-align: center
}

.header{
    
    text-align: center
}



</style>
