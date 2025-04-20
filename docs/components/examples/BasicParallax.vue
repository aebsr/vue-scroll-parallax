<script setup lang="ts">
import Parallax from '../../../src/components/Parallax.vue'
</script>

<template>
  <div class="example-container">
    <Parallax :speed="20" :offset="100">
      <div class="parallax-content">Basic Parallax Example</div>
    </Parallax>
  </div>
</template>

<style scoped>
.example-container {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: repeating-linear-gradient(
    to bottom,
    #000 0px,
    #000 100px,
    #fff 100px,
    #fff 200px
  );
}
.parallax-content {
  padding: 2rem;
  background: #42b883;
  color: white;
  border-radius: 8px;
}
</style>
