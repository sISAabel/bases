const calculator = require("./calculator");

test("calculator +", () => {
  expect(calculator('Moisés', 1)).toBe('Hello Moisés');
});

test("calculator -", () => {
  expect(calculator('Manz', 0)).toBe('Bye Manz');
});

test("calculator /", () => {
  expect(calculator('Manz', 0)).toBe('Bye Manz');
});
