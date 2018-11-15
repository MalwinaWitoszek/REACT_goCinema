import countDays from './countDays';

describe('countDays util',() => {
  it('should return false if there is no date argument',() => {
    const expected = false;
    expect(countDays()).toBe(expected)
  })
  it('should return counted number of days',() => {
    const expected = 5;
    expect(countDays('2018-11-10T08:04:53.000Z')).toBe(expected)
  })

})