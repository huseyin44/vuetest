<template>
  <div id="haftaninfirsat" class="haftalik">
   <nuxt-link to="/MarkaClick">
   <img class="resim" src="https://cdn.saatvesaat.com.tr/media/wysiwyg/home-showcase/cok-satanlar-0920.jpg" >
   </nuxt-link>
   <div class="firsat">
  <div class="test">HAFTANIN FIRSATLARI
  <div >
  <v-sheet >
    <v-slide-group  >
      <v-slide-item 
        v-for="(item,i) in saatler"
        :key="i"
        v-slot="{ active, toggle }"
      >
        <v-btn height="400" width="220" 
          :input-value="active"
          @click="toggle"
        >
        <div class="slidegrp">
          <nuxt-link to="/Sepet">
          <img  :src="item.url" width="225" height="280" >
          </nuxt-link>
          <div>
              <input type="text" :placeholder="item.marka">
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
        </div>   
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
 </div>
   </div> </div>
</div>
  
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex'
import {DB} from "../plugins/firebase.js"
export default {
 data:()=>({
   url:'',
   marka:'',
   isim:'',
   fiyat:0
 }),

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

<style scoped>

div.test{
  color:white;
  background: black;
  text-align: center;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  text-align:center;
 
}
.resim{
 height: 400px;
 width: 700px;
}
.haftalik{
column-count : 2;
}
.firsat{
  column-width:500px;
  height: 400px;
  width:750px ; 
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
.slidegrp{
    background: white;
}
</style>