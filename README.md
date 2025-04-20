# Vue Scroll Parallax

Vue 3 components and composables to create parallax scroll effects for banners, images or any other DOM elements. Built on top of [Parallax Controller](https://parallax-controller.damnthat.tv) to add vertical or horizontal scroll parallax effects to any Vue application.

## Experimental***
This is heavily inspired by https://github.com/jscottsmith/react-scroll-parallax/ and is only currently means to experimental use

## Installation

```bash
# npm
npm install vue-scroll-parallax

# yarn
yarn add vue-scroll-parallax

# pnpm
pnpm add vue-scroll-parallax
```

## Setup

```typescript
// main.ts
import { createApp } from 'vue'
import { ParallaxPlugin } from 'vue-scroll-parallax'
import App from './App.vue'

const app = createApp(App)

app.use(ParallaxPlugin, {
  // options
})

app.mount('#app')
```

## Usage

Create effects with the Parallax component:

```vue
<script setup lang="ts">
import { Parallax } from 'vue-scroll-parallax'
</script>

<template>
  <Parallax :speed="10">
    <h1>This will parallax up at speed 10</h1>
  </Parallax>
</template>
```

Or use the composable for more control:

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useParallax } from 'vue-scroll-parallax'

const target = ref<HTMLElement | null>(null)
const parallax = useParallax()

onMounted(() => {
  if (target.value) {
    parallax.createElement({
      el: target.value,
      props: {
        translateY: [0, 100],
        opacity: [1, 0],
      },
    })
  }
})
</script>

<template>
  <div ref="target">
    Custom parallax effect
  </div>
</template>
```

## Components

### Parallax
The base component for creating parallax scroll effects.

```vue
<Parallax
  :speed="10"
  :translate-y="[-50, 50]"
  :opacity="[1, 0]"
>
  Content
</Parallax>
```

## Composables

### useParallax
Access the parallax controller instance to create custom effects.

```typescript
import { useParallax } from 'vue-scroll-parallax'

const parallax = useParallax()
```

## Props & Types

### Parallax Component Props
```typescript
interface ParallaxProps {
  speed?: number
  easing?: string
  disabled?: boolean
  translateX?: [number, number]
  translateY?: [number, number]
  rotate?: [number, number]
  scale?: [number, number]
  opacity?: [number, number]
}
```

## License

MIT © [Your Name]
