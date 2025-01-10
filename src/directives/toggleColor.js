// This directive manages color & text state (OFF vs ON),
// plus a "hover" color. We'll store "isOn" in a data attribute.

function setDisplayState(el) {
  // Check if we're ON or OFF from the data attribute
  const isOn = el.getAttribute('data-is-on') === 'true'

  if (isOn) {
    el.style.backgroundColor = 'green'
    el.textContent = 'ON'
  } else {
    el.style.backgroundColor = 'red'
    el.textContent = 'OFF'
  }
}

// Mouse enters: show gray, but do NOT change text
function onMouseEnter(e) {
  e.currentTarget.style.backgroundColor = 'gray'
}

// Mouse leaves: revert to OFF or ON color
function onMouseLeave(e) {
  setDisplayState(e.currentTarget)
}

// On click: toggle isOn
function onClick(e) {
  const el = e.currentTarget
  const currentIsOn = el.getAttribute('data-is-on') === 'true'
  // Toggle
  el.setAttribute('data-is-on', !currentIsOn)
  // Apply new style/text
  setDisplayState(el)
}

export default {
  mounted(el) {
    // Initialize OFF on mount
    el.setAttribute('data-is-on', 'false')
    setDisplayState(el)

    // Attach events for hover & click
    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('click', onClick)
  },

  beforeUnmount(el) {
    // Cleanup event listeners
    el.removeEventListener('mouseenter', onMouseEnter)
    el.removeEventListener('mouseleave', onMouseLeave)
    el.removeEventListener('click', onClick)
  }
}
