import formatDuration from './formatDuration'

describe('formarDuration util', () => {
  it('should return false if there is no date argument', () => {
    const expected = false;
    expect(formatDuration()).toBe(expected)
  })
  it('should return correct format h [godz.] mm', () => {
  const expected = '1 godz. 03';
  expect(formatDuration(63)).toBe(expected)
  })
})