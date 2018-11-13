import formatDate from './formatDate';

describe('formatDate util',() => {
  it('should return false if there is no date argument',() => {
    const expected = false;
    expect(formatDate()).toBe(expected)
  })
  it('should return correct format DD.MM.YYYY',() => {
    const expected = '18.05.2018';
    expect(formatDate('2018-05-18T08:04:53.000Z')).toBe(expected)
  })

})