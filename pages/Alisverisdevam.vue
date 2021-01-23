<template>
  <v-app>
    <div>
    <anasayfa/>
    <div style="min-height:35px">BOŞ YER</div>
    <siparis/>
    </div>
  </v-app>
</template>

<script>
import Anasayfa from '../components/Anasayfa.vue'
import Siparis from '../components/Siparis.vue'
export default {
  components: { Anasayfa, Siparis },

}
</script>

<style>

</style>