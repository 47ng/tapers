export { default as LinearTaper } from './LinearTaper'
export { default as PiecewiseLinearTaper } from './PiecewiseLinearTaper'
export { default as SCurveTaper } from './SCurveTaper'

/**
 * Constrain a value between 0 and 1.
 *
 * @param x The input number to constrain
 */
export function clip(x: number) {
  return Math.max(0, Math.min(1, x))
}
