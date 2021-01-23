import { shallowMount,RouterLinkStub, mount } from "@vue/test-utils";
import Urun from "../Markalar";
import Vue from 'vue'
import Vuetify from 'vuetify'
import assert from 'assert'
Vue.use(Vuetify)

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
      assert(links.at(0).props().to === '/MarkaClick')
      
    })
 }) 