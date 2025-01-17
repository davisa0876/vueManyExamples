import { createApp } from 'vue'
import App from './App.vue'

// Import Tailwind
import './assets/main.css'
import router from './router/index.js'
import uppercase from '@/directives/uppercase.js'
import lifecycleLogger from '@/directives/lifecycleLogger.js'
// Create the Vue app
const app = createApp(App)

// Global directive: v-focus
app.directive('focus', {
  mounted(el) {
    // When the element is mounted, call focus()
    el.focus()
  }
})
app.directive('uppercase', uppercase)
app.directive('lifecycle-logger', lifecycleLogger)

app.use(router)

app.mount('#app')