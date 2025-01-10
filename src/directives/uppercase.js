// src/directives/uppercase.js


export default {
  mounted(el) {
    el.style.textTransform = 'uppercase'
  },
  updated(el) {
    el.style.textTransform = 'uppercase'
  }
}
