import { createApp } from 'vue'
import { ParallaxPlugin } from './plugin'
import App from './App.vue'

import './style.css' // Optional: Global styles
import { ScrollAxis } from 'parallax-controller'

const app = createApp(App)

app.use(ParallaxPlugin, {
  // Default options
  scrollAxis: ScrollAxis.vertical,
})

app.mount('#app')
