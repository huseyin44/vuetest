<template>
  
    <div><v-app>
      <anasayfa/>
      <v-container>
          <v-row>
              <v-col><div>BOŞ YER</div></v-col>
              <v-col><uyegir/></v-col>
          </v-row>
      </v-container></v-app>
    </div>
  
</template>

<script>
import Anasayfa from '../components/Anasayfa.vue'
import Uyegir from '../components/Uyegir.vue'
export default {
  components: { Anasayfa, Uyegir, },

}
</script>

<style>

</style>