<template>
<div>
  <v-app container id="sepet">    
  <v-container>
      <v-row>
          <v-col>
              <v-row style="max-width:250%">
                  <v-col style="width:1%"><div>ÜRÜN</div></v-col>
                  <v-col width="50%"></v-col>
                  <v-col style="max-width:13%"><div>ADET</div></v-col>
                  <v-col style="max-width:13%"><div>FİYAT</div></v-col>
                  <v-col style="max-width:10%"><div>SİL</div></v-col>
              </v-row>
              <v-row class="satir2">
                  <v-col style="max-width:30%">
                      <img style="max-height:160px;min-width:160px" src="https://cdn.saatvesaat.com.tr/media/catalog/product/a/x/ax2802_1.jpg">
                  </v-col>
                  <v-col style="min-width:30%">
                      <v-row>
                        <nuxt-link to="/Sepet">
                         <button class="erkeksaati">AX2802 Erkek Kol Saati</button>
                        </nuxt-link>   
                     </v-row>
                      <v-row>
                       <v-col style="max-width:40%;white-space: nowrap;">
                           <div style="color:353535">Ürün Kodu :</div>
                       </v-col>
                       <v-col>
                        <div>AX2802</div>
                        </v-col>   
                      </v-row>
                  </v-col>
                  <v-col style="max-width:12%"></v-col>
                  <v-col style="max-width:10%">
                      <v-row>
                        <input class="in" style="max-width:20%;max-height:20%" type="text" value="1">
                      </v-row>
                      <v-row style="height:5%"></v-row>
                      <v-row>
                          <nuxt-link to="/Sepet">
                          <button class="duzenle" style="color:#BD1818">Düzenle</button>
                          </nuxt-link>
                      </v-row>
                  </v-col>
                  <v-col align:left>
                      <div style="white-space:nowrap;color:black">151600 TL</div>
                  </v-col>
                  <v-col style="padding:10px 0px 0 20px">
                      <nuxt-link to="/Sepetinizbos">
                      <button class="silbuton">X</button>
                      </nuxt-link>
                  </v-col>
                  
              </v-row>
              <v-row class="satir3">
                <v-col>
                <v-row>
                  <v-col>
                      <nuxt-link to="/">
                      <button class="alisveris">Alılverişe Devam</button>
                      </nuxt-link>
                  </v-col >
                  <v-col style="max-width:15%">
                      <div style="text-align:start;font-size:55%;padding:5px">-Veya-</div>
                  </v-col>
                  <v-col >
                      <nuxt-link to="/Sepet">
                      <button class="sepetiguncelle">Sepeti Güncelle</button>
                      </nuxt-link>
                  </v-col>
                </v-row>
                </v-col>
                <v-col>
                    <v-row class="spt" >
                    <v-col></v-col>
                    <v-col>
                      <button  class="sepetibosalt">Sepeti Boşalt</button>
                    </v-col>
                    </v-row>
                  </v-col>
              </v-row>
          </v-col>
          <v-col style="max-width:5%"></v-col>
         <v-col style="max-width:30%">
            <v-row style="min-height:14%"></v-row>
             <div class="satirsutun">
            <v-row style="max-height:50px">
             <v-col>
             <div style="padding:0px 0px 0px 10px;color:black">Ara Toplam</div>
             </v-col>
             <v-col>
              <v-row>
                <div style="padding:0px 0px 0px 80px;color:black">337000 TL</div>
              </v-row>
              <v-row>
                <v-col style="max-width:63px;color:black">İndirim</v-col>
                <v-col style="color:black">-185400 TL</v-col>
              </v-row>
             </v-col>
            </v-row> 
           <v-row style="max-height:15px;min-height:15px"></v-row>
            <v-row style="max-height:40px;min-height:40px">
             <v-col >
                <div style="padding:0px 0px 0px 10px;color:black">Genel Toplam</div>
             </v-col>
             <v-col>
                <div style="padding:0px 0px 0px 70px;color:black">151600 TL</div>
             </v-col>
            </v-row>
            <v-row>
             <v-col style="max-width:35%"></v-col>
                <v-col>
                <nuxt-link to="/Alisveristamamla">
                 <button class="altamam">ALIŞVERİŞİ TAMAMLA</button>
                </nuxt-link>
                </v-col>
            </v-row>
            </div>
         </v-col>
      </v-row>
     </v-container>
  </v-app>
