// src/directives/lifecycleLogger.js

/*
  This directive logs every lifecycle hook to the console and calls a "pushLog" function if provided.
  It's useful for demonstration and debugging.
*/

export default {
  created(el, binding) {
    console.log('directive lifecycleLogger created')
    if (binding.value && typeof binding.value.pushLog === 'function') {
      binding.value.pushLog('created')
    }
  },
  beforeMount(el, binding) {
    console.log('directive lifecycleLogger beforeMount')
    if (binding.value && typeof binding.value.pushLog === 'function') {
      binding.value.pushLog('beforeMount')
    }
  },
  mounted(el, binding) {
    console.log('directive lifecycleLogger mounted')
    if (binding.value && typeof binding.value.pushLog === 'function') {
      binding.value.pushLog('mounted')
    }
  },
  beforeUpdate(el, binding) {
    console.log('directive lifecycleLogger beforeUpdate')
    if (binding.value && typeof binding.value.pushLog === 'function') {
      binding.value.pushLog('beforeUpdate')
    }
  },
  updated(el, binding) {
    console.log('directive lifecycleLogger updated')
    if (binding.value && typeof binding.value.pushLog === 'function') {
      binding.value.pushLog('updated')
    }
  },
  beforeUnmount(el, binding) {
    console.log('directive lifecycleLogger beforeUnmount')
    if (binding.value && typeof binding.value.pushLog === 'function') {
      binding.value.pushLog('beforeUnmount')
    }
  },
  unmounted(el, binding) {
    console.log('directive lifecycleLogger unmounted')
    if (binding.value && typeof binding.value.pushLog === 'function') {
      binding.value.pushLog('unmounted')
    }
  }
}
