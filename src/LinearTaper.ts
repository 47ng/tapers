export default class LinearTaper {
  private readonly a: number
  private readonly b: number
  private readonly u: number
  private readonly v: number

  /**
   *
   */
  constructor(min: number, max: number) {
    this.a = max - min
    this.b = min
    this.u = 1 / this.a
    this.v = (-1 * this.b) / this.a
  }

  public map(x: number) {
    return this.a * x + this.b
  }

  public normalize(y: number) {
    return this.u * y + this.v
  }
}
