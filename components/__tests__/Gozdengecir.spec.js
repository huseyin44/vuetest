import { shallowMount,RouterLinkStub } from "@vue/test-utils";
import Urun from "../Gozdengecir";
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
const factory = () => {
    return shallowMount(Urun, {
      stubs: {
        'nuxt-link': true,
        'any-other-child': true
       }
    });
  };
describe('Urun', () => {
    let vuetify
    beforeEach(() => {
      vuetify = new Vuetify()
    })
  
    it('Bir Vue kopmonenti', () => {
        const wrapper = factory();
        expect(wrapper.isVueInstance()).toBeTruthy();
    })
    it('Snapshot Ozelligi', () => {
        const wrapper = factory();
        expect(wrapper.html()).toMatchSnapshot();
    })
    test('triggers a mouseover', async () => {
        const wrapper = shallowMount(Urun)
        await wrapper.trigger('mouseover')
      })
    test('triggers a mouseleave', async () => {
        const wrapper = shallowMount(Urun)
        await wrapper.trigger('mouseleave')
      })
   
 }) 