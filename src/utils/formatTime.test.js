import formatTime from './formatTime'

describe('formatTime util',() => {
  it('should return false if there is no date argument',() => {
    const expected = false;
    expect(formatTime()).toBe(expected)
  })
  it('should return correct format HH:mm',()=> {
    const expected = '16:25';
    expect(formatTime('2018-11-09T15:25:00+00:00')).toBe(expected)
  })
})