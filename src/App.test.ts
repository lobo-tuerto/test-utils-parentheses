import { mount } from '@vue/test-utils'

import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

test('event handling', () => {
  expect(App).toBeTruthy()

  const wrapper = mount(App, {})

  const spy = vi.spyOn(wrapper.vm, 'someEventHandler')

  const component = wrapper.findComponent(HelloWorld)
  component.vm.$emit('something')

  expect(component.emitted().something).toBeTruthy()
  expect(spy).toHaveBeenCalled()
})
