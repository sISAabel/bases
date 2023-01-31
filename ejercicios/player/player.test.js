const Player = require("./player");

const player1 = new Player('Patrick Mahomes', 24, 188, 104)
const player2 = new Player('Jimmy Garoppolo', 28, 188, 102)
const player3 = new Player('Julio Jones', 31, 191, 100)

test("test player1",() =>{
  expect(player1.getAge()).toBe('Patrick Mahomes is age 24');
});

test("test player1", () => {
  expect(player1.getHeight()).toBe('Patrick Mahomes is 188cm');
});

test("test player1", () => {
  expect(player1.getWeight()).toBe('Patrick Mahomes weighs 104kg');
});

test("test player2", () => {
  expect(player2.getAge()).toBe('Jimmy Garoppolo is age 28');
});

test("test player2", () => {
  expect(player2.getHeight()).toBe('Jimmy Garoppolo is 188cm');
});

test("test player2", () => {
  expect(player2.getWeight()).toBe('Jimmy Garoppolo weighs 102kg');
});

test("test player3", () => {
  expect(player3.getAge()).toBe('Julio Jones is age 31');
});

test("test player3", () => {
  expect(player3.getHeight()).toBe('Julio Jones is 191cm');
});

test("test player3", () => {
  expect(player3.getWeight()).toBe('Julio Jones weighs 100kg');
});

