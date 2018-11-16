import countDays from './countDays';

describe('countDays util',() => {
  it('should return false if there is no date argument',() => {
    const expected = false;
    expect(countDays()).toBe(expected)
  })
  it('should return counted number of days',() => {
    const expected = 0;
    const today = new Date();
    expect(countDays(today)).toBe(expected)
  })

})