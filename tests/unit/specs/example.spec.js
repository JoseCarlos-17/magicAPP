import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const vm = shallowMount(HelloWorld)
    console.log(vm, 'haha')
    expect(vm.$el.querySelector('.hello h1').textContent)
    .toEqual('Welcome to Your Vue.js App')
  })
})
