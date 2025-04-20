import { inject } from 'vue'
import { ParallaxSymbol } from '../plugin'

/**
 * Vue composable for accessing the parallax controller instance.
 *
 * @example
 * ```ts
 * const parallax = useParallax()
 *
 * onMounted(() => {
 *   parallax.createElement({
 *     el: element,
 *     props: { speed: 10 }
 *   })
 * })
 * ```
 */

export function useParallax() {
  const controller = inject(ParallaxSymbol)

  if (!controller) {
    throw new Error('useParallax must be used within a ParallaxProvider')
  }

  return controller
}
