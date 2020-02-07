import LinearTaper from './LinearTaper'

describe('LinearTaper', () => {
  test('0 should map to minimum', () => {
    const taper = new LinearTaper(3, 5)
    expect(taper.map(0)).toEqual(3)
  })
  test('1 should map to maximum', () => {
    const taper = new LinearTaper(3, 5)
    expect(taper.map(1)).toEqual(5)
  })
  test('mapping should be linear', () => {
    const taper = new LinearTaper(3, 5)
    expect(taper.map(0.5)).toEqual(4)
  })
  test('edge cases - NaN', () => {
    const taper = new LinearTaper(3, 5)
    expect(taper.map(NaN)).toEqual(NaN)
  })
  test('edge cases - Infinity', () => {
    const taper = new LinearTaper(3, 5)
    expect(taper.map(Infinity)).toEqual(Infinity)
    expect(taper.map(-Infinity)).toEqual(-Infinity)
  })
  test('edge cases - min == max', () => {
    const taper = new LinearTaper(1, 1)
    expect(taper.map(0)).toEqual(1)
    expect(taper.map(1)).toEqual(1)
    expect(taper.normalize(1)).toEqual(NaN)
  })
  test('map & normalize', () => {
    const taper = new LinearTaper(12, 3)
    expect(taper.normalize(taper.map(0.3))).toBeCloseTo(0.3, 10)
  })
})
