const volume = require('./volume')

test('Test volume box 1', () => {
  expect(volume({width: 11,length: 1, height: 2})).toBe(22)
});

test('Test volume box 2', () => {
  expect(volume({width: 1, length: 5,  height: 3})).toBe(15)
});

test('Test volume box 3', () => {
  expect(volume({width: 2, length: 1,  height: 1})).toBe(2)
});

test('Test volume box 4', () => {
  expect(volume({width: 2, length: 6,  height: 5})).toBe(60)
});

test('Test volume box 5', () => {
  expect(volume({width: 2, length: 5,  height: 3})).toBe(30)
});

test('Test volume box 6', () => {
  expect(volume({width: 2, length: 5,  height: 1})).toBe(10)
});

