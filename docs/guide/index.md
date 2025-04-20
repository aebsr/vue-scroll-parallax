# Getting Started

## Installation

```bash
npm install vue-scroll-parallax
```

## Usage

```vue
<script setup>
import { Parallax } from 'vue-scroll-parallax'
</script>

<template>
  <Parallax :speed="10">
    <div>Hello Parallax!</div>
  </Parallax>
</template>
```

Let's try running with this minimal setup:

```bash
npm run docs:dev
```

If you still get an error, can you share the full error message from the browser console or terminal? This will help us identify the exact issue.

Also, let's verify the VitePress installation. Try:

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Install dependencies again
npm install

# Try running docs
npm run docs:dev
```

If you're still getting an error, could you:
1. Share the full error message?
2. Check if there are any errors in the terminal when running `npm run docs:dev`?
3. Let me know what version of Node.js you're using (`node --version`)?

This will help us better diagnose and fix the issue. 