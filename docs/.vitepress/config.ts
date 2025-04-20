import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'Vue Scroll Parallax',
  description: 'Create stunning parallax scroll effects in Vue 3',
  base: '/',
  
  vite: {
    resolve: {
      alias: {
        'vue-scroll-parallax': fileURLToPath(
          new URL('../../src/index.ts', import.meta.url)
        )
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' },
      { text: 'Composables', link: '/composables/use-parallax' },
      { text: 'Examples', link: '/examples/basic' },
      {
        text: 'v1.0.0',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Contributing', link: '/contributing' },
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Basic Usage', link: '/guide/basic-usage' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Parallax', link: '/components/parallax' },
          ]
        }
      ],
      '/composables/': [
        {
          text: 'Composables',
          items: [
            { text: 'useParallax', link: '/composables/use-parallax' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Basic Example', link: '/examples/basic' },
            { text: 'Banner Example', link: '/examples/banner' },
            { text: 'Multi-layer Example', link: '/examples/multi-layer' },
            { text: 'Custom Effects', link: '/examples/custom-effects' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/vue-scroll-parallax' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    }
  }
}) 