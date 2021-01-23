<template>
  <v-app >
    <div>
    <v-row style="max-height:75px;min-height:75px"><div>BBOŞ YER</div></v-row>
    <v-row>
     <v-col>
      <v-row style="max-height:105px;min-height:105px"><div>BBOŞ YER</div></v-row>
      <v-row>
        <v-col></v-col>
        <v-col><uyegir/></v-col>
      </v-row>
     </v-col>
     <v-col><gozdengecir/></v-col>
    </v-row>
    </div>
  </v-app>
</template>

<script>
import Gozdengecir from '../components/Gozdengecir.vue'
import Uyegir from '../components/Uyegir.vue'
export default {
  components: { Uyegir, Gozdengecir },

}
</script>

<style>

</style>