import Vue from 'vue'
import ElementUI from 'element-ui'
import { mount } from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'

Vue.use(ElementUI)

describe('Pagination.vue', () => {

  it('return pagination props data', () => {
    let wrapper = mount(Pagination, {
      propsData: {
        totalCards: 2
      }
    })

    const pagination = wrapper.find('el-pagination')

    console.log(pagination.attributes('layout'))
  })
})