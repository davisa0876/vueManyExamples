// src/directives/highlight.js

// This directive highlights the element on mouseenter and removes highlight on mouseleave.
function onMouseEnter(event) {
  console.log('Mouse enter fired!');
  const el = event.currentTarget
  el.style.backgroundColor = '#f59e0b'
}


function onClick(event) {
  const el = event.currentTarget
  // Toggle between red and no color, for example
  if (el.style.backgroundColor === 'red') {
    el.style.backgroundColor = ''
  } else {
    el.style.backgroundColor = 'red'
  }
}

function onMouseLeave(event) {
  const el = event.currentTarget
  el.style.backgroundColor = '#000000' // reset
}

export default {
  /* Lifecycle hooks for directives: created, beforeMount, mounted, etc. */
  mounted(el) {
    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('click', onClick)
  },
  beforeUnmount(el) {
    el.removeEventListener('mouseenter', onMouseEnter)
    el.removeEventListener('mouseleave', onMouseLeave)
    el.addEventListener('click', onClick)
  }
}
