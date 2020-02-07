import SCurveTaper from './SCurveTaper'

describe('SCurveTaper', () => {
  test('0 should map to minimum', () => {
    const taper = new SCurveTaper(0.5)
    expect(taper.map(0)).toEqual(0)
  })
  test('1 should map to maximum', () => {
    const taper = new SCurveTaper(0.5)
    expect(taper.map(1)).toEqual(1)
  })
  test('0.5 should be an inflexion point (always equal to itself)', () => {
    const taper1 = new SCurveTaper(0.25)
    const taper2 = new SCurveTaper(0.75)
    expect(taper1.map(0.5)).toEqual(0.5)
    expect(taper2.map(0.5)).toEqual(0.5)
  })
  test('edge cases - NaN', () => {
    const taper = new SCurveTaper(0.5)
    expect(taper.map(NaN)).toEqual(NaN)
  })
  test('amount == 0 gives a linear [0;1] taper', () => {
    const taper = new SCurveTaper(0)
    expect(taper.map(0)).toEqual(0)
    expect(taper.map(0.25)).toEqual(0.25)
    expect(taper.map(0.5)).toEqual(0.5)
    expect(taper.map(0.75)).toEqual(0.75)
    expect(taper.map(1)).toEqual(1)
  })
  test('amount == 1 gives a hard edge at 0.5', () => {
    const taper = new SCurveTaper(1)
    expect(taper.map(0)).toEqual(0)
    expect(taper.map(0.25)).toEqual(0)
    expect(taper.map(0.5)).toEqual(NaN) // Not defined
    expect(taper.map(0.75)).toEqual(1)
    expect(taper.map(1)).toEqual(1)
  })
})
