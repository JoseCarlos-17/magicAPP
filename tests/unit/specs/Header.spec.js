import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import Searchbar from '@/components/Searchbar.vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

describe('Header.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Header, {
      stubs: ['router-link']
    })
  })

  it('must to have the Searchbar component', () => {
    const searchbar = wrapper.findComponent(Searchbar)

    expect(searchbar.exists()).toBe(true)
  })

  it('router-link must to go to mainscreen', () => {
    const router_link = wrapper.find('.logo')

    expect(router_link.attributes('to')).toEqual('/mainscreen')
  })
})
