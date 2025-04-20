<script setup lang="ts">
/**
 * A Vue component that creates parallax scroll effects for any content.
 *
 * @example
 * ```vue
 * <Parallax :speed="10">
 *   <div>Parallax content</div>
 * </Parallax>
 * ```
 */
import { inject, onMounted, onUnmounted, ref, watch } from 'vue'
import { ParallaxSymbol } from '../plugin'
import type { Element } from 'parallax-controller'
import type { ParallaxProps } from '../types'

const props = withDefaults(defineProps<ParallaxProps>(), {
  speed: 0,
  disabled: false,
})

const elementRef = ref<HTMLElement | null>(null)
const controller = inject(ParallaxSymbol)
const isDestroyed = ref(false)

if (!controller) {
  throw new Error('Parallax component must be used within a ParallaxProvider')
}

let element: Element | null = null

onMounted(() => {
  if (elementRef.value && !isDestroyed.value) {
    try {
      element = controller.createElement({
        el: elementRef.value,
        props: {
          disabled: props.disabled,
          speed: props.speed,
          translateX: props.translateX,
          translateY: props.translateY,
          rotate: props.rotate,
          scale: props.scale,
          opacity: props.opacity,
        },
      })
    } catch (error) {
      console.warn('Failed to create parallax element:', error)
    }
  }
})

watch(
  () => props.disabled,
  (newValue) => {
    if (element && !isDestroyed.value) {
      try {
        // Update the element's disabled state
        controller.updateElementPropsById(element.id, {
          ...element.props,
          disabled: newValue,
        })
        // Also update the cached element
        element.props.disabled = newValue
      } catch (error) {
        console.warn('Failed to update parallax element disabled state:', error)
      }
    }
  }
)

onUnmounted(() => {
  isDestroyed.value = true
  if (element) {
    try {
      controller.removeElementById(element.id)
      element = null
    } catch (error) {
      console.warn('Failed to remove parallax element:', error)
    }
  }
})

// Need to explicitly define the name for the component
defineOptions({
  name: 'Parallax',
})
</script>

<template>
  <div ref="elementRef">
    <slot />
  </div>
</template>
