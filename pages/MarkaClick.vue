<template>
  <v-app>
      <anasayfa/>
      <div class="bir">BOS YER</div>
      <div>
        <v-container>
          <v-row>
            <v-col class="ikincisatir">
              <div >
              Armani Exchange Saatler
              </div>
            </v-col>
            <v-col class="ikincisutun">
              <v-row>
                <nuxt-link  to="/"  style="text-decoration: none; color: inherit;">
                <div class="birincisatir">
                Anasayfa
                </div>
                </nuxt-link>
                <div>></div>
                <div>Armani Exchange Saatler</div>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <filtre/>
      <sizinicinsec/>
      <div class="bir">BOS YER</div>
      <nuxt/>
  </v-app>
</template>

<script>
import Anasayfa from '../components/Anasayfa.vue'
import Filtre from '../components/Filtre.vue'
import Sizinicinsec from '../components/Sizinicinsec.vue'
export default {
  components: { Anasayfa, Filtre, Sizinicinsec },

}
</script>

<style>
.bir{
  height: 250px;
}
.ikincisutun{
  padding-left: 650px;
}
.birincisatir{
  color:gray ;
  text-decoration-color: gray;
}

</style>