import { clip } from './index'
import LinearTaper from './LinearTaper'

export default class PiecewiseLinearTaper {
  private readonly points: number[]
  private readonly L: number

  /**
   *
   */
  constructor(points: number[]) {
    if (points.length === 0) {
      throw new Error(`PiecewiseLinearTaper: no points provided`)
    }
    this.L = points.length - 1
    this.points = points
  }

  public map(x: number) {
    const index = clip(x) * this.L
    if (Number.isInteger(index)) {
      return this.points[index]
    }
    const indexA = Math.floor(index)
    const indexB = Math.ceil(index)
    const alpha = index - indexA
    const A = this.points[indexA]
    const B = this.points[indexB]
    const taper = new LinearTaper(A, B)
    return taper.map(alpha)
  }
}
