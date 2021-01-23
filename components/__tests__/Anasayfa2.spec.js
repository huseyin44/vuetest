import { shallowMount } from "@vue/test-utils";
import Anasayfa2 from "../Anasayfa2";
const factory = () => {
    return shallowMount(Anasayfa2, {
    });
  };
  
  describe("Anasayfa2", () => {
    test("Bir Vue kopmonenti", () => {
      const wrapper = factory();
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test("Snapshot Ozelligi ", () => {
      const wrapper = factory();
      expect(wrapper.html()).toMatchSnapshot();
    });
  
  });