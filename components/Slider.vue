<template >
  <div id="app"  >
  <v-app id="inspire" > 
    <v-carousel height="700"
      cycle
      delimiter-icon="mdi-minus"       
    >
     <nuxt-link to="/MarkaClick">
      <v-carousel-item   
        v-for="item in sliderurl" 
        :key="item.id"
        :src="item.url"
      >
      </v-carousel-item>
      </nuxt-link>
    </v-carousel>
  </v-app>
</div>
</template>
<script>
import {mapActions,mapState,mapMutations} from 'vuex'
import {DB} from "../plugins/firebase.js"
export default {
 methods:{
    ...mapActions(['getSlider']),
},
 computed:{
     ...mapState(['sliderurl'])
 },
created() {
  this.getSlider()
}
}
</script>