import PiecewiseLinearTaper from './PiecewiseLinearTaper'

describe('PiecewiseLinearTaper', () => {
  test('0 should map to first point', () => {
    const taper = new PiecewiseLinearTaper([3, 2, 5])
    expect(taper.map(0)).toEqual(3)
  })
  test('1 should map to last point', () => {
    const taper = new PiecewiseLinearTaper([3, 2, 5])
    expect(taper.map(1)).toEqual(5)
  })
  test('hit a point directly', () => {
    const taper = new PiecewiseLinearTaper([3, 2, 5])
    expect(taper.map(0.5)).toEqual(2)
  })
  test('hit between points', () => {
    const taper = new PiecewiseLinearTaper([3, 5])
    expect(taper.map(0.5)).toEqual(4)
  })
  test('edge cases - single point', () => {
    const taper = new PiecewiseLinearTaper([3])
    expect(taper.map(0.5)).toEqual(3)
  })
  test('edge cases - NaN', () => {
    const taper = new PiecewiseLinearTaper([3, 5])
    expect(taper.map(NaN)).toEqual(NaN)
  })
  test('edge cases - Empty array should throw', () => {
    const createTaper = () => new PiecewiseLinearTaper([])
    expect(createTaper).toThrowError('no points provided')
  })
})
