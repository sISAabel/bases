const calculator = require("./calculator");

test("Calculator +", () => {
  expect(calculator('1', '1', '+')).toBe(2);
});

test("Calculator /", () => {
  expect(calculator('9', '3', '/')).toBe(3);
});

test("Calculator /", () => {
  expect(calculator('1', '0', '/')).toBe(undefined);
});

test("Calculator *", () => {
  expect(calculator('3', '4', '*')).toBe(12);
});

test("Calculator +", () => {
  expect(calculator('25', '10', '-')).toBe(15);
});
