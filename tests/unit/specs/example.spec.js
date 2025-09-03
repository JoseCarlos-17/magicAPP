import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('renders correct contents', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('.hello h1').text()).toBe('Welcome to Your Vue.js App')
  })
})