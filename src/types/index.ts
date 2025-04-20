import type { ParallaxController, ScrollAxis } from 'parallax-controller'

// Plugin options
export interface ParallaxProviderOptions {
  scrollAxis?: ScrollAxis
  scrollContainer?: HTMLElement | Window
  disabled?: boolean
}

// Parallax component props
export interface ParallaxProps {
  speed?: number
  easing?: string
  disabled?: boolean
  translateX?: [number, number]
  translateY?: [number, number]
  rotate?: [number, number]
  scale?: [number, number]
  opacity?: [number, number]
}

// Plugin module augmentation for Vue
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $parallax: ParallaxController
  }
}

// Re-export types from parallax-controller for convenience
export type {
  ParallaxController,
  ScrollAxis,
  ParallaxControllerOptions,
} from 'parallax-controller'