</div>
</template>

<script>
export default {

}
</script>

<style>
.genislik{
width: 4px;
max-width: 4px;
}
.genislik2{
width: 40px;
max-width: 40px;
}
.in{
    border-style: solid;
    border-color:black;
}
.silbuton{
    width: 25px;
    height: 25px;
    border: none;
    color: #BD1818;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid #EDEDED;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
 
.silbuton:hover {
    color: white;
    background-color: #BD1818;
    border: 1px solid #BD1818;
    }
.satir2{
 border-top-style:solid ;
border-bottom:solid ;
border-right:none ;
border-left:none ;
border-color:lightgray;
border-width: 1px;
}
.silbuton{
    width: 25px;
    height: 25px;
    border: none;
    color: #BD1818;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid #EDEDED;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
 
.silbuton:hover {
    color: white;
    background-color: #BD1818;
    border: 1px solid #BD1818;
}
.alisveris{
    white-space:nowrap;
    text-decoration: underline;
    display: inline-block;
    color: #BD1818;
    font-family: "Roboto", Arial, sans-serif;
}
.alisveris:hover{
    white-space:nowrap;
    text-decoration: none;
    display: inline-block;
    color: rgb(102, 100, 100);
    font-family: "Roboto", Arial, sans-serif;
}
.sepetiguncelle{
    white-space:nowrap;
    text-decoration: underline;
    display: inline-block;
    color: #BD1818;
    font-family: "Roboto", Arial, sans-serif;
}
.sepetiguncelle:hover{
    white-space:nowrap;
    text-decoration: none;
    display: inline-block;
    color: rgb(102, 100, 100);
    font-family: "Roboto", Arial, sans-serif;
}
.duzenle{
    white-space:nowrap;
    text-decoration: none;
    display: inline-block;
    color: #BD1818;
    font-family: "Roboto", Arial, sans-serif;
}
.duzenle:hover{
    white-space:nowrap;
    text-decoration: underline;
    display: inline-block;
    font-family: "Roboto", Arial, sans-serif;
}
.sepetibosalt{
    white-space:nowrap;
    text-decoration: underline;
    display: inline-block;
    color: #BD1818;
    font-family: "Roboto", Arial, sans-serif;
    padding: 0px 40px;
}
.sepetibosalt:hover{
    white-space:nowrap;
    text-decoration: none;
    display: inline-block;
    font-family: "Roboto", Arial, sans-serif;
    color: rgb(102, 100, 100);
}
.satirsutun{
border-top-style:solid ;
border-bottom:solid ;
border-right:solid ;
border-left:solid ;
border-color:lightgray;
height: 170px;
border-width: 1px;
}
.altamam{
    white-space:nowrap;
    text-decoration: none;
    display: inline-block;
    color: white;
    font-family: "Roboto", Arial, sans-serif;
    background:#BD1818;
    height: 41px;
    width: 196px;
}
.altamam:hover{
    white-space:nowrap;
    display: inline-block;
    color: black;
    font-family: "Roboto", Arial, sans-serif;
    background:white;
    border-style: solid;
    border-color:black;
}
.erkeksaati{
    white-space:nowrap;
    text-decoration: none;
    display: inline-block;
    color: black;
    font-family: "Roboto", Arial, sans-serif;
}
.erkeksaati:hover{
    white-space:nowrap;
    text-decoration: none;
    display: inline-block;
    color: #BD1818;
    font-family: "Roboto", Arial, sans-serif;
}
</style>
