<template>
  <button :class="`rounded-sm py-2 px-3 bg-${color}-400`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: `gray`,
    },
  }
}
</script>
