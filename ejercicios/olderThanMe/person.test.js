const Person = require("./person");

p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

test("test p1 - p2", () => {
  expect(p1.compareAge(p2)).toBe("Joel is older than me.");
});

test("test p1 - p3", () => {
  expect(p1.compareAge(p3)).toBe("Lily is the same age as me.");
});

test("test p2 - p1", () => {
  expect(p2.compareAge(p1)).toBe("Samuel is younger than me.");
});

test("test p2 - p3", () => {
  expect(p2.compareAge(p3)).toBe("Lily is younger than me.");
});

test("test p3 - p1", () => {
  expect(p3.compareAge(p1)).toBe("Samuel is the same age as me.");
});

test("test p3 - p2", () => {
  expect(p3.compareAge(p2)).toBe("Joel is older than me.");
});