<template>
 <div>
     <v-app container>
         <v-col class="border">
                 <v-row><div style="padding:0px 0px 0px 7px;font-size:20px">Siparis Gözden Geçir</div></v-row>
                 <v-row style="height:7px"></v-row>
                 <v-row class="dorduncu"><div style="color:black;padding:0px 0px 0px 7px;">Sepet</div></v-row>
                 <v-row style="height:7px"></v-row>
                 <v-row class="ikincisatir">
                  <v-col>
                    <img style="max-height:75px;max-width:75px" src="https://cdn.saatvesaat.com.tr/media/catalog/product/a/x/ax2802_1.jpg">
                  </v-col>
                  <v-col style="max-width:75px;padding:40px 0px 0px 0px;color:gray"><div>Adet 1</div></v-col>
                  <v-col><div style="white-spaca:nowrap;padding:28px 0px 0px 0px;color:gray">337000 TL</div></v-col>
                </v-row>
                <v-row style="height:7px"></v-row>
                <v-row class="ucuncusatir">
                 <v-col style="max-width:125px">
                  <div style="padding:0px 0px 0px 7px;color:#777">Ara Toplam</div>
                 </v-col>
                 <v-col>
                   <v-row>
                    <div style="padding:0px 0px 0px 70px;color:#777">337000 TL</div>
                  </v-row>
                  <v-row>
                   <v-col style="max-width:55px;color:#777">İndirim</v-col>
                   <v-col style="color:#777;whites-space:nowrap">-185400 TL</v-col>
                 </v-row>
                 </v-col>
                </v-row>
                <v-row>
                  <v-col style="max-width:125px">
                  <div style="padding:0px 0px 0px 7px;color:#9c0c0c !important;white-space:nowrap">Genel Toplam</div>
                 </v-col>
                 <v-col style="color:#9c0c0c !important;whites-space:nowrap">
                   <div style="padding:0px 0px 0px 60px">151600 TL</div>
                 </v-col>
                </v-row>
         </v-col>
     </v-app>
 </div>
</template>

<script>
export default {

}
</script>

<style>
.border{
border-top-style:solid ;
border-bottom:solid ;
border-right:solid ;
border-left:solid ;
border-color:lightgray;
max-height: 350px;
width: 290px;
border-width: 1px;
}
.ikincisatir{
border-top-style:none ;
border-bottom:solid ;
border-right:none ;
border-left:none ;
border-color:lightgray;
border-width: 1px;
}
.ucuncusatir{
border-top-style:none ;
border-bottom:solid ;
border-right:none ;
border-left:none ;
border-color:lightgray;
border-width: 1px;
max-height: 70px;
}
.dorduncu{
border-top-style:solid ;
border-bottom:none ;
border-right:none ;
border-left:none ;
border-color:lightgray;
border-width: 1px;
}
</style>