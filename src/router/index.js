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
import Example11NamedSlots from '@/views/examples/Example11NamedSlots.vue'
import Example12ComponentLifecycle from '@/views/examples/Example12ComponentLifecycle.vue'
import Example13UsingTheLifecycles from '@/views/examples/Example13UsingTheLifecycles.vue'
import Example14DynamicComponents from '@/views/examples/Example14DynamicComponents.vue'
import Example15KeepAlive from '@/views/examples/Example15KeepAlive.vue'
import Example16Teleport from '@/views/examples/Example16Teleport.vue'
import Example17CustomDirectives from '@/views/examples/Example17CustomDirectives.vue'
import Example17CustomDirectivesLocal from '@/views/examples/Example17CustomDirectivesLocal.vue'
import Example18CustomDirectivesHooks from '@/views/examples/Example18CustomDirectivesHooks.vue'
import Example19LocalDirective from '@/views/examples/Example19LocalDirective.vue'
import Example19LocalDirectiveOnOff from '@/views/examples/Example19LocalDirectiveOnOff.vue'

import crawl from '@/views/crawl/CrawlerView.vue'

import dashboard from '@/views/Dashboard.vue'

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
  },
  {
    path: '/example11',
    name: 'Example11',
    component: Example11NamedSlots
  },
  {
    path: '/example12',
    name: 'Example12',
    component: Example12ComponentLifecycle
  },
  {
    path: '/example13',
    name: 'Example13',
    component: Example13UsingTheLifecycles
  },
  {
    path: '/example14',
    name: 'Example14',
    component: Example14DynamicComponents
  },
  {
    path: '/example15',
    name: 'Example15',
    component: Example15KeepAlive
  },
  {
    path: '/example16',
    name: 'Example16',
    component: Example16Teleport
  },
  {
    path: '/example17',
    name: 'Example17',
    component: Example17CustomDirectives
  },
  {
    path: '/example17-local',
    name: 'Example17-local',
    component: Example17CustomDirectivesLocal
  },
  {
    path: '/example18',
    name: 'Example18',
    component: Example18CustomDirectivesHooks
  },
  {
    path: '/example19',
    name: 'Example19',
    component: Example19LocalDirective
  } ,
  {
    path: '/example19-OnOff',
    name: 'Example19-OnOff',
    component: Example19LocalDirectiveOnOff
  } 
  ,
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/crawler',
    name: 'crawler',
    component: crawl
  }
  

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router