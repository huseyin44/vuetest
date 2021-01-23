<template>
    <v-app class="uzunluk">
      <div>
     <anasayfa/>
     <anasayfa-2/>
     <slider/>
     <haftanin-firsat/>
     <sizinicinsec/>
     <markalar/>
      </div>
    </v-app>
</template>

<script>
import Anasayfa from '../components/Anasayfa.vue'
import Anasayfa2 from '../components/Anasayfa2.vue'
import HaftaninFirsat from '../components/HaftaninFirsat.vue'
import Markalar from '../components/Markalar.vue'
import Sizinicinsec from '../components/Sizinicinsec.vue'
import Slider from '../components/Slider.vue'
export default {
  components: { Anasayfa, Slider,Sizinicinsec, Markalar, Anasayfa2, HaftaninFirsat }
  }
</script>
<style>
</style>