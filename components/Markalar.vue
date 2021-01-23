<template>
  <div>
      <v-container fluid>
          <v-row class="resim2">
              <v-col>
                  <nuxt-link to="/MarkaClick">
                  <v-img class="resim1" src="https://cdn.saatvesaat.com.tr/media/wysiwyg/home-banners-3lu-yeni/fossil-2010-20.jpg"/>
                  </nuxt-link>
              </v-col>
              <v-col>
                  <v-img class="resim1" src="https://cdn.saatvesaat.com.tr/media/wysiwyg/home-banners-3lu-yeni/diesel-2010-20.jpg"/>
              </v-col>
              <v-col>
                  <v-img class="resim1" src="https://cdn.saatvesaat.com.tr/media/wysiwyg/home-banners-3lu-yeni/esprit-2010-1.jpg"/>
              </v-col>
          </v-row>
           <v-row>
              <v-col>
                  <v-img class="resim1" src="https://cdn.saatvesaat.com.tr/media/wysiwyg/home-banners-3lu-yeni/seiko-2010-20.jpg"/>
              </v-col>
              <v-col>
                  <v-img class="resim1" src="https://cdn.saatvesaat.com.tr/media/wysiwyg/home-banners-3lu-yeni/tek-kalanlar-02-22.jpg"/>
              </v-col>
              <v-col>
                  <v-img class="resim1" src="https://cdn.saatvesaat.com.tr/media/wysiwyg/home-banners-3lu-yeni/michael-kors-2010-20.jpg"/>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.resim1{
    width: 480px;
    height: 400px;
    border-color: black;
}
.resim2{
    height: 480px;
}
</style>