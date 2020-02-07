export default class SCurveTaper {
  private readonly a: number

  /**
   * @param amount - Amount of bending: 0 = linear, 1 = hard edge at 0.5
   */
  constructor(amount: number) {
    this.a = 1 - amount
  }

  public map(x: number) {
    const n = 2 * x - 1
    const d = this.a + (1 - this.a) * Math.abs(n)
    return (0.5 * n) / d + 0.5
  }

  public normalize(y: number) {
    return y // todo: Implement me.
  }
}
