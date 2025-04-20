import DefaultTheme from 'vitepress/theme'
import { ParallaxPlugin } from '../../../src/plugin'
import type { Theme } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register the plugin only on client-side
    if (!import.meta.env.SSR) {
      app.use(ParallaxPlugin)
    }
  }
} satisfies Theme 