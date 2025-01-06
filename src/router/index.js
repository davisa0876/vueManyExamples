// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Example1HelloWorld from '@/views/examples/Example1HelloWorld.vue'
import Example2StyleTag from '@/views/examples/Example2StyleTag.vue'
import Example3PassingProps from '@/views/examples/Example3PassingProps.vue'
import Example4TypeChecking from '@/views/examples/Example4TypeChecking.vue'
import Example5EmittingEvents from '@/views/examples/Example5EmittingEvents.vue'
import Example6PropsAsEvent from '@/views/examples/Example6PropsAsEvent.vue'
import Example7ComplexTypeChecking from '@/views/examples/Example7ComplexTypeChecking.vue'
import Example8ProvideInjectPartOne from '@/views/examples/Example8ProvideInjectPartOne.vue'
import Example9ProvideInjectPartTwo from '@/views/examples/Example9ProvideInjectPartTwo.vue'
import Example10Slots from '@/views/examples/Example10Slots.vue'

const routes = [
  {
    path: '/',
    name: 'Example1',
    component: Example1HelloWorld
  },
  {
    path: '/example2',
    name: 'Example2',
    component: Example2StyleTag
  },
  {
    path: '/example3',
    name: 'Example3',
    component: Example3PassingProps
  },
  {
    path: '/example4',
    name: 'Example4',
    component: Example4TypeChecking
  },
  {
    path: '/example5',
    name: 'Example5',
    component: Example5EmittingEvents
  },
  {
    path: '/example6',
    name: 'Example6',
    component: Example6PropsAsEvent
  },
  {
    path: '/example7',
    name: 'Example7',
    component: Example7ComplexTypeChecking
  },
  {
    path: '/example8',
    name: 'Example8',
    component: Example8ProvideInjectPartOne
  },
  {
    path: '/example9',
    name: 'Example9',
    component: Example9ProvideInjectPartTwo
  },
  {
    path: '/example10',
    name: 'Example10',
    component: Example10Slots
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
