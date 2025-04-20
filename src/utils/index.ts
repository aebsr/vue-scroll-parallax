import { ParallaxController } from 'parallax-controller'

export const isServer = typeof window === 'undefined'

export const createParallaxController = (options: {
  scrollContainer?: HTMLElement | Window
  disabled?: boolean
  scrollAxis?: 'vertical' | 'horizontal'
}): ParallaxController | null => {
  if (isServer) return null

  return new ParallaxController({
    scrollAxis: options.scrollAxis || 'vertical',
    scrollContainer: options.scrollContainer as HTMLElement,
    disabled: options.disabled,
  })
}
