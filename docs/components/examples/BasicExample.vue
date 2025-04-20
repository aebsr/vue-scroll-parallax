<script setup lang="ts">
import Parallax from '../../../src/components/Parallax.vue'
</script>

<template>
  <div class="example-wrapper">
    <Parallax :speed="10" :offset="100">
      <div class="example-content">Basic Parallax Example</div>
    </Parallax>
  </div>
</template>

<style scoped>
.example-wrapper {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

.example-content {
  padding: 2rem;
  background: #42b883;
  color: white;
  border-radius: 8px;
}
</style>
