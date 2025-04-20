import { App, InjectionKey } from 'vue'
import { ParallaxController, ScrollAxis } from 'parallax-controller'

export interface ParallaxProviderOptions {
  scrollAxis?: ScrollAxis
  scrollContainer?: HTMLElement | Window
  disabled?: boolean
}

export const ParallaxSymbol: InjectionKey<ParallaxController> =
  Symbol('parallax')

export function createParallaxController(
  options: ParallaxProviderOptions = {}
) {
  const controller = new ParallaxController({
    scrollAxis: options.scrollAxis || ScrollAxis.vertical,
    scrollContainer: options.scrollContainer as HTMLElement,
    disabled: options.disabled,
  })

  // Add a method to properly handle disabling/enabling
  const originalUpdate = controller.updateElementPropsById.bind(controller)
  controller.updateElementPropsById = (
    id: number,
    props: ParallaxProviderOptions
  ) => {
    const element = controller.getElements()[id]
    if (element) {
      originalUpdate(id, props)
      if (props.disabled) {
        controller.resetElementStyles(element)
      }
    }
  }

  return controller
}

export const ParallaxPlugin = {
  install: (app: App, options: ParallaxProviderOptions = {}) => {
    const controller = createParallaxController(options)

    app.provide(ParallaxSymbol, controller)

    app.config.globalProperties.$parallax = controller

    // Store the original unmount function
    const originalUnmount = app.unmount

    // Override the unmount function
    app.unmount = function () {
      try {
        // Cleanup parallax controller
        controller.destroy()
      } catch (error) {
        console.warn('Failed to destroy parallax controller:', error)
      }

      // Call the original unmount function
      originalUnmount.call(this)
    }
  },
}
