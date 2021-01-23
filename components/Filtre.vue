<template>
<div>
  <v-container class="satirbir" fluid>
    <v-row contain>
      <v-col>
        <v-row>
          <v-menu  open-on-hover offset-y  >
           <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="buton1">
             Kategori
            </div>
            </template>
            <v-list class="kategorilist" >
             <div class=" red14" >Saat</div>
             <div class=" red14">Fırsat</div>
             <div class=" red14">Online-Mağazaya-Özel</div>
             <div class=" red14" >İndirimli-Saatler </div>
            </v-list>
         </v-menu>
        </v-row>
      </v-col>
      <v-col>
       <v-row>
          <v-menu  open-on-hover offset-y  >
           <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="buton1" >
             Cinsiyet
            </div>
            </template>
            <v-list class="kategorilist" >
             <v-radio class=" red14" label="Erkek"></v-radio>
             <v-radio class=" red14" label="Kadın"></v-radio>
            </v-list>
         </v-menu>
       </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-menu  open-on-hover offset-y  >
           <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="buton1" >
             Fiyat
            </div>
            </template>
            <v-list class="kategorilist" >
             <div class=" red14">1,000,000TL-1,498,000TL</div>
             <div class=" red14">1,500,000TL-1,998,000TL</div>
             <div class=" red14">2,000,000TL-2,498,000TL</div>
            </v-list>
         </v-menu>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-menu  open-on-hover offset-y  >
           <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="buton1">
             Renk
            </div>
            </template>
             <v-list class="kategorilist" >
             <v-radio class=" red14" label="Metalik Gri"></v-radio>
             <v-radio class=" red14" label="Rose Gold"></v-radio>
             <v-radio class=" red14" label="Siyah"></v-radio>
             <v-radio class=" red14" label="Kahverengi"></v-radio>
             <v-radio class=" red14" label="Beyaz"></v-radio>
             <v-radio class=" red14" label="Pempe"></v-radio>
            </v-list>
         </v-menu>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-menu  open-on-hover offset-y  >
           <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="buton1">
             Kayış Tipi
            </div>
            </template>
             <v-list class="kategorilist" >
              <v-radio class=" red14" label="Çelik"></v-radio>
              <v-radio class=" red14" label="Deri"></v-radio>
            </v-list>
         </v-menu>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-menu  open-on-hover offset-y  >
           <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="buton1">
             Tarz
            </div>
            </template>
             <v-list class="kategorilist" >
              <v-radio class=" red14" label="Spor Saatler"></v-radio>
              <v-radio class=" red14" label="Klasik Saatler"></v-radio>
            </v-list>
         </v-menu>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-menu  open-on-hover offset-y  >
           <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="buton1">
             Teknoloji
            </div>
            </template>
             <v-list class="kategorilist" >
              <v-radio class=" red14" label="Quartz"></v-radio>
              <v-radio class=" red14" label="Otomatik"></v-radio>
            </v-list>
         </v-menu>
        </v-row>
      </v-col>
      <v-col class="buton1">Urun</v-col>
      <v-col class="buton1"></v-col>
      <v-col class="buton1"></v-col>
      <v-col class="buton1"></v-col>
      <v-col class="buton1"></v-col>
      <v-col class="buton1"></v-col>
      <v-col class="buton1"></v-col>
      <v-col>
        <v-row>
          <v-menu  open-on-hover offset-y  >
           <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="buton1">
             Sıralama
            </div>
            </template>
             <v-list class="kategorilist" >
              <v-radio class=" red14" label="Seçtiklerimiz"></v-radio>
              <v-radio class=" red14" label="Fiyat Artan"></v-radio>
              <v-radio class=" red14" label="Fiyat Azalan"></v-radio>
              <v-radio class=" red14" label="Yeni Gelenler"></v-radio>
              <v-radio class=" red14" label="İndirimler"></v-radio>
            </v-list>
         </v-menu>
        </v-row>
      </v-col>
      <v-col class="buton1"></v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
 
}
</script>

<style>
.satirbir{
  background: #F9F9F9;
  height: 45px;
  max-height: 45px;
}
.buton1{
  background: #F9F9F9;
  max-width: 100px;
  height:20px;
  white-space: nowrap;
  color: #353535;
  font-size: 16px;
  min-height:0px
}
.red14:hover {
  background: gray;
  color: black;
}
.buton1:hover{
  background: white;
  color: #BD1818;
}
</style>