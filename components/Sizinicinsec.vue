<template>
 <div style="min-height:300px">
 <div height="30" class="a">a</div>
 <div class="test2">Öne Çıkanlar</div>
 <div >
  <v-sheet  height="350">
    <v-slide-group  >
      <v-slide-item 
        v-for="item in saatler"
        :key="item.id"
        v-slot="{ active, toggle }"
      >
        <v-btn height="300" width="220" 
          :input-value="active"
          @click="toggle"
        >
        <div class="slidegrp">
          <nuxt-link to="/Sepet">
          <img  :src="item.url" width="225" height="230" >
          </nuxt-link>
          <div>
              <input type="text" :placeholder="item.marka" height="15">
          </div>
          <div>
              <input type="text" :placeholder="item.isim" height="15">
          </div>
          <div>
              <input type="text" :placeholder="item.fiyat +'  ' +'TL'" height="15" class="fiyat">      
          </div>
          <div >
              <input type="text" :placeholder="item.indirimli +'  ' +'TL'" height="15" class="indirimli" >
          </div>
          <div hidden >
               <img  :src="item.url2" >
          </div>
        </div>   
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
 </div>
  </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex'
import {DB} from "../plugins/firebase.js"
export default {
 methods:{
    ...mapActions(['getSaatler']),
},
 computed:{
     ...mapState(['saatler'])
 },
created() {
  this.getSaatler()
}
}
</script>

<style scoped >
.a{
    visibility: hidden;
}
.test2{
    height: 32px;
    line-height: 32px;
    background: #b3afaf36;
    color: black;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
}
.slidegrp{
    background: white;
    
}
.fiyat::placeholder{
    text-decoration: line-through;
    color: #b3afaff6 ;
    font-family: sans-serif;
}
.indirimli::placeholder{
    color: #c70f0f;
    font-family: sans-serif;
}

</style> 
