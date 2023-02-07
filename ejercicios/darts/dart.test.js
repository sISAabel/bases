const dartsScoring = require("./dart");

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(-9, 9)).toBe(0);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(0, 10)).toBe(1);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(-5, 0)).toBe(5);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(0, -1)).toBe(10);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(0, 0)).toBe(10);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(-0.1, -0.1)).toBe(10);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(0.7, 0.7)).toBe(10);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(0.8, -0.8)).toBe(5);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(-3.5, 3.5)).toBe(5);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(-3.6, -3.6)).toBe(1);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(-7.0, 7.0)).toBe(1);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(7.1, -7.1)).toBe(0);
});

test("Calcular puntuación de dardo", () => {
  expect(dartsScoring(0.5, -4)).toBe(5);
});
