<template>
  <v-app>
    <div>
     <anasayfa/>
     <div>ALIŞVERİŞ SEPETİNİZ BOŞ</div>
     <nuxt-link to="/">
      <button>ALIŞVERİŞE DEVAM ETMEK İÇİN TIKLAYINIZ </button>   
     </nuxt-link>
     <div style="min-height:150px;max-height:150px">BOŞ YER</div>
    </div>
  </v-app>
</template>

<script>
import Anasayfa from '../components/Anasayfa.vue'
export default {
  components: { Anasayfa },

}
</script>

<style>

</style>