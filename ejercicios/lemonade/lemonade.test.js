const lemonade = require("./lemonade");


test("Cambio en limonada", () => {
  expect(lemonade([5, 5, 5, 10, 20])).toBe(true);
});

test("Cambio en limonada", () => {
  expect(lemonade([5, 5, 10])).toBe(true);
});

test("Cambio en limonada", () => {
  expect(lemonade([10, 10])).toBe(false);
});

test("Cambio en limonada", () => {
  expect(lemonade([5, 5, 5, 20])).toBe(true);
});

test("Cambio en limonada", () => {
  expect(lemonade([5, 5, 10, 10, 20])).toBe(false);
});

test("Cambio en limonada", () => {
  expect(lemonade([5, 5, 5, 5, 10, 5, 10, 10, 10, 20])).toBe(true);
});

test("Cambio en limonada", () => {
  expect(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 5, 5, 10, 20])).toBe(true);
});

test("Cambio en limonada", () => {
  expect(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 20, 5, 10, 20, 10])).toBe(false);
});

