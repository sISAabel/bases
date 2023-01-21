const validar = require("./dni");

test("Test 1 - DNI ->", () => {
  expect(calculator('42345678')).toBe('X');
});

test("Test 2 - DNI ->", () => {
  expect(calculator('78724544')).toBe('Y');
});

test("Test 3 - DNI ->", () => {
  expect(calculator('34567877')).toBe('G');
});
