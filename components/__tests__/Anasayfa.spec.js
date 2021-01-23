import { shallowMount,RouterLinkStub, mount } from "@vue/test-utils";
import Urun from "../Anasayfa";
import Vue from 'vue'
import Vuetify from 'vuetify'
import assert from 'assert'
Vue.use(Vuetify)
const factory = () => {
  return shallowMount(Urun, {});
};
describe('Urun', () => {
    let vuetify
    beforeEach(() => {
      vuetify = new Vuetify()
    })  
    test('NuxtLink Ozelligi', () => {
      const wrapper = shallowMount(Urun, {
        stubs: {
          NuxtLink: RouterLinkStub,
        },
      })
      const links = wrapper.findAll(RouterLinkStub)
      assert(links.at(0).props().to === '/')
      assert(links.at(1).text() === 'Armani Exchange')
      assert(links.at(1).props().to === '/MarkaClick')
      assert(links.at(2).text() === 'Giris')
      assert(links.at(2).props().to === '/Giris')
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
