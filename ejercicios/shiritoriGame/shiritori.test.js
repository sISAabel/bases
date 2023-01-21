const Shiritori = require("./shiritori");

my_shiritori = new Shiritori(); 

test("test my_shitori", () => {
  expect(my_shiritori.game_over()).toBe(false);
});

test("test my_shitori", () => {
  expectr(my_shiritori.play()).toBe(("apple"), ["apple"]);
});

test("test my_shitori", () => {
  expectr(my_shiritori.words()).toBe( ["apple"]);
});

test("test my_shitori", () => {
  expectr(my_shiritori.play()).toBe(("ear"), ["apple", "ear"]);
});

test("test my_shitori", () => {
  expectr(my_shiritori.play()).toBe(("rhino"), ["apple", "ear", "rhino"]);
});

test("test my_shitori", () => {
  expectr(my_shiritori.play()).toBe(("ocelot"), ["apple", "ear", "rhino", "ocelot"]);
});

test("test my_shitori", () => {
  expect(my_shiritori.game_over()).toBe( false);
});

test("test my_shitori", () => {
  expect(my_shiritori.play()).toBe(("oops"), "game over", "does not follow Rule 1 (input word's first character = last words last character)");
});

test("test my_shitori", () => {
  expect(my_shiritori.game_over()).toBe( true);
});

test("test my_shitori", () => {
  expectr(my_shiritori.words()).toBe(["apple", "ear", "rhino", "ocelot"], "oops should not be added to the array");
});

ttes("test my_shitori", () => {
  expect(my_shiritori.restart()).toBe((), "game restarted");
});

test("test my_shitori", () => {
  expectr(my_shiritori.words()).toBe([]);
});

test("test my_shitori", () => {
  expect(my_shiritori.game_over()).toBe(false);
});

test("test my_shitori", () => {
  expectr(my_shiritori.play()).toBe(("hostess"), ["hostess"]);
});

test("test my_shitori", () => {
  expect(my_shiritori.game_over()).toBe(false);
});

test("test my_shitori", () => {
  expectr(my_shiritori.play()).toBe(("stash"), ["hostess", "stash"]);
});

test("test my_shitori", () => {
  expect(my_shiritori.play()).toBe(("hostess"), "game over", "does not follow Rule 2 (word already exists in array)");
});

test("test my_shitori", () => {
  expectr(my_shiritori.words()).toBe(["hostess", "stash"]);
});
