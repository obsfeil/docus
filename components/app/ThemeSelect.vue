<script setup lang="ts">
import { useColorMode } from '../../../.nuxt/imports';

const colorMode = useColorMode()
const onClick = () => {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}
</script>

<template>
  <button
    aria-label="Color Mode"
    @click="onClick"
  >
    <ColorScheme placeholder="...">
      <Icon
        v-if="colorMode.preference === 'dark'"
        name="uil:moon"
      />
      <Icon
        v-else-if="colorMode.preference === 'light'"
        name="uil:sun"
      />
      <Icon
        v-else
        name="uil:desktop"
      />
    </ColorScheme>
  </button>
</template>

<style lang="ts" scoped>
css({
  button: {
    display: 'flex',
    padding: '{space.4}',

    color: '{color.gray.500}',
    '@dark': {
      color: '{color.gray.400}'
    },

    '&:hover': {
      color: '{color.gray.700}',
      '@dark': {
        color: '{color.gray.200}',
      }
    },
  }
})
</style>

