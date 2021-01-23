import Vue from 'vue'
import Vuex from 'vuex'
import {DB} from '../plugins/firebase.js'
import firebase from 'firebase/app'
import 'firebase/auth'
Vue.use(Vuex);

export const state = () => ({
    saatler:[],
    sliderurl:[],
    user:"",
    error:"",
    loggedIn: false
})

export const mutations = {
    setSaatler(state,value){
        state.saatler=value;
        console.log(state.saatler)
    },
    setSlider(state,value){
        state.sliderurl=value;
        console.log(state.sliderurl)
    },
    setUser(state,value){
        state.user=value;
    },
    setError(state,value){
        state.error=value;
    },
    setLoggedin(state,value){
        state.loggedIn=value
    },
    setLoggedcikis(state,value){
        state.loggedIn=value
    }
}

export const actions = {
    getSaatler({commit}){
        const list=[];
        DB.ref('saatler').on('value',data=>{
            for(var i=list.length-1;i>=0;i--){
                list.splice(i,1)
            }
            data.forEach(obj=>{
                let m=obj.val()
                m.id=obj.key
                list.push(m);
            });
        });
        commit('setSaatler',list)
       },
       getSlider({commit}){
        const list=[];
        DB.ref('slidersaatler').on('value',data=>{
            for(var i=list.length-1;i>=0;i--){
                list.splice(i,1)
            }
            data.forEach(obj=>{
                let m=obj.val()
                m.id=obj.key
                list.push(m);
            });
        });
        commit('setSlider',list)
       },
    Giris({commit},user) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
         .then((res) => {
          console.log(res.user)
          commit("setUser",{email:res.user.email,uid:res.user.uid})
          commit("setLoggedin",this.loggedIn=true)
          })
          .catch((e)=>{
              console.log(e.message);
              commit("setError",e.message)
          })
      },
    Cikis({commit}){
        firebase.auth().signOut().then(data => {
            console.log(data)
            commit("setLoggedcikis",this.loggedIn=false)
           })
    },
    setupFirebase({commit}) {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.loggedIn = true
            commit("setLoggedin",this.loggedIn=true)
          } else {
            this.loggedIn = false
            commit("setLoggedcikis",this.loggedIn=false)
          }
          
        })
      },
} 
