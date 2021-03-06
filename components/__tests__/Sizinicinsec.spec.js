import { shallowMount,RouterLinkStub, mount } from "@vue/test-utils";
import Urun from "../Sizinicinsec";
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
        methods:{
            ...mapActions(['getSaatler']),
        },
         computed:{
             ...mapState(['saatler'])
         },
        created() {
          this.getSaatler()
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
  test('NuxtLink Ozelligi', () => {
    const wrapper = shallowMount(Urun, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    const links = wrapper.findAll(RouterLinkStub)
    assert(links.at(0).props().to === '/Sepet')
  })
    it('vuex', () => {
        const store = new Vuex.Store({
          state: {
            saatler: "https://cdn.saatvesaat.com.tr/media/wysiwyg/ss-slider/versace-10-oct.jpg"
          }
        })
          const vm = new Vue({
            store,
            computed: mapState(['saatler'])
          })
          expect(vm.saatler).toBe("https://cdn.saatvesaat.com.tr/media/wysiwyg/ss-slider/versace-10-oct.jpg")
      })
 }) 
 
