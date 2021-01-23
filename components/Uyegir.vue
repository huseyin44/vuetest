<template>
  <div class="login" >
    <v-app v-if="loggedIn==false">
    <form @submit.prevent="signIn" >
     <v-container >
      <v-row><div class="uyegirisi">Üye Girişi</div></v-row>
      <v-row class="buton1"></v-row>
      <v-row><div class="birinciemail">Email Adresiniz</div></v-row>
      <v-row class="buton1"></v-row>
      <v-row>
        <input type="text" v-model="email" class="inputemail"/>
      </v-row>
      <v-row class="buton1"></v-row>
      <v-row><div class="birinciemail">Şifre</div></v-row>
      <v-row class="buton1"></v-row>
      <v-row>
        <input type="password" v-model="password" class="inputemail" />
      </v-row>
      <div class="error" >
        <p>
        {{error}}
        </p>
        </div>
      <v-row class="buton1"></v-row>
      <v-row>
      <button class="sifreunut">Şifrenizi mi unuttunuz ?</button>
      </v-row>
      <v-row class="buton1"></v-row>
      <v-row class="buton1"></v-row>
      <v-row>
       <button type="submit" class="uyegiris44">ÜYE GİRİŞİ</button>
      </v-row>
      <v-row class="buton1"></v-row>
      <v-row class="buton1"></v-row>
      <v-row>
        <div class="facebook">
         <a href="https://graph.facebook.com/oauth/authorize?client_id=328336257500368&amp;redirect_uri=https%3A%2F%2Fwww.saatvesaat.com.tr%2Fsocialconnect%2Ffacebook%2Fconnect%2F&amp;state=968c0ff130b664635e9d4f2c0710cc65&amp;scope=email%2Cuser_birthday" rel="facebook-connect" class="button mnm-button connect-facebook inline">
           <span><i class="ion-social-facebook"></i> Facebook ile Giriş Yap</span>
        </a>
        </div>
      </v-row>
    </v-container>
    </form>
   </v-app>
   <div  v-if="loggedIn==true">
     <form @submit.prevent="signOut">
     <div class="div55">Çıkış Yapmak İçin Tıklayınız</div>
     <button type="submit" class="buton88">ÇIKIŞ</button>
     </form>
   </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default{
  data:()=>({
    email:"",
    password:"",
    
  }),
methods:{
    ...mapActions(['Giris','Cikis','setupFirebase']),
    signIn(){
      this.Giris({
        email:this.email,
        password:this.password,
      })
    },
    signOut(){
     this.Cikis()
     }
},
 computed:{
     ...mapState(["user","error","loggedIn"])
 },
 created(){
   this.setupFirebase()
 }
}
</script>

<style>
.uyegirisi{
  font-size: 24px;
  font-weight: 500;
  color: #353535;
}
.birinciemail{
  font-size: 12px;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 500;
}
.inputemail{
    background-color: transparent;
    border-style:solid;
}
.buton1{
  height: 4px;
}
.uyegirisibut{
  background: #9c0c0c;
  font-size: 14px;
  height: 40px;
  width: 130px;
  color: white;
  text-align:center ;
  padding: 7px 15px;
}
.facebook{
  background:blue;
  display: inline-block;
  padding: 25px 25px;
  border: 2px solid transparent;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: normal;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
}
.sifreunut{
  color:#9c0c0c;
  background: white;
}
.sifreunut:hover{
  text-decoration: underline;
}
.uyegiris44{
  background: #9c0c0c;
  color: white;
}
.uyegiris44:hover{
  background: white;
  color: black;
  border-color: black;
  border-style: solid;
}
.div55{
  height: 50px;
  font-size:35px ;
}
.buton88{
  height: 30px;
  font-size: 25px;
  color: darkblue;
}
</style>