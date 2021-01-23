import { shallowMount,RouterLinkStub, mount } from "@vue/test-utils";
import Urun from "../Urun";
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
      assert(links.at(0).text() === 'Anasayfa')
      assert(links.at(0).props().to === '/')
      assert(links.at(1).text() === 'Saat')
      assert(links.at(1).props().to === '/MarkaClick')
      assert(links.at(2).text() === 'Erkek Saat Modelleri')
      assert(links.at(2).props().to === '/MarkaClick')
      assert(links.at(3).text() === 'Tüm Armani Exchange Ürünleri')
      assert(links.at(3).props().to === '/MarkaClick')
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
