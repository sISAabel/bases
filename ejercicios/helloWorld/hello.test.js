const helloWorld = require("./hello");

test("helloWorld 1", () => {
  expect(helloWorld('Moisés')).toBe('¡Buenos días Moisés!');
});

test("helloWorld 2", () => {
  expect(helloWorld('Manz')).toBe('¡Buenos días Manz!');
});

