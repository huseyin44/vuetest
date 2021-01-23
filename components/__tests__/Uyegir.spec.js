import { shallowMount,RouterLinkStub, mount } from "@vue/test-utils";
import Urun from "../HaftaninFirsat";
import Vue from 'vue'
import Vuetify from 'vuetify'
import assert from 'assert'
import Vuex,{mapState,mapActions,mapMutations} from 'vuex'
Vue.use(Vuetify)
Vue.use(Vuex)
const factory = () => {
  return shallowMount(Urun, {
  });
};
describe('Urun', () => {
    let vuetify
    let store
    beforeEach(() => {
      vuetify = new Vuetify()
      store=new Vuex.Store({
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
      })
    })  
    it('Bir Vue kopmonenti', () => {
      const wrapper = factory();
      expect(wrapper.isVueInstance()).toBeTruthy();
  })
    it('Snapshot Ozelligi', () => {
      const wrapper = factory();
      expect(wrapper.html()).toMatchSnapshot();
  })
 }) 
 
