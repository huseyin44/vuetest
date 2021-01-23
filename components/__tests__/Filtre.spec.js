import { shallowMount } from "@vue/test-utils";
import Filtre from "../Filtre";
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
const factory = () => {
    return shallowMount(Filtre, {
    });
  };
describe('Filtre', () => {
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
        const wrapper = shallowMount(Filtre)
        await wrapper.trigger('mouseover')
      })
    test('triggers a mouseleave', async () => {
        const wrapper = shallowMount(Filtre)
        await wrapper.trigger('mouseleave')
      })
    
  })