const Shiritori = require("./shiritori");

my_shiritori = new Shiritori();

test("Test Game Over", () => {
  expect(my_shiritori.game_over()).toBe(false);
});

test("Test add word apple", () => {
  expect(my_shiritori.play("apple")).toBe(["apple"]);
});

test("Test get words", () => {
  expect(my_shiritori.words()).toBe(["apple"]);
});

test("Test add word ear", () => {
  expect(my_shiritori.play("ear")).toBe(["apple", "ear"]);
});

test("Test add word rhino", () => {
  expect(my_shiritori.play("rhino")).toBe(["apple", "ear", "rhino"]);
});

test("Test add word ocelot", () => {
  expect(my_shiritori.play("ocelot")).toBe(["apple", "ear", "rhino", "ocelot"]);
});

test("Test Game Over", () => {
  expect(my_shiritori.game_over()).toBe(false);
});

test("Test add wrong word", () => {
  expect(my_shiritori.play("oops")).toBe("game over");
});

test("Test Game Over", () => {
  expect(my_shiritori.game_over()).toBe(true);
});

test("Test get words", () => {
  expect(my_shiritori.words()).toBe(["apple", "ear", "rhino", "ocelot"]);
});

ttes("Test restart", () => {
  expect(my_shiritori.restart()).toBe("game restarted");
});

test("Test get words", () => {
  expect(my_shiritori.words()).toBe([]);
});

test("Test Game Over", () => {
  expect(my_shiritori.game_over()).toBe(false);
});

test("Test add word hostess", () => {
  expect(my_shiritori.play("hostess")).toBe(["hostess"]);
});

test("Test Game Over", () => {
  expect(my_shiritori.game_over()).toBe(false);
});

test("Test add word stash", () => {
  expect(my_shiritori.play("stash")).toBe(["hostess", "stash"]);
});

test("Test Game Over", () => {
  expect(my_shiritori.play("hostess")).toBe("game over");
});

test("Test get words", () => {
  expect(my_shiritori.words()).toBe(["hostess", "stash"]);
});
