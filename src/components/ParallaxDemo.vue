<script setup lang="ts">
import { ref } from 'vue'
import Parallax from './Parallax.vue'

const isDisabled = ref(false)

const toggleParallax = () => {
  isDisabled.value = !isDisabled.value
}
</script>

<template>
  <div class="parallax-demo">
    <!-- Controls -->
    <div class="controls">
      <button @click="toggleParallax">
        {{ isDisabled ? 'Enable' : 'Disable' }} Parallax
      </button>
    </div>

    <!-- Simple Parallax Example -->
    <section class="demo-section">
      <h2>Simple Parallax</h2>
      <div class="parallax-container">
        <Parallax key="simple-parallax" :speed="10" :disabled="isDisabled">
          <div class="parallax-box">Scroll me! ⬆️⬇️</div>
        </Parallax>
      </div>
    </section>

    <!-- Multi-transform Example -->
    <section class="demo-section">
      <h2>Multi-transform Parallax</h2>
      <div class="parallax-container">
        <Parallax
          :speed="20"
          :disabled="isDisabled"
          :translate-y="[-50, 50]"
          :rotate="[-15, 15]"
          :opacity="[0.2, 1]"
        >
          <div class="parallax-box fancy">Rotating & Fading</div>
        </Parallax>
      </div>
    </section>
  </div>
</template>

<style scoped>
.parallax-demo {
  min-height: 200vh;
  padding: 2rem;
}

.controls {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
}

.controls button {
  padding: 0.5rem 1rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.demo-section {
  margin: 4rem 0;
}

.parallax-container {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax-box {
  padding: 2rem;
  background: #42b883;
  color: white;
  border-radius: 8px;
  font-size: 1.5rem;
  text-align: center;
}

.parallax-box.fancy {
  background: linear-gradient(135deg, #42b883, #35495e);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.banner {
  height: 80vh;
  position: relative;
}

.banner-content {
  color: white;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.banner-content p {
  font-size: 1.5rem;
}
</style>
