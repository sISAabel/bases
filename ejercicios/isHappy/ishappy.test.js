const isHappy = require("./ishappy");

test("isHappy 1", () => {
  expect(isHappy(1)).toBe(true);
  expect(isHappy(10)).toBe(true);
  expect(isHappy(44)).toBe(true);
  expect(isHappy(67)).toBe(false);
  expect(isHappy(89)).toBe(false);
  expect(isHappy(139)).toBe(true);
  expect(isHappy(1327)).toBe(false);
  expect(isHappy(2871)).toBe(false);
  expect(isHappy(3970)).toBe(true);
  expect(isHappy(5209)).toBe(false);
  expect(isHappy(6329)).toBe(true);
  expect(isHappy(8888)).toBe(false);
  expect(isHappy(9331)).toBe(true);
  expect(isHappy(10000)).toBe(true);
});