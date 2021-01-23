import { shallowMount,RouterLinkStub, mount } from "@vue/test-utils";
import Urun from "../Siparis";
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
      assert(links.at(0).props().to === '/Sepet')
      assert(links.at(0).text() === 'AX2802 Erkek Kol Saati')
      assert(links.at(1).props().to === '/Sepet')
      assert(links.at(1).text() === 'Düzenle')
      assert(links.at(2).props().to === '/Sepetinizbos')
      assert(links.at(2).text() === 'X')
      assert(links.at(3).props().to === '/')
      assert(links.at(3).text() === 'Alılverişe Devam')
      assert(links.at(4).props().to === '/Sepet')
      assert(links.at(4).text() === 'Sepeti Güncelle')
      assert(links.at(5).props().to === '/Alisveristamamla')
      assert(links.at(5).text() === 'ALIŞVERİŞİ TAMAMLA')
    })
    it('Bir Vue kopmonenti', () => {
      const wrapper = factory();
      expect(wrapper.isVueInstance()).toBeTruthy();
  })
    it('Snapshot Ozelligi', () => {
      const wrapper = factory();
      expect(wrapper.html()).toMatchSnapshot();
  })
    test('triggers a mousehover', async () => {
      const wrapper = shallowMount(Urun)
      await wrapper.trigger('mouseover')
    })
   test('triggers a mouseleave', async () => {
      const wrapper = shallowMount(Urun)
      await wrapper.trigger('mouseleave')
    })
  
 }) 
