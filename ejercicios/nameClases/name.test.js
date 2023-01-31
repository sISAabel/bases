const Name = require("./name");

const a1 = new Name("john", "SMITH")
const a2 = new Name("sARah", "fRolliE")

test("test Name a1", () => {
  expect(a1.fname()).toBe("John");
});

test("test Name a1", () => {
  expect(a1.lname()).toBe("Smith");
});

test("test Name a1", () => {
  expect(a1.fullname()).toBe("John Smith");
});

test("test Name a1", () => {
  expect(a1.initials()).toBe("J.S");
});

test("test Name a2", () => {
  expect(a2.fname()).toBe("Sarah");
});

test("test Name a2", () => {
  expect(a2.lname()).toBe("Frollie");
});

test("test Name a2", () => {
  expect(a2.fullname()).toBe("Sarah Frollie");
});

test("test Name a2", () => {
  expect(a2.initials()).toBe("S.F");
});
