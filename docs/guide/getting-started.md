# Getting Started

## Introduction

Vue Scroll Parallax provides a simple way to add parallax scrolling effects to your Vue 3 applications. It offers both components and composables for maximum flexibility.

## Quick Start

1. Install the package:

```bash
npm install vue-scroll-parallax
```

2. Add the plugin to your Vue app:

```ts
import { createApp } from 'vue'
import { ParallaxPlugin } from 'vue-scroll-parallax'
import App from './App.vue'

const app = createApp(App)
app.use(ParallaxPlugin)
app.mount('#app')
```

3. Use in your components:

```vue
<script setup lang="ts">
import { Parallax } from 'vue-scroll-parallax'
</script>

<template>
  <Parallax :speed="10">
    <h1>Hello Parallax!</h1>
  </Parallax>
</template>
```

## Next Steps

- Learn about [configuration options](/guide/configuration)
- Explore the [components](/components/parallax)
- Check out the [examples](/examples/basic) 