const firstOf = require("./firstof");

test("firstOf 1", () => {
  expect(firstOf([1, 2, 3])).toBe(1);
});

test("firstOf 2", () => {
  expect(firstOf([5, 3, 1])).toBe(5);
});

test("firstOf 3", () => {
  expect(firstOf([-2, 3])).toBe(-2);
});

test("firstOf 4", () => {
  expect(firstOf()).toBe(0);
});

test("firstOf 5", () => {
  expect(firstOf()).toBe(0);
});
