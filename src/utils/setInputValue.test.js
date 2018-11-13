import setInputValue from "./setInputValue";

describe("setInputValue util", () => {
  it("should return 0 if value is undefined", () => {
    const expected = "0";
    expect(setInputValue(undefined)).toBe(expected);
  });
  it("should return 0 if value is null", () => {
    const expected = "0";
    expect(setInputValue(null)).toBe(expected);
  });
  it("should return first array element if given argument is an array ", () => {
    const expected = "1";
    expect(setInputValue([1, 2, 3])).toEqual(expected);
  });
  it("should return given argument like a string if it is not an array ", () => {
    const expected = "12";
    expect(setInputValue(12)).toBe(expected);
  });
});
