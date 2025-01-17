import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// Import Tailwind
import './assets/main.css'

// Import your router
import router from './router/index.js'

// Example custom directives
import uppercase from '@/directives/uppercase.js'
import lifecycleLogger from '@/directives/lifecycleLogger.js'

// Create the Vue app
const app = createApp(App)

// Create the Pinia instance
const pinia = createPinia()

// Use Pinia
app.use(pinia)

// Use the router
app.use(router)

// Example global directive: v-focus
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

// Other directives
app.directive('uppercase', uppercase)
app.directive('lifecycle-logger', lifecycleLogger)

// Finally, mount the app
app.mount('#app')
