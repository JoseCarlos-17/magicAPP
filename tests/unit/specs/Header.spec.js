import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('must to have the Searchbar component', () => {
    const wrapper = mount(Header)

    console.log(wrapper)
  })
})
